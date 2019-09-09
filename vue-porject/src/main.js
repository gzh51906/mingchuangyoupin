import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// 导入router文件
import router from './router'

import store from './store'
import { Row, Col, Badge, Divider, Tabs, TabPane } from 'element-ui';
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Badge.name, Badge);
Vue.component(Divider.name, Divider);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  // 注入实例
  router,
  store,
  render: h => h(App),
}).$mount('#app')
