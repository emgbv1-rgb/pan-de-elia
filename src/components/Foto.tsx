import Image from "next/image";
import imagenes from "@/content/imagenes.json";
import { rutaPublica } from "@/content/rutas";

type ClaveFoto = keyof typeof imagenes;

type Props = {
  /** Clave del manifiesto generado por scripts/preparar-imagenes.mjs */
  nombre: ClaveFoto;
  className?: string;
  /** Marca la foto de portada: se carga con prioridad porque es el LCP. */
  prioridad?: boolean;
  /** Anchos que ocupará la imagen, para que el navegador elija el archivo justo. */
  sizes?: string;
  /** Sustituye el texto alternativo del manifiesto cuando el contexto lo requiere. */
  alt?: string;
};

/**
 * Foto de la panadería.
 *
 * Toma las dimensiones reales y el texto alternativo del manifiesto, no de lo
 * que alguien recuerde escribir. Dos consecuencias: el navegador reserva el
 * espacio exacto antes de descargar (cero saltos de layout, que es la métrica
 * CLS) y ninguna imagen se queda sin describir.
 */
export function Foto({ nombre, className, prioridad = false, sizes = "100vw", alt }: Props) {
  const img = imagenes[nombre];

  return (
    <Image
      src={rutaPublica(img.ruta)}
      alt={alt ?? img.alt}
      width={img.ancho}
      height={img.alto}
      sizes={sizes}
      priority={prioridad}
      loading={prioridad ? undefined : "lazy"}
      placeholder="blur"
      blurDataURL={img.lqip}
      className={className}
    />
  );
}
