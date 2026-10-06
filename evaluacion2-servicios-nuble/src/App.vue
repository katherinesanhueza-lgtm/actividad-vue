<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app">
    <Navbar />

    <main class="contenido-principal">
      <RouterView />
    </main>

    <footer class="footer">
      <p>
        Plataforma de Servicios Profesionales de Ñuble · Evaluación 2
      </p>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  color: #1f2937;
  background: #f5f7fa;
}

.contenido-principal {
  min-height: calc(100vh - 140px);
}

.contenido-principal > section {
  width: min(1100px, 92%);
  margin: 35px auto;
}

.footer {
  padding: 20px;
  text-align: center;
  color: #64748b;
  background: white;
  border-top: 1px solid #e2e8f0;
}

.footer p {
  margin: 0;
}
</style>