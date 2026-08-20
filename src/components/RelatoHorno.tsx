import { Foto } from "@/components/Foto";
import { ETAPAS } from "@/content/horno";
import imagenes from "@/content/imagenes.json";

/**
 * De la masa a la miga.
 *
 * Cómo funciona el efecto: cada etapa ocupa un bloque más alto que la pantalla
 * y su contenido —foto y texto juntos— se queda pegado (`position: sticky`)
 * mientras ese bloque pasa. El resultado es que cada etapa se sostiene un
 * momento en pantalla y la siguiente la empuja hacia arriba, como si el pan
 * avanzara por el obrador conforme el visitante baja.
 *
 * Foto y texto se pegan JUNTOS, no por separado. Es la corrección de un error
 * previo: al pegar sólo la foto, el texto terminaba antes que el bloque y
 * quedaba media pantalla en blanco.
 *
 * Todo el movimiento es CSS. No hay una sola línea de JavaScript en esta
 * sección: el texto está en el HTML que el servidor entrega, así que Google lo
 * lee completo aunque nunca ejecute un script. Ese es exactamente el punto —
 * la página tiene que verse bien y pesar poco al mismo tiempo.
 */
export function RelatoHorno() {
  return (
    <section id="como-se-hace" className="relative bg-tinta text-papel">
      {/* Franja que se llena conforme avanza la lectura de la sección. */}
      <div aria-hidden className="sticky top-16 z-40 h-px w-full bg-papel/10 sm:top-20">
        <div className="progreso-horno h-px w-full bg-corteza" />
      </div>

      <div className="mx-auto max-w-7xl px-borde pb-16 pt-24 sm:pt-32">
        <p className="text-[0.72rem] uppercase tracking-[0.26em] text-corteza-clara">
          Cómo se hace
        </p>
        <h2 className="mt-5 max-w-2xl text-balance font-serif text-[clamp(2rem,5.5vw,3.5rem)] font-light leading-[1.08]">
          De la masa a la miga, sin atajos
        </h2>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-papel/60">
          Seis etapas y varios días de por medio. Es la parte del oficio que no
          se ve desde el mostrador.
        </p>
      </div>

      {ETAPAS.map((etapa) => (
        <article key={etapa.numero} className="relative min-h-[135svh]">
          <div className="sticky top-16 flex min-h-[calc(100svh-4rem)] items-center py-8 sm:top-20 sm:min-h-[calc(100svh-5rem)]">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-borde md:grid-cols-2 md:gap-x-16">
              {/* Foto */}
              {/* El alto se limita al del viewport para que la etapa completa
                  quepa en pantalla sin que haya que hacer scroll dentro. */}
              <div className="asentar relative aspect-4/3 max-h-[40svh] overflow-hidden rounded-sm md:aspect-3/4 md:max-h-[72svh]">
                <Foto
                  nombre={etapa.foto as keyof typeof imagenes}
                  sizes="(min-width: 768px) 44vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Texto */}
              <div className="surgir">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-[2.5rem] font-light leading-none text-corteza">
                    {etapa.numero}
                  </span>
                  <span aria-hidden className="h-px w-12 bg-corteza/50" />
                </div>

                <h3 className="mt-5 font-serif text-[clamp(1.9rem,4.5vw,3rem)] font-light leading-tight">
                  {etapa.titulo}
                </h3>

                <p className="mt-5 max-w-md text-pretty text-[1.02rem] leading-relaxed text-papel/70">
                  {etapa.texto}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
