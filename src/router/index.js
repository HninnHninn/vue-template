import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Layout from '@/components/Layout'
import Product from '@/components/Product'
import Contact from '@/components/Contact'
import Item from '@/components/Item'

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
        {
          path:'/contact',
          component:Contact,
          name:'Contact'
        },
        {
          path:'/getdata',
          component:Item,
          name:'Item'
        },
      ]

    }
  ],
    mode:'history'
},

  )
