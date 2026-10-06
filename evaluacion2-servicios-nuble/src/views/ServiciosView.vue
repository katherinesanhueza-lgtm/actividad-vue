<script setup>
import { ref, computed } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { servicios } from '../data/servicios'

const busqueda = ref('')
const categoriaSeleccionada = ref('Todas')

const favoritos = ref([])

const categorias = computed(() => {
  return [
    'Todas',
    ...new Set(
      servicios.map(servicio => servicio.categoria)
    )
  ]
})

const serviciosFiltrados = computed(() => {
  const texto = busqueda.value
    .trim()
    .toLowerCase()

  return servicios.filter(servicio => {
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

function cambiarFavorito(id) {
  if (favoritos.value.includes(id)) {

    favoritos.value = favoritos.value.filter(
      favoritoId => favoritoId !== id
    )

  } else {

    favoritos.value.push(id)

  }
}
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

.sin-resultados {
  padding: 40px 20px;
  border: 1px dashed #94a3b8;
  border-radius: 14px;
  background: white;
  text-align: center;
  color: #475569;
}

.sin-resultados h2 {
  margin-top: 0;
  color: #1f2937;
}
</style>