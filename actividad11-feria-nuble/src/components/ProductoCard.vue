<script setup>
import { computed } from 'vue'

const props = defineProps({
  producto: {
    type: Object,
    required: true
  },

  favorito: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['cambiar-favorito'])

const precioCLP = computed(() =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(props.producto.precio)
)
</script>

<template>
  <article class="producto-card">

    <img
      class="producto-card__img"
      :src="producto.imagen"
      :alt="producto.nombre"
    />

    <div class="contenido-producto">

      <span class="categoria">
        {{ producto.categoria }}
      </span>

      <h3>
        {{ producto.nombre }}
      </h3>

      <p class="comuna">
        📍 {{ producto.comuna }}
      </p>

      <strong class="precio">
        {{ precioCLP }}
      </strong>

      <div class="acciones">

        <RouterLink
          :to="`/productos/${producto.id}`"
          class="boton-detalle"
        >
          Ver detalle
        </RouterLink>

        <button
          class="boton-favorito"
          @click="emit('cambiar-favorito', producto.id)"
        >
          {{ favorito ? '★ Favorito' : '☆ Agregar' }}
        </button>

      </div>

    </div>

  </article>
</template>

<style scoped>
.producto-card {
  display: grid;
  grid-template-rows: 190px 1fr;
  overflow: hidden;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 5px 18px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.producto-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
}

.producto-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contenido-producto {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.categoria {
  align-self: flex-start;
  padding: 4px 9px;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 0.78rem;
  font-weight: 700;
}

.contenido-producto h3 {
  margin: 10px 0 5px;
}

.comuna {
  margin: 0 0 12px;
  color: #64748b;
}

.precio {
  margin-bottom: 15px;
  font-size: 1.05rem;
}

.acciones {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.boton-detalle,
.boton-favorito {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-weight: 700;
}

.boton-detalle {
  background: #1d4ed8;
  color: white;
  text-decoration: none;
}

.boton-detalle:hover {
  background: #1e40af;
}

.boton-favorito {
  border: 1px solid #cbd5e1;
  background: white;
  color: #334155;
}

.boton-favorito:hover {
  background: #f8fafc;
}
</style>