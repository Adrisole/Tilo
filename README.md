# Tilo me ayuda

Mini app para celular: herramientas emocionales, palabras amables, juegos y cuentos para chicos y familias.

## Primera versión

- Respiración de la trompa: tres ciclos suaves, animación sincronizada, pausa y salida. Al terminar pregunta cómo se siente, sin exigir un resultado.
- Tristeza: elegir abrazo, compañía o espacio. La imagen del abrazo pertenece a este recorrido.
- Palabras amables: tres situaciones con botones y feedback.
- Juego de parejas con Tilo, Luma, Milo y Chispita.
- Cinco cuentos breves adaptados de la colección, organizados por tema.
- Un video local de tristeza, con controles, sin reproducción automática. Los demás videos se incorporarán al producirse. No hay enlaces ficticios a YouTube.
- Guía para la familia separada de las actividades.

Los botones de miedo y frustración abren por ahora sus cuentos. Las herramientas específicas de esas emociones quedan para próximas versiones. La app no guarda elecciones ni recopila datos personales.

## Abrir

Abrir `dist/index.html` en un navegador, o ejecutar `python -m http.server 5178 --bind 127.0.0.1 --directory dist` y visitar http://127.0.0.1:5178.

## Comprobar

`npm test` ejecuta comprobaciones de sintaxis, cancelación de temporizadores, respiración, palabras, memoria, cuentos y archivos. No requiere instalar dependencias.

## Fuentes y archivos

Los cuentos son adaptaciones breves de los cinco libros facilitados por la creadora de TILO: La torre que se derrumbó; El sendero de las luciérnagas; Después de la lluvia; Cada uno a su manera; El angelito de las palabras. Tilo es el elefante de barba roja, Luma es la tortuga y Toti es el tucán. Las imágenes y el video fueron suministrados por la creadora; no se suben los libros completos.

`dist/main.js` contiene las actividades; `dist/mobile.css` el diseño; `dist/adventures.js` las adaptaciones. La carpeta `dist` se puede publicar en un servicio estático. La publicación de Sites tiene acceso privado y su configuración se conserva fuera de este repo.

## Estrategia comercial

Herramientas útiles y gratuitas para generar confianza familiar. Los cuentos amplían el universo Tilo; los libros y packs pueden continuar la experiencia fuera de la pantalla. Validar uso y retorno con familias antes de fijar precios o ampliar el catálogo. Las ofertas deben dirigirse a quienes acompañan, fuera de los juegos.
