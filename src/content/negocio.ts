/**
 * Datos del negocio. Fuente única de verdad.
 *
 * IMPORTANTE para SEO local: estos datos deben coincidir LETRA POR LETRA con el
 * perfil de Google Business, Instagram y Facebook. A esa coincidencia se le llama
 * consistencia NAP (nombre, dirección, teléfono) y es uno de los factores que
 * Google usa para decidir si confía en un negocio local. Una calle escrita
 * distinto en dos lados le resta confianza al perfil.
 *
 * Verificado el 2026-08-20 contra el panel de Google y el perfil de Instagram.
 */

export const NEGOCIO = {
  nombre: "Pan de Elia",
  descripcionCorta:
    "Panadería artesanal de masa madre en Cuajimalpa, Ciudad de México. Fermentación larga, horneado diario.",

  direccion: {
    calle: "Carr. México - Toluca 5780",
    colonia: "Abdías García Soto",
    delegacion: "Cuajimalpa de Morelos",
    codigoPostal: "05530",
    ciudad: "Ciudad de México",
    estado: "CDMX",
    pais: "MX",
  },

  /** Tal como aparece en Google. Se muestra al usuario en una sola línea. */
  get direccionCompleta() {
    const d = this.direccion;
    return `${d.calle}, ${d.colonia}, ${d.delegacion}, ${d.codigoPostal} ${d.ciudad}, ${d.estado}`;
  },

  telefono: {
    /** Formato para mostrar en pantalla. */
    display: "55 2699 5769",
    /** Formato E.164, para los enlaces tel: y para los datos estructurados. */
    e164: "+525526995769",
    /** Formato que espera wa.me (sin signos, con código de país). */
    whatsapp: "525526995769",
  },

  /**
   * Horarios del local. `cierra` en formato 24h.
   * Fuente: perfil de Google e Instagram (coinciden).
   */
  horarios: [
    { dias: "Lunes a jueves", abre: "09:00", cierra: "18:30" },
    { dias: "Viernes", abre: "09:00", cierra: "15:00" },
    { dias: "Sábado", abre: "10:00", cierra: "14:00" },
  ],

  /** Días en formato schema.org, para los datos estructurados. */
  horariosSchema: [
    { dias: ["Monday", "Tuesday", "Wednesday", "Thursday"], abre: "09:00", cierra: "18:30" },
    { dias: ["Friday"], abre: "09:00", cierra: "15:00" },
    { dias: ["Saturday"], abre: "10:00", cierra: "14:00" },
  ],

  /**
   * Punto de venta itinerante anunciado en Facebook. Hoy NO aparece en el perfil
   * de Google — vale la pena darlo de alta ahí también.
   */
  puntoAdicional: {
    nombre: "Plaza La Cantera",
    dia: "Todos los martes",
    horario: "9:30 a 14:30",
  },

  redes: {
    instagram: "https://www.instagram.com/pandeelia.mx/",
    instagramHandle: "@pandeelia.mx",
    facebook: "https://www.facebook.com/pandeelia",
  },

  /**
   * Dominio definitivo. PENDIENTE de contratar — hasta entonces las URL
   * absolutas (canónica, sitemap, vista previa al compartir) apuntan aquí.
   *
   * `NEXT_PUBLIC_SITIO` lo sobrescribe para la vista previa en GitHub Pages,
   * que vive en otra dirección.
   */
  sitio: process.env.NEXT_PUBLIC_SITIO || "https://pandeelia.mx",
} as const;

/**
 * ¿Esto es la vista previa para enseñar, o el sitio de verdad?
 *
 * Importa más de lo que parece: si Google indexara la vista previa, tendría el
 * mismo contenido en dos direcciones y tendría que elegir cuál vale. Esa
 * competencia contra uno mismo se llama contenido duplicado y le resta fuerza
 * al dominio bueno. Por eso la vista previa se publica con "no me indexes".
 */
export const ES_VISTA_PREVIA = process.env.NEXT_PUBLIC_VISTA_PREVIA === "1";

/** Enlace a WhatsApp con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${NEGOCIO.telefono.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/** Enlace a la ficha del negocio en Google Maps, por nombre y dirección. */
export const ENLACE_MAPA = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${NEGOCIO.nombre}, ${NEGOCIO.direccionCompleta}`,
)}`;
