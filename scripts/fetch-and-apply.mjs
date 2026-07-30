import fs from 'fs';
import path from 'path';
import { list } from '@vercel/blob';

// Simple .env.local reader
const envFile = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf-8');
const envVars = Object.fromEntries(
  envFile
    .split('\n')
    .filter(line => line.trim() && !line.startsWith('#'))
    .map(line => {
      const [key, ...val] = line.split('=');
      return [key.trim(), val.join('=').trim().replace(/^["']|["']$/g, '')];
    })
);

const token = envVars.BLOB_READ_WRITE_TOKEN;

async function main() {
  console.log('Fetching all blobs from Vercel Blob store...');
  const { blobs } = await list({ token, limit: 1000 });
  console.log(`Retrieved ${blobs.length} blobs.`);

  // Build filename -> blobUrl map
  const fileNameMap = new Map();
  for (const b of blobs) {
    const filename = path.basename(b.pathname);
    fileNameMap.set(filename, b.url);
  }

  const mappingPath = path.join(process.cwd(), 'src', 'data', 'blob-videos.json');
  fs.writeFileSync(mappingPath, JSON.stringify(Object.fromEntries(fileNameMap), null, 2), 'utf-8');

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

    // Match any /videos/FILENAME.mp4 or /videos/FILENAME.MP4 or http.../FILENAME.mp4
    content = content.replace(/(?:\/videos\/|https:\/\/[^'"]+\/videos\/)([A-Za-z0-9_\-]+\.(?:mp4|MP4))/g, (match, filename) => {
      if (fileNameMap.has(filename)) {
        replacementsInFile++;
        totalReplacements++;
        return fileNameMap.get(filename);
      }
      return match;
    });

    if (replacementsInFile > 0) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${path.basename(filePath)} (${replacementsInFile} video URLs replaced cleanly)`);
    }
  }

  console.log(`\nSuccessfully applied Vercel Blob URLs across project (${totalReplacements} replacements).`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
