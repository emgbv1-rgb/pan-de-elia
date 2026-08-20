import { rutaPublica } from "@/content/rutas";
import Image from "next/image";
import { NEGOCIO } from "@/content/negocio";

const ANIO = 2026;

export function Pie() {
  return (
    <footer className="border-t border-papel/12 bg-tinta pb-12 pt-14 text-papel">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-borde sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Image
            src={rutaPublica("/fotos/logo-pan-de-elia-blanco.webp")}
            alt={NEGOCIO.nombre}
            width={900}
            height={145}
            className="h-5 w-auto"
          />
          <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-papel/45">
            Panadería artesanal de masa madre en Cuajimalpa, Ciudad de México.
          </p>
        </div>

        <nav aria-label="Redes sociales">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[0.78rem] uppercase tracking-[0.14em] text-papel/60">
            <li>
              <a
                href={NEGOCIO.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-corteza-clara"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={NEGOCIO.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-corteza-clara"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={`tel:${NEGOCIO.telefono.e164}`}
                className="transition-colors hover:text-corteza-clara"
              >
                {NEGOCIO.telefono.display}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-borde">
        <p className="border-t border-papel/10 pt-7 text-[0.75rem] text-papel/30">
          © {ANIO} {NEGOCIO.nombre}. Cuajimalpa de Morelos, Ciudad de México.
        </p>
      </div>
    </footer>
  );
}
