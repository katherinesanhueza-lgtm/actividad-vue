# Actividad 11 - Sabores y Artesanías de Ñuble

## Descripción

Este proyecto corresponde a la Actividad N° 11 y consiste en el desarrollo de un catálogo web interactivo utilizando Vue.js.

La aplicación presenta productos elaborados por emprendedores y artesanos de la Región de Ñuble, permitiendo buscar productos, filtrar por categorías, ocultar o mostrar el catálogo y visualizar información detallada de cada producto mediante una ventana modal.

## Objetivo

Construir una aplicación web interactiva utilizando Vue.js, aplicando directivas, propiedades computadas, componentes reutilizables, props y eventos.

## Tecnologías utilizadas

- Vue.js 3
- Vite
- JavaScript
- HTML
- CSS
- Git
- GitHub

## Conceptos aplicados

Durante el desarrollo del proyecto se utilizaron los siguientes conceptos de Vue.js:

- `v-model`: utilizado para vincular el buscador y el selector de categorías con las variables reactivas.
- `v-for`: utilizado para recorrer y mostrar dinámicamente los productos y las categorías.
- `v-if / v-else`: utilizado para mostrar el catálogo o el mensaje correspondiente cuando no existen resultados.
- `v-show`: utilizado para mostrar u ocultar el catálogo.
- `computed`: utilizado para generar las categorías y filtrar los productos.
- `props`: utilizado para enviar información desde el componente principal hacia los componentes hijos.
- `emit`: utilizado para comunicar eventos desde los componentes hijos hacia el componente principal.

## Estructura del proyecto

### App.vue

Es el componente principal de la aplicación.

Se encarga de:

- Administrar el buscador.
- Administrar el filtro por categoría.
- Mostrar u ocultar el catálogo.
- Filtrar los productos.
- Mostrar la cantidad de resultados.
- Abrir y cerrar el modal.
- Renderizar dinámicamente los productos.

### ProductoCard.vue

Componente reutilizable encargado de mostrar cada producto del catálogo.

Recibe la información del producto mediante `props` y muestra:

- Imagen.
- Categoría.
- Nombre.
- Precio.
- Botón "Ver detalle".

Al presionar el botón, el componente emite el evento `ver-detalle` hacia el componente principal.

### ProductoModal.vue

Componente encargado de mostrar la información detallada de un producto.

El modal permite visualizar:

- Categoría.
- Nombre.
- Imagen.
- Descripción.
- Precio.

Puede cerrarse de tres formas:

- Presionando el botón X.
- Presionando la tecla Escape.
- Haciendo clic fuera del modal.

### productos.js

Archivo encargado de almacenar los datos de los productos utilizados en el catálogo.

Cada producto contiene:

- ID.
- Nombre.
- Precio.
- Categoría.
- Imagen.
- Descripción.

## Productos del catálogo

El catálogo incluye los siguientes productos:

1. Queso Chanco de San Carlos.
2. Miel de Quillón.
3. Poncho tejido de Coihueco.
4. Cerámica artesanal de Quinchamalí.

## Cambios realizados

Además de la estructura base de la actividad, se incorporaron las siguientes mejoras:

- Se agregó un cuarto producto: Cerámica artesanal de Quinchamalí.
- Se agregó una nueva categoría denominada `Artesanía`.
- Se modificó el título principal a "Sabores y Artesanías de Ñuble".
- Se modificó el texto de presentación del sitio manteniendo el contexto de la Región de Ñuble.
- Se incorporó un mensaje visual cuando el catálogo se encuentra oculto.
- Las categorías se generan automáticamente a partir de los productos registrados.

## Funcionalidades

La aplicación permite:

- Buscar productos por nombre.
- Buscar productos por categoría.
- Filtrar mediante un selector de categorías.
- Mostrar la cantidad de resultados encontrados.
- Mostrar y ocultar el catálogo.
- Visualizar un mensaje cuando no existen resultados.
- Visualizar un mensaje cuando el catálogo está oculto.
- Abrir el detalle de cada producto.
- Cerrar el modal mediante X, Escape o clic fuera del modal.
- Adaptar la cantidad de columnas según el tamaño de la pantalla.

## Diseño responsive

La aplicación utiliza CSS responsive para adaptar el catálogo a diferentes tamaños de pantalla:

- Pantallas pequeñas: 1 columna.
- Pantallas medianas: 2 columnas.
- Pantallas grandes: 3 columnas.

## Ejecutar el proyecto

Instalar las dependencias:

```bash
npm install