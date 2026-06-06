/**
 * Vercel serverless catch-all — exports Express app directly (Vercel-native).
 * Requires MONGODB_URI in Vercel Project Settings → Environment Variables.
 */
import { app } from '../netlify/functions/api.js';

export default app;
