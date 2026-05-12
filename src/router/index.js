import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:slug', component: Detail },
  { path: '/about', component: About },
  { path: '/product', component: Product }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})