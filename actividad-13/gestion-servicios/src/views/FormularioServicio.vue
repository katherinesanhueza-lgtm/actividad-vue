
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const editando = Boolean(route.params.id)
</script>

<template>
  <section>
    <h2>
      {{ editando ? 'Editar servicio' : 'Nuevo servicio' }}
    </h2>

    <p>
      Aquí construiremos el formulario.
    </p>
  </section>
</template>
