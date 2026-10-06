<script setup>
import { ref, computed, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { obtenerServicios } from '../services/serviciosService'

const servicios = ref([])

const busqueda = ref('')
const categoriaSeleccionada = ref('Todas')
const favoritos = ref([])

const cargando = ref(true)
const error = ref('')

const categorias = computed(() => {
  return [
    'Todas',
    ...new Set(
      servicios.value.map(
        servicio => servicio.categoria
      )
    )
  ]
})

const serviciosFiltrados = computed(() => {
  const texto = busqueda.value
    .trim()
    .toLowerCase()

  return servicios.value.filter(servicio => {
    const coincideNombre =
      servicio.nombre
        .toLowerCase()
        .includes(texto)

    const coincideCategoria =
      categoriaSeleccionada.value === 'Todas' ||
      servicio.categoria === categoriaSeleccionada.value

    return coincideNombre && coincideCategoria
  })
})

async function cargarServicios() {
  cargando.value = true
  error.value = ''

  try {
    servicios.value = await obtenerServicios()
  } catch (err) {
    error.value =
      'Ocurrió un error al cargar los servicios.'
  } finally {
    cargando.value = false
  }
}

function cambiarFavorito(id) {
  if (favoritos.value.includes(id)) {
    favoritos.value = favoritos.value.filter(
      favoritoId => favoritoId !== id
    )
  } else {
    favoritos.value.push(id)
  }

  localStorage.setItem(
    'favoritos',
    JSON.stringify(favoritos.value)
  )
}

onMounted(() => {
  const guardados =
    localStorage.getItem('favoritos')

  if (guardados) {
    favoritos.value = JSON.parse(guardados)
  }

  cargarServicios()
})
</script>

<template>
  <section class="servicios-page">

    <div class="encabezado">
      <p class="etiqueta">
        Profesionales de la Región de Ñuble
      </p>

      <h1>
        Servicios profesionales
      </h1>

      <p>
        Encuentra servicios ofrecidos por profesionales de distintas
        áreas y revisa la alternativa que mejor se adapte a tus necesidades.
      </p>
    </div>

    <!-- CARGANDO -->
    <div
      v-if="cargando"
      class="estado"
    >
      <h2>Cargando servicios...</h2>
      <p>Espera un momento mientras obtenemos la información.</p>
    </div>

    <!-- ERROR -->
    <div
      v-else-if="error"
      class="estado estado-error"
    >
      <h2>Error al cargar</h2>

      <p>
        {{ error }}
      </p>

      <button
        type="button"
        class="boton-reintentar"
        @click="cargarServicios"
      >
        Intentar nuevamente
      </button>
    </div>

    <!-- CONTENIDO -->
    <template v-else>

      <div class="filtros">

        <div class="campo campo-busqueda">
          <label for="buscar">
            Buscar servicio
          </label>

          <input
            id="buscar"
            v-model="busqueda"
            type="search"
            placeholder="Ej.: diseño, asesoría, fotografía..."
          />
        </div>

        <div class="campo">
          <label for="categoria">
            Categoría
          </label>

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

      <div class="resultados">
        <p>
          {{ serviciosFiltrados.length }} servicio(s) encontrado(s)
        </p>
      </div>

      <div
        v-if="serviciosFiltrados.length > 0"
        class="servicios-grid"
      >
        <ServicioCard
          v-for="servicio in serviciosFiltrados"
          :key="servicio.id"
          :servicio="servicio"
          :favorito="favoritos.includes(servicio.id)"
          @cambiar-favorito="cambiarFavorito"
        />
      </div>

      <div
        v-else
        class="sin-resultados"
      >
        <h2>
          No se encontraron servicios
        </h2>

        <p>
          No se encontraron servicios para los criterios seleccionados.
        </p>
      </div>

    </template>

  </section>
</template>

<style scoped>
.encabezado {
  margin-bottom: 28px;
}

.etiqueta {
  margin: 0 0 8px;
  color: #1e3a5f;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.encabezado h1 {
  margin: 0 0 10px;
  font-size: clamp(2rem, 5vw, 3rem);
}

.encabezado > p:last-child {
  max-width: 750px;
  color: #64748b;
  line-height: 1.6;
}

.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: end;
  margin-bottom: 16px;
  padding: 18px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
}

.campo {
  display: grid;
  gap: 7px;
  min-width: 220px;
}

.campo-busqueda {
  flex: 1 1 350px;
}

.campo label {
  color: #475569;
  font-size: 0.85rem;
  font-weight: 700;
}

.campo input,
.campo select {
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
  background: white;
  color: #1f2937;
}

.campo input:focus,
.campo select:focus {
  outline: 2px solid #93c5fd;
  border-color: #1e3a5f;
}

.resultados {
  margin-bottom: 16px;
  color: #64748b;
}

.resultados p {
  margin: 0;
}

.servicios-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.sin-resultados,
.estado {
  padding: 40px 20px;
  border: 1px dashed #94a3b8;
  border-radius: 14px;
  background: white;
  text-align: center;
  color: #475569;
}

.sin-resultados h2,
.estado h2 {
  margin-top: 0;
  color: #1f2937;
}

.estado-error {
  border-color: #fca5a5;
  background: #fef2f2;
}

.boton-reintentar {
  margin-top: 10px;
  padding: 10px 15px;
  border: 0;
  border-radius: 9px;
  background: #1e3a5f;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
</style>