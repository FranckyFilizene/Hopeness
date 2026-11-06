# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Déploiement sur Vercel

Le projet utilise Vite pour le site et la fonction `api/chat.js` pour l'assistant Gemini. Dans Vercel, configurez le projet avec le dossier racine `./`, la commande de build `npm run build` et le dossier de sortie `dist`.

Ajoutez `GEMINI_API_KEY` dans **Project Settings → Environment Variables** sur Vercel, puis redéployez. Ne préfixez pas cette variable par `VITE_` : la clé doit rester côté serveur. En production, l'assistant appelle `/api/chat` sur le même domaine.

Pour le développement local, le frontend utilise `http://localhost:5000` par défaut. Lancez le backend depuis `Backend` avec `npm start` et définissez `GEMINI_API_KEY` dans `Backend/.env`.
