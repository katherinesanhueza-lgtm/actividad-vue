<template>
  <section class="pagina">
    <h1>Atractivos Turísticos</h1>

    <div class="tarjetas">
      <TarjetaLugar
        nombre="Catedral de Chillán"
        descripcion="Uno de los principales símbolos arquitectónicos de la ciudad."
      />

      <TarjetaLugar
        nombre="Termas de Chillán"
        descripcion="Destino turístico conocido por sus paisajes de montaña y actividades termales."
      />

      <TarjetaLugar
        nombre="Valle Las Trancas"
        descripcion="Sector cordillerano rodeado de naturaleza y atractivos turísticos."
      />

      <TarjetaLugar
        nombre="Feria de Chillán"
        descripcion="Espacio tradicional donde se encuentran productos y elementos característicos de la zona."
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