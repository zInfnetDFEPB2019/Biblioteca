import Vue from 'vue'
import VueRouter from 'vue-router'

// External-Routes
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

// Internal-Routes
import Application from '../views/Application.vue'
import Configuration from '../views/Configuration.vue'
import WantRead from '../views/WantRead.vue'
import Read from '../views/Read.vue'
import Reading from '../views/Reading.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sobre',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/app',
    name: 'Application',
    component: Application,
    children: [
      {
        name: 'readed',
        path: 'readed',
        component: Read
      },
      {
        name: 'reading',
        path: 'reading',
        component: Reading
      },
      {
        name: 'wantread',
        path: 'wantread',
        component: WantRead
      },
      {
        name: 'configuration',
        path: 'configuration',
        component: Configuration
      },
      {
        name: 'search',
        path: 'search',
        component: Search
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
