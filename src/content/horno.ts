/**
 * Las etapas del pan, de la masa a la miga.
 *
 * Es la sección narrada de la página: la foto se queda fija mientras el texto
 * avanza con el scroll. Las seis fotos son del obrador de Pan de Elia, no de
 * banco de imágenes — eso es justamente lo que la vuelve creíble.
 *
 * PENDIENTE: los textos los redactó EcoNova sobre lo que es cierto por
 * definición de la masa madre. La familia debe revisarlos y, sobre todo,
 * añadir los tiempos reales de su fermentación: ese dato concreto vale más
 * que cualquier adjetivo.
 */

export type Etapa = {
  numero: string;
  titulo: string;
  texto: string;
  /** Clave dentro de src/content/imagenes.json */
  foto: string;
};

export const ETAPAS: Etapa[] = [
  {
    numero: "01",
    titulo: "La madre",
    texto:
      "No usamos levadura industrial. El fermento vive en el obrador, se alimenta cada día y es el mismo que levanta todo el pan que sale de aquí.",
    foto: "proceso-01-masa",
  },
  {
    numero: "02",
    titulo: "La espera",
    texto:
      "La masa reposa. Es la parte que no se puede acelerar y la que hace la diferencia: fermentar despacio es lo que da el sabor y lo que vuelve el pan más fácil de digerir.",
    foto: "proceso-02-formado",
  },
  {
    numero: "03",
    titulo: "El corte",
    texto:
      "Antes de entrar al horno, cada hogaza se marca a navaja. Ese corte decide por dónde va a abrir el pan cuando el calor la levante.",
    foto: "proceso-03-horno",
  },
  {
    numero: "04",
    titulo: "El horno",
    texto:
      "Horno de piso, con vapor al inicio. La masa sube de golpe en los primeros minutos y ahí se forma la corteza.",
    foto: "proceso-04-salida",
  },
  {
    numero: "05",
    titulo: "El enfriado",
    texto:
      "Recién salido el pan todavía no está terminado. Sobre la rejilla suelta el vapor, la corteza truena y la miga se asienta.",
    foto: "proceso-05-enfriado",
  },
  {
    numero: "06",
    titulo: "La miga",
    texto:
      "El corte es la prueba. Alveolos irregulares, miga húmeda y aroma ácido: eso es masa madre de verdad, y no se puede fingir.",
    foto: "proceso-06-miga",
  },
];
