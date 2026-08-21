import Image from "next/image";
import { Foto } from "@/components/Foto";
import { NEGOCIO, enlaceWhatsApp } from "@/content/negocio";
import { rutaPublica } from "@/content/rutas";

/**
 * Portada.
 *
 * El H1 lleva las dos palabras por las que se quiere aparecer en Google:
 * "pan de masa madre" y "Cuajimalpa". No es decoración, es la señal más fuerte
 * que una página le manda a un buscador sobre de qué trata.
 *
 * Composición: texto y foto en columnas separadas, sin superponerse. Antes el
 * texto iba encima de la foto y hacía falta oscurecerla para que se leyera;
 * sobre fondo claro eso ya no funciona, y separarlos deja ver la hogaza entera.
 * En móvil la foto va arriba y el texto debajo — el orden del HTML mantiene el
 * texto primero, que es como conviene que lo lea un buscador.
 */
export function Portada() {
  return (
    <section
      id="portada"
      className="grid min-h-[100svh] grid-cols-1 bg-papel pt-16 sm:pt-20 md:grid-cols-2 md:items-center md:pt-0"
    >
      <div className="order-2 px-borde py-14 sm:py-20 md:order-1 md:py-24">
        <Image
          src={rutaPublica("/fotos/logo-pan-de-elia.webp")}
          alt={NEGOCIO.nombre}
          width={900}
          height={145}
          priority
          className="h-7 w-auto sm:h-9"
        />

        <h1 className="mt-8 max-w-xl text-balance text-[clamp(2rem,4.6vw,3.3rem)] font-extralight leading-[1.14]">
          Pan de masa madre, horneado cada mañana{" "}
          <span className="text-corteza">en Cuajimalpa</span>
        </h1>

        <p className="mt-7 max-w-md text-pretty text-[1.02rem] leading-relaxed text-humo">
          Sin levadura industrial y sin prisa. Hogazas de fermentación larga
          hechas por una familia en el poniente de la Ciudad de México.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={enlaceWhatsApp(
              "Hola, me gustaría hacer un pedido de pan. ¿Qué tienen disponible hoy?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-tinta px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] text-papel transition-colors hover:bg-corteza"
          >
            Pedir por WhatsApp
          </a>
          <a
            href="#el-pan"
            className="rounded-full border border-tinta/25 px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] text-tinta transition-colors hover:border-tinta/60"
          >
            Ver los panes
          </a>
        </div>

        <p className="mt-11 max-w-xs text-[0.82rem] leading-relaxed text-humo/75">
          {NEGOCIO.direccion.calle}, {NEGOCIO.direccion.delegacion}
          <span className="mx-2 text-humo/40">·</span>
          Lunes a jueves de 9:00 a 18:30
        </p>
      </div>

      {/* En móvil el alto se deriva del ancho (proporción), no del alto de la
          ventana: `svh` cambia cuando el navegador esconde su barra y provoca
          saltos. En escritorio sí ocupa la pantalla completa. */}
      <div className="order-1 aspect-4/3 w-full md:order-2 md:aspect-auto md:h-[100svh]">
        <Foto
          nombre="hero-hogaza-masa-madre"
          prioridad
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
