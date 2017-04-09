import Vue from 'vue'
import Router from 'vue-router'

// Importing Pages
import Home from '@/components/pages/Home'

// Importing Components
import Header from '@/components/root/Header'
import SelectCountry from '@/components/modules/SelectCountry'

// Defining Components
Vue.component('app-header', Header)
Vue.component('app-select-country', SelectCountry)

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
