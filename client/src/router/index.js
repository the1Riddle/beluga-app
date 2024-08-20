import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LeaderBoard from '../views/LeaderBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/leaderboard', name: 'leaderboard', component: LeaderBoard },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LeaderBoard.vue')
    }
  ]
})

export default router
