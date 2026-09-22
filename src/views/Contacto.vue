<template>
  <section class="pagina">
    <h1>Contacto</h1>

    <form @submit.prevent="enviarFormulario">
      <input
        v-model="nombre"
        type="text"
        placeholder="Nombre"
      />

      <input
        v-model="correo"
        type="email"
        placeholder="Correo electrónico"
      />

      <textarea
        v-model="mensaje"
        placeholder="Escribe tu mensaje"
      ></textarea>

      <button type="submit">
        Enviar
      </button>
    </form>

    <p v-if="enviado">
      ¡Gracias por contactarnos!
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      mensaje: '',
      enviado: false
    }
  },

  methods: {
    enviarFormulario() {
      this.enviado = true
    }
  }
}
</script>