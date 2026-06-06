/**
 * Vercel serverless catch-all — reuses the same Express API as Netlify Functions.
 * Requires MONGODB_URI in Vercel Project Settings → Environment Variables.
 */
export { handler as default } from '../netlify/functions/api.js';
