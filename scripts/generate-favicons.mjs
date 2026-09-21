import sharp from 'sharp';

const source = 'public/assets/aegc-logo-web.webp';

async function makePng(size, output) {
  await sharp(source)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(output);
}

await makePng(96, 'public/favicon-96x96.png');
await makePng(180, 'public/apple-touch-icon.png');
