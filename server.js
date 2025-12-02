import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

const distPath = join(__dirname, 'dist');
const indexPath = join(distPath, 'index.html');

// Serve static files from dist directory
app.use(express.static(distPath, {
  maxAge: '1y',
  etag: true,
  lastModified: true
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Handle React Router - serve index.html for all non-file routes
app.get('*', (req, res, next) => {
  // Skip if it's a file request (has extension)
  if (req.path.includes('.')) {
    return next();
  }

  // Check if index.html exists
  if (!existsSync(indexPath)) {
    console.error(`index.html not found at: ${indexPath}`);
    return res.status(500).send('Application not built. Please run: npm run build');
  }

  try {
    const indexContent = readFileSync(indexPath, 'utf-8');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.send(indexContent);
  } catch (error) {
    console.error('Error serving index.html:', error);
    res.status(500).send('Error loading application');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📁 Serving files from: ${distPath}`);
  console.log(`✅ index.html exists: ${existsSync(indexPath)}`);
});

