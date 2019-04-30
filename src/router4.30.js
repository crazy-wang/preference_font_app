import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout.vue'
import Login from './views/login.vue'

Vue.use(Router)

const pageRoutes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    children: [
      {
        path: '/articleDetail',
        name: 'articleDetail',
        component: () => import('@/views/preference')
      }
    ]
  },
  {
    path: '/preference',
    name: 'preference',
    component: () => import('@/views/preference')
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login,
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      redirect: '/home/index'
      // children: pageRoutes
    },
    {
      path: '/home',
      name: 'home',
      // component: () => import('@/views/home'),
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'homeIndex',
          component: () => import('@/views/home')
        },
        {
          path: 'articleDetail',
          name: 'articleDetail',
          component: () => import('@/views/preference')
        }
      ]
    }
  ]
})
