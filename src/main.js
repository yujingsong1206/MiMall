import Vue from 'vue'
import App from './App.vue'
import routers from './router'

Vue.config.productionTip = false

new Vue({
  router:routers,
  render: h => h(App),
}).$mount('#app')
