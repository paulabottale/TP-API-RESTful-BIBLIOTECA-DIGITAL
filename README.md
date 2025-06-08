# Biblioteca Digital – API RESTful

Este proyecto consiste en una API RESTful desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB**, que permite gestionar una colección de libros.  
Sigue el patrón de diseño **MVC** (Modelo - Vista - Controlador) e implementa operaciones CRUD completas para administrar recursos de una biblioteca digital.

## Requisitos

- Node.js
- MongoDB
- npm 

## Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/paulabottale/TP-API-RESTful-BIBLIOTECA-DIGITAL.git
cd TP-API-RESTful-BIBLIOTECA-DIGITAL

2. Instala las dependencias:

```bash
npm install

3. Configurá las variables de entorno:

Creá un archivo .env en la raíz del proyecto con el siguiente contenido:
PORT=2222
MONGO_URI=mongodb://localhost:27017/db-api-restful-biblioteca-digital

4. Ejecutá el proyecto en modo desarrollo:

```bash
npm run dev

La API estará disponible en:
http://localhost:2222

Endpoints disponibles

Método	 Ruta	    Descripción
GET	    /books	    Listar todos los libros
GET	    /books/:id	Obtener un libro por ID
POST	/books	    Crear un nuevo libro
PATCH	/books/:id	Actualizar un libro existente
DELETE	/books/:id	Eliminar un libro


Tecnologías usadas

TypeScript

Express.js

MongoDB + Mongoose

Dotenv

Git

Autor

Desarrollado por: Paula Bottale



