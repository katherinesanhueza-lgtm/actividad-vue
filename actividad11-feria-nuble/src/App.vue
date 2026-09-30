<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app">

    <Navbar />

    <main>
      <RouterView />
    </main>

    <footer class="footer-general">
      <p>
        Feria Artesanal de Ñuble · Actividad 12
      </p>
    </footer>

  </div>
</template>