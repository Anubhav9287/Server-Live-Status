import Vue from 'vue'
import Router from 'vue-router'
import Homeurl from './views/Homeurl.vue'
import dashboard from './views/dashboard.vue'
import workflow from './views/workFlow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/tiles',
      name: 'tiles',
      component: Homeurl
    },
    {
      path: '/workflow',
      name: 'workflow',
      component: workflow
    },
    {
      path: '/edit',
      name: 'edit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Editurl.vue')
    }
  ]
})
