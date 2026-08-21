import { Encabezado } from "@/components/Encabezado";
import { Portada } from "@/components/Portada";
import { RelatoHorno } from "@/components/RelatoHorno";
import { Catalogo } from "@/components/Catalogo";
import { Galeria } from "@/components/Galeria";
import { Mayoreo } from "@/components/Mayoreo";
import { Visita } from "@/components/Visita";
import { Pie } from "@/components/Pie";

/**
 * Página principal.
 *
 * Todas las secciones son componentes de servidor: el HTML sale completo desde
 * el servidor, con el texto y las fotos dentro. No hay ni un `"use client"` en
 * la página, y eso es deliberado — es la condición que hace que la animación
 * no le cueste posiciones al sitio.
 */
export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main className="flex-1">
        <Portada />
        <RelatoHorno />
        <Catalogo />
        <Galeria />
        <Mayoreo />
        <Visita />
      </main>
      <Pie />
    </>
  );
}
