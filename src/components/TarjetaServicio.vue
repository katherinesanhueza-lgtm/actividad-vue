<script setup>
defineProps({
  servicio: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="tarjeta-servicio">
    <h2>{{ servicio.nombre }}</h2>

    <p>
      <strong>Categoría:</strong>
      {{ servicio.categoria }}
    </p>

    <p>
      {{ servicio.descripcion }}
    </p>

    <p>
      <strong>Precio referencial:</strong>
      ${{ servicio.precio.toLocaleString('es-CL') }}
    </p>

    <p>
      <strong>Disponibilidad:</strong>
      {{ servicio.disponible ? 'Disponible' : 'No disponible' }}
    </p>
  </article>
</template>