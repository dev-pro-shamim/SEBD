const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcInput = Buffer.concat([typeBuf, data]);
  const crcVal = crc32(crcInput);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcVal, 0);
  return Buffer.concat([lenBuf, crcInput, crcBuf]);
}

function createPng(width, height, pixelFn) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bit
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = pixelFn(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

function createIco(pngBuffer, size = 32) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(1, 4); // 1 image

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0);
  entry.writeUInt8(size === 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

// Pixel renderer matching SmartEdgeGlyph
function renderSmartEdgePixel(x, y, W, H) {
  // Normalize coordinates to 0..100
  const nx = (x + 0.5) / W * 100;
  const ny = (y + 0.5) / H * 100;

  // 1. Check outer rounded rect (rx=22 in 100x100)
  const radius = 22;
  let inOuter = true;
  if (nx < radius && ny < radius) {
    if (Math.hypot(nx - radius, ny - radius) > radius) inOuter = false;
  } else if (nx > 100 - radius && ny < radius) {
    if (Math.hypot(nx - (100 - radius), ny - radius) > radius) inOuter = false;
  } else if (nx < radius && ny > 100 - radius) {
    if (Math.hypot(nx - radius, ny - (100 - radius)) > radius) inOuter = false;
  } else if (nx > 100 - radius && ny > 100 - radius) {
    if (Math.hypot(nx - (100 - radius), ny - (100 - radius)) > radius) inOuter = false;
  }

  if (!inOuter || nx < 0 || nx > 100 || ny < 0 || ny > 100) {
    return [0, 0, 0, 0];
  }

  // 2. Yellow Circle Dot: cx=28, cy=26, r=10.5
  if (Math.hypot(nx - 28, ny - 26) <= 10.5) {
    return [255, 230, 0, 255]; // #FFE600
  }

  // 3. Bottom Left Yellow Square: x=18..37, y=73..92, rx=4.5
  if (nx >= 18 && nx <= 37 && ny >= 73 && ny <= 92) {
    const rx = 4.5;
    let inSq = true;
    if (nx < 18 + rx && ny < 73 + rx && Math.hypot(nx - (18 + rx), ny - (73 + rx)) > rx) inSq = false;
    if (nx > 37 - rx && ny < 73 + rx && Math.hypot(nx - (37 - rx), ny - (73 + rx)) > rx) inSq = false;
    if (nx < 18 + rx && ny > 92 - rx && Math.hypot(nx - (18 + rx), ny - (92 - rx)) > rx) inSq = false;
    if (nx > 37 - rx && ny > 92 - rx && Math.hypot(nx - (37 - rx), ny - (92 - rx)) > rx) inSq = false;
    if (inSq) {
      return [255, 230, 0, 255];
    }
  }

  // 4. White Glyph Shapes:
  // Top bar:
  // d="M26 40 H80 C84.4 40 88 36.4 88 32 V26 C88 20.5 83.5 16 78 16 H44 C39.5 16 36 19.5 36 24 V34 C36 37.3 33.3 40 30 40 Z"
  if (ny >= 16 && ny <= 40 && nx >= 36 && nx <= 88) {
    if (ny <= 28 || nx >= 44) {
      return [255, 255, 255, 255];
    }
  }

  // Middle connector & bar:
  // d="M20 45 ... H72 C79.7 29 86 35.3 86 43 V49 C86 56.7 79.7 63 72 63 H42 ... H24 ..."
  if (ny >= 41 && ny <= 63) {
    if (nx >= 20 && nx <= 34) return [255, 255, 255, 255];
    if (nx >= 34 && nx <= 86 && ny >= 43 && ny <= 61) return [255, 255, 255, 255];
  }

  // Bottom bar:
  // d="M40 73 H80 ... V82 ... H44 ... V75 C34 73.9 34.9 73 36 73 Z"
  if (ny >= 73 && ny <= 90 && nx >= 40 && nx <= 88) {
    return [255, 255, 255, 255];
  }

  // Default Background: Gradient from #0047FF to #020B2E
  // #0047FF -> [0, 71, 255]
  // #0035C8 -> [0, 53, 200]
  // #020B2E -> [2, 11, 46]
  const t = (nx + ny) / 200;
  let r, g, b;
  if (t < 0.6) {
    const subT = t / 0.6;
    r = 0;
    g = Math.round(71 + (53 - 71) * subT);
    b = Math.round(255 + (200 - 255) * subT);
  } else {
    const subT = (t - 0.6) / 0.4;
    r = Math.round(0 + (2 - 0) * subT);
    g = Math.round(53 + (11 - 53) * subT);
    b = Math.round(200 + (46 - 200) * subT);
  }

  return [r, g, b, 255];
}

const baseDir = path.resolve(__dirname, '..');
const pubDir = path.join(baseDir, 'public');
const appDir = path.join(baseDir, 'src', 'app');

const png16 = createPng(16, 16, renderSmartEdgePixel);
const png32 = createPng(32, 32, renderSmartEdgePixel);
const png180 = createPng(180, 180, renderSmartEdgePixel);
const png192 = createPng(192, 192, renderSmartEdgePixel);
const png512 = createPng(512, 512, renderSmartEdgePixel);
const ico = createIco(png32, 32);

fs.writeFileSync(path.join(pubDir, 'favicon.ico'), ico);
fs.writeFileSync(path.join(appDir, 'favicon.ico'), ico);
fs.writeFileSync(path.join(pubDir, 'favicon-16x16.png'), png16);
fs.writeFileSync(path.join(pubDir, 'favicon-32x32.png'), png32);
fs.writeFileSync(path.join(pubDir, 'apple-touch-icon.png'), png180);
fs.writeFileSync(path.join(appDir, 'apple-icon.png'), png180);
fs.writeFileSync(path.join(pubDir, 'android-chrome-192x192.png'), png192);
fs.writeFileSync(path.join(pubDir, 'android-chrome-512x512.png'), png512);

console.log('Successfully generated all favicons and touch icons!');
