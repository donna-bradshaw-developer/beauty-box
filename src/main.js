import Vue from 'vue'
import App from './App.vue'
import vuelidate from 'vuelidate'
import router from './router'
import store from './store'

Vue.use(vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
