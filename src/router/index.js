import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Cadastro',
    component: Home
  },
  {
    path: '/atendimento',
    name: 'Atendimento',
    component: () => import(/* webpackChunkName: "atendimento" */ '../views/Atendimento.vue')
  },
  {
    path: '/revisao',
    name: 'Revisao',
    component: () => import(/* webpackChunkName: "revisao" */ '../views/Revisao.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
