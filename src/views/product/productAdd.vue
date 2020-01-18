<template>
  <div class="content-transparent paddingAll">
    <div class="flex_center">
      <el-steps :active="active" style="width:50%;" align-center>
        <el-step  description="填写产品信息"></el-step>
        <el-step  description="详情介绍"></el-step>
        <el-step  description="其他设置"></el-step>
        <el-step  description="搜索优化"></el-step>
      </el-steps>
    </div>    
    <div style=" margin-top:15px; position: relative;" class="wplane paddingAll0 padding_b">
      <transition name="fade-transform"> 
        <newInfo   v-if="active == 1" class="newInfo __absolute"></newInfo>
        <detail   v-if="active == 2" class="detail __absolute">2</detail>
        <other   v-if="active == 3" class="other __absolute">3</other>
        <search   v-if="active == 4" class="div __absolute">4</search>
      </transition>
      <div class="t_c margin_t">
          <el-button @click="next" type="primary" plain>下一步，填写产品详情</el-button> 
          <el-button type="primary">完成，提交产品</el-button> 
      </div>
    </div>
  </div>
</template>
<script>
import newInfo from "./components/page/newInfo"
import detail from "./components/page/detail" 
import other from "./components/page/other"
import search from "./components/page/search"
  export default {
    name:"productAdd",
    components:{
      newInfo,
      detail,
      other,
      search
    },
    data() {
      return {
        active:1,
      }
    },
    methods: {
      next(){
        this.active ++ 
      }
    }
  };
</script>
<style scoped>

</style>