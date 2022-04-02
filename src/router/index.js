import {createRouter, createWebHashHistory} from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'
import Register from '@/views/Register'
import Login from '@/views/Login'
import YourFeed from '@/views/YourFeed'
import TagFeed from '@/views/TagFeed'
import Article from '@/views/Article'
import CreateArticle from '@/views/CreateArticle'
import EditArticle from '@/views/EditArticle'
import Settings from '@/views/Settings'
const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed,
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
    path: '/article/:slug',
    name: 'article',
    component: Article,
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: CreateArticle,
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: EditArticle,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/userProfile/:slug',
    name: 'userProfile',
    component: Login,
  },
  {
    path: '/tag/:slug',
    name: 'tag',
    component: TagFeed,
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
