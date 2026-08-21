import { Foto } from "@/components/Foto";
import { ETAPAS } from "@/content/horno";
import imagenes from "@/content/imagenes.json";

/**
 * Cómo se hace el pan.
 *
 * Se quitó el efecto de scroll que había antes. La razón es de fondo: sin una
 * animación real que enseñe el pan saliendo del horno, dejar la foto pegada a
 * la pantalla era movimiento sin contenido — llamaba la atención sobre sí mismo
 * en vez de sobre el pan, y obligaba a hacer scroll seis pantallas para leer
 * seis frases.
 *
 * En su lugar, una composición editorial en zigzag: cada etapa alterna el lado
 * de la foto. Se lee de un tirón, funciona igual en cualquier navegador y las
 * fotos se ven más grandes que antes.
 *
 * Lo único que se mueve es la aparición al entrar en pantalla, y es CSS puro.
 */
export function RelatoHorno() {
  return (
    <section id="como-se-hace" className="bg-papel-hondo py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-borde">
        <p className="text-[0.7rem] uppercase tracking-[0.26em] text-corteza">
          Cómo se hace
        </p>
        <h2 className="mt-5 max-w-2xl text-balance text-[clamp(1.85rem,4.4vw,2.9rem)] font-extralight leading-[1.14]">
          De la masa a la miga, sin atajos
        </h2>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-humo">
          Seis etapas y varios días de por medio. Es la parte del oficio que no
          se ve desde el mostrador.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-x-14 gap-y-16 px-borde sm:mt-20 sm:gap-y-24 md:grid-cols-2">
        {ETAPAS.map((etapa, i) => (
          <article
            key={etapa.numero}
            className="surgir grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:items-center md:grid-cols-1 md:gap-0"
          >
            {/* En dos columnas la foto alterna de lado, para que la lectura no
                caiga siempre en el mismo sitio. */}
            <div
              className={`overflow-hidden rounded-sm ${
                i % 2 === 1 ? "sm:order-2 md:order-none" : ""
              }`}
            >
              <div className="aspect-4/3 md:aspect-3/2">
                <Foto
                  nombre={etapa.foto as keyof typeof imagenes}
                  sizes="(min-width: 768px) 44vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="md:mt-7">
              <div className="flex items-center gap-3">
                <span className="text-[0.95rem] font-normal tracking-[0.1em] text-corteza">
                  {etapa.numero}
                </span>
                <span aria-hidden className="h-px w-9 bg-corteza/35" />
              </div>

              {/* La caligráfica del logo, aquí sí: son dos palabras. En un
                  párrafo sería ilegible; en un título corto es la marca. */}
              <h3 className="mt-2 font-acento text-[clamp(1.9rem,3.6vw,2.5rem)] font-normal leading-[1.1] tracking-normal">
                {etapa.titulo}
              </h3>

              <p className="mt-3 max-w-md text-pretty text-[0.97rem] leading-relaxed text-humo">
                {etapa.texto}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
