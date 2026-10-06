<script setup>
import ServicioCard from '../components/ServicioCard.vue'

const servicios = [
  {
    id: 1,
    nombre: 'Desarrollo de sitios web',
    categoria: 'Tecnología',
    descripcion:
      'Creación de sitios web modernos y adaptables para emprendimientos y pequeñas empresas.',
    precio: 250000,
    disponible: true
  },
  {
    id: 2,
    nombre: 'Asesoría contable',
    categoria: 'Finanzas',
    descripcion:
      'Orientación contable y tributaria para trabajadores independientes y pequeñas empresas.',
    precio: 45000,
    disponible: true
  },
  {
    id: 3,
    nombre: 'Diseño gráfico',
    categoria: 'Diseño',
    descripcion:
      'Diseño de logotipos, piezas gráficas y material visual para negocios y emprendimientos.',
    precio: 60000,
    disponible: true
  },
  {
    id: 4,
    nombre: 'Fotografía profesional',
    categoria: 'Fotografía',
    descripcion:
      'Sesiones fotográficas profesionales para productos, eventos y emprendimientos.',
    precio: 80000,
    disponible: false
  },
  {
    id: 5,
    nombre: 'Asesoría nutricional',
    categoria: 'Bienestar',
    descripcion:
      'Orientación nutricional personalizada enfocada en hábitos alimentarios y bienestar.',
    precio: 35000,
    disponible: true
  },
  {
    id: 6,
    nombre: 'Clases particulares de matemáticas',
    categoria: 'Educación',
    descripcion:
      'Clases de apoyo y reforzamiento de matemáticas para estudiantes de enseñanza básica y media.',
    precio: 18000,
    disponible: true
  }
]
</script>

<template>
  <section class="servicios-page">

    <div class="encabezado">
      <p class="etiqueta">
        Profesionales de la Región de Ñuble
      </p>

      <h1>
        Servicios profesionales
      </h1>

      <p>
        Encuentra servicios ofrecidos por profesionales de distintas
        áreas y revisa la alternativa que mejor se adapte a tus necesidades.
      </p>
    </div>

    <div class="servicios-grid">

      <ServicioCard
        v-for="servicio in servicios"
        :key="servicio.id"
        :servicio="servicio"
      />

    </div>

  </section>
</template>

<style scoped>
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
  max-width: 750px;
  color: #64748b;
  line-height: 1.6;
}

.servicios-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
</style>