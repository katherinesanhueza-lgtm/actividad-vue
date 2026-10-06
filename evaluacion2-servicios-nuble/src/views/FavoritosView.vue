<script setup>
import { ref, computed, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { servicios } from '../data/servicios'

const favoritos = ref([])

onMounted(() => {
  const guardados = localStorage.getItem('favoritos')

  if (guardados) {
    favoritos.value = JSON.parse(guardados)
  }
})

const serviciosFavoritos = computed(() => {
  return servicios.filter(servicio =>
    favoritos.value.includes(servicio.id)
  )
})

function cambiarFavorito(id) {
  favoritos.value = favoritos.value.filter(
    favoritoId => favoritoId !== id
  )

  localStorage.setItem(
    'favoritos',
    JSON.stringify(favoritos.value)
  )
}
</script>

<template>
  <section class="favoritos-page">

    <div class="encabezado">
      <p class="etiqueta">
        Tu selección
      </p>

      <h1>
        Mis servicios favoritos
      </h1>

      <p>
        Aquí puedes revisar los servicios profesionales que guardaste
        para consultar más adelante.
      </p>
    </div>

    <div class="contador">
      {{ serviciosFavoritos.length }} servicio(s) favorito(s)
    </div>

    <div
      v-if="serviciosFavoritos.length > 0"
      class="servicios-grid"
    >
      <ServicioCard
        v-for="servicio in serviciosFavoritos"
        :key="servicio.id"
        :servicio="servicio"
        :favorito="true"
        @cambiar-favorito="cambiarFavorito"
      />
    </div>

    <div
      v-else
      class="sin-favoritos"
    >
      <h2>
        Aún no tienes servicios favoritos
      </h2>

      <p>
        Visita el catálogo y guarda los servicios que te interesen.
      </p>

      <RouterLink
        to="/servicios"
        class="boton-catalogo"
      >
        Explorar servicios
      </RouterLink>
    </div>

  </section>
</template>

<style scoped>
.encabezado {
  margin-bottom: 20px;
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

.contador {
  margin-bottom: 20px;
  color: #64748b;
}

.servicios-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.sin-favoritos {
  padding: 40px 20px;
  border: 1px dashed #94a3b8;
  border-radius: 14px;
  background: white;
  text-align: center;
}

.sin-favoritos h2 {
  margin-top: 0;
}

.sin-favoritos p {
  color: #64748b;
}

.boton-catalogo {
  display: inline-block;
  margin-top: 10px;
  padding: 11px 16px;
  border-radius: 9px;
  background: #1e3a5f;
  color: white;
  text-decoration: none;
  font-weight: 700;
}

.boton-catalogo:hover {
  background: #2b527d;
}
</style>