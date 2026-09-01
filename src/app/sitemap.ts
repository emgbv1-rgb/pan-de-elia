import type { MetadataRoute } from "next";
import { NEGOCIO } from "@/content/negocio";

// Requerido por `output: export`: sin esto Next intentaría generarlo en tiempo
// de petición, y en un sitio estático no hay servidor que lo atienda.
export const dynamic = "force-static";

/**
 * Mapa del sitio. Es la lista de páginas que le entregamos a Google para que
 * no tenga que descubrirlas por su cuenta.
 *
 * Hoy sólo hay una página. Cuando cada pan tenga la suya, se añaden aquí y se
 * indexan solas.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Con barra final: es la forma canonica que declara la portada, y el
      // sitio se exporta con trailingSlash. Sin ella, Google recibe dos
      // direcciones distintas para la misma pagina.
      url: `${NEGOCIO.sitio}/`,
      lastModified: new Date("2026-08-20"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
