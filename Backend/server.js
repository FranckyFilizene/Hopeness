import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { SYSTEM_INSTRUCTION } from './systemInstruction.js';

dotenv.config({ path: fileURLToPath(new URL('./.env', import.meta.url)) });

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
    process.env.FRONTEND_URL,
    'http://localhost:5173'
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

//Initialisation du SDK Gemini avec la clé cachée
const geminiApiKey = process.env.GEMINI_API_KEY;

const genAI = geminiApiKey ? new GoogleGenAI({ apiKey: geminiApiKey }) : null;


app.post('/api/chat', async (req, res) => {
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
        console.error('Erreur Gemini API : ', error);
        const errorMessage = error instanceof Error ? error.message : String(error);

        if (/API_KEY_INVALID|API key not valid/i.test(errorMessage)) {
            return res.status(503).json({
                error: 'La clé Gemini est invalide ou révoquée. Créez une nouvelle clé Gemini et remplacez GEMINI_API_KEY dans Backend/.env, puis redémarrez le backend.'
            });
        }

        return res.status(502).json({ error: 'Gemini ne peut pas répondre pour le moment.' });
    }

});

app.listen(port, () => {
    console.log(`Le serveur de HOPENESS tourne sur http://localhost : ${port}`);
})