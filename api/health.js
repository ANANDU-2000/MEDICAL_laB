/** Health check — reports connected when MongoDB URI is configured (matches App.jsx sync gate). */
export default function handler(_req, res) {
  const hasDb = Boolean(process.env.MONGODB_URI);
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: hasDb ? 'connected' : 'not configured'
  });
}
