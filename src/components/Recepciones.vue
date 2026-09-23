<script setup>
import { ref, computed } from 'vue'
import { useRecepcionStore } from '../stores/useRecepcionStore.js'
import ItemsRecepcion from './ItemsRecepcion.vue'

const { state } = useRecepcionStore()

const form = ref({
  fecha: '',
  nro_guia: '',
  id_proveedor: ''
})

const seleccion = ref(null)

function guardar() {
  if (!form.value.id_proveedor) {
    alert('Seleccione proveedor')
    return
  }

  state.recepciones.push({
    id: Date.now(),
    ...form.value
  })

  seleccion.value =
    state.recepciones[state.recepciones.length - 1]?.id || null

  form.value = {
    fecha: '',
    nro_guia: '',
    id_proveedor: ''
  }
}

const lista = computed(() => state?.recepciones || [])

function totalLibros(idRecepcion) {
  return (state?.items || [])
    .filter(item => item.id_recepcion === idRecepcion)
    .reduce((total, item) => total + Number(item.cantidad), 0)
}

function porcentajeDefectuosos(idRecepcion) {
  const items = (state?.items || [])
    .filter(item => item.id_recepcion === idRecepcion)

  const total = items.reduce(
    (suma, item) => suma + Number(item.cantidad),
    0
  )

  if (total === 0) {
    return 0
  }

  const defectuosos = items
    .filter(item =>
      item.estado === 'dañado' || item.estado === 'mixto'
    )
    .reduce(
      (suma, item) => suma + Number(item.cantidad),
      0
    )

  return ((defectuosos / total) * 100).toFixed(1)
}
</script>