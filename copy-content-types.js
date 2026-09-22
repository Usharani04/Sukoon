const fs = require('fs');
const path = require('path');

function copyFolderSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyContentTypes() {
  const srcApi = path.resolve(__dirname, 'src', 'api');
  const distApi = path.resolve(__dirname, 'dist', 'src', 'api');
  const apis = fs.readdirSync(srcApi, { withFileTypes: true }).filter(d => d.isDirectory());
  for (const api of apis) {
    const srcCT = path.join(srcApi, api.name, 'content-types');
    const destCT = path.join(distApi, api.name, 'content-types');
    if (fs.existsSync(srcCT)) {
      console.log(`Copying content-types for ${api.name}`);
      copyFolderSync(srcCT, destCT);
    }
  }
}

copyContentTypes();
