<template>
  <div class="top_table ">
    <div v-if="title" class="top_title">
      <div class="top_row">
        <div class="s_line1">页面标题</div>
        <div class="s_line1 row_max">页面网址</div>
        <div class="s_line1 row_min">访问次数</div>
      </div>
    </div>
    <div class="table_content">
      <div v-for="(item,index) in 10" :key="index" class="top_row">
        <div class="s_line1">
          <span class="round" article>{{index + 1}}</span> 页面标题
        </div>
        <div class="s_line1 row_max">页面网址</div>
        <div class="s_line1 row_min ">访问次数</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: Boolean,
    list:{
      type:Array,
      // required:true,
    }
  }
}
</script>
<style lang="scss" scoped>
  .top_table{
    font-size: 12px;
    color:#333;
    padding-top: 10px;
    max-height: 400px;
    min-height: 400px;
  }
  .top_title{
    color:#999;
  }
  .top_row{
    height: 36px;
    line-height: 36px;
    display:flex;
    justify-content: space-between;
    .s_line1{
      flex: 1;
    }
    .row_max{
      flex: 2;
      min-width:300px; 

    }
    .row_min{
      max-width: 100px;
    }
  }
  .round{
    display: inline-block;
    background: #F5F5F5;
    font-style:italic; 
    border-radius: 50%;
    width: 22px; 
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-weight: 600;
    color:#999;
    font-size: 12px;
    margin-right:8px; 
  }
</style>