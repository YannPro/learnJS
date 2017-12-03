import Vue from 'vue'
import Router from 'vue-router'
import cut from '@/components/cut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: cut
    }
  ]
})
