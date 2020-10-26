<template>
  <div>
    <el-container>
      <img src="../assets/1.jpg"/>
      <div style="height: 70px">
        <div style="text-align: left;float: left;"><img src="../assets/12.jpg" width="250" height="50"
                                                        style=" margin: 10px 0px;"></div>
        <div style="float: right">
          <img src="../assets/11.png" width="300" height="55" style=" margin: 10px 0px;">
        </div>
        <div style="text-align: center;">
          <el-input class="elinputasd" v-model="input" placeholder="请输入内容"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </div>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">最新活动</el-menu-item>
          <el-menu-item index="2">产品</el-menu-item>
          <el-menu-item index="3"><a target="_blank">大数据</a></el-menu-item>
          <el-submenu index="4">
            <template slot="title">解决方案</template>
            <el-menu-item index="2-1">移动模块</el-menu-item>
            <el-menu-item index="2-2">后台模板</el-menu-item>
            <el-menu-item index="2-3">电商平台</el-menu-item>
          </el-submenu>
          <el-menu-item index="5">社区</el-menu-item>
        </el-menu>
      </el-header>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in imgs" :key="index">
          <img :src="item.path" alt="轮播图" width="598" height="200">
        </el-carousel-item>
      </el-carousel>
    </el-container>
    <div style="margin: 0 auto;width: 1140px">
      <div style="text-align: left">
        <img src="../../static/img/16.jpg">
        作者精选
      </div>
      <hr style="border: 2px;background: #00F7DE ">
      <div style="width: 1140px;height: 230px">
        <div style="float: left" v-for="img in 4">
          <div style="height: 230px;width: 283px">
            <img src="../../static/img/17.jpg" width="260">
            <br>
            <span>上海直飞三亚5天4晚自由行(春节预售+亲子/蜜月/休闲游首选+豪华酒店任选+接送机)
              <br>
              <span style="color: #F74C31">¥899</span>
            </span>
          </div>
        </div>
      </div>
      <div style="text-align: left">
        <img src="../../static/img/18.jpg">
        国内游
      </div>
      <hr style="border: 2px;background: #00F7DE ">
      <el-container>
        <el-aside width="360px">
          <img src="../../static/img/19.jpg">
        </el-aside>
        <div style="width: 800px">
          <div style="float: left" v-for="img in 6">
            <div style="height: 230px;width: 260px;text-align: left">
              <img src="../../static/img/20.jpg" width="240">
              <br>
              <span>上海直飞三亚5天4晚自由行(春节预售+亲子/蜜月/休闲游首选+豪华酒店任选+接送机)
              <br>
              <span style="color: #F74C31">网付价: ¥899</span>
            </span>
            </div>
          </div>
        </div>
      </el-container>
      <br>
      <div style="text-align: left">
        <img src="../../static/img/21.jpg">
        境外游
      </div>
      <hr style="border: 2px;background: #00F7DE ">
      <el-container>
        <el-aside width="360px">
          <img src="../../static/img/22.jpg">
        </el-aside>
        <div style="width: 800px">
          <div style="float: left" v-for="img in 6">
            <div style="height: 230px;width: 260px;text-align: left">
              <img src="../../static/img/23.jpg" width="240">
              <br>
              <span>上海直飞三亚5天4晚自由行(春节预售+亲子/蜜月/休闲游首选+豪华酒店任选+接送机)
              <br>
              <span style="color: #F74C31">网付价: ¥899</span>
            </span>
            </div>
          </div>
        </div>
      </el-container>
    </div>
    <el-container>
      <img src="../../static/img/24.png" height="63.3667"/>
    </el-container>
    <el-container>
      <div style="background: #00FFFF;text-align: center;width: 1232.3px">
        <span>xjp版权所有,备案号:<a href="http://www.beian.miit.gov.cn/" style="color: #F74C31">鄂ICP备20012464号</a></span>
      </div>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                input: '',
                activeIndex: '2',
                activeIndex2: '2',
                imgs: [{path:"../static/img/13.jpg",data:1},
                       {path:"../static/img/14.jpg",data:1},
                       {path:"../static/img/15.jpg",data:1},
                      ]
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }

</script>

<style>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .elinputasd{
    width: 350px;
    margin: 15px 0px;
    border-radius: 30px
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


