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
import seniorSetting from "./components/seniorSetting"
import vipRegister from "./components/vipRegister"
import vipSignIn from "./components/vipSignIn"
export default {
  name: 'vipSetting',
  components: {
    seniorSetting,
    vipRegister,
    vipSignIn
  },
  data() {
    return{
      routerPage:"vipRegister",
      pageArr:[
        {name:"会员注册",page:"vipRegister"},
        {name:"会员登录",page:"vipSignIn"},
        {name:"高级设置",page:"seniorSetting"},
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
