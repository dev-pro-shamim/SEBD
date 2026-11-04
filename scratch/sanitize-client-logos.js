const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/clients');
const files = fs.readdirSync(dir);

const clients = [];

files.forEach((file, idx) => {
  const ext = path.extname(file).toLowerCase();
  let baseName = path.basename(file, path.extname(file))
    .toLowerCase()
    .replace(/[?#%&{}\\<>*+!$'"=@]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  if (baseName.length > 25) {
    baseName = baseName.substring(0, 25).replace(/-$/, '');
  }

  const cleanFileName = `client-${String(idx + 1).padStart(2, '0')}-${baseName}${ext}`;
  const oldPath = path.join(dir, file);
  const newPath = path.join(dir, cleanFileName);

  if (oldPath !== newPath) {
    fs.renameSync(oldPath, newPath);
  }

  // Derive a readable brand name for alt text
  let brandName = baseName
    .replace(/^client-\d+-?/, '')
    .split('-')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  if (!brandName || brandName.length < 3 || /^\d+$/.test(brandName)) {
    brandName = `Global Partner ${idx + 1}`;
  }

  clients.push({
    id: `client-${idx + 1}`,
    name: brandName,
    src: `/images/clients/${cleanFileName}`,
  });
});

console.log('Sanitized and renamed', clients.length, 'client logos!');
console.log('Sample client entries:', JSON.stringify(clients.slice(0, 5), null, 2));

// Save to a data file
const dataPath = path.join(__dirname, '../src/data/clients.ts');
const fileContent = `export interface ClientLogo {
  id: string;
  name: string;
  src: string;
}

export const clientLogos: ClientLogo[] = ${JSON.stringify(clients, null, 2)};
`;

fs.writeFileSync(dataPath, fileContent, 'utf-8');
console.log('Saved clients data to', dataPath);
