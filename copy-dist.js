import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');

// Ensure directories exist
if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });
const rootAssets = path.join(rootDir, 'assets');
if (!fs.existsSync(rootAssets)) fs.mkdirSync(rootAssets, { recursive: true });
const docsAssets = path.join(docsDir, 'assets');
if (!fs.existsSync(docsAssets)) fs.mkdirSync(docsAssets, { recursive: true });

// Copy template.html to index.html in dist, docs, and root
if (fs.existsSync(path.join(distDir, 'template.html'))) {
  const htmlContent = fs.readFileSync(path.join(distDir, 'template.html'), 'utf8');
  fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
  fs.writeFileSync(path.join(docsDir, 'index.html'), htmlContent);
  fs.writeFileSync(path.join(rootDir, 'index.html'), htmlContent);
}

// Copy dist/assets to root/assets and docs/assets
const distAssets = path.join(distDir, 'assets');
if (fs.existsSync(distAssets)) {
  const files = fs.readdirSync(distAssets);
  for (const file of files) {
    fs.copyFileSync(path.join(distAssets, file), path.join(rootAssets, file));
    fs.copyFileSync(path.join(distAssets, file), path.join(docsAssets, file));
  }
}

// Copy public assets
const publicAssets = path.join(rootDir, 'public', 'assets');
if (fs.existsSync(publicAssets)) {
  const files = fs.readdirSync(publicAssets);
  for (const file of files) {
    fs.copyFileSync(path.join(publicAssets, file), path.join(rootAssets, file));
    fs.copyFileSync(path.join(publicAssets, file), path.join(docsAssets, file));
  }
}

// Copy critical root files
const filesToSync = ['app-ads.txt', 'privacy.html', 'favicon.svg', '.nojekyll'];
for (const file of filesToSync) {
  const src = path.join(rootDir, 'public', file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(rootDir, file));
    fs.copyFileSync(src, path.join(docsDir, file));
    fs.copyFileSync(src, path.join(distDir, file));
  }
}

console.log('✅ Synchronized all built assets to Root, Docs, and Dist!');
