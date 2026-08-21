import { Foto } from "@/components/Foto";
import { CATALOGO, TOTAL_PANES, TOTAL_FAMILIAS, type Familia } from "@/content/catalogo";
import imagenes from "@/content/imagenes.json";
import { enlaceWhatsApp } from "@/content/negocio";

/**
 * El catálogo.
 *
 * Aquí está el trabajo de posicionamiento de verdad: cada nombre de pan es una
 * búsqueda que alguien teclea en Google. "Pan de centeno", "focaccia",
 * "brioche". Hoy esas palabras no aparecen en ningún sitio del negocio que un
 * buscador pueda leer — están en fotos de Instagram y en conversaciones de
 * WhatsApp, y ninguna de las dos cosas se indexa.
 *
 * Todos los panes se listan completos, sin pestañas ni desplegables. Lo que se
 * esconde detrás de un clic pesa menos para Google, y esconder no aportaba
 * nada: la lista cabe.
 *
 * Cada pan enlaza a WhatsApp con su nombre ya escrito en el mensaje. Ese es el
 * puente entre la página y la forma en que hoy se toman los pedidos.
 */
export function Catalogo() {
  return (
    <section id="el-pan" className="textura-papel bg-papel py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-borde">
        <p className="text-[0.7rem] uppercase tracking-[0.26em] text-corteza">
          El pan
        </p>
        <h2 className="mt-5 max-w-2xl text-balance text-[clamp(1.85rem,4.4vw,2.9rem)] font-extralight leading-[1.14]">
          {TOTAL_PANES} panes, {TOTAL_FAMILIAS} familias
        </h2>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-humo">
          Del pan de mesa al pan dulce de la mañana. Todo se hornea aquí, todos
          los días.
        </p>
      </div>

      <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
        {CATALOGO.map((familia) => (
          <FamiliaDePan key={familia.slug} familia={familia} />
        ))}
      </div>
    </section>
  );
}

function FamiliaDePan({ familia }: { familia: Familia }) {
  return (
    <div
      id={familia.slug}
      className="mx-auto max-w-7xl px-borde"
      aria-labelledby={`familia-${familia.slug}`}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        {/* Retrato de la familia. */}
        <div className="surgir lg:sticky lg:top-28 lg:self-start">
          {/* Entre 640 y 1024 px la foto va a una sola columna a todo lo ancho:
              en vertical ocuparía la pantalla completa, así que ahí se
              apaisa. */}
          <div className="aspect-4/5 overflow-hidden rounded-sm sm:aspect-16/9 lg:aspect-4/5">
            <Foto
              nombre={familia.foto as keyof typeof imagenes}
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <h3
            id={`familia-${familia.slug}`}
            className="mt-6 font-acento text-[clamp(2.1rem,4.4vw,2.9rem)] font-normal leading-[1.1] tracking-normal"
          >
            {familia.nombre}
          </h3>
          <p className="mt-4 text-pretty text-[0.98rem] leading-relaxed text-humo">
            {familia.intro}
          </p>
        </div>

        {/* Los panes. */}
        <ul className="grid gap-px overflow-hidden rounded-sm bg-tinta/10 sm:grid-cols-2">
          {familia.panes.map((pan) => (
            <li key={pan.slug} className="group bg-papel p-6 transition-colors hover:bg-papel-hondo">
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="text-[1.05rem] font-normal leading-snug">
                  {pan.nombre}
                </h4>
                {/* Sin `uppercase`: convertiría "500 g" en "500 G", y en
                    español el símbolo de gramo va en minúscula. */}
                {pan.presentacion && (
                  <span className="shrink-0 text-[0.78rem] tracking-[0.04em] text-humo/70">
                    {pan.presentacion}
                  </span>
                )}
              </div>

              <p className="mt-2.5 text-pretty text-[0.92rem] leading-relaxed text-humo">
                {pan.descripcion}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={enlaceWhatsApp(
                    `Hola, quisiera pedir ${pan.nombre}${
                      pan.presentacion ? ` (${pan.presentacion})` : ""
                    }. ¿Está disponible?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.72rem] uppercase tracking-[0.14em] text-tinta underline decoration-corteza decoration-1 underline-offset-4 transition-colors hover:text-corteza"
                >
                  Pedir este
                </a>
                {pan.enMolde && (
                  <span className="text-[0.78rem] text-humo/60">
                    También en molde de 1 kg
                  </span>
                )}
                {pan.temporada && (
                  <span className="text-[0.78rem] text-corteza">
                    {pan.temporada}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
