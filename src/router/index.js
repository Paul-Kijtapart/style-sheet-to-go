import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// views
import Home from '@/views/home';
import FlexBox from '@/views/flex-box';

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
    }
  ]
})
