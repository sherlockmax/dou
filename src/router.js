import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Group from './views/Group.vue'
import ErrorPage from './views/ErrorPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/group/:name',
      name: 'Group',
      component: Group
    },
    {
      path: '/lang/:type',
      name: 'Language',
      component: About
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage
    }
  ]
})
