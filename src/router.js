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
          component: () => import('@/views/home/components/articleDetail')
        }
      ]
    },
    {
      path: '/preference',
      name: 'preference',
      // component: () => import('@/views/home'),
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'preferenceIndex',
          component: () => import('@/views/preference')
        }
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'myIndex',
          component: () => import('@/views/my')
        },
        {
          path: 'userInfo',
          name: 'userInfo',
          component: () => import('@/views/my/components/userInfo')
        },
        {
          path: 'focusGroup',
          name: 'focusGroup',
          component: () => import('@/views/my/components/focusGroup')
        },
        {
          path: 'activityManage',
          name: 'activityManage',
          component: () => import('@/views/my/components/activityManage')
        },
        {
          path: 'collection',
          name: 'collection',
          component: () => import('@/views/my/components/collection')
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('@/views/my/components/feedback')
        },
        {
          path: 'bindPhone',
          name: 'bindPhone',
          component: () => import('@/views/my/components/bindPhone')
        }
      ]
    }
  ]
})
