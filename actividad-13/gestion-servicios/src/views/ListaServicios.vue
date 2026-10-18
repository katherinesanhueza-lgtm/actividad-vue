
<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  obtenerServicios,
  eliminarServicio
} from '../services/serviciosApi'

// Almacena los servicios obtenidos desde la API
const servicios = ref([])

// Variables para búsqueda y filtro
const busqueda = ref('')
const categoriaSeleccionada = ref('Todas')

// Estados de la aplicación
const cargando = ref(false)
const error = ref('')
const mensaje = ref('')

// Categorías disponibles
const categorias = computed(() => {
  return [
    'Todas',
    ...new Set(
      servicios.value.map(servicio => servicio.categoria)
    )
  ]
})

// Servicios que coinciden con los filtros
const serviciosFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase()

  return servicios.value.filter(servicio => {
    const coincideNombre = servicio.nombre
      .toLowerCase()
      .includes(texto)

    const coincideCategoria =
      categoriaSeleccionada.value === 'Todas' ||
      servicio.categoria === categoriaSeleccionada.value

    return coincideNombre && coincideCategoria
  })
})

// Consultar servicios desde JSON Server
async function cargarServicios() {
  cargando.value = true
  error.value = ''

  try {
    servicios.value = await obtenerServicios()
  } catch (e) {
    error.value = `No fue posible cargar los servicios: ${e.message}`
  } finally {
    cargando.value = false
  }
}

// Eliminar un servicio
async function borrarServicio(id) {
  const confirmar = confirm('¿Estás seguro de eliminar este servicio?')

  if (!confirmar) {
    return
  }

  mensaje.value = ''
  error.value = ''

  try {
    await eliminarServicio(id)

    await cargarServicios()

    mensaje.value = 'Servicio eliminado correctamente.'
  } catch (e) {
    error.value = `No fue posible eliminar el servicio: ${e.message}`
  }
}

// Cargar datos cuando aparece la vista
onMounted(() => {
  cargarServicios()
})
</script>

<template>
  <section class="servicios-page">

    <div class="encabezado">
      <div>
        <p class="etiqueta">Administración de servicios</p>
        <h2>Servicios tecnológicos</h2>
        <p>
          Consulta, busca, edita y elimina los servicios registrados.
        </p>
      </div>

      <RouterLink to="/nuevo" class="boton-nuevo">
        + Nuevo servicio
      </RouterLink>
    </div>

    <!-- BÚSQUEDA Y FILTROS -->
    <div class="filtros">
      <div class="campo">
        <label for="buscar">Buscar por nombre</label>

        <input
          id="buscar"
          v-model="busqueda"
          type="search"
          placeholder="Ej.: computadores, sitio web..."
        />
      </div>

      <div class="campo">
        <label for="categoria">Categoría</label>

        <select
          id="categoria"
          v-model="categoriaSeleccionada"
        >
          <option
            v-for="categoria in categorias"
            :key="categoria"
            :value="categoria"
          >
            {{ categoria }}
          </option>
        </select>
      </div>
    </div>

    <!-- MENSAJES -->
    <p v-if="cargando" class="mensaje-info">
      Cargando servicios...
    </p>

    <p v-if="error" class="mensaje-error" role="alert">
      {{ error }}
    </p>

    <p v-if="mensaje" class="mensaje-exito">
      {{ mensaje }}
    </p>

    <!-- LISTADO -->
    <template v-if="!cargando && !error">

      <p class="contador">
        {{ serviciosFiltrados.length }} servicio(s) encontrado(s)
      </p>

      <div
        v-if="serviciosFiltrados.length > 0"
        class="lista-servicios"
      >
        <article
          v-for="servicio in serviciosFiltrados"
          :key="servicio.id"
          class="tarjeta"
        >
          <span class="categoria">
            {{ servicio.categoria }}
          </span>

          <h3>{{ servicio.nombre }}</h3>

          <p class="descripcion">
            {{ servicio.descripcion }}
          </p>

          <p class="precio">
            ${{ Number(servicio.precio).toLocaleString('es-CL') }}
          </p>

          <div class="acciones">
            <RouterLink
              :to="`/editar/${servicio.id}`"
              class="boton-editar"
            >
              Editar
            </RouterLink>

            <button
              type="button"
              class="boton-eliminar"
              @click="borrarServicio(servicio.id)"
            >
              Eliminar
            </button>
          </div>
        </article>
      </div>

      <div v-else class="sin-resultados">
        <h3>No se encontraron servicios</h3>
        <p>Prueba con otro nombre o categoría.</p>
      </div>

    </template>

  </section>
</template>

<style scoped>
.encabezado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 28px;
}

.encabezado h2 {
  margin: 5px 0 10px;
  font-size: 2rem;
}

.encabezado p {
  color: #64748b;
}

.etiqueta {
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.boton-nuevo {
  padding: 12px 18px;
  background: #153e5c;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
}

.boton-nuevo:hover {
  background: #245c83;
}

.filtros {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.campo label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.campo input,
.campo select {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: white;
  box-sizing: border-box;
}

.contador {
  color: #64748b;
  font-weight: 600;
}

.lista-servicios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
}

.tarjeta {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.categoria {
  color: #2563eb;
  font-size: 0.85rem;
  font-weight: bold;
}

.tarjeta h3 {
  margin: 12px 0;
}

.descripcion {
  color: #64748b;
  line-height: 1.5;
}

.precio {
  font-size: 1.25rem;
  font-weight: bold;
  color: #153e5c;
}

.acciones {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.boton-editar,
.boton-eliminar {
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  font-size: 0.9rem;
}

.boton-editar {
  background: #e0f2fe;
  color: #0369a1;
  text-decoration: none;
}

.boton-eliminar {
  border: none;
  background: #fee2e2;
  color: #b91c1c;
}

.boton-editar:hover {
  background: #bae6fd;
}

.boton-eliminar:hover {
  background: #fecaca;
}

.mensaje-info,
.mensaje-error,
.mensaje-exito {
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.mensaje-info {
  background: #e0f2fe;
  color: #075985;
}

.mensaje-error {
  background: #fee2e2;
  color: #991b1b;
}

.mensaje-exito {
  background: #dcfce7;
  color: #166534;
}

.sin-resultados {
  padding: 40px;
  text-align: center;
  background: white;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
}

@media (max-width: 600px) {
  .filtros {
    grid-template-columns: 1fr;
  }

  .acciones {
    flex-direction: column;
  }

  .encabezado h2 {
    font-size: 1.6rem;
  }
}
</style>
