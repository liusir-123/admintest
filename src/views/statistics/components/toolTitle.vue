<template>
<div class="static_title">
  <h6>{{title}}</h6> 
  <el-tooltip class="item" effect="dark" :content="content" placement="top-start">
    <i class="el-icon-question c_primary"></i>
  </el-tooltip>
</div>
</template>
<script>
export default {
  props: {
    title: String,
    content: String
  }
}
</script>
<style lang="scss" scoped>
  .static_title{
    h6{
      display:inline-block;
    }
  }
</style>
