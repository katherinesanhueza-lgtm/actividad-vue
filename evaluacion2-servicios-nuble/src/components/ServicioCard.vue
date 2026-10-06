<script setup>
import { computed } from 'vue'

const props = defineProps({
  servicio: {
    type: Object,
    required: true
  }
})

const precioCLP = computed(() => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(props.servicio.precio)
})
</script>

<template>
  <article class="servicio-card">

    <div class="servicio-card__contenido">

      <span class="categoria">
        {{ servicio.categoria }}
      </span>

      <h2>
        {{ servicio.nombre }}
      </h2>

      <p class="descripcion">
        {{ servicio.descripcion }}
      </p>

      <p class="precio">
        {{ precioCLP }}
      </p>

      <p
        v-if="servicio.disponible"
        class="disponible"
      >
        Disponible
      </p>

      <p
        v-else
        class="no-disponible"
      >
        No disponible
      </p>

      <RouterLink
        :to="`/servicios/${servicio.id}`"
        class="boton-detalle"
      >
        Ver detalle
      </RouterLink>

    </div>

  </article>
</template>

<style scoped>
.servicio-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 5px 18px rgba(15, 23, 42, 0.07);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.servicio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
}

.servicio-card__contenido {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
}

.categoria {
  align-self: flex-start;
  padding: 5px 10px;
  border-radius: 999px;
  background: #eaf2fb;
  color: #1e3a5f;
  font-size: 0.8rem;
  font-weight: 700;
}

.servicio-card h2 {
  margin: 14px 0 8px;
  font-size: 1.25rem;
}

.descripcion {
  flex: 1;
  color: #64748b;
  line-height: 1.6;
}

.precio {
  margin: 10px 0;
  color: #1e3a5f;
  font-size: 1.2rem;
  font-weight: 800;
}

.disponible {
  color: #15803d;
  font-weight: 700;
}

.no-disponible {
  color: #b91c1c;
  font-weight: 700;
}

.boton-detalle {
  display: block;
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: 9px;
  background: #1e3a5f;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
}

.boton-detalle:hover {
  background: #2b527d;
}
</style>