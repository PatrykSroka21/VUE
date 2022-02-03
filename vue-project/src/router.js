import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ApiView from './views/ApiView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ApiView,
      path: '/api'
    },
    {
      component: HomeView,
      path: '/'
    }
  ]
})
