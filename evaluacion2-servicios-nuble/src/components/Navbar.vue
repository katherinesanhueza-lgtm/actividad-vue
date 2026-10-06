<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="navbar__marca">
      <h2>Servicios Ñuble</h2>
    </div>

    <nav class="navbar__menu">
      <RouterLink to="/">
        Inicio
      </RouterLink>

      <RouterLink to="/servicios">
        Servicios
      </RouterLink>

      <RouterLink to="/favoritos">
        Favoritos
      </RouterLink>

      <RouterLink to="/contacto">
        Contacto
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 7%;
  background: #1e3a5f;
  color: white;
}

.navbar__marca h2 {
  margin: 0;
}

.navbar__menu {
  display: flex;
  gap: 20px;
}

.navbar__menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.navbar__menu a:hover {
  opacity: 0.8;
}

.navbar__menu a.router-link-active {
  font-weight: 800;
  border-bottom: 2px solid white;
}

@media (max-width: 650px) {
  .navbar {
    flex-direction: column;
    gap: 14px;
  }

  .navbar__menu {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>