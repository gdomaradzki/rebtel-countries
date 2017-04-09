import Vue from 'vue'
import Router from 'vue-router'

// Importing Pages
import Home from '@/components/pages/Home'

// Importing Components
import SideBar from '@/components/modules/SideBar'
import Logo from '@/components/root/Logo'

// Defining Components
Vue.component('app-side-bar', SideBar)
Vue.component('app-logo', Logo)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
