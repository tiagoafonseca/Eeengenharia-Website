// Gera a imagem Open Graph (1200x630) e um favicon quadrado a partir dos assets.
// Correr com: node scripts/generate-images.mjs
import sharp from "sharp";

const PUBLIC = "public";

async function generateOgImage() {
    // Logo original (preto sobre branco) assenta num cartão branco arredondado.
    const logo = await sharp(`${PUBLIC}/logo.png`)
        .resize({ width: 560 })
        .toBuffer();

    // Escurecimento da foto + cartão branco + tagline (por baixo do cartão), numa só SVG.
    const overlay = Buffer.from(`
        <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="630" fill="black" fill-opacity="0.5"/>
            <rect x="250" y="160" width="700" height="300" rx="24" fill="#ffffff"/>
            <text x="600" y="545" font-family="Georgia, 'Times New Roman', serif"
                  font-size="38" fill="#ffffff" text-anchor="middle" letter-spacing="2">
                Construção Civil &amp; LSF
            </text>
        </svg>
    `);

    await sharp(`${PUBLIC}/splide-img1.webp`)
        .resize(1200, 630, { fit: "cover", position: "centre" })
        .composite([
            { input: overlay, top: 0, left: 0 },
            { input: logo, top: 195, left: 320 },
        ])
        .jpeg({ quality: 85 })
        .toFile(`${PUBLIC}/og-image.jpg`);

    console.log("✓ og-image.jpg (1200x630)");
}

async function generateFavicon() {
    // Usa só o monograma "≡≡" da marca (legível em tamanho de separador),
    // a branco sobre fundo preto.
    const mono = await sharp(`${PUBLIC}/logo.png`)
        .extract({ left: 2, top: 8, width: 140, height: 74 })
        .trim()
        .negate({ alpha: false })
        .resize({ width: 340 })
        .toBuffer();

    const { width, height } = await sharp(mono).metadata();
    const top = Math.round((512 - height) / 2);
    const left = Math.round((512 - width) / 2);

    await sharp({
        create: { width: 512, height: 512, channels: 4, background: "#000000" },
    })
        .composite([{ input: mono, top, left }])
        .png()
        .toFile(`${PUBLIC}/favicon.png`);

    console.log("✓ favicon.png (512x512, monograma)");
}

// Ícones PWA (manifest) — derivados do favicon (monograma sobre fundo preto).
// O fundo preenche todo o quadrado, por isso servem também como "maskable".
async function generatePwaIcons() {
    await sharp(`${PUBLIC}/favicon.png`).resize(192, 192).png().toFile(`${PUBLIC}/icon-192.png`);
    await sharp(`${PUBLIC}/favicon.png`).resize(512, 512).png().toFile(`${PUBLIC}/icon-512.png`);
    console.log("✓ icon-192.png, icon-512.png");
}

await generateOgImage();
await generateFavicon();
await generatePwaIcons();
