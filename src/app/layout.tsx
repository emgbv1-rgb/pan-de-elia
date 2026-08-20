import type { Metadata, Viewport } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import { DatosEstructurados } from "@/components/DatosEstructurados";
import { NEGOCIO, ES_VISTA_PREVIA } from "@/content/negocio";
import { rutaPublica } from "@/content/rutas";
import "./globals.css";

/**
 * Tipografía. `next/font` descarga las fuentes en tiempo de compilación y las
 * sirve desde nuestro propio dominio: ni una sola petición a Google en el
 * navegador del visitante. Eso evita el bloqueo de renderizado y, de paso,
 * cumple con el RGPD sin necesidad de aviso de cookies por este concepto.
 *
 * Jost es la geométrica más cercana al logotipo de la familia.
 */
// Sólo los pesos que la página usa de verdad. Cada peso extra es un archivo
// más que descargar: siete archivos pesaban 101 KB, cuatro pesan la mitad.
const jost = Jost({
  variable: "--fuente-display",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--fuente-serif",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const TITULO = "Pan de Elia | Panadería de masa madre en Cuajimalpa, CDMX";
const DESCRIPCION =
  "Panadería artesanal de masa madre en Cuajimalpa, Ciudad de México. Hogazas de fermentación larga, centeno, campestre, rústico y brioche, horneados a diario. Pedidos por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(NEGOCIO.sitio),
  title: {
    default: TITULO,
    template: `%s | ${NEGOCIO.nombre}`,
  },
  description: DESCRIPCION,
  applicationName: NEGOCIO.nombre,
  authors: [{ name: NEGOCIO.nombre }],
  creator: NEGOCIO.nombre,
  // La URL canónica evita que el mismo contenido se indexe con y sin "www".
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: NEGOCIO.sitio,
    siteName: NEGOCIO.nombre,
    title: TITULO,
    description: DESCRIPCION,
    images: [
      {
        url: rutaPublica("/fotos/og-pan-de-elia.jpg"),
        width: 1200,
        height: 630,
        alt: "Hogaza de pan de masa madre de Pan de Elia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION,
    images: [rutaPublica("/fotos/og-pan-de-elia.jpg")],
  },
  robots: ES_VISTA_PREVIA
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
      },
  category: "food",
};

export const viewport: Viewport = {
  themeColor: "#f7f3ea",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${jost.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-papel text-tinta">
        {children}
        <DatosEstructurados />
      </body>
    </html>
  );
}
