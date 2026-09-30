<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { productos } from '../data/productos'

const route = useRoute()

const producto = computed(() => {
  return productos.find(
    p => p.id === Number(route.params.id)
  )
})
</script>

<template>
  <section class="pagina">

    <div
      v-if="producto"
      class="detalle-producto"
    >

      <img
        :src="producto.imagen"
        :alt="producto.nombre"
      />

      <div class="detalle-contenido">

        <span class="detalle-categoria">
          {{ producto.categoria }}
        </span>

        <h1>
          {{ producto.nombre }}
        </h1>

        <p class="detalle-comuna">
          📍 Comuna: {{ producto.comuna }}
        </p>

        <p class="detalle-descripcion">
          {{ producto.descripcion }}
        </p>

        <h2 class="detalle-precio">
          ${{ producto.precio.toLocaleString('es-CL') }}
        </h2>

        <RouterLink
          to="/productos"
          class="volver-catalogo"
        >
          ← Volver al catálogo
        </RouterLink>

      </div>

    </div>

    <div
      v-else
      class="producto-no-encontrado"
    >
      <h2>Producto no encontrado</h2>

      <p>
        El producto que estás buscando no existe.
      </p>

      <RouterLink
        to="/productos"
        class="volver-catalogo"
      >
        ← Volver al catálogo
      </RouterLink>
    </div>

  </section>
</template>