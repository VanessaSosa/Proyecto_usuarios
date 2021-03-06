import Vue from 'vue'
import VueRouter from 'vue-router'
import Persona from '../views/Persona.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Persona',
    component: Persona
  },
  {
    path: '/carro',
    name: 'Carro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Carro.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
