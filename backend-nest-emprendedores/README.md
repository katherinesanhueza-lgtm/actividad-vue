# Actividad 10 - API REST de Emprendedores con NestJS

## Descripción

En esta actividad se desarrolló una API REST utilizando NestJS para la gestión de emprendedores de la Región de Ñuble.

El proyecto implementa persistencia de datos mediante MySQL y TypeORM, validación de datos con class-validator y documentación interactiva de los endpoints mediante Swagger.

La API permite registrar, consultar, buscar, actualizar y eliminar emprendedores.

---

## Tecnologías utilizadas

- Node.js
- NestJS
- TypeScript
- MySQL
- TypeORM
- class-validator
- class-transformer
- Swagger
- dotenv

---

## Base de datos

El proyecto utiliza una base de datos MySQL llamada:

`emprendedores_db`

La entidad principal es `Emprendedor` y contiene los siguientes atributos:

- id
- nombre
- rubro
- comuna
- telefono
- email
- descripcion
- activo

La tabla `emprendedores` es gestionada mediante TypeORM.

---

## Endpoints

### Listar emprendedores

GET `/emprendedores`

Permite obtener todos los emprendedores registrados.

### Buscar emprendedores

GET `/emprendedores/buscar`

Permite filtrar emprendedores mediante los parámetros:

- `comuna`
- `rubro`

Ejemplos:

`/emprendedores/buscar?comuna=Chillán`

`/emprendedores/buscar?rubro=Tecnología`

También es posible combinar ambos filtros:

`/emprendedores/buscar?comuna=Chillán&rubro=Tecnología`

### Buscar emprendedor por ID

GET `/emprendedores/:id`

Permite obtener un emprendedor específico mediante su identificador.

### Crear emprendedor

POST `/emprendedores`

Permite registrar un nuevo emprendedor.

### Actualizar emprendedor

PUT `/emprendedores/:id`

Permite modificar la información de un emprendedor existente.

### Eliminar emprendedor

DELETE `/emprendedores/:id`

Permite eliminar un emprendedor.

---

## Validaciones

Los datos enviados a la API son validados utilizando `class-validator`.

Entre las principales validaciones implementadas se encuentran:

- Nombre obligatorio y mínimo de 3 caracteres.
- Rubro obligatorio y restringido a los valores permitidos.
- Comuna obligatoria.
- Teléfono opcional.
- Email opcional con formato válido.
- Descripción opcional con mínimo de 10 caracteres.
- Estado activo opcional de tipo booleano.

La aplicación utiliza `ValidationPipe` global para aplicar estas validaciones.

---

## Manejo de errores

Cuando se consulta, actualiza o elimina un emprendedor que no existe, la API responde con un error `404 Not Found`.

Los datos que no cumplen las reglas definidas en los DTO generan una respuesta `400 Bad Request`.

---

## Swagger

La API cuenta con documentación interactiva mediante Swagger.

Con el servidor ejecutándose, Swagger se encuentra disponible en:

`http://localhost:3000/api`

Desde Swagger es posible probar los diferentes endpoints de la API.

---

## Datos iniciales

El proyecto incluye un archivo:

`src/database/seed.ts`

Este archivo permite cargar datos ficticios de emprendedores pertenecientes a diferentes comunas de la Región de Ñuble.

Se incluyen 8 registros iniciales.

Para ejecutar la carga de datos:

```bash
npm run seed