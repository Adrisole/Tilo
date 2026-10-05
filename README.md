# Mini app familiar TILO

Actividad gratuita en español: elegir una emoción, leer un cuento breve, elegir una forma de acompañar, conversar y continuar fuera de la pantalla. Tres recorridos: tristeza, enojo y alegría.

Los cuentos son textos nuevos para este prototipo; no son transcripciones de los videos. La imagen es un fotograma existente del proyecto. No se recopilan respuestas ni datos personales; el recorrido vive solamente en memoria.

## Abrir localmente

Abrir `dist/index.html` en un navegador. No requiere instalación ni servidor.

También se puede iniciar una vista previa local desde la raíz del repositorio:

```sh
python -m http.server 5178 --bind 127.0.0.1 --directory dist
```

Abrir http://127.0.0.1:5178 en el navegador. Para detener el servidor, presionar Ctrl+C.

## Comprobaciones

Con Node.js instalado, ejecutar `npm test`. No requiere instalar dependencias.
Se comprueba la sintaxis y los tres recorridos: avance, retroceso, elección antes de conversar, cierre y reinicio. Las comprobaciones usan un DOM simulado; no sustituyen la revisión visual y de accesibilidad en un navegador.

## Archivos

- `dist/index.html`: estructura de la mini app.
- `dist/style.css`: diseño adaptable a celular y computadora.
- `dist/app.js`: cuentos, juegos y navegación.
- `dist/tilo.png`: fotograma original del proyecto TILO.
- `check-flow.cjs`: comprobaciones de los recorridos.

La versión publicada en Sites tiene acceso privado. Este repositorio no contiene credenciales ni la configuración interna de esa publicación. Para desplegar en otro servicio estático, usar `dist` como carpeta pública.

## Propuesta comercial

Una actividad completa gratis permite probar el valor familiar antes de comprar. El futuro pack se cobra por pack familiar, no por niño ni por usuario. La estrategia existente propone USD 9–15 como hipótesis inicial, pendiente de entrevistas y compras reales. No se muestran precios ni se reciben pagos en esta versión; el pack figura en preparación en el espacio para adultos.

Antes de habilitar ventas: definir contenidos entregables, validar precio con adultos responsables y conectar un medio de pago y entrega real.
