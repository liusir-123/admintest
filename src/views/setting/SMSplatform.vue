<template>
  <div class="content-transparent ">
    <!-- 数杮列表 -->
  <el-row >
    <el-col :xs="4" :md="4" :lg="3" :xl="2">
      <div style="height:100%; background:#fff">
        <div @click="routerPage = item.page" v-for=" item in pageArr" :class="['_btn pointer',routerPage == item.page ? ' act_btn' : '' ] " >{{item.name}}</div>
      </div>
    </el-col>
    <el-col :xs="20" :md="20" :lg="21" :xl="22"  style=" height:calc( 100vh - 50px ); overflow: scroll; position: relative" class="paddingAll">
      <transition  name="fade-transform">
        <components style="position: absolute;width:calc(100% - 40px);margin-bottom: 20px;" :is="routerPage"></components>
      </transition>
    </el-col>
  </el-row>
  </div>
</template>
<script>
import sms from "./components/sms"
import statistics from "./components/statistics"
import record from "./components/record"
export default {
  name: 'domain',
  components: { 
    sms,
    statistics,
    record
  },
  data() {
    return{
      routerPage:"sms",
      pageArr:[
        {name:"短信平台",page:"sms"},
        {name:"充值记录",page:"record"},
        {name:"发送统计",page:"statistics"},
      ]
    }
  },
  mounted() {
      
  },
  methods: {

  }
};

</script>
<style lang="scss" scoped>
  ._btn{
    font-size: 14px;
    color: #333;
    text-align: center;
    height: 40px;
    line-height: 40px;
    transition:0.2s;
  }
  .act_btn{
    color: #409EFF;
    background:rgba(236,245,255,1);
  }
</style>
