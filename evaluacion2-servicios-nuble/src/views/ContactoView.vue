<script setup>
import { ref } from 'vue'

const nombre = ref('')
const correo = ref('')
const servicio = ref('')
const mensaje = ref('')

const error = ref('')
const enviado = ref(false)

function enviarFormulario() {
  error.value = ''
  enviado.value = false

  if (
    !nombre.value.trim() ||
    !correo.value.trim() ||
    !servicio.value ||
    !mensaje.value.trim()
  ) {
    error.value = 'Por favor, completa todos los campos del formulario.'
    return
  }

  if (!correo.value.includes('@')) {
    error.value = 'Ingresa un correo electrónico válido.'
    return
  }

  enviado.value = true

  nombre.value = ''
  correo.value = ''
  servicio.value = ''
  mensaje.value = ''
}
</script>

<template>
  <section class="contacto-page">

    <div class="encabezado">
      <p class="etiqueta">
        Contáctanos
      </p>

      <h1>
        Solicita información
      </h1>

      <p>
        Completa el formulario para consultar por alguno de los
        servicios profesionales disponibles en la Región de Ñuble.
      </p>
    </div>

    <form
      class="formulario"
      @submit.prevent="enviarFormulario"
    >

      <div class="campo">
        <label for="nombre">
          Nombre
        </label>

        <input
          id="nombre"
          v-model="nombre"
          type="text"
          placeholder="Ingresa tu nombre"
        />
      </div>

      <div class="campo">
        <label for="correo">
          Correo electrónico
        </label>

        <input
          id="correo"
          v-model="correo"
          type="email"
          placeholder="ejemplo@correo.cl"
        />
      </div>

      <div class="campo">
        <label for="servicio">
          Servicio de interés
        </label>

        <select
          id="servicio"
          v-model="servicio"
        >
          <option value="">
            Selecciona un servicio
          </option>

          <option value="Desarrollo de sitios web">
            Desarrollo de sitios web
          </option>

          <option value="Asesoría contable">
            Asesoría contable
          </option>

          <option value="Diseño gráfico">
            Diseño gráfico
          </option>

          <option value="Fotografía profesional">
            Fotografía profesional
          </option>

          <option value="Asesoría nutricional">
            Asesoría nutricional
          </option>

          <option value="Clases particulares de matemáticas">
            Clases particulares de matemáticas
          </option>
        </select>
      </div>

      <div class="campo">
        <label for="mensaje">
          Mensaje
        </label>

        <textarea
          id="mensaje"
          v-model="mensaje"
          rows="6"
          placeholder="Escribe tu consulta..."
        ></textarea>
      </div>

      <!-- MENSAJE DE ERROR -->
      <div
        v-if="error"
        class="mensaje mensaje-error"
      >
        {{ error }}
      </div>

      <!-- MENSAJE DE ÉXITO -->
      <div
        v-if="enviado"
        class="mensaje mensaje-exito"
      >
        ¡Formulario enviado correctamente!
      </div>

      <button
        type="submit"
        class="boton-enviar"
      >
        Enviar consulta
      </button>

    </form>

  </section>
</template>

<style scoped>
.contacto-page {
  max-width: 800px;
}

.encabezado {
  margin-bottom: 28px;
}

.etiqueta {
  margin: 0 0 8px;
  color: #1e3a5f;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.encabezado h1 {
  margin: 0 0 10px;
  font-size: clamp(2rem, 5vw, 3rem);
}

.encabezado > p:last-child {
  max-width: 700px;
  color: #64748b;
  line-height: 1.6;
}

.formulario {
  display: grid;
  gap: 20px;
  padding: 28px;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  background: white;
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.07);
}

.campo {
  display: grid;
  gap: 7px;
}

.campo label {
  color: #475569;
  font-size: 0.9rem;
  font-weight: 700;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
  background: white;
  color: #1f2937;
  font: inherit;
}

.campo textarea {
  resize: vertical;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  outline: 2px solid #93c5fd;
  border-color: #1e3a5f;
}

.mensaje {
  padding: 13px 15px;
  border-radius: 9px;
  font-weight: 600;
}

.mensaje-error {
  border: 1px solid #fecaca;
  background: #fef2f2;
  color: #b91c1c;
}

.mensaje-exito {
  border: 1px solid #bbf7d0;
  background: #f0fdf4;
  color: #15803d;
}

.boton-enviar {
  padding: 12px 18px;
  border: 0;
  border-radius: 9px;
  background: #1e3a5f;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.boton-enviar:hover {
  background: #2b527d;
}

@media (max-width: 600px) {
  .formulario {
    padding: 20px;
  }
}
</style>