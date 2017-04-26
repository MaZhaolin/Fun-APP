import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Fun from '@/components/Fun'
import Message from '@/components/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/fun',
      name: 'Fun',
      component: Fun
    }
  ]
})
