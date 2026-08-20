import { rutaPublica } from "@/content/rutas";
import Image from "next/image";
import { Foto } from "@/components/Foto";
import { NEGOCIO, enlaceWhatsApp } from "@/content/negocio";

/**
 * Portada.
 *
 * El H1 lleva las dos palabras por las que se quiere aparecer en Google:
 * "pan de masa madre" y "Cuajimalpa". No es decoración, es la señal más
 * fuerte que una página le manda a un buscador sobre de qué trata.
 *
 * La foto es vertical porque todas las del obrador lo son. En pantalla ancha
 * ocupa la mitad derecha; en móvil cubre el fondo completo con un degradado
 * encima para que el texto siempre tenga contraste suficiente.
 */
export function Portada() {
  return (
    <section
      id="portada"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-tinta text-papel"
    >
      {/* Ojo con el z-index: la sección crea su propio contexto de apilamiento
          (`isolate`) y tiene fondo opaco. Un z-index negativo aquí mandaría la
          foto DETRÁS de ese fondo y desaparecería. Va en z-0, y el texto encima
          en z-10. */}
      <div className="absolute inset-0 z-0 md:left-[32%]">
        <Foto
          nombre="hero-hogaza-masa-madre"
          prioridad
          sizes="(min-width: 768px) 68vw, 100vw"
          className="h-full w-full object-cover object-center"
        />
        {/* Paradas explícitas en vez de utilidades sueltas: el degradado tiene
            que quedar opaco donde va el texto y desaparecer del todo sobre la
            hogaza. Con las paradas por defecto el corte se notaba como una
            línea vertical. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-tinta)_0%,color-mix(in_srgb,var(--color-tinta)_78%,transparent)_38%,color-mix(in_srgb,var(--color-tinta)_25%,transparent)_100%)] md:bg-[linear-gradient(to_right,var(--color-tinta)_0%,var(--color-tinta)_18%,color-mix(in_srgb,var(--color-tinta)_58%,transparent)_42%,transparent_70%)]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-borde pb-16 pt-32 sm:pb-24 md:flex md:min-h-[100svh] md:flex-col md:justify-center md:pb-32">
        <div className="md:max-w-[52%]">
          <Image
            src={rutaPublica("/fotos/logo-pan-de-elia-blanco.webp")}
            alt={NEGOCIO.nombre}
            width={900}
            height={145}
            priority
            className="h-7 w-auto sm:h-9"
          />

          <h1 className="mt-8 text-balance font-serif text-[clamp(2.3rem,6vw,4.2rem)] font-light leading-[1.06] tracking-[-0.01em]">
            Pan de masa madre, horneado cada mañana{" "}
            <span className="text-corteza-clara">en Cuajimalpa</span>
          </h1>

          <p className="mt-7 max-w-md text-pretty text-[1.05rem] leading-relaxed text-papel/70">
            Sin levadura industrial y sin prisa. Hogazas de fermentación larga
            hechas en un obrador familiar del poniente de la Ciudad de México.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={enlaceWhatsApp(
                "Hola, me gustaría hacer un pedido de pan. ¿Qué tienen disponible hoy?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-papel px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.16em] text-tinta transition-colors hover:bg-corteza-clara"
            >
              Pedir por WhatsApp
            </a>
            <a
              href="#el-pan"
              className="rounded-full border border-papel/30 px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.16em] text-papel transition-colors hover:border-papel/70"
            >
              Ver los panes
            </a>
          </div>

          <p className="mt-12 max-w-xs text-[0.8rem] leading-relaxed text-papel/45">
            {NEGOCIO.direccion.calle}, {NEGOCIO.direccion.delegacion}
            <span className="mx-2 text-papel/25">·</span>
            Lunes a jueves de 9:00 a 18:30
          </p>
        </div>
      </div>
    </section>
  );
}
