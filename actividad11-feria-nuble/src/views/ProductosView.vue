<script setup>
import { ref, computed, onMounted } from 'vue'
import ProductoCard from '../components/ProductoCard.vue'
import { productos } from '../data/productos'

const buscar = ref('')
const categoria = ref('Todas')
const comuna = ref('Todas')
const favoritos = ref([])

/* Obtener categorías automáticamente */
const categorias = computed(() => {
  return [
    'Todas',
    ...new Set(productos.map(producto => producto.categoria))
  ]
})

/* Obtener comunas automáticamente */
const comunas = computed(() => {
  return [
    'Todas',
    ...new Set(productos.map(producto => producto.comuna))
  ]
})

/* Filtrar productos */
const productosFiltrados = computed(() => {
  const texto = buscar.value.trim().toLowerCase()

  return productos.filter(producto => {
    const coincideTexto =
      producto.nombre
        .toLowerCase()
        .includes(texto)

    const coincideCategoria =
      categoria.value === 'Todas' ||
      producto.categoria === categoria.value

    const coincideComuna =
      comuna.value === 'Todas' ||
      producto.comuna === comuna.value

    return (
      coincideTexto &&
      coincideCategoria &&
      coincideComuna
    )
  })
})

/* Agregar o quitar favoritos */
function cambiarFavorito(id) {
  if (favoritos.value.includes(id)) {
    favoritos.value = favoritos.value.filter(
      item => item !== id
    )
  } else {
    favoritos.value.push(id)
  }

  localStorage.setItem(
    'favoritos',
    JSON.stringify(favoritos.value)
  )
}

/* Recuperar favoritos guardados */
onMounted(() => {
  const guardados = localStorage.getItem('favoritos')

  if (guardados) {
    favoritos.value = JSON.parse(guardados)
  }
})
</script>

<template>
  <section class="pagina">

    <div class="titulo-catalogo">
      <div>
        <p class="etiqueta">
          Emprendedores de Ñuble
        </p>

        <h1>
          Catálogo de productos
        </h1>
      </div>

      <span class="resultados">
        {{ productosFiltrados.length }} producto(s)
      </span>
    </div>

    <!-- FILTROS -->
    <div class="filtros">

      <!-- Buscar por nombre -->
      <input
        v-model="buscar"
        type="search"
        placeholder="Buscar producto..."
      />

      <!-- Filtrar por categoría -->
      <select v-model="categoria">
        <option
          v-for="cat in categorias"
          :key="cat"
          :value="cat"
        >
          {{ cat }}
        </option>
      </select>

      <!-- Filtrar por comuna -->
      <select v-model="comuna">
        <option
          v-for="item in comunas"
          :key="item"
          :value="item"
        >
          {{ item }}
        </option>
      </select>

    </div>

    <!-- PRODUCTOS -->
    <div
      v-if="productosFiltrados.length"
      class="productos-grid"
    >
      <ProductoCard
        v-for="producto in productosFiltrados"
        :key="producto.id"
        :producto="producto"
        :favorito="favoritos.includes(producto.id)"
        @cambiar-favorito="cambiarFavorito"
      />
    </div>

    <!-- SIN RESULTADOS -->
    <div
      v-else
      class="sin-resultados"
    >
      <strong>
        No existen productos que coincidan con la búsqueda.
      </strong>

      <p>
        Intenta cambiar el nombre, la categoría o la comuna seleccionada.
      </p>
    </div>

  </section>
</template>