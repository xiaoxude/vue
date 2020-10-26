<template>
  <div>
    <h1>这里是个人信息</h1>
    {{id}}
  </div>

</template>

<script>
    export default {
        props: ['id'],   // 从index.js拿到id的值
        name: "userprofile",
        beforeRouteEnter:((to, from, next) => {
            console.log("进入路由之前");
            next(vm =>{
                  vm.getData();
            })
        }),
        beforeRouteLeave:((to, from, next) => {
            console.log("进入路由之后");
            next();
        }),
        methods:{
            getData:function () {
               this.axios.get('http://localhost:8080/static/mock/data.json')
                    .then(response=>{
                           console.log(response)
                        }
                    );
            }
        }
    }
</script>

<style scoped>

</style>
