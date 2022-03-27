import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    data () {
      return{
        info: "lllllllllllllllll"
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/UserLogin',
    name: 'UserLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserLogin.vue')
  },
  {
    path: '/UserHome',
    name: 'UserHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserHome.vue')
  },
  {
    path: '/UserRegisterdInfo',
    name: 'UserRegisteredInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserRegisteredInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
