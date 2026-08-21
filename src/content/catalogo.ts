/**
 * Catálogo de Pan de Elia.
 *
 * Fuente: lista de precios a clientes entregada por la familia (2026-08-20).
 * Decisión: se publican los NOMBRES, no los precios. Un precio en la web obliga
 * a mantenerla cada vez que cambia y genera reclamos cuando queda desfasado;
 * el precio se cotiza por WhatsApp, que es donde ya se toma el pedido.
 *
 * Por qué esta lista importa para el posicionamiento: cada nombre es una
 * búsqueda real. "pan de centeno cdmx", "focaccia artesanal", "pan de brioche".
 * Hoy esas palabras no existen en ningún lado indexable del negocio.
 *
 * PENDIENTE: las descripciones las redactó EcoNova a partir del nombre del
 * producto. La familia debe revisarlas antes de publicar — nadie fuera de la
 * panadería sabe qué lleva cada masa.
 */

export type Pan = {
  /** Identificador estable. Será la URL cuando cada pan tenga su propia página. */
  slug: string;
  nombre: string;
  /** Presentación tal como se vende. */
  presentacion?: string;
  /** También disponible en molde de 1 kilo. */
  enMolde?: boolean;
  /** Producto de temporada: se indica cuándo se hornea. */
  temporada?: string;
  descripcion: string;
};

export type Familia = {
  slug: string;
  nombre: string;
  /** Entradilla de la familia. Se muestra bajo el título. */
  intro: string;
  /** Clave dentro de src/content/imagenes.json */
  foto: string;
  panes: Pan[];
};

export const CATALOGO: Familia[] = [
  {
    slug: "salados",
    nombre: "Salados",
    intro:
      "El corazón de la casa. Masa madre, fermentación lenta y horno de piso. Son los panes de mesa, los que aguantan la semana y mejoran tostados.",
    foto: "familia-salados",
    panes: [
      {
        slug: "barra-de-pan-blanco",
        nombre: "Barra de pan blanco",
        presentacion: "500 g",
        descripcion: "La barra de todos los días. Miga suave, corteza fina.",
      },
      {
        slug: "bollos-de-aceite-de-oliva",
        nombre: "Bollos de aceite de oliva",
        presentacion: "100 g",
        descripcion: "Bollo individual con aceite de oliva en la masa.",
      },
      {
        slug: "molletes",
        nombre: "Molletes",
        presentacion: "180 g",
        descripcion: "Pieza abierta, hecha para el desayuno mexicano.",
      },
      {
        slug: "minis",
        nombre: "Minis",
        presentacion: "200 g",
        descripcion: "Formato pequeño, para mesa o entrada.",
      },
      {
        slug: "centeno",
        nombre: "Centeno",
        presentacion: "900 g",
        enMolde: true,
        descripcion: "Harina de centeno. Miga cerrada, corteza oscura, sabor profundo.",
      },
      {
        slug: "pan-de-5-semillas",
        nombre: "Pan de 5 semillas",
        presentacion: "900 g",
        enMolde: true,
        descripcion: "Cinco semillas integradas en la masa y en la corteza.",
      },
      {
        slug: "rustico",
        nombre: "Rústico",
        presentacion: "900 g",
        enMolde: true,
        descripcion: "Hogaza de campo. Corteza gruesa, miga abierta.",
      },
      {
        slug: "rustico-fermentacion-larga",
        nombre: "Rústico de fermentación larga",
        presentacion: "900 g",
        descripcion:
          "El mismo rústico, con más horas de fermentación. Más ácido, más aroma, más digerible.",
      },
      {
        slug: "campestre",
        nombre: "Campestre",
        presentacion: "900 g",
        enMolde: true,
        descripcion: "Hogaza clásica de masa madre. La más pedida de la casa.",
      },
      {
        slug: "campestre-fermentacion-larga",
        nombre: "Campestre de fermentación larga",
        presentacion: "900 g",
        descripcion: "Campestre con fermentación extendida. Sabor más pronunciado.",
      },
      {
        slug: "aceitunas-negras",
        nombre: "Aceitunas negras",
        presentacion: "½ kilo",
        descripcion: "Hogaza con aceituna negra repartida en toda la miga.",
      },
      {
        slug: "focaccia",
        nombre: "Focaccia",
        presentacion: "½ kilo",
        descripcion: "Masa alta y esponjada, con aceite de oliva y sal.",
      },
      {
        slug: "alcaravea",
        nombre: "Alcaravea",
        descripcion: "Pan con semilla de alcaravea. Aromático, de perfil europeo.",
      },
    ],
  },
  {
    slug: "semi-dulces",
    nombre: "Semi-dulces",
    intro:
      "La misma masa madre, con fruta y fruto seco dentro. Ni postre ni pan de mesa: el punto intermedio que funciona con café y con queso.",
    foto: "familia-semidulces",
    panes: [
      {
        slug: "arandanos",
        nombre: "Arándanos",
        presentacion: "½ kg",
        descripcion: "Arándano deshidratado repartido en la miga.",
      },
      {
        slug: "datil",
        nombre: "Dátil",
        presentacion: "½ kg",
        descripcion: "Dátil en trozo. Dulzor natural, sin azúcar añadida al gusto.",
      },
      {
        slug: "pistache",
        nombre: "Pistache",
        presentacion: "½ kg",
        descripcion: "Pistache entero dentro de la masa.",
      },
      {
        slug: "higos",
        nombre: "Higos",
        presentacion: "½ kg",
        descripcion: "Higo en trozo. El acompañante natural de una tabla de quesos.",
      },
    ],
  },
  {
    slug: "pan-dulce",
    nombre: "Pan dulce",
    intro:
      "Lo que se acaba primero cada mañana. Croissants y chocolatines de hojaldre, conchas, rolls de canela, galletas y bizcochos.",
    foto: "familia-pan-dulce",
    panes: [
      {
        slug: "croissant-clasico",
        nombre: "Croissant clásico",
        presentacion: "65 g",
        descripcion: "Hojaldre de mantequilla, laminado a mano. Capas que truenan.",
      },
      {
        slug: "chocolatin-clasico",
        nombre: "Chocolatín clásico",
        presentacion: "80 g",
        descripcion: "El mismo hojaldre, con barra de chocolate dentro.",
      },
      {
        slug: "cubo-nutella",
        nombre: "Cubo de Nutella",
        descripcion: "Hojaldre en cubo relleno de avellana y cacao.",
      },
      {
        slug: "roll-de-canela-grande",
        nombre: "Roll de canela grande",
        presentacion: "90 g",
        descripcion: "Espiral de canela y azúcar, tierno hasta el centro.",
      },
      {
        slug: "roll-de-canela-pequeno",
        nombre: "Roll de canela pequeño",
        presentacion: "100 g",
        descripcion: "El mismo roll, en porción individual.",
      },
      {
        slug: "concha-de-vainilla",
        nombre: "Concha de vainilla",
        presentacion: "110 g",
        descripcion: "La concha de siempre, con costra de vainilla.",
      },
      {
        slug: "concha-de-chocolate",
        nombre: "Concha de chocolate",
        presentacion: "110 g",
        descripcion: "Costra de cacao sobre masa dulce y suave.",
      },
      {
        slug: "pan-de-muerto",
        nombre: "Pan de muerto",
        presentacion: "100 g",
        temporada: "De septiembre a diciembre",
        descripcion: "De temporada. Azahar y azúcar, como debe ser.",
      },
      {
        slug: "galletas-new-york",
        nombre: "Galletas New York",
        presentacion: "100 g",
        descripcion: "Galleta gruesa rellena de avellana y cacao.",
      },
      {
        slug: "galleta-de-chispas-de-chocolate",
        nombre: "Galleta de chispas de chocolate",
        presentacion: "80 g",
        descripcion: "Orillas crujientes, centro suave.",
      },
      {
        slug: "galleta-de-arandano-y-chispas",
        nombre: "Galleta de arándano y chispas",
        presentacion: "80 g",
        descripcion: "Arándano deshidratado y chispas de chocolate.",
      },
      {
        slug: "galleta-de-pistache",
        nombre: "Galleta de pistache",
        presentacion: "80 g",
        descripcion: "Pistache entero repartido en toda la galleta.",
      },
      {
        slug: "barrita-energetica",
        nombre: "Barrita energética",
        presentacion: "100 g",
        descripcion: "Semillas y fruta seca. Para llevar en la mochila.",
      },
      {
        slug: "bizcocho-de-platano-y-aceite-de-oliva",
        nombre: "Bizcocho de plátano y aceite de oliva",
        presentacion: "250 g",
        descripcion: "Húmedo y aromático. Aceite de oliva en lugar de mantequilla.",
      },
      {
        slug: "bizcocho-de-limon-y-aceite-de-oliva",
        nombre: "Bizcocho de limón y aceite de oliva",
        presentacion: "270 g",
        descripcion: "Ralladura de limón y miga cerrada.",
      },
      {
        slug: "paquete-de-palmeras",
        nombre: "Paquete de palmeras",
        presentacion: "100 g",
        descripcion: "Hojaldre caramelizado en formato pequeño, para compartir.",
      },
      {
        slug: "palmera-grande",
        nombre: "Palmera grande",
        descripcion: "La palmera de toda la vida, tamaño completo.",
      },
      {
        slug: "palmera-grande-de-chocolate",
        nombre: "Palmera grande de chocolate",
        descripcion: "Palmera bañada en chocolate.",
      },
      {
        slug: "turron-de-chocolate",
        nombre: "Turrón de chocolate",
        presentacion: "55 g",
        descripcion: "Turrón de chocolate en pieza individual.",
      },
      {
        slug: "teresitas-de-nuez",
        nombre: "Teresitas de nuez",
        presentacion: "50 g",
        descripcion: "Hojaldre con nuez y azúcar. Se acaban solas.",
      },
    ],
  },
  {
    slug: "bolleria",
    nombre: "Bollería",
    intro:
      "Masas enriquecidas con mantequilla y huevo. Se hornean en tandas cortas y se acaban el mismo día.",
    foto: "familia-bolleria",
    panes: [
      {
        slug: "pan-de-mantequilla",
        nombre: "Pan de mantequilla",
        presentacion: "½ kg",
        descripcion: "Masa enriquecida, miga tierna y aroma a mantequilla.",
      },
      {
        slug: "bollos-de-mantequilla",
        nombre: "Bollos de mantequilla",
        presentacion: "95 g",
        descripcion: "El mismo pan de mantequilla, en pieza individual.",
      },
      {
        slug: "brioche",
        nombre: "Brioche",
        presentacion: "½ kilo",
        descripcion: "Brioche de mantequilla. Miga filamentosa, corteza brillante.",
      },
      {
        slug: "bollos-brioche",
        nombre: "Bollos brioche",
        descripcion: "Bollo individual de brioche. El pan de las hamburguesas de casa.",
      },
      {
        slug: "masa-para-pizza",
        nombre: "Masa para pizza",
        descripcion: "Masa lista para hornear en casa, fermentada en la panadería.",
      },
    ],
  },
];

/** Total de productos, para el encabezado de la sección. */
export const TOTAL_PANES = CATALOGO.reduce((n, f) => n + f.panes.length, 0);

/** Número de familias, para el encabezado de la sección. */
export const TOTAL_FAMILIAS = CATALOGO.length;
