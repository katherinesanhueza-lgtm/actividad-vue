<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { servicios } from '../data/servicios'

const route = useRoute()

const servicio = computed(() => {
  return servicios.find(
    item => item.id === Number(route.params.id)
  )
})

const precioCLP = computed(() => {
  if (!servicio.value) {
    return ''
  }

  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(servicio.value.precio)
})
</script>

<template>
  <section class="detalle-page">

    <div
      v-if="servicio"
      class="detalle"
    >

      <div class="detalle__contenido">

        <span class="categoria">
          {{ servicio.categoria }}
        </span>

        <h1>
          {{ servicio.nombre }}
        </h1>

        <p class="descripcion">
          {{ servicio.descripcion }}
        </p>

        <div class="informacion">

          <div>
            <span class="titulo-info">
              Precio referencial
            </span>

            <strong>
              {{ precioCLP }}
            </strong>
          </div>

          <div>
            <span class="titulo-info">
              Disponibilidad
            </span>

            <strong
              v-if="servicio.disponible"
              class="disponible"
            >
              Disponible
            </strong>

            <strong
              v-else
              class="no-disponible"
            >
              No disponible
            </strong>
          </div>

        </div>

        <RouterLink
          to="/servicios"
          class="boton-volver"
        >
          ← Volver a servicios
        </RouterLink>

      </div>

    </div>

    <div
      v-else
      class="no-encontrado"
    >
      <p class="codigo">
        404
      </p>

      <h1>
        Servicio no encontrado
      </h1>

      <p>
        El servicio solicitado no existe o el identificador no es válido.
      </p>

      <RouterLink
        to="/servicios"
        class="boton-volver"
      >
        ← Volver al catálogo
      </RouterLink>
    </div>

  </section>
</template>

<style scoped>
.detalle {
  max-width: 800px;
  margin: 0 auto;
}

.detalle__contenido {
  padding: 32px;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  background: white;
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.07);
}

.categoria {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 999px;
  background: #eaf2fb;
  color: #1e3a5f;
  font-size: 0.8rem;
  font-weight: 700;
}

.detalle h1 {
  margin: 15px 0;
  font-size: clamp(2rem, 5vw, 3rem);
}

.descripcion {
  color: #64748b;
  line-height: 1.7;
}

.informacion {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: 25px 0;
}

.informacion > div {
  display: grid;
  gap: 6px;
  padding: 16px;
  border-radius: 12px;
  background: #f8fafc;
}

.titulo-info {
  color: #64748b;
  font-size: 0.85rem;
}

.disponible {
  color: #15803d;
}

.no-disponible {
  color: #b91c1c;
}

.boton-volver {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 9px;
  background: #1e3a5f;
  color: white;
  text-decoration: none;
  font-weight: 700;
}

.boton-volver:hover {
  background: #2b527d;
}

.no-encontrado {
  max-width: 700px;
  margin: 60px auto;
  padding: 40px;
  border-radius: 18px;
  background: white;
  text-align: center;
}

.codigo {
  margin: 0;
  color: #1e3a5f;
  font-size: 5rem;
  font-weight: 900;
}

.no-encontrado h1 {
  margin-top: 5px;
}

.no-encontrado > p:not(.codigo) {
  color: #64748b;
}

@media (max-width: 600px) {
  .informacion {
    grid-template-columns: 1fr;
  }

  .detalle__contenido {
    padding: 22px;
  }
}
</style>