import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import BookList from '../views/BookList.vue'
import IndividualView from '../components/IndividualView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'book',
    component: BookList
  },
  {
    path: '/individual/:slug',
    name: 'individual',
    component: IndividualView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
