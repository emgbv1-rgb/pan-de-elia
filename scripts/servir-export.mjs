/**
 * Sirve `out/` bajo un subdirectorio, igual que lo hará GitHub Pages.
 *
 * Existe porque publicar y descubrir después que las rutas están rotas cuesta
 * un ciclo de despliegue. Con esto se ve el resultado exacto antes de subir.
 *
 * Uso: node scripts/servir-export.mjs [prefijo] [puerto]
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const PREFIJO = process.argv[2] ?? "/pan-de-elia";
const PUERTO = Number(process.argv[3] ?? 3300);
const RAIZ = path.resolve("out");

const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

createServer(async (req, res) => {
  let ruta = decodeURIComponent((req.url ?? "/").split("?")[0]);

  if (!ruta.startsWith(PREFIJO)) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end(`Fuera del prefijo ${PREFIJO}`);
    return;
  }
  ruta = ruta.slice(PREFIJO.length) || "/";

  let archivo = path.join(RAIZ, ruta);
  try {
    const s = await stat(archivo);
    if (s.isDirectory()) archivo = path.join(archivo, "index.html");
  } catch {
    if (!path.extname(archivo)) archivo += ".html";
  }

  try {
    const datos = await readFile(archivo);
    res.writeHead(200, { "content-type": TIPOS[path.extname(archivo)] ?? "application/octet-stream" });
    res.end(datos);
  } catch {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("404");
  }
}).listen(PUERTO, () => {
  console.log(`http://localhost:${PUERTO}${PREFIJO}/`);
});
