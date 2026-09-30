<script setup>
import { ref } from 'vue'

const nombre = ref('')
const correo = ref('')
const mensaje = ref('')

const error = ref('')
const enviado = ref(false)

function enviar() {
  if (!nombre.value || !correo.value || !mensaje.value) {
    error.value = 'Debe completar todos los campos.'
    enviado.value = false
    return
  }

  error.value = ''
  enviado.value = true
}
</script>

<template>
  <section class="pagina">

    <div class="encabezado-contacto">
      <p class="etiqueta">Comunícate con nosotros</p>
      <h1>Contacto</h1>

      <p>
        Si tienes alguna consulta sobre los productos de nuestros
        emprendedores de Ñuble, completa el siguiente formulario.
      </p>
    </div>

    <form
      class="formulario"
      @submit.prevent="enviar"
    >

      <label for="nombre">
        Nombre
      </label>

      <input
        id="nombre"
        v-model="nombre"
        type="text"
        placeholder="Ingresa tu nombre"
      />

      <label for="correo">
        Correo electrónico
      </label>

      <input
        id="correo"
        v-model="correo"
        type="email"
        placeholder="ejemplo@correo.cl"
      />

      <label for="mensaje">
        Mensaje
      </label>

      <textarea
        id="mensaje"
        v-model="mensaje"
        rows="5"
        placeholder="Escribe tu mensaje..."
      ></textarea>

      <button
        type="submit"
        class="boton-principal"
      >
        Enviar mensaje
      </button>

    </form>

    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>

    <p
      v-if="enviado"
      class="correcto"
    >
      Mensaje registrado correctamente.
    </p>

  </section>
</template>