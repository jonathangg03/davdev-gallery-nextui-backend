# Davdev Gallery - API REST

Una aplicación web de galería, donde subes una foto, y puedes ver todas las
fotos que se han subido al sitio. Las imagenes se guardan en Cloudinary.

[![Galería](https://dav-dev.com/assets/projects/gallery.jpg 'Galería')](https://dav-dev.com/assets/projects/gallery.jpg 'Galería')

## Frontend

El frontend de este sitio lo puedes ver en este
[repositorio](https://github.com/jonathangg03/davdev-gallery-nextui 'repositorio').

## Resumen

Esta es la API REST, que va a manejar todos los datos enviados por el frontend.
Vamos a almacenarlos en una Base de datos de MongoDB. Las imagenes serán
procesadas con Multer, y subidas a Cloudinary.

## Correr aplicación en local

- Debes clonar este repositorio.
- Abrir una terminal e ingresar a la carpeta creada.
- Instalar las dependencias con el comando "npm install".
- Renombrar el archivo ".env.example" por ".env". Colocar los valores a las
  variables de entorno, en este caso sería el puerto en el que correrá este
  servidor en local (3001, pero puede ser cualquiera) y la URI de nuestra Base
  de datos.
- Crear una cuenta en Cloudinary, y llenar las variables de entorno
  correspondientes. Este es un servicio para almacenar imagenes.
- Iniciar el proyecto con el comando "npm run dev".
