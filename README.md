# Mini app familiar TILO

Actividad gratuita en español: elegir una emoción, leer un cuento breve, elegir una forma de acompañar, conversar y continuar fuera de la pantalla. Cinco recorridos basados en los libros: enojo, miedo, tristeza, celos y talentos, y palabras y empatía.

Los cuentos son adaptaciones breves de la Colección Inteligencia Emocional TILO, de Atómica, facilitada por su autora. Tilo es el elefantito de barba roja; Luma es su amiga tortuga. La ilustración se extrajo del Libro 1 a color. Se revisaron también las páginas de origen de la edición especial; no se publican los libros completos. No se recopilan respuestas ni datos personales; el recorrido vive solamente en memoria.

## Abrir localmente

Abrir `dist/index.html` en un navegador. No requiere instalación ni servidor.

También se puede iniciar una vista previa local desde la raíz del repositorio:

```sh
python -m http.server 5178 --bind 127.0.0.1 --directory dist
```

Abrir http://127.0.0.1:5178 en el navegador. Para detener el servidor, presionar Ctrl+C.

## Comprobaciones

Con Node.js instalado, ejecutar `npm test`. No requiere instalar dependencias.
Se comprueba la sintaxis y los cinco recorridos: avance, retroceso, elección antes de conversar, cierre y reinicio. Las comprobaciones usan un DOM simulado; no sustituyen la revisión visual y de accesibilidad en un navegador.

## Archivos

- `dist/index.html`: estructura de la mini app.
- `dist/style.css`: diseño adaptable a celular y computadora.
- `dist/app.js`: navegación.
- `dist/adventures.js`: adaptaciones, juegos y preguntas.
- `dist/tilo.jpg`: ilustración original del Libro 1 a color.
- `check-flow.cjs`: comprobaciones de los recorridos.

La versión publicada en Sites tiene acceso privado. Este repositorio no contiene credenciales ni la configuración interna de esa publicación. Para desplegar en otro servicio estático, usar `dist` como carpeta pública.

## Propuesta comercial

Una actividad completa gratis permite probar el valor familiar antes de comprar. El futuro pack se cobra por pack familiar, no por niño ni por usuario. La estrategia existente propone USD 9–15 como hipótesis inicial, pendiente de entrevistas y compras reales. No se muestran precios ni se reciben pagos en esta versión; el pack figura en preparación en el espacio para adultos.

Antes de habilitar ventas: definir contenidos entregables, validar precio con adultos responsables y conectar un medio de pago y entrega real.
