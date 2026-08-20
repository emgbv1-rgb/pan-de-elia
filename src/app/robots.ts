import type { MetadataRoute } from "next";
import { NEGOCIO, ES_VISTA_PREVIA } from "@/content/negocio";

// Requerido por `output: export`: ver la nota en sitemap.ts.
export const dynamic = "force-static";

/**
 * Permiso de rastreo. En el sitio de verdad invita a los buscadores a leerlo
 * todo; en la vista previa les pide que no la indexen, para que no compita
 * contra el dominio bueno por el mismo contenido.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: ES_VISTA_PREVIA
      ? { userAgent: "*", disallow: "/" }
      : { userAgent: "*", allow: "/" },
    sitemap: `${NEGOCIO.sitio}/sitemap.xml`,
  };
}
