import Vue from 'vue'
import axios from 'axios'

import router from './router'
import { Pagination, Container, Aside, Menu, Submenu, Main, Form, Input, Button, Select, Option, Table, MenuItem, MenuItemGroup, TableColumn, FormItem } from 'element-ui';
import App from './App.vue'

Vue.component(Pagination.name, Pagination);
Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(Main.name, Main);
Vue.component(Form.name, Form);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Table.name, Table);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(TableColumn.name, TableColumn);
Vue.component(FormItem.name, FormItem);

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')