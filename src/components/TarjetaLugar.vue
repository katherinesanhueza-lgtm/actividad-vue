<template>
  <div class="tarjeta">
    <h3>{{ nombre }}</h3>
    <p>{{ descripcion }}</p>
  </div>
</template>

<script>
export default {
  props: {
    nombre: String,
    descripcion: String
  }
}
</script>