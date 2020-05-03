import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
// import Subfield from "@/views/Subfield"
// import Hobby from "@/views/Hobby";
// import Pigeonhole from "@/views/Pigeonhole";
// import Works from "@/views/Works";
// import Profile from "@/views/Profile";
Vue.use(VueRouter)

  const routes = [
  {
    path: '/blog',
    name: 'Home',
    component: Home
  },
    {
      path: '/blog/pigeonhole',
      name: 'Pigeonhole',
      component: () => import('@/views/Pigeonhole')
    },
    {
      path: '/blog/works',
      name: 'Works',
      component: () => import('@/views/Works')
    },
    {
      path: '/blog/hobby',
      name: 'Hobby',
      component: () => import('@/views/Hobby')
    },
    {
      path:'/blog/profile',
      name:'Profile',
      component:() => import('@/views/Profile')
    },
    {
      path: '/blog/subfield',
      name: 'Subfield',
      component: () => import('@/views/Home/Subfield/Subfield')
    }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:'active'

})

export default router
