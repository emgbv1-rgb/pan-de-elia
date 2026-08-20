import { NEGOCIO, ENLACE_MAPA, enlaceWhatsApp } from "@/content/negocio";

/**
 * Dónde encontrarnos.
 *
 * La dirección, el teléfono y los horarios están escritos igual que en el
 * perfil de Google. No es un detalle cosmético: cuando esos datos coinciden en
 * todos lados, Google gana confianza en que el negocio es real y lo sube en el
 * mapa. Cuando no coinciden, pasa lo contrario.
 *
 * El martes en Plaza La Cantera se anuncia sólo en Facebook. Ponerlo aquí es
 * gratis y captura a quien busca pan por esa zona.
 */
export function Visita() {
  return (
    <section id="visitanos" className="bg-tinta py-24 text-papel sm:py-32">
      <div className="mx-auto max-w-7xl px-borde">
        <p className="text-[0.72rem] uppercase tracking-[0.26em] text-corteza-clara">
          Visítanos
        </p>
        <h2 className="mt-5 max-w-2xl text-balance font-serif text-[clamp(2rem,5.5vw,3.5rem)] font-light leading-[1.08]">
          El obrador está en Cuajimalpa
        </h2>

        <div className="mt-14 grid gap-x-16 gap-y-12 border-t border-papel/12 pt-12 md:grid-cols-3">
          {/* Dirección */}
          <div className="surgir">
            <h3 className="text-[0.72rem] uppercase tracking-[0.2em] text-papel/45">
              Dirección
            </h3>
            <address className="mt-5 not-italic text-[1.05rem] leading-relaxed text-papel/85">
              {NEGOCIO.direccion.calle}
              <br />
              {NEGOCIO.direccion.colonia}
              <br />
              {NEGOCIO.direccion.delegacion}, {NEGOCIO.direccion.codigoPostal}
              <br />
              {NEGOCIO.direccion.ciudad}
            </address>
            <a
              href={ENLACE_MAPA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[0.75rem] uppercase tracking-[0.14em] text-corteza-clara underline decoration-1 underline-offset-4 transition-colors hover:text-papel"
            >
              Cómo llegar
            </a>
          </div>

          {/* Horarios */}
          <div className="surgir">
            <h3 className="text-[0.72rem] uppercase tracking-[0.2em] text-papel/45">
              Horarios
            </h3>
            <dl className="mt-5 space-y-2.5 text-[1.05rem] text-papel/85">
              {NEGOCIO.horarios.map((h) => (
                <div key={h.dias} className="flex items-baseline justify-between gap-6">
                  <dt>{h.dias}</dt>
                  <dd className="text-papel/60">
                    {h.abre} – {h.cierra}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 text-papel/40">
                <dt>Domingo</dt>
                <dd>Cerrado</dd>
              </div>
            </dl>

            <div className="mt-7 border-l-2 border-corteza pl-4">
              <p className="text-[0.75rem] uppercase tracking-[0.14em] text-corteza-clara">
                {NEGOCIO.puntoAdicional.dia}
              </p>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-papel/70">
                También nos encuentras en {NEGOCIO.puntoAdicional.nombre}, de{" "}
                {NEGOCIO.puntoAdicional.horario}.
              </p>
            </div>
          </div>

          {/* Pedidos */}
          <div className="surgir">
            <h3 className="text-[0.72rem] uppercase tracking-[0.2em] text-papel/45">
              Pedidos
            </h3>
            <p className="mt-5 text-pretty text-[1.02rem] leading-relaxed text-papel/70">
              Los pedidos se toman por WhatsApp. Escríbenos y te decimos qué hay
              horneado hoy y qué podemos apartarte.
            </p>

            <a
              href={enlaceWhatsApp(
                "Hola, me gustaría hacer un pedido de pan. ¿Qué tienen disponible?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-papel px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.16em] text-tinta transition-colors hover:bg-corteza-clara"
            >
              Escribir por WhatsApp
            </a>

            <p className="mt-6 text-[0.95rem] text-papel/60">
              O por teléfono:{" "}
              <a
                href={`tel:${NEGOCIO.telefono.e164}`}
                className="text-papel/85 underline decoration-papel/25 underline-offset-4 transition-colors hover:decoration-corteza"
              >
                {NEGOCIO.telefono.display}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
