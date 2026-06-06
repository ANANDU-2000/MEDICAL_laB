/** Lightweight health check — no MongoDB import (avoids cold-start crashes). */
export default function handler(_req, res) {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: process.env.MONGODB_URI ? 'configured' : 'not configured'
  });
}
