

### Parte 1 – Reutilización del proyecto

Para esta actividad se reutilizó como base el proyecto desarrollado en la Actividad 7, adaptándolo a una empresa de servicios tecnológicos.

**Nombre de la empresa:** TechNova Servicios Informáticos

**Rubro:** Servicios tecnológicos y soporte informático.

TechNova Servicios Informáticos es una empresa orientada a entregar soluciones tecnológicas a personas y pequeñas empresas, ofreciendo servicios de soporte, mantenimiento, instalación, configuración y asesoría informática.

### Elementos reutilizados de la Actividad 7

Se conserva la estructura general del proyecto Vue 3, incluyendo la carpeta de componentes, la configuración principal de la aplicación y los conceptos trabajados anteriormente, como componentes, props, emit, v-model, v-for, condicionales y propiedades calculadas.

### Elementos que serán modificados

Los componentes relacionados con libros, proveedores y recepción de textos escolares serán modificados o reemplazados, ya que no corresponden al nuevo contexto de una empresa de servicios.

El proyecto será adaptado para incorporar las vistas Inicio, Nosotros, Servicios y Contacto, además de un catálogo dinámico de servicios y un formulario para solicitar información.

### Motivo de la adaptación

La reutilización permite aprovechar la estructura y los conocimientos aplicados anteriormente, adaptándolos a un nuevo caso de uso sin comenzar completamente desde cero.
### Parte 2 – Navegación y vistas

Se implementó Vue Router para permitir la navegación entre las distintas secciones de TechNova Servicios Informáticos sin necesidad de recargar completamente la página.

La aplicación cuenta con las siguientes vistas:

- **Inicio:** presenta brevemente la empresa y los servicios tecnológicos que ofrece.
- **Nosotros:** describe la actividad de TechNova y su propósito.
- **Servicios:** sección destinada a mostrar el catálogo de servicios de la empresa.
- **Contacto:** sección destinada a permitir que los clientes soliciten información.

La navegación se realiza mediante RouterLink y el contenido correspondiente a cada ruta se muestra mediante RouterView.

Las rutas implementadas son:

- `/` → Inicio
- `/nosotros` → Nosotros
- `/servicios` → Servicios
- `/contacto` → Contacto

De esta manera, la aplicación funciona como una SPA (Single Page Application), permitiendo cambiar entre las vistas sin realizar una recarga completa de la página.

### Parte 3 – Catálogo de servicios y componentes

Se creó un catálogo dinámico compuesto por seis servicios relacionados con el rubro tecnológico de TechNova Servicios Informáticos.

Cada servicio se almacena dentro de una estructura de datos y contiene la siguiente información:

- Nombre del servicio
- Categoría
- Descripción
- Precio referencial
- Disponibilidad

### Parte 4 – Filtros, condicionales e interacción

Se incorporó una herramienta de búsqueda y filtrado para facilitar la localización de los servicios ofrecidos por TechNova Servicios Informáticos.

La búsqueda permite localizar servicios por nombre y también se agregó un filtro por categoría. Ambos controles utilizan v-model.

Los servicios que se muestran se obtienen mediante una propiedad computed llamada `serviciosFiltrados`, por lo que el arreglo original de servicios no se modifica.

Se utilizaron condicionales con v-if y v-else para mostrar la disponibilidad de los servicios, controlar el botón de solicitud y mostrar un mensaje cuando una búsqueda no encuentra resultados.

Cada servicio disponible incorpora el botón "Solicitar información". Esta acción se origina en el componente hijo `TarjetaServicio.vue` y se comunica mediante emit al componente padre `ServiciosView.vue`.

El servicio seleccionado queda almacenado y visible para el usuario.

### Parte 5 – Formulario de contacto

Se implementó un formulario de contacto para permitir que los usuarios soliciten información sobre los servicios de TechNova.

El formulario contiene los campos nombre, correo electrónico, teléfono, servicio de interés y mensaje. Todos los campos se encuentran vinculados mediante v-model.

Antes de procesar la solicitud se valida que los campos obligatorios estén completos y que el correo electrónico tenga un formato válido. Cuando existe un error se muestra un mensaje al usuario.

Cuando los datos son válidos, se presenta una confirmación junto con un resumen de la información ingresada.

El formulario también se relaciona con el catálogo de servicios. Cuando el usuario selecciona un servicio mediante el botón "Solicitar información", la selección se almacena temporalmente y puede utilizarse automáticamente como servicio de interés en la vista Contacto.

### Parte 6 – Diseño y revisión final

Se aplicó una identidad visual común a todas las vistas de TechNova Servicios Informáticos.

El diseño utiliza una combinación de colores azul, blanco y tonos claros, buscando representar una empresa relacionada con tecnología y servicios informáticos.

Se mejoró la presentación de la navegación, contenido general, catálogo de servicios, tarjetas, filtros, botones y formulario de contacto.

El catálogo utiliza una distribución adaptable que permite mostrar tres tarjetas por fila en pantallas grandes, dos en tamaños intermedios y una en dispositivos pequeños.

También se incorporaron ajustes responsive para la navegación, los filtros y el contenido general.

Durante la revisión final se probaron las rutas Inicio, Nosotros, Servicios y Contacto, además de la búsqueda, filtros, selección de servicios, validaciones y confirmación del formulario.

Finalmente, se verificó el funcionamiento general de la aplicación y se revisó la consola del navegador para detectar posibles errores.

Actividad 9 – Primer Backend con Express.js

**Empresa:** TechNova Servicios Informáticos  
**Rubro:** Servicios tecnológicos y soporte informático.

### Parte 1 y 2 – Preparación del backend

Para comenzar el desarrollo del backend se creó una carpeta independiente llamada `backend` dentro del proyecto utilizado en la Actividad 8.

Dentro de esta carpeta se inicializó un proyecto de Node.js mediante el comando:

`npm init -y`

Este comando creó el archivo `package.json`, el cual contiene la información del proyecto y permite registrar las dependencias utilizadas por el backend.

Posteriormente se instaló Express.js mediante el comando:

`npm install express`

Express.js se utilizará para crear el servidor web, definir las rutas y construir la API de servicios de TechNova.

Después de la instalación se generó también el archivo `package-lock.json` y la carpeta `node_modules`, donde se encuentran las dependencias instaladas para el backend.

### Parte 3 y 4 – Primer servidor

Se creó el archivo `server.js` dentro de la carpeta backend para implementar el primer servidor de TechNova utilizando Express.js.

Para iniciar el servidor se utilizó el comando:

`node server.js`

El servidor se ejecuta en el puerto 3000 y puede ser consultado mediante `http://localhost:3000`.

En el código se utiliza `app.get()` para definir una ruta que responde a solicitudes HTTP GET.

El parámetro `req` representa la solicitud recibida por el servidor, mientras que `res` representa la respuesta que el servidor enviará al cliente.

Mediante `res.send()` se envía el mensaje de respuesta al navegador.

Finalmente, `app.listen()` inicia el servidor y permite que permanezca escuchando solicitudes en el puerto definido.

Se comprobó correctamente la ruta principal `/`, obteniendo como respuesta el mensaje "Servidor de TechNova funcionando correctamente".

### Parte 5 – Datos de servicios

Se creó la carpeta `data` dentro del backend y en ella el archivo `servicios.js`.

Este archivo contiene los datos correspondientes a los servicios ofrecidos por TechNova Servicios Informáticos.

Cada servicio contiene la siguiente información:

- ID
- Nombre
- Categoría
- Descripción
- Precio
- Disponibilidad

Los servicios fueron adaptados al rubro tecnológico de TechNova y corresponden a mantenimiento de computadores, instalación de software, soporte técnico, configuración de redes, respaldo de información y asesoría tecnológica.

Al final del archivo se utiliza `module.exports = servicios`, lo que permite exportar el arreglo de servicios para posteriormente importarlo y utilizarlo desde `server.js`.

### Parte 6 – API de servicios

Se modificó el archivo `server.js` para importar los datos almacenados en `data/servicios.js`.

Para importar el arreglo se utiliza:

`const servicios = require('./data/servicios')`

Posteriormente se creó la ruta GET `/api/servicios`, la cual devuelve todos los servicios de TechNova en formato JSON.

Para enviar los datos se utiliza `res.json(servicios)`.

La diferencia entre `res.send()` y `res.json()` es que `res.send()` permite enviar distintos tipos de respuesta, como texto, mientras que `res.json()` se utiliza específicamente para enviar información en formato JSON.

La API fue probada mediante la dirección `http://localhost:3000/api/servicios`, obteniendo correctamente los seis servicios registrados.


### Parte 7 – Consulta por ID

Se agregó una nueva ruta GET que permite consultar individualmente los servicios de TechNova utilizando su ID.

La ruta implementada es `/api/servicios/:id`.

`req.params` permite acceder a los parámetros incluidos directamente en la URL. En este caso, `req.params.id` obtiene el identificador ingresado después de `/api/servicios/`.

Como los parámetros de la URL son recibidos como texto, se utiliza `Number()` para convertir el ID a un valor numérico y poder compararlo correctamente con los identificadores almacenados en el arreglo de servicios.

Para localizar el servicio se utiliza el método `find()`.

Si el servicio existe, el servidor devuelve sus datos en formato JSON. Si no existe, responde con el código HTTP 404 y el mensaje "Servicio no encontrado".

Se probaron correctamente los servicios con ID 1 e ID 3. También se realizó una consulta utilizando el ID 999 para comprobar la respuesta correspondiente a un servicio inexistente.

### Parte 8 – Filtro por categoría

Se modificó la ruta GET `/api/servicios` para permitir filtrar los servicios de TechNova según su categoría.

El filtro utiliza `req.query.categoria` para obtener la categoría enviada mediante un query parameter en la URL.

Por ejemplo:

`/api/servicios?categoria=Soporte`

Si se proporciona una categoría, se utiliza el método `filter()` para obtener solamente los servicios que pertenecen a ella.

La comparación se realiza utilizando `toLowerCase()`, permitiendo que el filtro no dependa del uso de mayúsculas o minúsculas.

Si no se proporciona ninguna categoría, la ruta `/api/servicios` continúa devolviendo todos los servicios disponibles.

La diferencia entre `req.params` y `req.query` es que `req.params` permite obtener parámetros que forman parte de la ruta, como el ID en `/api/servicios/1`, mientras que `req.query` permite obtener parámetros opcionales enviados después del signo `?`, como la categoría en `/api/servicios?categoria=Soporte`.

También se comprobó que una categoría inexistente devuelve un arreglo vacío sin provocar errores en el servidor.

### Parte 9 – Middleware JSON

Se agregó el middleware `express.json()` al servidor de TechNova.

Un middleware permite procesar información durante el flujo de una solicitud antes de que esta llegue a las rutas correspondientes.

En este caso, `express.json()` permite que Express pueda interpretar cuerpos de solicitudes enviados en formato JSON.

Aunque en esta actividad todavía no se implementan rutas para crear o modificar servicios, este middleware dejará preparado el backend para futuras operaciones mediante métodos como POST y PUT.

La incorporación de este middleware no modifica el funcionamiento de las rutas GET desarrolladas anteriormente.


### Parte 12 – Pruebas finales

Antes de finalizar el backend se realizaron diferentes pruebas para comprobar el funcionamiento de las rutas y consultas implementadas.

**Prueba 1 – Inicio del servidor**

Se ejecutó `node server.js` y el servidor inició correctamente en el puerto 3000.

**Prueba 2 – Ruta principal**

Se consultó la ruta `/` y se obtuvo correctamente el mensaje "Servidor de TechNova funcionando correctamente".

**Prueba 3 – Consulta de todos los servicios**

Se consultó `/api/servicios` y la API devolvió correctamente los ocho servicios registrados en formato JSON.

**Prueba 4 – Consulta de servicio existente**

Se consultó `/api/servicios/1` y se obtuvo correctamente el servicio "Mantenimiento de computadores".

**Prueba 5 – Consulta de servicio inexistente**

Se consultó `/api/servicios/999` y el servidor respondió con estado HTTP 404 y el mensaje "Servicio no encontrado".

**Prueba 6 – Filtro por categoría**

Se consultó `/api/servicios?categoria=Seguridad` y se obtuvieron solamente los servicios correspondientes a dicha categoría.

**Prueba 7 – Categoría inexistente**

Se realizó una consulta utilizando una categoría inexistente y la API devolvió un arreglo vacío sin detener el servidor.

Durante las pruebas la consola de Node.js no presentó errores que impidieran utilizar la aplicación.

### Instrucciones para ejecutar el backend

Para ejecutar el backend se debe ingresar desde una terminal a la carpeta `backend`:

`cd backend`

Luego se deben instalar las dependencias, en caso de ser necesario:

`npm install`

Finalmente se inicia el servidor mediante:

`node server.js`

El servidor quedará disponible en el puerto 3000.

La ruta principal puede consultarse en `http://localhost:3000` y la API de servicios mediante `http://localhost:3000/api/servicios`.

### Reflexión final

El desarrollo de esta actividad permitió incorporar un backend al proyecto de TechNova utilizando Node.js y Express.js.

A través de la actividad se aprendió a crear un servidor, definir rutas GET, trabajar con parámetros de ruta y query parameters, enviar respuestas en formato JSON y utilizar códigos de estado HTTP.

También se comprendió la importancia de separar los datos y la lógica del servidor en archivos diferentes y preparar Express para recibir información JSON mediante middleware.

Este backend constituye la base para posteriormente conectar la aplicación desarrollada en Vue con la API de servicios.