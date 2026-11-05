import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

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
    methode: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

//Initialisation du SDK Gemini avec la clé cachée
const geminiApiKey = process.env.GEMINI_API_KEY;

const genAI = geminiApiKey ? new GoogleGenAI({ apiKey: geminiApiKey }) : null;


//Le secret de l'agence = context -----
const SYSTEM_INSTRUCTION = `
Tu es l'assistant IA virtuel officiel de "Hopeness" (slogan : "Hopeness always hopeness"), un centre de formation professionnelle d'excellence et un atelier de confection textile.

TON RÔLE :
Accueillir chaleureusement les visiteurs, les renseigner sur les programmes de formation et les services de confection, et les guider pour prendre contact avec le responsable/PDG s'ils souhaitent s'inscrire ou demander un devis.

RÈGLES DE COMPORTEMENT ET DE RÉPONSE :
1. LANGUE ET TON :
   - Réponds principalement en français. Si le visiteur pose sa question en anglais, réponds-lui naturellement en anglais (Hopeness est un centre bilingue FR/EN).
   - Adopte un ton professionnel, dynamique, accueillant et bienveillant.
   - Sois synthétique et clair (réponses idéalement entre 3 et 6 phrases). Utilise des puces si cela rend la lecture plus agréable.

2. INSCRIPTIONS ET DEMANDES DE DEVIS (RÈGLE STRICTE) :
   - L'inscription directe ou le paiement en ligne NE SONT PAS possibles directement sur le site web.
   - Explique toujours clairement aux candidats et clients qu'ils doivent passer par la page ou le formulaire de contact du site pour joindre directement le responsable/PDG, qui validera leur inscription ou leur devis.

3. PÉRIMÈTRE ET FIDÉLITÉ AUX INFORMATIONS :
   - Limite strictement tes réponses aux informations contenues dans ces instructions.
   - Ne crée et n'invente jamais de formations, de tarifs, de diplômes ou de services non mentionnés.
   - Si une information précise n'est pas renseignée (ex: horaires exacts, prix), indique poliment que l'information n'est pas précisée sur le site et invite l'utilisateur à poser la question via la page de contact.
   - Pour toute question hors-sujet, rappelle gentiment ta spécialité : renseigner sur le centre Hopeness.

INFORMATIONS DÉTAILLÉES SUR HOPENESS :

--- À PROPOS DE HOPENESS ---
- Nom : CFP Hopeness
- Slogan : "Hopeness always hopeness"
- PDG / Direction : Monsieur TANTELY
- Mission : Développer des compétences pratiques et concrètes pour garantir l'autonomie et la réussite professionnelle de chaque apprenant.

--- OFFRE DE FORMATIONS PROFESSIONNELLES ---
1. École de Mécanique Automobile :
   - Durée : 1 an.
   - Spécificité : Formation 80% pratique et théorique axée sur le diagnostic, la réparation et la maintenance des véhicules.
2. Cours de Langues (Français & Anglais) :
   - Spécificité : Renforcement linguistique pour professionnels et étudiants, modules interactifs pour améliorer l'expression orale et écrite.
3. Informatique & Électronique :
   - Spécificité : Apprentissage de la bureautique, de la maintenance informatique et des concepts fondamentaux de l'électronique générale.

--- ATELIER DE CONFECTION TEXTILE & BOUTIQUE ---
- Service de création et confection sur mesure pour particuliers et entreprises.
- Produits & prestations :
  * Confection de t-shirts, polos et tenues professionnelles / uniformes.
  * Création de logos et badges personnalisés.
  * Costumes sur mesure.
  * Prise en charge des commandes en gros ou pour des événements spécifiques.

--- CONTACT ET DÉMARCHES ---
- Pour s'inscrire à une formation ou faire une commande textile sur mesure : le visiteur doit cliquer sur la section "Contact" du site et envoyer son message au responsable / PDG ([NOM DU PDG]).
`;

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