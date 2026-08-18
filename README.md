# Mega menu preview

Demo funcional de **Solutions + Industries** para el cliente. Referencia visual: Lucid. Iconos: Lucide (MIT). Sin descripciones cortas.

Abrir `index.html` en el navegador. En escritorio, pasar el cursor por Solutions y luego a Industries para ver el cambio de panel. En tablet/móvil, usar el menú hamburguesa.

## Qué incluye esta demo

- Panel de **Solutions** en 3 columnas agrupadas: By initiative, By team, By industry.
- Panel de **Industries** en 5 columnas con 20 enlaces.
- Prefijo de clases `mm_` para pegar el bloque en otro template sin chocar estilos.
- Variables CSS en `.mm_nav` para paleta, tipografía, radio y duración de la animación (200 ms).
- Hover: el contenedor del icono se ilumina. Entrada del panel: fade + 8px de desplazamiento.
- Responsive: acordeón en ≤1024px.

Platform y Company quedan como enlaces de nav (sin panel). Si el preview convence, esos dos se montan con los mismos patrones.

## Migración a Webflow

1. Recrear la estructura de `nav.mm_nav` como componente.
2. Copiar las custom properties de `.mm_nav` a Variables de Webflow.
3. Reconstruir las Interactions: hover abre panel, delay corto al salir, swap entre Solutions e Industries, acordeón en móvil.
4. Los SVG van embebidos; no hace falta librería externa.
