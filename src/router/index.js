import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// views
// const Home = () => import('@/views/home');
import Home from "@/views/home";
import FlexBox from "@/views/flex-box";
import Grid from "@/views/grid";

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
