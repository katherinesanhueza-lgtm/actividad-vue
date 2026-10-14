
const URL = 'http://localhost:3001/servicios'

async function solicitud(ruta = '', opciones = {}) {
  const respuesta = await fetch(`${URL}${ruta}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...opciones
  })

  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}`)
  }

  if (respuesta.status === 204) {
    return null
  }

  return respuesta.json()
}

// Obtener todos los servicios
export const obtenerServicios = () => solicitud()

// Obtener un servicio por su ID
export const obtenerServicio = (id) => solicitud(`/${id}`)

// Crear un servicio
export const crearServicio = (datos) => solicitud('', {
  method: 'POST',
  body: JSON.stringify(datos)
})

// Actualizar un servicio
export const actualizarServicio = (id, datos) => solicitud(`/${id}`, {
  method: 'PUT',
  body: JSON.stringify(datos)
})

// Eliminar un servicio
export const eliminarServicio = (id) => solicitud(`/${id}`, {
  method: 'DELETE'
})
