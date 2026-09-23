

### Parte 1 – Reutilización del proyecto

Para esta actividad se reutilizó como base el proyecto desarrollado en la Actividad 7, adaptándolo a una empresa de servicios tecnológicos.

**Nombre de la empresa:** TechNova Servicios Informáticos

**Rubro:** Servicios tecnológicos y soporte informático.

TechNova Servicios Informáticos es una empresa orientada a entregar soluciones tecnológicas a personas y pequeñas empresas, ofreciendo servicios de soporte, mantenimiento, instalación, configuración y asesoría informática.

### Elementos reutilizados de la Actividad 7

Se conserva la estructura general del proyecto Vue 3, incluyendo la carpeta de componentes, la configuración principal de la aplicación y los conceptos trabajados anteriormente, como componentes, props, emit, v-model, v-for, condicionales y propiedades calculadas.

### Elementos que serán modificados

Los componentes relacionados con libros, proveedores y recepción de textos escolares serán modificados o reemplazados, ya que no corresponden al nuevo contexto de una empresa de servicios.

El proyecto será adaptado para incorporar las vistas Inicio, Nosotros, Servicios y Contacto, además de un catálogo dinámico de servicios y un formulario para solicitar información.

### Motivo de la adaptación

La reutilización permite aprovechar la estructura y los conocimientos aplicados anteriormente, adaptándolos a un nuevo caso de uso sin comenzar completamente desde cero.
### Parte 2 – Navegación y vistas

Se implementó Vue Router para permitir la navegación entre las distintas secciones de TechNova Servicios Informáticos sin necesidad de recargar completamente la página.

La aplicación cuenta con las siguientes vistas:

- **Inicio:** presenta brevemente la empresa y los servicios tecnológicos que ofrece.
- **Nosotros:** describe la actividad de TechNova y su propósito.
- **Servicios:** sección destinada a mostrar el catálogo de servicios de la empresa.
- **Contacto:** sección destinada a permitir que los clientes soliciten información.

La navegación se realiza mediante RouterLink y el contenido correspondiente a cada ruta se muestra mediante RouterView.

Las rutas implementadas son:

- `/` → Inicio
- `/nosotros` → Nosotros
- `/servicios` → Servicios
- `/contacto` → Contacto

De esta manera, la aplicación funciona como una SPA (Single Page Application), permitiendo cambiar entre las vistas sin realizar una recarga completa de la página.