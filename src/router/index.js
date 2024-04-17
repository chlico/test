import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import detail from '../views/detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/detail',    
    name: 'detail',
    component: detail
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
