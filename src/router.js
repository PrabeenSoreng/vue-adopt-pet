import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cats from './views/Cats.vue'
import Dogs from './views/Dogs.vue'
import Pet from './views/Pet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Cats.vue')
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/pets/:species/:id',
      name: 'pet',
      component: Pet
    }
  ]
})
