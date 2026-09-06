import { CATALOGO } from "@/content/catalogo";
import { NEGOCIO } from "@/content/negocio";

/**
 * Datos estructurados schema.org.
 *
 * Qué hace, en corto: es la ficha del negocio escrita en el formato que Google
 * lee directamente, sin tener que adivinar leyendo la página. Le dice quién es
 * el negocio, dónde está, a qué hora abre y qué vende.
 *
 * Por qué importa para este proyecto: es el puente entre el sitio y el paquete
 * de mapas. El sitio no compite contra la ficha de Google — la alimenta.
 *
 * Se emite en el servidor, dentro del HTML. No depende de JavaScript.
 */
export function DatosEstructurados() {
  const d = NEGOCIO.direccion;

  const negocio = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": `${NEGOCIO.sitio}/#negocio`,
    name: NEGOCIO.nombre,
    description: NEGOCIO.descripcionCorta,
    url: NEGOCIO.sitio,
    telephone: NEGOCIO.telefono.e164,
    image: `${NEGOCIO.sitio}/fotos/og-pan-de-elia.jpg`,
    logo: `${NEGOCIO.sitio}/fotos/logo-pan-de-elia.webp`,
    priceRange: "$$",
    currenciesAccepted: "MXN",
    address: {
      "@type": "PostalAddress",
      streetAddress: d.calle,
      addressLocality: d.delegacion,
      addressRegion: d.estado,
      postalCode: d.codigoPostal,
      addressCountry: d.pais,
    },
    areaServed: [
      { "@type": "City", name: "Ciudad de México" },
      { "@type": "AdministrativeArea", name: "Cuajimalpa de Morelos" },
    ],
    openingHoursSpecification: NEGOCIO.horariosSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dias,
      opens: h.abre,
      closes: h.cierra,
    })),
    sameAs: [NEGOCIO.redes.instagram, NEGOCIO.redes.facebook],
    // La carta declarada: le dice a Google qué panes existen aquí.
    //
    // Por qué es una carta (Menu) y no un catálogo de productos (Product):
    // Google exige a cada Product un precio, una reseña o una calificación.
    // Aquí no se publican precios (decisión 2026-08-21) y Search Console
    // marcaba los 42 panes como "fragmentos de producto no válidos". Una
    // panadería es un FoodEstablishment y su carta no lleva esa exigencia.
    hasMenu: {
      "@type": "Menu",
      name: "Panes de masa madre",
      hasMenuSection: CATALOGO.map((familia) => ({
        "@type": "MenuSection",
        name: familia.nombre,
        description: familia.intro,
        hasMenuItem: familia.panes.map((pan) => ({
          "@type": "MenuItem",
          name: pan.nombre,
          description: pan.descripcion,
        })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // El contenido es nuestro y estático, generado desde los archivos de
      // src/content. No hay entrada de usuario en juego.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(negocio) }}
    />
  );
}
