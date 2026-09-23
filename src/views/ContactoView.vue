<script setup>
import { ref } from 'vue'

const servicios = [
  'Mantenimiento de computadores',
  'Instalación de software',
  'Soporte técnico',
  'Configuración de redes',
  'Respaldo de información',
  'Asesoría tecnológica'
]

const servicioGuardado =
  sessionStorage.getItem('servicioSeleccionado') || ''

const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  servicio: servicioGuardado,
  mensaje: ''
})

const error = ref('')
const solicitudEnviada = ref(false)
const resumen = ref(null)

function enviarFormulario() {
  error.value = ''
  solicitudEnviada.value = false

  if (
    !form.value.nombre.trim() ||
    !form.value.correo.trim() ||
    !form.value.telefono.trim() ||
    !form.value.servicio ||
    !form.value.mensaje.trim()
  ) {
    error.value = 'Debe completar todos los campos obligatorios.'
    return
  }

  const correoValido =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.correo)

  if (!correoValido) {
    error.value = 'Ingrese un correo electrónico válido.'
    return
  }

  resumen.value = {
    nombre: form.value.nombre,
    correo: form.value.correo,
    telefono: form.value.telefono,
    servicio: form.value.servicio,
    mensaje: form.value.mensaje
  }

  solicitudEnviada.value = true

  sessionStorage.removeItem('servicioSeleccionado')
}
</script>

<template>
  <main>
    <h1>Contacto</h1>

    <p>
      Completa el formulario para solicitar información sobre
      nuestros servicios.
    </p>

    <form @submit.prevent="enviarFormulario">
      <div>
        <label for="nombre">Nombre</label>

        <input
          id="nombre"
          v-model="form.nombre"
          type="text"
          placeholder="Ingrese su nombre"
        />
      </div>

      <div>
        <label for="correo">Correo electrónico</label>

        <input
          id="correo"
          v-model="form.correo"
          type="email"
          placeholder="ejemplo@correo.cl"
        />
      </div>

      <div>
        <label for="telefono">Teléfono</label>

        <input
          id="telefono"
          v-model="form.telefono"
          type="tel"
          placeholder="+56 9 1234 5678"
        />
      </div>

      <div>
        <label for="servicio">Servicio de interés</label>

        <select
          id="servicio"
          v-model="form.servicio"
        >
          <option value="">
            Seleccione un servicio
          </option>

          <option
            v-for="servicio in servicios"
            :key="servicio"
            :value="servicio"
          >
            {{ servicio }}
          </option>
        </select>
      </div>

      <div>
        <label for="mensaje">Mensaje</label>

        <textarea
          id="mensaje"
          v-model="form.mensaje"
          rows="5"
          placeholder="Escriba su consulta"
        ></textarea>
      </div>

      <p v-if="error">
        {{ error }}
      </p>

      <button type="submit">
        Enviar solicitud
      </button>
    </form>

    <section v-if="solicitudEnviada && resumen">
      <h2>Solicitud enviada correctamente</h2>

      <p>
        Gracias por contactar a TechNova. Hemos recibido
        los siguientes datos:
      </p>

      <p>
        <strong>Nombre:</strong>
        {{ resumen.nombre }}
      </p>

      <p>
        <strong>Correo:</strong>
        {{ resumen.correo }}
      </p>

      <p>
        <strong>Teléfono:</strong>
        {{ resumen.telefono }}
      </p>

      <p>
        <strong>Servicio:</strong>
        {{ resumen.servicio }}
      </p>

      <p>
        <strong>Mensaje:</strong>
        {{ resumen.mensaje }}
      </p>
    </section>
  </main>
</template>