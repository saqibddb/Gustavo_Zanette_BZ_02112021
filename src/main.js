import Vue from 'vue'
import App from './App.vue'

// BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)
// --

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
