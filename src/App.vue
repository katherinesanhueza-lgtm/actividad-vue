<template>
  <div>
    <Navbar />

    <main>
      <router-view />
    </main>

    <footer>
      <p>Turismo Chillán Digital - 2026</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>