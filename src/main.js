import Vue from 'vue';

import Cookies from 'js-cookie'

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import App from './App'; // app 组件

import router from './router'; // vue 路由管理

import store from './store' // vuex 状态

import Bus from './utils/bus'; // 组件总线

// import loading from '@/components/loading'; 

import common from './utils/common'; // 挂载全局公用方法

import './utils/premission'; // 权限

import './utils/directive' ; // 全局指令

import './assets/scss/main.scss' // global css

import i18n from './lang' // internationalization

Vue.use(Bus);

Vue.use(common);

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
});
