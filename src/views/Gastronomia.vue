<template>
  <section class="pagina">
    <h1>Gastronomía de la Región</h1>

    <div class="tarjetas">
      <TarjetaLugar
        nombre="Longanizas de Chillán"
        descripcion="Uno de los productos gastronómicos más representativos de Chillán."
      />

      <TarjetaLugar
        nombre="Pan amasado"
        descripcion="Preparación tradicional presente en la gastronomía chilena y local."
      />

      <TarjetaLugar
        nombre="Vinos del Valle del Itata"
        descripcion="Vinos producidos en el Valle del Itata, una importante zona vitivinícola de Ñuble."
      />
    </div>
  </section>
</template>

<script>
import TarjetaLugar from '../components/TarjetaLugar.vue'

export default {
  components: {
    TarjetaLugar
  }
}
</script>