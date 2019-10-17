import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'

import mine from './mine'
import register from './register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      props: true,
      name: 'home',
      component: Home
    },
    mine,
    register
  ]
})
