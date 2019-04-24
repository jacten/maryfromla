import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'

Vue.config.productionTip = false


var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

let loadAmount = width > 600 ? 1.3 : 2;

Vue.use(VueLazyload, {
  preLoad: loadAmount,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
