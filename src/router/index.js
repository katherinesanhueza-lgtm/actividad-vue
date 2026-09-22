import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Atractivos from '../views/Atractivos.vue'
import Gastronomia from '../views/Gastronomia.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/atractivos',
    name: 'Atractivos',
    component: Atractivos
  },
  {
    path: '/gastronomia',
    name: 'Gastronomia',
    component: Gastronomia
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router