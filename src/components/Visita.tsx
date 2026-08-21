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
    <section id="visitanos" className="textura-papel bg-papel py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-borde">
        <p className="text-[0.7rem] uppercase tracking-[0.26em] text-corteza">
          Visítanos
        </p>
        <h2 className="mt-5 max-w-2xl text-balance text-[clamp(1.85rem,4.4vw,2.9rem)] font-extralight leading-[1.14]">
          Nuestro horno está en Cuajimalpa
        </h2>

        <div className="mt-14 grid gap-x-16 gap-y-12 border-t border-tinta/12 pt-12 md:grid-cols-3">
          {/* Dirección */}
          <div className="surgir">
            <h3 className="text-[0.7rem] uppercase tracking-[0.2em] text-humo/70">
              Dirección
            </h3>
            <address className="mt-5 not-italic text-[1.02rem] leading-relaxed">
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
              className="mt-5 inline-block text-[0.73rem] uppercase tracking-[0.14em] text-corteza underline decoration-1 underline-offset-4 transition-colors hover:text-tinta"
            >
              Cómo llegar
            </a>
          </div>

          {/* Horarios */}
          <div className="surgir">
            <h3 className="text-[0.7rem] uppercase tracking-[0.2em] text-humo/70">
              Horarios
            </h3>
            <dl className="mt-5 space-y-2.5 text-[1.02rem]">
              {NEGOCIO.horarios.map((h) => (
                <div key={h.dias} className="flex items-baseline justify-between gap-6">
                  <dt>{h.dias}</dt>
                  <dd className="text-humo">
                    {h.abre} – {h.cierra}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 text-humo/50">
                <dt>Domingo</dt>
                <dd>Cerrado</dd>
              </div>
            </dl>

            <div className="mt-7 border-l-2 border-corteza pl-4">
              <p className="text-[0.73rem] uppercase tracking-[0.14em] text-corteza">
                {NEGOCIO.puntoAdicional.dia}
              </p>
              <p className="mt-1.5 text-[0.93rem] leading-relaxed text-humo">
                También nos encuentras en {NEGOCIO.puntoAdicional.nombre}, de{" "}
                {NEGOCIO.puntoAdicional.horario}.
              </p>
            </div>
          </div>

          {/* Pedidos */}
          <div className="surgir">
            <h3 className="text-[0.7rem] uppercase tracking-[0.2em] text-humo/70">
              Pedidos
            </h3>
            <p className="mt-5 text-pretty text-[1rem] leading-relaxed text-humo">
              Los pedidos se toman por WhatsApp. Escríbenos y te decimos qué hay
              horneado hoy y qué podemos apartarte.
            </p>

            <a
              href={enlaceWhatsApp(
                "Hola, me gustaría hacer un pedido de pan. ¿Qué tienen disponible?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-tinta px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] text-papel transition-colors hover:bg-corteza"
            >
              Escribir por WhatsApp
            </a>

            <p className="mt-6 text-[0.93rem] text-humo">
              O por teléfono:{" "}
              <a
                href={`tel:${NEGOCIO.telefono.e164}`}
                className="text-tinta underline decoration-tinta/25 underline-offset-4 transition-colors hover:decoration-corteza"
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
