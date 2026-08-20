import { Foto } from "@/components/Foto";
import imagenes from "@/content/imagenes.json";

const PIEZAS = [
  "galeria-01-campestre",
  "galeria-02-rustico",
  "galeria-03-semillas",
  "galeria-04-centeno",
  "galeria-05-trenza",
  "galeria-06-rebanado",
] as const satisfies readonly (keyof typeof imagenes)[];

/**
 * Galería del obrador.
 *
 * En móvil se desliza de lado con anclaje por foto; en escritorio se despliega
 * en rejilla. El deslizamiento es `scroll-snap` de CSS, no un carrusel de
 * JavaScript: no hay librería que cargar ni botones que puedan fallar.
 */
export function Galeria() {
  return (
    <section aria-label="Fotografías del obrador" className="bg-papel pb-24 sm:pb-32">
      <div
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-borde pb-4 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6"
      >
        {PIEZAS.map((pieza, i) => (
          <figure
            key={pieza}
            className={`surgir aspect-3/4 w-[68vw] shrink-0 snap-center overflow-hidden rounded-sm sm:w-auto ${
              i % 2 === 1 ? "sm:mt-8" : ""
            }`}
          >
            <Foto
              nombre={pieza}
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 32vw, 68vw"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
