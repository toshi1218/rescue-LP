import React from 'react';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import App from '../App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distIndexPath = path.join(projectRoot, 'dist', 'index.html');

async function prerender() {
  const html = await readFile(distIndexPath, 'utf8');
  const appHtml = renderToString(React.createElement(App));
  const hydrated = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  await writeFile(distIndexPath, hydrated, 'utf8');
}

prerender().catch((error) => {
  console.error('prerender failed:', error);
  process.exit(1);
});
