import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LeaderBoard from '../views/LeaderBoard.vue'
import Account from '@/views/Account.vue'
import Bag from '@/views/Bag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/leaderboard', name: 'leaderboard', component: LeaderBoard },
    { path: '/account', name: 'account', component: Account },
    { path: '/bag', name: 'bag', component: Bag },
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
