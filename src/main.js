import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 2,
  observer: true,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
