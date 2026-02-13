import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Serve /3jsWorld/* from public/3jsWorld/ so the demo iframe always gets the real page (not SPA fallback).
function serve3jsWorld() {
  return {
    name: 'serve-3js-world',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = req.url?.split('?')[0] || '';
        if (!urlPath.startsWith('/3jsWorld')) return next();
        let filePath = path.join(__dirname, 'public', urlPath);
        if (urlPath === '/3jsWorld' || urlPath === '/3jsWorld/') filePath = path.join(__dirname, 'public', '3jsWorld', 'index.html');
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return next();
        const content = fs.readFileSync(filePath);
        const ext = path.extname(filePath);
        const types = { '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.gltf': 'model/gltf+json', '.bin': 'application/octet-stream' };
        res.setHeader('Content-Type', types[ext] || 'application/octet-stream');
        res.end(content);
      });
    },
  };
}

export default defineConfig({
  plugins: [serve3jsWorld(), react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
