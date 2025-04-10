# React + Zustand Project

This is a React project using Vite and Zustand for state management.

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running the Project

To start the development server:
```bash
npm run dev
```
This will start the development server at `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```
The build files will be created in the `dist` directory.

## Caso practico

## RetailCompass Evaluaciones

## Descripción
Aplicación de evaluación de productos para RetailCompass.

## Características
- Listado de productos con paginación
- Visualización de un listado de productos
- Sidebar en blanco para filtros
- Conexión a API de RetailCompass

## Imágenes del Proyecto

### Vista Principal
![Vista Principal](./public/screenshots/listadoRC.png)

### Exoplicacion del area de trabajo
![Tabla de Productos](./public/screenshots/detalleRC.png)

## Instalación
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno en `.env` en base al ejemplo `.env.example`
4. Iniciar el servidor: `npm run dev`

## Reto para la postulacion
1. Incluir dentro del listado de productos los precios (lowest, offer, normal).
2. Actualmente la integracion al API esta en metodo GET, cambiarlo para que soporte POST.
3. En el sidebar agregar filtro de `SKU` y `Status`, esto deberá alterar el listado de productos.
4. Cuando se tenga la solucione, deberá subir un PR donde el formato de la rama debe ser `nombre_completo_del_postulante/feature/alteredListing`

## Documentacion del API
1. APIKey para la evaluacion: `ff236fbd608a479b8d2025a3791bb848`
2. Documentación: `https://docs.google.com/document/d/1tfdvlFrvE6RGFd_r6dblwDTOIRK520Wku8kLWTpb6TA/edit?usp=sharing`

