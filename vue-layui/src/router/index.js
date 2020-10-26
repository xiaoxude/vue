import Vue from "vue";
import VueRouter from "vue-router";
import Index from '../views/index';
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',  //在地址栏中去除#号
  routes:[
    {
        path:'/',
        component:Index
    }
  ]
})
