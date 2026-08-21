import { rutaPublica } from "@/content/rutas";
import Image from "next/image";
import { NEGOCIO, enlaceWhatsApp } from "@/content/negocio";

const SECCIONES = [
  { href: "#el-pan", texto: "El pan" },
  { href: "#como-se-hace", texto: "Cómo se hace" },
  { href: "#visitanos", texto: "Visítanos" },
];

/**
 * Barra superior.
 *
 * Sin menú desplegable a propósito: un desplegable exige JavaScript y aquí no
 * hace falta. En pantalla chica se muestran el logotipo y el botón de pedido,
 * que es lo único que alguien de pie en la calle necesita.
 */
export function Encabezado() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-tinta bg-tinta/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-borde sm:h-20">
        <a href="#portada" className="shrink-0" aria-label={`${NEGOCIO.nombre} — inicio`}>
          <Image
            src={rutaPublica("/fotos/logo-pan-de-elia-blanco.webp")}
            alt={NEGOCIO.nombre}
            width={900}
            height={145}
            priority
            className="h-4 w-auto sm:h-5"
          />
        </a>

        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[0.8rem] uppercase tracking-[0.18em] text-papel/60">
            {SECCIONES.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="transition-colors hover:text-papel">
                  {s.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={enlaceWhatsApp(
            "Hola, me gustaría hacer un pedido de pan. ¿Qué tienen disponible?",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-papel px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.16em] text-tinta transition-colors hover:bg-corteza-clara sm:px-6"
        >
          Pedir
        </a>
      </div>
    </header>
  );
}
