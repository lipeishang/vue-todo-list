import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/page/page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Page
    }
  ]
})
