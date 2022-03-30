import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/HomeView',
    name: 'home',
    component: HomeView,
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
    path: '/login',
    name: 'UserLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserLogin.vue')
  },
  {
    path: '',
    name: 'UserHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserHome.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/UserRegisterdInfo',
    name: 'UserRegisteredInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserRegisteredInfo.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.account.userToken) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
