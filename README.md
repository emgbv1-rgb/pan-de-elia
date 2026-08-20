# Pan de Elia

Sitio de [Pan de Elia](https://www.instagram.com/pandeelia.mx/), panadería
artesanal de masa madre en Cuajimalpa, Ciudad de México.

**Vista previa:** https://emgbv1-rgb.github.io/pan-de-elia/

---

## Qué es esto

El objetivo del proyecto no es tener una página: es **posicionar la panadería
en las búsquedas de pan de masa madre del poniente de la Ciudad de México**.
Todo lo que hay aquí se juzga contra eso.

De ahí salen las dos decisiones que explican el código:

1. **Nada de lo que Google debe leer depende de JavaScript.** Todas las
   secciones se renderizan en el servidor. No hay un solo componente de
   cliente. El texto, el catálogo, la dirección y los horarios están en el HTML
   que llega en la primera respuesta.

2. **La animación es CSS, no JavaScript.** El relato del horno se mueve con
   `position: sticky` y animaciones ligadas al scroll (`animation-timeline`),
   que el navegador ejecuta en el compositor. Cero coste para las métricas que
   Google usa para rankear. Si el navegador no las soporta, el contenido se ve
   igual — sólo deja de animarse.

## Estructura

```
src/content/     Los datos: negocio, catálogo, etapas del horno
src/components/  Las secciones de la página
scripts/         Utilidades de preparación y verificación
assets-fuente/   Fotos y logotipos originales de la familia
public/fotos/    Fotos ya optimizadas (las genera el script)
```

Para cambiar un texto, un pan o un horario **no hace falta tocar el diseño**:
todo vive en `src/content/`.

## Desarrollo

```bash
npm install
npm run dev            # http://localhost:3000
```

### Volver a preparar las fotos

Convierte los originales de `assets-fuente/` a WebP con nombres pensados para
buscadores, y genera `src/content/imagenes.json` con las dimensiones reales y
un marcador de posición para evitar saltos de layout.

```bash
node scripts/preparar-imagenes.mjs
```

### Probar la exportación estática

La versión de GitHub Pages vive en un subdirectorio, y eso rompe cualquier ruta
mal armada. Este par de comandos reproduce ese escenario en local:

```bash
NEXT_PUBLIC_BASE_PATH=/pan-de-elia npm run build
node scripts/servir-export.mjs /pan-de-elia 3300
```

En Git Bash antepón `MSYS_NO_PATHCONV=1`, o convierte `/pan-de-elia` en una
ruta de Windows.

## Publicación

Cada `push` a `main` reconstruye y publica en GitHub Pages
(`.github/workflows/publicar.yml`).

La vista previa se publica con **`noindex`** a propósito: si Google la
indexara, el mismo contenido estaría en dos direcciones y competiría contra el
dominio definitivo. Cuando exista ese dominio, se quita
`NEXT_PUBLIC_VISTA_PREVIA` y se indexa sólo el bueno.

## Pendientes

- [ ] Dominio propio (la autoridad de un dominio se acumula con el tiempo:
      cuanto antes exista, mejor)
- [ ] Reclamar y completar el perfil de Google Business
- [ ] Revisión de la familia: descripciones de los panes y tiempos reales de
      fermentación
- [ ] Una página por pan, para competir por cada búsqueda por separado
