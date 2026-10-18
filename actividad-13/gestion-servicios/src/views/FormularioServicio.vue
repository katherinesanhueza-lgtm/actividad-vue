
<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {
  obtenerServicio,
  crearServicio,
  actualizarServicio
} from '../services/serviciosApi'

// Permite conocer la ruta actual
const route = useRoute()

// Permite navegar a otra vista
const router = useRouter()

// Determina si estamos creando o editando
const editando = Boolean(route.params.id)

// Datos del formulario
const formulario = reactive({
  nombre: '',
  categoria: '',
  precio: '',
  descripcion: ''
})

// Estados de la aplicación
const error = ref('')
const cargando = ref(false)
const guardando = ref(false)

// Cargar datos cuando estamos editando
onMounted(async () => {
  if (!editando) return

  cargando.value = true
  error.value = ''

  try {
    const servicio = await obtenerServicio(route.params.id)

    formulario.nombre = servicio.nombre
    formulario.categoria = servicio.categoria
    formulario.precio = servicio.precio
    formulario.descripcion = servicio.descripcion

  } catch (e) {
    error.value = `No fue posible cargar el servicio: ${e.message}`
  } finally {
    cargando.value = false
  }
})

// Guardar un servicio
async function guardarServicio() {

  // Evitar envíos duplicados
  if (guardando.value || cargando.value) return

  error.value = ''

  // Validar los campos
  if (
    !formulario.nombre.trim() ||
    !formulario.categoria.trim() ||
    !formulario.descripcion.trim() ||
    formulario.precio === '' ||
    !Number.isFinite(Number(formulario.precio)) ||
    Number(formulario.precio) <= 0
  ) {
    error.value =
      'Completa todos los campos e ingresa un precio mayor que cero.'
    return
  }

  guardando.value = true

  // Preparar los datos para la API
  const datos = {
    nombre: formulario.nombre.trim(),
    categoria: formulario.categoria.trim(),
    precio: Number(formulario.precio),
    descripcion: formulario.descripcion.trim()
  }

  try {
    if (editando) {
      // Actualizar un servicio existente
      await actualizarServicio(route.params.id, datos)
    } else {
      // Crear un servicio nuevo
      await crearServicio(datos)
    }

    // Regresar al listado
    await router.push('/')

  } catch (e) {
    error.value = `No fue posible guardar el servicio: ${e.message}`
  } finally {
    guardando.value = false
  }
}
</script>

<template>
  <section class="formulario-page">

    <div class="encabezado-formulario">
      <p class="etiqueta">Gestión de servicios</p>

      <h2>
        {{ editando ? 'Editar servicio' : 'Nuevo servicio' }}
      </h2>

      <p>
        {{
          editando
            ? 'Modifica los datos del servicio seleccionado.'
            : 'Completa los datos para registrar un nuevo servicio.'
        }}
      </p>
    </div>

    <div v-if="cargando" class="mensaje-info">
      Cargando información del servicio...
    </div>

    <form
      v-else
      class="formulario"
      @submit.prevent="guardarServicio"
    >

      <!-- NOMBRE -->
      <div class="campo">
        <label for="nombre">Nombre del servicio</label>

        <input
          id="nombre"
          v-model="formulario.nombre"
          type="text"
          placeholder="Ej.: Reparación de notebooks"
          maxlength="100"
          required
        />
      </div>

      <!-- CATEGORÍA -->
      <div class="campo">
        <label for="categoria">Categoría</label>

        <select
          id="categoria"
          v-model="formulario.categoria"
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="Soporte">Soporte</option>
          <option value="Desarrollo">Desarrollo</option>
          <option value="Redes">Redes</option>
        </select>
      </div>

      <!-- PRECIO -->
      <div class="campo">
        <label for="precio">Precio (CLP)</label>

        <input
          id="precio"
          v-model.number="formulario.precio"
          type="number"
          min="1"
          step="1"
          placeholder="Ej.: 35000"
          required
        />
      </div>

      <!-- DESCRIPCIÓN -->
      <div class="campo">
        <label for="descripcion">Descripción</label>

        <textarea
          id="descripcion"
          v-model="formulario.descripcion"
          rows="4"
          maxlength="500"
          placeholder="Describe el servicio tecnológico..."
          required
        ></textarea>
      </div>

      <!-- ERROR -->
      <p v-if="error" class="mensaje-error" role="alert">
        {{ error }}
      </p>

      <!-- BOTONES -->
      <div class="acciones">
        <button
          type="submit"
          class="boton-guardar"
          :disabled="guardando"
        >
          {{
            guardando
              ? 'Guardando...'
              : editando
                ? 'Guardar cambios'
                : 'Crear servicio'
          }}
        </button>

        <RouterLink to="/" class="boton-cancelar">
          Cancelar
        </RouterLink>
      </div>

    </form>
  </section>
</template>

<style scoped>
.formulario-page {
  max-width: 700px;
  margin: 0 auto;
}

.encabezado-formulario {
  margin-bottom: 24px;
}

.etiqueta {
  color: #64748b;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.encabezado-formulario h2 {
  font-size: 2rem;
  margin: 8px 0;
}

.encabezado-formulario p {
  color: #64748b;
}

.formulario {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.campo {
  margin-bottom: 22px;
}

.campo label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.campo input,
.campo select,
.campo textarea {
  display: block;
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  padding: 12px;
  margin-top: 0;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  background: white;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  outline: 2px solid #93c5fd;
  border-color: #2563eb;
}

.acciones {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 25px;
}

.boton-guardar {
  background: #153e5c;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
}

.boton-guardar:hover:not(:disabled) {
  background: #245c83;
}

.boton-guardar:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.boton-cancelar {
  color: #475569;
  text-decoration: none;
  font-weight: bold;
  padding: 12px;
}

.mensaje-error {
  background: #fee2e2;
  color: #991b1b;
  padding: 14px;
  border-radius: 8px;
}

.mensaje-info {
  background: #e0f2fe;
  color: #075985;
  padding: 14px;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .formulario {
    padding: 18px;
  }

  .encabezado-formulario h2 {
    font-size: 1.6rem;
  }

  .acciones {
    flex-direction: column;
    align-items: stretch;
  }

  .boton-guardar,
  .boton-cancelar {
    text-align: center;
  }
}
</style>
