<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import TarjetaServicio from '../components/TarjetaServicio.vue'

const router = useRouter()

const servicios = ref([
  {
    id: 1,
    nombre: 'Mantenimiento de computadores',
    categoria: 'Mantenimiento',
    descripcion: 'Limpieza, revisión y optimización de computadores para mejorar su rendimiento.',
    precio: 25000,
    disponible: true
  },
  {
    id: 2,
    nombre: 'Instalación de software',
    categoria: 'Software',
    descripcion: 'Instalación y configuración de programas necesarios para trabajo, estudio o uso personal.',
    precio: 15000,
    disponible: true
  },
  {
    id: 3,
    nombre: 'Soporte técnico',
    categoria: 'Soporte',
    descripcion: 'Diagnóstico y solución de problemas relacionados con computadores y sistemas.',
    precio: 20000,
    disponible: true
  },
  {
    id: 4,
    nombre: 'Configuración de redes',
    categoria: 'Redes',
    descripcion: 'Instalación y configuración básica de redes, routers y conexión de dispositivos.',
    precio: 35000,
    disponible: true
  },
  {
    id: 5,
    nombre: 'Respaldo de información',
    categoria: 'Seguridad',
    descripcion: 'Respaldo y organización de archivos importantes para reducir el riesgo de pérdida de información.',
    precio: 20000,
    disponible: false
  },
  {
    id: 6,
    nombre: 'Asesoría tecnológica',
    categoria: 'Asesoría',
    descripcion: 'Orientación para seleccionar equipos, programas y soluciones tecnológicas según las necesidades del cliente.',
    precio: 30000,
    disponible: true
  }
])

const busqueda = ref('')
const categoriaSeleccionada = ref('')
const servicioSeleccionado = ref(null)

const categorias = computed(() => {
  return [...new Set(
    servicios.value.map(servicio => servicio.categoria)
  )]
})

const serviciosFiltrados = computed(() => {
  return servicios.value.filter(servicio => {
    const coincideNombre = servicio.nombre
      .toLowerCase()
      .includes(busqueda.value.toLowerCase())

    const coincideCategoria =
      categoriaSeleccionada.value === '' ||
      servicio.categoria === categoriaSeleccionada.value

    return coincideNombre && coincideCategoria
  })
})

function seleccionarServicio(servicio) {
  servicioSeleccionado.value = servicio

  sessionStorage.setItem(
    'servicioSeleccionado',
    servicio.nombre
  )
}

function irAContacto() {
  router.push('/contacto')
}
</script>

<template>
  <main>
    <h1>Servicios</h1>

    <p>
      Conoce las soluciones tecnológicas que TechNova tiene disponibles
      para sus clientes.
    </p>

    <section class="filtros">
      <input
        v-model="busqueda"
        type="text"
        placeholder="Buscar servicio por nombre"
      />

      <select v-model="categoriaSeleccionada">
        <option value="">
          Todas las categorías
        </option>

        <option
          v-for="categoria in categorias"
          :key="categoria"
          :value="categoria"
        >
          {{ categoria }}
        </option>
      </select>
    </section>

    <section v-if="servicioSeleccionado">
      <h2>Servicio seleccionado</h2>

      <p>
        Has seleccionado:
        <strong>{{ servicioSeleccionado.nombre }}</strong>
      </p>

      <button @click="irAContacto">
        Continuar al formulario
      </button>
    </section>

    <div
      v-if="serviciosFiltrados.length > 0"
      class="catalogo-servicios"
    >
      <TarjetaServicio
        v-for="servicio in serviciosFiltrados"
        :key="servicio.id"
        :servicio="servicio"
        @seleccionar="seleccionarServicio"
      />
    </div>

    <p v-else>
      No se encontraron servicios que coincidan con la búsqueda.
    </p>
  </main>
</template>