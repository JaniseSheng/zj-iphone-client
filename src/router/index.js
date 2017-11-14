import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/pages/dashboard/index'
import register from '@/pages/register/register'
import homePage from '@/pages/homePage/homePage'
import account from '@/pages/account/account'
import hot from '@/pages/hot/hot'
import history from '@/pages/history/history'
import service from '@/pages/service/service'
import submitOrder from '@/pages/submitOrder/submitOrder'
import myData from '@/pages/myData/myData'
import order from '@/pages/order/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '0',
      component: dashboard
    },
    {
      path: '/register',
      name: '1',
      component: register
    },
    {
      path: '/homePage',
      name: '2',
      component: homePage,
      children: [
        {
          path: '/hot',
          name: '2-1',
          component: hot
        },
        {
          path: '/order',
          name: '2-2',
          component: submitOrder
        },
        {
          path: '/history',
          name: '2-3',
          component: history
        },
        {
          path: '/account',
          name: '2-4',
          component: account
        },
        {
          path: '/myData',
          name: '2-5',
          component: myData
        },
        {
          path: '/service',
          name: '2-6',
          component: service
        },
        {
          path: '/submitOrder',
          name: '2-7',
          component: order
        }
      ]
    }
  ]
})
