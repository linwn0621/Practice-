// 引入
import Vue from 'vue'
import router from '@/router/index'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 注入
  router,
  render: h => h(App)
}).$mount('#app')
