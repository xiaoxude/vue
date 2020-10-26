import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/login'
import Main from '../views/main'
import UserList from '../views/user/list'
import UserProfile from '../views/user/profile'
import Err404 from '../views/404'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',  //在地址栏中去除#号
  routes:[
    {
      path:"/login",
      component:Login
    },
    {
      path: "/main/:name",
      component: Main,
      name:"main",
      props:true,
      children:[
        {
          path:"/user/profile/:id",
          component:UserProfile,
          name: "prifiles",
          props:true
        },
        {
          path: "/user/list",
          component: UserList
        }
      ]
    },
    {
      path: "/gohome",
      redirect:"/main"
    },
    {
      path:'*',
      component:Err404
    }
  ]
})
