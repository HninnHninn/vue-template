import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Layout from '@/components/Layout'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'/',
          component:Home,
          name:'Home'
        },
        {
          path:'/product',
          component:Product,
          name:'Product'
        },
      ]

    }
  ],
    mode:'history'
},

  )
