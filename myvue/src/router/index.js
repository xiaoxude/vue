import Vue from "vue";
import VueRouter from "vue-router";
import Content from "../components/content"
import threej from "../components/threej";
//安装路由
Vue.use(VueRouter);
//配置导出路由
export default new VueRouter({
  routes:[
    {
      //路由路径
      path: '/content',
      //路由名 可以随便取  也可以不要
      name: 'content',
      //跳转的组件
      component: Content
    },
    {
      path: '/three',
      component: threej
    }
  ]
})
