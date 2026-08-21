/**
 * Prepara los assets de `assets-fuente/` para producción.
 *
 * Por qué existe: las fotos originales son de celular (8.1 MB en total, hasta
 * 517 KB cada una). Servirlas tal cual degrada el LCP, y el LCP es factor de
 * ranking. Este script las convierte a WebP con nombre semántico — el nombre
 * del archivo también se indexa en Google Imágenes.
 *
 * Uso: node scripts/preparar-imagenes.mjs
 * Es idempotente: se puede re-ejecutar sin efectos secundarios.
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ORIGEN = "assets-fuente";
const DESTINO = path.join("public", "fotos");
const ANCHO_MAX = 1200;
const CALIDAD = 68;

/** Foto original -> nombre semántico + texto alternativo (accesibilidad + SEO). */
const FOTOS = [
  // Portada
  {
    src: "PHOTO-2025-07-31-02-37-40.jpg",
    out: "hero-hogaza-masa-madre",
    alt: "Hogaza de pan de masa madre recién horneada sostenida a mano en la panadería Pan de Elia",
  },

  // Secuencia del horno (el scrollytelling). El orden importa.
  {
    src: "PHOTO-2026-01-29-20-58-08(1).jpg",
    out: "proceso-01-masa",
    alt: "Masa madre fermentada lista para hornear, marcada a mano antes de entrar al horno",
  },
  {
    src: "PHOTO-2025-12-15-23-54-20.jpg",
    out: "proceso-02-formado",
    alt: "Hogaza de masa madre con greñado en cuadrícula hecho a navaja antes del horneado",
  },
  {
    src: "PHOTO-2026-01-29-20-58-08(4).jpg",
    out: "proceso-03-horno",
    alt: "Panadero cargando el horno de piso con la pala en la panadería Pan de Elia",
  },
  {
    src: "PHOTO-2025-07-31-02-35-47.jpg",
    out: "proceso-04-salida",
    alt: "Hogaza de pan de masa madre recién salida del horno, con la corteza dorada y crujiente",
  },
  {
    src: "PHOTO-2026-06-02-01-13-20.jpg",
    out: "proceso-05-enfriado",
    alt: "Rejillas con hogazas de masa madre enfriando después del horneado",
  },
  {
    src: "PHOTO-2025-03-13-21-35-38.jpg",
    out: "proceso-06-miga",
    alt: "Pan de masa madre rebanado mostrando la miga alveolada de fermentación larga",
  },

  // Familias del catálogo
  {
    src: "PHOTO-2025-07-31-01-43-43.jpg",
    out: "familia-salados",
    alt: "Hogazas de pan salado de masa madre: rústico, campestre y centeno",
  },
  {
    src: "PHOTO-2025-12-15-23-54-21(1).jpg",
    out: "familia-semidulces",
    alt: "Pan semi-dulce de masa madre rebanado, con fruta integrada en la miga",
  },
  {
    src: "PHOTO-2025-12-15-23-54-21.jpg",
    out: "familia-bolleria",
    alt: "Pan de mantequilla y brioche artesanal de Pan de Elia",
  },
  {
    src: "PHOTO-2025-10-23-19-09-12.jpg",
    out: "familia-pan-dulce",
    alt: "Vitrina con pan dulce recién horneado: chocolatines, conchas y bollería",
  },

  // Galería / textura de marca
  {
    src: "PHOTO-2026-06-02-01-11-58.jpg",
    out: "galeria-01-campestre",
    alt: "Hogaza campestre de masa madre sobre fondo claro",
  },
  {
    src: "PHOTO-2026-06-02-01-08-29.jpg",
    out: "galeria-02-rustico",
    alt: "Pan rústico de masa madre sobre mesa de madera",
  },
  {
    src: "PHOTO-2025-05-20-17-56-24.jpg",
    out: "galeria-03-semillas",
    alt: "Hogazas de pan de cinco semillas y centeno en el horno",
  },
  {
    src: "PHOTO-2025-08-05-02-46-11.jpg",
    out: "galeria-04-centeno",
    alt: "Hogaza de pan de centeno con corteza oscura y greñado profundo",
  },
  {
    src: "PHOTO-2025-12-15-21-51-48.jpg",
    out: "galeria-05-trenza",
    alt: "Trenza de masa dulce horneada, especialidad de temporada",
  },
  {
    src: "PHOTO-2026-01-29-20-58-08.jpg",
    out: "galeria-06-rebanado",
    alt: "Barra de pan blanco de masa madre rebanada en la panadería",
  },
  {
    src: "PHOTO-2025-05-20-17-56-24(2).jpg",
    out: "galeria-07-conchas",
    alt: "Conchas de vainilla y de chocolate recién horneadas",
  },
  {
    src: "PHOTO-2026-06-01-01-48-50.jpg",
    out: "galeria-08-palmeras",
    alt: "Palmeras de hojaldre horneadas, doradas y caramelizadas",
  },
  {
    src: "PHOTO-2025-05-20-17-56-24(1).jpg",
    out: "galeria-09-galletas",
    alt: "Galletas de pistache y de chispas de chocolate sobre tabla de madera",
  },
];

/** Los dos logotipos entregados por la familia. */
const LOGOS = [
  { src: "Logo Pan de Elia 2.png", out: "logo-pan-de-elia", invertir: false },
  { src: "Logo Pan de Elia 2.png", out: "logo-pan-de-elia-blanco", invertir: true },
];

/** Imagen de vista previa al compartir el enlace (WhatsApp, Facebook, X). */
const OG = {
  src: "PHOTO-2026-06-02-01-12-23.jpg",
  out: "og-pan-de-elia",
};

async function procesarFoto({ src, out, alt }) {
  const entrada = path.join(ORIGEN, src);
  const meta = await sharp(entrada).metadata();
  const ancho = Math.min(meta.width ?? ANCHO_MAX, ANCHO_MAX);

  const salida = path.join(DESTINO, `${out}.webp`);
  const info = await sharp(entrada)
    .rotate() // respeta la orientación EXIF del celular
    .resize({ width: ancho, withoutEnlargement: true })
    .webp({ quality: CALIDAD, effort: 6 })
    .toFile(salida);

  // Placeholder diminuto en base64 para evitar saltos de layout (CLS).
  const lqipBuf = await sharp(entrada)
    .rotate()
    .resize({ width: 16 })
    .webp({ quality: 30 })
    .toBuffer();

  return {
    nombre: out,
    ruta: `/fotos/${out}.webp`,
    alt,
    ancho: info.width,
    alto: info.height,
    lqip: `data:image/webp;base64,${lqipBuf.toString("base64")}`,
    kb: Math.round(info.size / 1024),
  };
}

async function procesarLogo({ src, out, invertir }) {
  let img = sharp(path.join(ORIGEN, src)).trim({ threshold: 10 });

  if (invertir) {
    // El logotipo entregado es negro sobre transparente. Para usarlo sobre
    // fondo oscuro se recolorea a crema conservando el canal alfa.
    const { data, info } = await img
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    for (let i = 0; i < data.length; i += info.channels) {
      data[i] = 0xf7;
      data[i + 1] = 0xf3;
      data[i + 2] = 0xea;
    }
    img = sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } });
  }

  const salida = path.join(DESTINO, `${out}.webp`);
  const info = await img
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(salida);

  return { nombre: out, ruta: `/fotos/${out}.webp`, ancho: info.width, alto: info.height, kb: Math.round(info.size / 1024) };
}

async function main() {
  await mkdir(DESTINO, { recursive: true });

  const fotos = [];
  for (const f of FOTOS) fotos.push(await procesarFoto(f));

  const logos = [];
  for (const l of LOGOS) logos.push(await procesarLogo(l));

  // Vista previa al compartir: 1200x630 es el formato que esperan WhatsApp y
  // las redes. Se recorta desde la única foto horizontal del lote.
  const og = await sharp(path.join(ORIGEN, OG.src))
    .rotate()
    .resize({ width: 1200, height: 630, fit: "cover", position: "attention" })
    .jpeg({ quality: 84 })
    .toFile(path.join(DESTINO, `${OG.out}.jpg`));

  // El manifiesto es la fuente de verdad para los componentes: dimensiones
  // reales y placeholder, sin que nadie tenga que teclearlos a mano.
  const manifiesto = Object.fromEntries(fotos.map((f) => [f.nombre, f]));
  await writeFile(
    path.join("src", "content", "imagenes.json"),
    JSON.stringify(manifiesto, null, 2) + "\n",
    "utf8",
  );

  const totalKb = [...fotos, ...logos].reduce((s, f) => s + f.kb, 0) + Math.round(og.size / 1024);
  console.log(`${fotos.length} fotos + ${logos.length} logos + vista previa`);
  console.log(`Peso total servido: ${totalKb} KB (originales: 8300 KB)`);
  for (const f of fotos) console.log(`  ${f.ruta.padEnd(42)} ${f.ancho}x${f.alto}  ${f.kb} KB`);
  for (const l of logos) console.log(`  ${l.ruta.padEnd(42)} ${l.ancho}x${l.alto}  ${l.kb} KB`);
}

await main();
