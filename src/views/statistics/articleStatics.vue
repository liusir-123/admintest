<template>
  <div class="content-transparent ">
    <div  class="navbar_fixed">
      <fixedBar @change="watch_dataChange" ></fixedBar> 
    </div>
    <div class="fiexd_content">
      <el-row :gutter="20">
        <el-col v-for="(item,index) in 8 "  :key="index" :xs="6" :sm="6" :md="6" :lg="3" :xl="3">
          <div class="s_plane ">
            <div class="planeBox">
              <p class="m_info ">浏览次数（pv）</p>
              <span class="num ">468</span>
            </div>
          </div>
        </el-col> 
        <!-- 线图 -->
        <el-col class="margin_t" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="s_plane "></div>
        </el-col>
        <!-- 新老访客 -->
        <!-- 着陆页TOP10 -->
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane height460"></div>
        </el-col>
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane height460"></div>
        </el-col>
        <!-- 访问来源 -->
        <!-- 访问设备 -->
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane height460"></div>
        </el-col>
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane height460"></div>
        </el-col>
        <!-- 访客地域分布 -->
        <el-col class="margin_t" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="s_plane height460"></div>
        </el-col>
        <!-- 爬虫统计 -->
        <!-- 来源链接TOP10 -->
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane height430"></div>
        </el-col>
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane height430"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import fixedBar from './components/fixedBar'
export default {
  name: 'webSurvey',
  components: {
    fixedBar
  },
  data() {
    return {
     
    }
  },
  mounted() {
  },
  methods: {
    // 监听顶部data改变
    watch_dataChange(data){

    }
  }
};

</script>
<style lang="scss" scoped>
  .fiexd_content{
    padding-bottom: 20px;
  }
  .s_plane{
    background-color: #fff;
    border-radius: 8px;
    box-shadow:5px 0px 18px 0px rgba(82,86,101,0.06);
    padding:20px 15px 15px ;
  }
  .margin_t{
    margin-top: 20px;
  }
  .height460{
    height: 460px;
  }
  
  .height430{
    height: 430px;
  }

  .planeBox{
    position: relative;
    padding-left: 10%;
    display: inline-block;
    &:after{
      content:" ";
      position:absolute;
      top: 2px;
      left:0px;
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 5px;
      background-color: #0079FE;
    }
  }
  .color{
    color: #727477 !important;
  }
  .num{
    display: inline-block;
    margin-top: 10px;
    color: #333;
    font-weight: bold;
    font-size: 22px;
  }
</style>