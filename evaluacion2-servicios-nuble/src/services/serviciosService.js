export async function obtenerServicios() {
  try {
    const respuesta = await fetch('/servicios.json')

    if (!respuesta.ok) {
      throw new Error(
        'No fue posible obtener los servicios.'
      )
    }

    const datos = await respuesta.json()

    return datos
  } catch (error) {
    console.error(
      'Error al cargar los servicios:',
      error
    )

    throw error
  }
}