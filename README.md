Actividad 7 -Diagnostico Inicial

### 1. Problema detectado: error de sintaxis que impide iniciar la aplicación

**Archivo:** `src/components/Recepciones.vue`

**Posible causa:** Existe un carácter `/` aislado en el código. Vite lo interpreta como el inicio de una expresión regular sin terminar, generando el error `Unterminated regular expression`.
### 2. Problema detectado: error en la navegación hacia Libros

**Archivo:** `src/App.vue`

**Posible causa:** Existe una inconsistencia entre el nombre del componente importado y el nombre utilizado en el template, lo que impide visualizar correctamente la sección de libros.

### 3. Problema detectado: error en la pestaña Recepciones

**Archivo:** `src/App.vue`

**Posible causa:** El nombre utilizado para comprobar la sección activa no coincide con el valor utilizado para identificar la sección Recepciones.

### 4. Problema detectado: estado compartido no disponible correctamente

**Archivo:** `src/stores/useRecepcionStore.js`

**Posible causa:** Los componentes necesitan acceder al estado compartido, pero la función del store no lo retorna correctamente.

### 5. Problema detectado: validación incorrecta del ISBN

**Archivo:** `src/components/Libros.vue`

**Posible causa:** La condición utilizada para validar el ISBN no comprueba correctamente que tenga exactamente 10 o 13 caracteres.
### 6. Problema detectado: archivo CSS no encontrado

**Archivo:** `src/main.js`

**Posible causa:** Se intenta importar `./styles.css`, pero el archivo existente se llama `style.css`, provocando un error de resolución de importación.

### 8. Problema detectado: error de sintaxis al agregar ítems

**Archivo:** `src/components/ItemsRecepcion.vue`

**Posible causa:** Las propiedades del nuevo ítem (`id`, `id_recepcion`, `id_libro`, `cantidad`, etc.) se encuentran declaradas sin estar contenidas dentro de un objeto ni agregadas correctamente al arreglo de ítems, provocando un error de sintaxis.