import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/login',
    name: 'createArticle',
    component: Login,
  },
  {
    path: '/login',
    name: 'settings',
    component: Login,
  },
  {
    path: '/login',
    name: 'userProfile',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
