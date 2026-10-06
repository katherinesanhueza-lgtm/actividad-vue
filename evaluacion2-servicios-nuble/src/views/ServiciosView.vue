<script setup>
import { ref, computed } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'

const servicios = [
  {
    id: 1,
    nombre: 'Desarrollo de sitios web',
    categoria: 'Tecnología',
    descripcion:
      'Creación de sitios web modernos y adaptables para emprendimientos y pequeñas empresas.',
    precio: 250000,
    disponible: true
  },
  {
    id: 2,
    nombre: 'Asesoría contable',
    categoria: 'Finanzas',
    descripcion:
      'Orientación contable y tributaria para trabajadores independientes y pequeñas empresas.',
    precio: 45000,
    disponible: true
  },
  {
    id: 3,
    nombre: 'Diseño gráfico',
    categoria: 'Diseño',
    descripcion:
      'Diseño de logotipos, piezas gráficas y material visual para negocios y emprendimientos.',
    precio: 60000,
    disponible: true
  },
  {
    id: 4,
    nombre: 'Fotografía profesional',
    categoria: 'Fotografía',
    descripcion:
      'Sesiones fotográficas profesionales para productos, eventos y emprendimientos.',
    precio: 80000,
    disponible: false
  },
  {
    id: 5,
    nombre: 'Asesoría nutricional',
    categoria: 'Bienestar',
    descripcion:
      'Orientación nutricional personalizada enfocada en hábitos alimentarios y bienestar.',
    precio: 35000,
    disponible: true
  },
  {
    id: 6,
    nombre: 'Clases particulares de matemáticas',
    categoria: 'Educación',
    descripcion:
      'Clases de apoyo y reforzamiento de matemáticas para estudiantes de enseñanza básica y media.',
    precio: 18000,
    disponible: true
  }
]

const busqueda = ref('')
const categoriaSeleccionada = ref('Todas')

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

    <!-- BUSCADOR Y FILTRO -->
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

    <!-- CANTIDAD DE RESULTADOS -->
    <div class="resultados">
      <p>
        {{ serviciosFiltrados.length }} servicio(s) encontrado(s)
      </p>
    </div>

    <!-- CATÁLOGO -->
    <div
      v-if="serviciosFiltrados.length > 0"
      class="servicios-grid"
    >
      <ServicioCard
        v-for="servicio in serviciosFiltrados"
        :key="servicio.id"
        :servicio="servicio"
      />
    </div>

    <!-- SIN RESULTADOS -->
    <div
      v-else
      class="sin-resultados"
    >
      <h2>No se encontraron servicios</h2>

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

/* FILTROS */

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

/* CATÁLOGO */

.servicios-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

/* SIN RESULTADOS */

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