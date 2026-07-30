import fs from 'fs';
import path from 'path';

const mappingPath = path.join(process.cwd(), 'src', 'data', 'blob-videos.json');

if (!fs.existsSync(mappingPath)) {
  console.error('Mapping file not found:', mappingPath);
  process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
console.log(`Loaded ${Object.keys(mapping).length} blob URL mappings.`);

// Files to update
const filesToUpdate = [
  path.join(process.cwd(), 'src', 'data', 'gallery.ts'),
  path.join(process.cwd(), 'src', 'app', 'page.tsx'),
  path.join(process.cwd(), 'src', 'app', 'about', 'page.tsx'),
  path.join(process.cwd(), 'src', 'app', 'rental', 'page.tsx'),
];

let totalReplacements = 0;

for (const filePath of filesToUpdate) {
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');
  let replacementsInFile = 0;

  for (const [localUrl, blobUrl] of Object.entries(mapping)) {
    if (content.includes(localUrl)) {
      content = content.replaceAll(localUrl, blobUrl);
      replacementsInFile++;
      totalReplacements++;
    }
  }

  if (replacementsInFile > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${path.basename(filePath)} (${replacementsInFile} video URLs replaced)`);
  }
}

console.log(`\nSuccessfully applied Vercel Blob URLs across project (${totalReplacements} replacements).`);
