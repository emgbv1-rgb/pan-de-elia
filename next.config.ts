import type { NextConfig } from "next";

/**
 * Dos destinos posibles para el mismo código:
 *
 *  1. Vista previa en GitHub Pages, para enseñar el sitio. Pages sólo sirve
 *     archivos estáticos, así que se exporta todo a HTML y se desactiva el
 *     optimizador de imágenes de Next (que necesita un servidor). No importa:
 *     las fotos ya salen optimizadas de scripts/preparar-imagenes.mjs.
 *
 *  2. Hosting definitivo en el dominio propio, con servidor. Ahí no se define
 *     ninguna variable y Next trabaja completo.
 *
 * Se activa con: NEXT_PUBLIC_BASE_PATH=/pan-de-elia npm run build
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const esExportacionEstatica = basePath !== "" || process.env.EXPORT_ESTATICO === "1";

const nextConfig: NextConfig = {
  ...(esExportacionEstatica
    ? {
        output: "export" as const,
        images: { unoptimized: true },
      }
    : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  // GitHub Pages sirve /ruta/ como /ruta/index.html.
  trailingSlash: esExportacionEstatica,
};

export default nextConfig;
