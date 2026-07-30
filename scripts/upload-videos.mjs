import fs from 'fs';
import path from 'path';
import { put, list } from '@vercel/blob';

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

const token = envVars.BLOB_READ_WRITE_TOKEN || process.env.BLOB_READ_WRITE_TOKEN;

if (!token) {
  console.error('No BLOB_READ_WRITE_TOKEN found in .env.local or process.env');
  process.exit(1);
}

console.log('Using Vercel Blob Token:', token.substring(0, 15) + '...');

async function main() {
  const videosDir = path.join(process.cwd(), 'public', 'videos');
  const files = fs.readdirSync(videosDir);
  const mp4Files = files.filter(f => f.endsWith('.mp4') || f.endsWith('.MP4'));

  console.log(`Found ${mp4Files.length} MP4 files in public/videos.`);

  // List existing blobs first
  console.log('Checking existing blobs on Vercel Blob...');
  const { blobs } = await list({ token, limit: 1000 });
  const existingMap = new Map(blobs.map(b => [b.pathname, b.url]));

  console.log(`Found ${blobs.length} existing blobs on Vercel Blob.`);

  const urlMapping = {};

  for (let i = 0; i < mp4Files.length; i++) {
    const file = mp4Files[i];
    const filePath = path.join(videosDir, file);
    const blobPathname = `videos/${file}`;

    if (existingMap.has(blobPathname)) {
      console.log(`[${i + 1}/${mp4Files.length}] Already uploaded: ${file} -> ${existingMap.get(blobPathname)}`);
      urlMapping[`/videos/${file}`] = existingMap.get(blobPathname);
      continue;
    }

    const stat = fs.statSync(filePath);
    const sizeMb = (stat.size / (1024 * 1024)).toFixed(2);
    console.log(`[${i + 1}/${mp4Files.length}] Uploading ${file} (${sizeMb} MB)...`);

    try {
      const fileBuffer = fs.readFileSync(filePath);
      const blob = await put(blobPathname, fileBuffer, {
        access: 'public',
        token,
        addRandomSuffix: false,
      });

      console.log(`  -> Success: ${blob.url}`);
      urlMapping[`/videos/${file}`] = blob.url;
    } catch (err) {
      console.error(`  -> Failed to upload ${file}:`, err.message);
    }
  }

  // Write mapping file
  const mappingPath = path.join(process.cwd(), 'src', 'data', 'blob-videos.json');
  fs.writeFileSync(mappingPath, JSON.stringify(urlMapping, null, 2));
  console.log(`\nSaved URL mapping to ${mappingPath}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
