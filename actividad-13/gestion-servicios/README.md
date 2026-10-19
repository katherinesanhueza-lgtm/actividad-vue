
# Actividad 13 - Gestión de Servicios Tecnológicos

## Información general

**Asignatura:** Ingeniería Web IW600  
**Actividad:** N.º 13 - CRUD con Vue 3 y API REST  
**Estudiante:** Katherine Sanhueza  
**Fecha:** Octubre de 2026

## 1. Descripción del proyecto

Aplicación web desarrollada con Vue 3 para gestionar
servicios tecnológicos mediante una API REST local.

El sistema permite consultar, registrar, modificar y
eliminar servicios, almacenando los datos en un archivo
JSON administrado mediante JSON Server.

## 2. Objetivo

Desarrollar una aplicación web que implemente las
operaciones CRUD utilizando Vue 3, Vue Router,
Fetch API y JSON Server.

## 3. Tecnologías utilizadas

- Vue 3: desarrollo de la interfaz de usuario.
- Vite: entorno de desarrollo.
- Vue Router: navegación entre vistas.
- JavaScript: lógica de la aplicación.
- Fetch API: comunicación mediante HTTP.
- JSON Server: API REST local.
- HTML y CSS: estructura y presentación.
- Git y GitHub: control de versiones.

## 4. Funcionalidades

- Listar servicios desde la API REST.
- Buscar servicios por nombre.
- Filtrar servicios por categoría.
- Mostrar cantidad de resultados.
- Registrar nuevos servicios.
- Editar servicios existentes.
- Eliminar servicios con confirmación.
- Validar campos obligatorios.
- Validar que el precio sea mayor que cero.
- Mostrar mensajes de carga y error.
- Evitar envíos duplicados del formulario.
- Navegar entre vistas con Vue Router.
- Diseño adaptable a diferentes pantallas.

## 5. Estructura del proyecto

- db.json: almacenamiento de los servicios.
- src/main.js: inicialización de Vue.
- src/App.vue: estructura principal y navegación.
- src/router/index.js: configuración de rutas.
- src/services/serviciosApi.js: solicitudes HTTP.
- src/views/ListaServicios.vue: listado, filtros y eliminación.
- src/views/FormularioServicio.vue: creación y edición.
- src/style.css: estilos generales.

## 6. Instalación

Requisitos:
- Node.js y npm instalados.

Clonar el repositorio:

git clone https://github.com/katherinesanhueza-lgtm/actividad-vue.git

Entrar al proyecto:

cd actividad-vue/actividad-13/gestion-servicios

Instalar dependencias:

npm install

## 7. Ejecución

Abrir dos terminales dentro de gestion-servicios.

Terminal 1 - API REST:

npx json-server db.json --port 3001

Terminal 2 - Aplicación Vue:

npm run dev

Abrir en el navegador la dirección indicada por Vite,
normalmente http://localhost:5173

La API estará disponible en:

http://localhost:3001/servicios

## 8. Operaciones HTTP

GET /servicios
Consulta todos los servicios.

GET /servicios/:id
Consulta un servicio específico.

POST /servicios
Crea un nuevo servicio.

PUT /servicios/:id
Actualiza un servicio existente.

DELETE /servicios/:id
Elimina un servicio.

## 9. Validaciones

El formulario comprueba que:

- El nombre no esté vacío.
- Se seleccione una categoría.
- El precio sea un número mayor que cero.
- La descripción no esté vacía.
- No se envíe el formulario varias veces simultáneamente.

## 10. Pruebas realizadas

- Consulta de servicios desde JSON Server.
- Búsqueda y filtrado de registros.
- Creación y persistencia de servicios.
- Edición y persistencia de cambios.
- Eliminación con confirmación.
- Validación de campos.
- Manejo de errores de conexión.
- Navegación entre rutas.

## 11. Dificultad encontrada y solución

Problema:
La aplicación mostraba el mensaje "Failed to fetch"
al intentar cargar los servicios.

Causa:
JSON Server no estaba ejecutándose, por lo que
Vue no podía comunicarse con la API REST.

Solución:
Se inició JSON Server en el puerto 3001 y se
comprobó la respuesta del endpoint /servicios.

## 12. Evidencias

Las capturas de pantalla del funcionamiento se
encuentran en la carpeta evidencias.

## 13. Control de versiones

El proyecto fue desarrollado utilizando Git y GitHub,
con commits correspondientes a las diferentes etapas.

Rama de trabajo: actividad-13.
