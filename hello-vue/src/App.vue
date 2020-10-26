<template>

  <div id="app">
    <el-carousel  :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img ref="image" :src="item.path" alt="轮播图" width="618.083" height="200" />
        <span style="position: absolute; top: 100px; left: 50px;">{{item.va}}</span>
      </el-carousel-item>
    </el-carousel>


      <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
      return{
          imgs:[{path:"../static/img/1.jpg",va:"倾国倾城熊诚曦"},
              {path:"../static/img/2.jpg",va:"沉鱼落雁郑思逸"},
              {path:"../static/img/3.jpg",va:"学习使我快乐"},
              {path:"../static/img/4.jpg",va:"书中自有黄金屋"},
              {path:"../static/img/5.jpg",va:"干tm的玛莎拉蒂"},
              {path:require('@/assets/img/6.jpg'),va:"今天也很ymm"},
               ]
      }
  }

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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
