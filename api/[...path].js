/**
 * Vercel API catch-all — /api/health, /api/sync, /api/patients, etc.
 * Requires MONGODB_URI in Vercel Environment Variables (Production).
 */
import { handler } from '../netlify/functions/api.js';

export default async function vercelApiHandler(req, res) {
  try {
    return await handler(req, res);
  } catch (error) {
    console.error('Vercel API error:', error);
    res.status(500).json({
      success: false,
      error: error?.message || 'API handler failed'
    });
  }
}
