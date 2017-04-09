import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Importing Materialize CSS
import 'materialize-css/dist/css/materialize.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
