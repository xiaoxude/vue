<template>
  <div id="app">
    <h1>xjp</h1>
    <router-link to="/content">第一个</router-link>
    <router-link to="/three">第二个</router-link>
    <router-view></router-view><!--    这个必须要，不然跳转不了-->
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
