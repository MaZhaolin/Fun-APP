import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Fun from '@/components/Fun'
import User from '@/components/User'
import UserFuns from '@/components/user/funs'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/user', name: 'User', component: User },
    { path: '/fun/:id', name: 'Fun', component: Fun },
    { path: '/user/funs', name: 'UserFuns', component: UserFuns }
  ]
})
