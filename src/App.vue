<template>
  <div class="app">
    <header>
      <h2>TechNova</h2>

      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/nosotros">Nosotros</RouterLink>
        <RouterLink to="/servicios">Servicios</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>