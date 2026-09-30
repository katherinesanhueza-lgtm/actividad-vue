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



---

# Actividad 12 - Vue Router y Favoritos

## Descripción

En esta actividad se transformó el proyecto Feria Artesanal de Ñuble desarrollado anteriormente en una aplicación SPA (Single Page Application) utilizando Vue Router.

La aplicación permite navegar entre diferentes vistas sin recargar completamente la página, consultar el catálogo de productos, visualizar el detalle de cada producto mediante rutas dinámicas, guardar productos favoritos, utilizar un formulario de contacto y mostrar una página 404 cuando una ruta no existe.

## Funcionalidades

- Navegación mediante Vue Router.
- Navegación interna utilizando RouterLink.
- Vista de Inicio.
- Vista de Productos.
- Vista de Favoritos.
- Vista de Contacto.
- Página 404.
- Ruta dinámica para visualizar el detalle de cada producto.
- Búsqueda de productos por nombre.
- Filtro de productos por categoría.
- Favoritos persistentes mediante localStorage.
- Eliminación de productos desde la vista de favoritos.
- Formulario de contacto con validación de campos.
- Componentes reutilizables.
- Uso de props y emit.
- Diseño responsive.

## Rutas

- `/` - Vista de Inicio.
- `/productos` - Catálogo de productos.
- `/productos/:id` - Detalle dinámico de un producto.
- `/favoritos` - Productos seleccionados como favoritos.
- `/contacto` - Formulario de contacto.
- Cualquier ruta inexistente muestra la página 404.

## Componentes principales

### Navbar.vue

Contiene el menú principal de navegación de la aplicación.

Utiliza `RouterLink` para navegar entre Inicio, Productos, Favoritos y Contacto sin recargar completamente el sitio.

### ProductoCard.vue

Componente reutilizable encargado de mostrar la información resumida de cada producto.

Recibe mediante `props`:

- Producto.
- Estado de favorito.

Permite:

- Acceder al detalle del producto.
- Agregar o quitar el producto de favoritos.

Utiliza `emit` para comunicar al componente padre cuando cambia el estado de favorito.

## Vistas

### InicioView.vue

Corresponde a la página inicial de la aplicación y contiene un acceso directo al catálogo.

### ProductosView.vue

Muestra el catálogo completo de productos.

Incluye:

- Buscador por nombre.
- Filtro por categoría.
- Filtro por comuna.
- Productos generados dinámicamente.
- Administración de favoritos.

### ProductoDetalleView.vue

Utiliza una ruta dinámica para obtener el ID del producto desde la URL.

Por ejemplo:

`/productos/2`

permite buscar y mostrar el producto cuyo ID corresponde a 2.

Si el producto no existe, se muestra un mensaje indicando que no fue encontrado.

### FavoritosView.vue

Recupera desde `localStorage` los productos marcados como favoritos y muestra solamente esos productos.

También permite quitar productos de favoritos.

### ContactoView.vue

Contiene un formulario con:

- Nombre.
- Correo electrónico.
- Mensaje.

Utiliza `v-model` y valida que todos los campos estén completos antes de registrar el mensaje.

### NotFoundView.vue

Muestra una página de error 404 cuando el usuario intenta acceder a una dirección que no existe.

## Persistencia con localStorage

Los ID de los productos favoritos se almacenan en el navegador utilizando `localStorage`.

Antes de guardar el arreglo se utiliza `JSON.stringify()` y al recuperar la información se utiliza `JSON.parse()`.

Esto permite conservar los favoritos incluso después de actualizar la página.

## Desafío individual

Como mejora individual se agregó un filtro por comuna en la vista de productos.

### Archivo modificado

`src/views/ProductosView.vue`

### Comportamiento agregado

Se incorporó un nuevo selector que permite filtrar los productos según su comuna.

Las comunas se obtienen automáticamente a partir de los productos registrados utilizando una propiedad `computed`.

Actualmente se pueden filtrar productos de:

- San Carlos.
- Quillón.
- Coihueco.
- Chillán.

El filtro por comuna funciona de manera conjunta con el buscador por nombre y el filtro por categoría.

### Verificación

Se comprobó que al seleccionar una comuna se muestran solamente los productos correspondientes a esa ubicación.

También se verificó el funcionamiento combinado entre búsqueda, categoría y comuna.

## Tecnologías utilizadas

- Vue 3
- Vite
- Vue Router
- JavaScript
- HTML
- CSS
- localStorage
- Git
- GitHub

## Ejecutar el proyecto

Instalar dependencias:

```bash
npm install