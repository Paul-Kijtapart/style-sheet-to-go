import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// views
const Home = () => import('@/views/home');
const FlexBox = () => import('@/views/flex-box');
const Grid = () => import('@/views/grid');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/flexbox',
      name: 'flexbox',
      component: FlexBox
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    }
  ]
})
