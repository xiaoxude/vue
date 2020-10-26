/**
 * 程序的入口
 *
 */
import Vue from 'vue'
import App from './App'
//在程序入口调用路由
import routerxu from './router/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',  // 发送到index.html
   router: routerxu,
  components: { App },   //与App.vue绑定起来
  template: '<App/>'
})
