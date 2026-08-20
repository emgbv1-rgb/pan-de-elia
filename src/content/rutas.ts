/**
 * Prefijo de las rutas públicas.
 *
 * Por qué hace falta: cuando el sitio se publica dentro de un subdirectorio
 * (por ejemplo `usuario.github.io/pan-de-elia`), toda ruta que empiece con "/"
 * apunta a la raíz del dominio y se rompe. Next añade el prefijo solo a sus
 * propios archivos y a los enlaces, pero NO al `src` de las imágenes cuando el
 * optimizador está desactivado — que es justo lo que pasa en un sitio estático.
 *
 * Resultado si no se corrige: la página carga y todas las fotos salen rotas.
 * Se detectó exportando y revisando el HTML antes de publicar.
 *
 * En el dominio propio la variable va vacía y esto no hace nada.
 */
const PREFIJO = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Antepone el prefijo a una ruta que empieza en "/". */
export function rutaPublica(ruta: string): string {
  return `${PREFIJO}${ruta}`;
}
