<script setup>
defineProps({
  servicio: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['seleccionar'])

function seleccionarServicio(servicio) {
  emit('seleccionar', servicio)
}
</script>

<template>
  <article class="tarjeta-servicio">
    <h2>{{ servicio.nombre }}</h2>

    <p>
      <strong>Categoría:</strong>
      {{ servicio.categoria }}
    </p>

    <p>{{ servicio.descripcion }}</p>

    <p>
      <strong>Precio referencial:</strong>
      ${{ servicio.precio.toLocaleString('es-CL') }}
    </p>

    <p>
      <strong>Disponibilidad:</strong>
      <span v-if="servicio.disponible">Disponible</span>
      <span v-else>No disponible</span>
    </p>

    <button
      v-if="servicio.disponible"
      @click="seleccionarServicio(servicio)"
    >
      Solicitar información
    </button>
  </article>
</template>