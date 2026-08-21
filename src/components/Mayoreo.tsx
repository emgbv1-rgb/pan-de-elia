import { Foto } from "@/components/Foto";
import { enlaceWhatsApp } from "@/content/negocio";

/**
 * Venta a negocios.
 *
 * Por qué tiene sección propia: es un canal distinto con su propia lista de
 * precios, y quien lo busca teclea otras palabras — "pan de masa madre al
 * mayoreo", "proveedor de pan para cafetería", "pan para restaurante CDMX".
 * Son búsquedas de menos volumen pero de mucho más valor: un café que compra
 * cada semana vale lo que decenas de clientes de mostrador.
 *
 * Va en bloque oscuro sobre fondo claro. Es el único contraste fuerte dentro
 * del cuerpo de la página, y sirve para separar este público del particular
 * sin abrirle una página aparte.
 */
export function Mayoreo() {
  return (
    <section id="mayoreo" className="bg-papel px-borde pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-sm bg-tinta text-papel">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="surgir px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
            <p className="text-[0.7rem] uppercase tracking-[0.26em] text-corteza-clara">
              Para negocios
            </p>

            <h2 className="mt-5 max-w-lg text-balance text-[clamp(1.7rem,3.8vw,2.6rem)] font-extralight leading-[1.16]">
              Descuentos por volumen para negocios y comercios
            </h2>

            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-papel/70">
              Cafeterías, restaurantes, hoteles y tiendas de venta al menudeo:
              manejamos lista de mayoreo con descuento por volumen, sobre el
              mismo pan que sale del horno todos los días.
            </p>

            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-papel/70">
              Escríbenos por WhatsApp y armamos una lista a la medida de lo que
              vendes y de cada cuándo lo necesitas.
            </p>

            <a
              href={enlaceWhatsApp(
                "Hola, tengo un negocio y me interesa la lista de mayoreo con descuento por volumen. ¿Me la pueden compartir?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-papel px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] text-tinta transition-colors hover:bg-corteza-clara"
            >
              Pedir lista de mayoreo
            </a>
          </div>

          <div className="min-h-56 md:min-h-0">
            <Foto
              nombre="familia-salados"
              alt="Hogazas de pan de masa madre listas para entrega a negocios"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
