# Despliegue de Tilo en Hostinger

Estado: actividades interactivas y servidor HTTP terminados y probados localmente. Registro, MongoDB y autenticación todavía no implementados. El dominio aún debe desplegar y verificar esta versión.

Para una aplicación Node.js:
- Subir el ZIP o conectar Adrisole/Tilo, rama main.
- Directorio raíz: raíz del proyecto (package.json y server.js).
- Node.js: 22.x o 24.x.
- Build: npm run build.
- Start: npm start (node server.js).
- Puerto: 3000, o la variable PORT que asigne la plataforma.
- La raíz / sirve dist/index.html; dist contiene la app y sus imágenes/videos.

El ZIP contiene package.json y server.js directamente en la raíz, sin una carpeta adicional. No contiene contraseñas ni variables secretas. No requiere MongoDB para las actividades actuales.

Si elegís hosting estático en vez de Node.js, subir el contenido de dist al directorio web asociado al subdominio. index.html debe quedar en la raíz web, no dentro de otra carpeta dist.

Después de desplegar: comprobar la portada sin sesión y confirmar respuesta HTTP 200 antes de pedir indexación en Google. Este servidor no incluye cuentas todavía.
