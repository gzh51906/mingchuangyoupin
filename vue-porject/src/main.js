import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// 导入router文件
import router from './router'

import store from './store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  // 注入实例
  router,
  store,
  render: h => h(App),
}).$mount('#app')
