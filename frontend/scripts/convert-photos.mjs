// Converte as fotos das obras (jpg/png) para WebP e gera src/data/projects.js.
// Agrupa por obra (prefixo do nome do ficheiro antes de " - N").
//
// Uso: node scripts/convert-photos.mjs
import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const OUT_BASE = join(PUBLIC, "portfolio");

// pasta de origem -> categoria interna
const SOURCES = [
    { dir: "fotos_moradias",     category: "moradias" },
    { dir: "fotos_remodelacoes", category: "remodelacoes" },
    { dir: "fotos_projetos",     category: "projetos" },
];

const MAX_SIDE = 1600;
const QUALITY = 80;

const slugify = (s) =>
    s.normalize("NFD").replace(/[̀-ͯ]/g, "") // remove acentos
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

// "Vila Franca de Xira  - 4.jpg" -> { name: "Vila Franca de Xira", num: 4 }
const parse = (file) => {
    const m = file.match(/^(.*?)\s*-\s*(\d+)\.(jpe?g|png)$/i);
    if (!m) return null;
    return { name: m[1].trim(), num: parseInt(m[2], 10) };
};

const projects = [];

for (const { dir, category } of SOURCES) {
    const srcDir = join(PUBLIC, dir);
    if (!existsSync(srcDir)) { console.warn(`! pasta em falta: ${dir}`); continue; }

    const outDir = join(OUT_BASE, category);
    mkdirSync(outDir, { recursive: true });

    // agrupa ficheiros por obra
    const groups = new Map();
    for (const file of readdirSync(srcDir)) {
        const parsed = parse(file);
        if (!parsed) { console.warn(`  ? ignorado (nome inesperado): ${file}`); continue; }
        if (!groups.has(parsed.name)) groups.set(parsed.name, []);
        groups.get(parsed.name).push({ file, num: parsed.num });
    }

    // ordena obras alfabeticamente, fotos por número
    const names = [...groups.keys()].sort((a, b) => a.localeCompare(b, "pt"));
    for (const name of names) {
        const slug = slugify(name);
        const photos = groups.get(name).sort((a, b) => a.num - b.num);
        const outPaths = [];

        for (let i = 0; i < photos.length; i++) {
            const inPath = join(srcDir, photos[i].file);
            const outName = `${slug}-${i + 1}.webp`;
            const outPath = join(outDir, outName);
            await sharp(inPath)
                .rotate() // auto-orienta por EXIF
                .resize(MAX_SIDE, MAX_SIDE, { fit: "inside", withoutEnlargement: true })
                .webp({ quality: QUALITY })
                .toFile(outPath);
            outPaths.push(`/portfolio/${category}/${outName}`);
        }

        projects.push({ id: `${category}-${slug}`, category, name, photos: outPaths });
        console.log(`  ✓ ${category}/${slug} (${outPaths.length} fotos)`);
    }
}

// gera src/data/projects.js
const projectsLiteral = projects
    .map((p) => {
        const photos = p.photos.map((src) => `            "${src}",`).join("\n");
        return `    {
        id: "${p.id}",
        category: "${p.category}",
        name: "${p.name}",
        cover: "${p.photos[0]}",
        photos: [
${photos}
        ],
    },`;
    })
    .join("\n");

const fileContent = `// Categorias do portfólio. labelKey aponta para uma chave de tradução.
// "all" é tratada como filtro especial (mostra todos os projetos).
export const PROJECT_CATEGORIES = [
    { id: "all",          labelKey: "allProjects" },
    { id: "moradias",     labelKey: "houseConstruction" },
    { id: "remodelacoes", labelKey: "renovations" },
    { id: "projetos",     labelKey: "projectElaboration" },
];

// Mapa categoria -> chave de tradução, para mostrar o nome da categoria num projeto.
export const CATEGORY_LABELS = {
    moradias: "houseConstruction",
    remodelacoes: "renovations",
    projetos: "projectElaboration",
};

// Projetos do portfólio (gerado por scripts/convert-photos.mjs).
// Cada projeto = uma obra, com foto de capa e galeria completa.
export const PROJECTS = [
${projectsLiteral}
];
`;

writeFileSync(join(__dirname, "..", "src", "data", "projects.js"), fileContent, "utf8");
console.log(`\n${projects.length} obras convertidas. src/data/projects.js atualizado.`);
