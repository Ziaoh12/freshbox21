import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Nutrition from '../views/Nutrition.vue'
import myplate from '../views/Myplate.vue'
import Nutrition2 from '../views/Nutrition2.vue'
import Nutrition3 from '../views/Nutrition3.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },


  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/Nutrition',
    name: 'Nutrition',
    component: Nutrition
  },

  {
    path: '/Nutrition2',
    name: 'Nutrition2',
    component: Nutrition2
  },

  {
    path: '/Nutrition3',
    name: 'Nutrition3',
    component: Nutrition3
  },



  {
    path: '/Myplate',
    name: 'Myplate',
    component: myplate
  },


]

const router = new VueRouter({
  routes
})

export default router
