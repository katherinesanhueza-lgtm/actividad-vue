<script setup>
import { ref } from 'vue'
import TarjetaServicio from '../components/TarjetaServicio.vue'

const servicios = ref([
  {
    id: 1,
    nombre: 'Mantenimiento de computadores',
    categoria: 'Mantenimiento',
    descripcion: 'Limpieza, revisión y optimización de computadores para mejorar su rendimiento.',
    precio: 25000,
    disponible: true
  },
  {
    id: 2,
    nombre: 'Instalación de software',
    categoria: 'Software',
    descripcion: 'Instalación y configuración de programas necesarios para trabajo, estudio o uso personal.',
    precio: 15000,
    disponible: true
  },
  {
    id: 3,
    nombre: 'Soporte técnico',
    categoria: 'Soporte',
    descripcion: 'Diagnóstico y solución de problemas relacionados con computadores y sistemas.',
    precio: 20000,
    disponible: true
  },
  {
    id: 4,
    nombre: 'Configuración de redes',
    categoria: 'Redes',
    descripcion: 'Instalación y configuración básica de redes, routers y conexión de dispositivos.',
    precio: 35000,
    disponible: true
  },
  {
    id: 5,
    nombre: 'Respaldo de información',
    categoria: 'Seguridad',
    descripcion: 'Respaldo y organización de archivos importantes para reducir el riesgo de pérdida de información.',
    precio: 20000,
    disponible: false
  },
  {
    id: 6,
    nombre: 'Asesoría tecnológica',
    categoria: 'Asesoría',
    descripcion: 'Orientación para seleccionar equipos, programas y soluciones tecnológicas según las necesidades del cliente.',
    precio: 30000,
    disponible: true
  }
])
</script>

<template>
  <main>
    <h1>Servicios</h1>

    <p>
      Conoce las soluciones tecnológicas que TechNova tiene disponibles
      para sus clientes.
    </p>

    <div class="catalogo-servicios">
      <TarjetaServicio
        v-for="servicio in servicios"
        :key="servicio.id"
        :servicio="servicio"
      />
    </div>
  </main>
</template>