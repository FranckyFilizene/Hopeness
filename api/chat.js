import { GoogleGenAI } from '@google/genai';
import process from 'node:process';
import { SYSTEM_INSTRUCTION } from '../Backend/systemInstruction.js';

const geminiApiKey = process.env.GEMINI_API_KEY;
const genAI = geminiApiKey ? new GoogleGenAI({ apiKey: geminiApiKey }) : null;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }

  const message = req.body?.message;

  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Le message est vide.' });
  }

  if (!genAI) {
    return res.status(503).json({ error: 'Le service Gemini n’est pas configuré.' });
  }

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION
      }
    });

    if (!response.text) {
      return res.status(502).json({ error: 'Gemini n’a renvoyé aucune réponse.' });
    }

    return res.json({
      reply: response.text,
      source: 'gemini'
    });
  } catch (error) {
    console.error('Erreur Gemini API :', error);
    const errorMessage = error instanceof Error ? error.message : String(error);

    if (/API_KEY_INVALID|API key not valid/i.test(errorMessage)) {
      return res.status(503).json({
        error: 'La clé Gemini est invalide ou révoquée. Vérifiez GEMINI_API_KEY dans les variables d’environnement Vercel.'
      });
    }

    return res.status(502).json({ error: 'Gemini ne peut pas répondre pour le moment.' });
  }
}
