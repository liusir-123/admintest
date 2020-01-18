<template>
  <div class="time_plane">
    <div class="time_plane_title ">
      <img src="@/assets/images/titleBg.png" :alt="title">
      <span class="flex_center">{{title}}</span>
    </div>
    <div class="time_plane_height"></div>
    <div class="time_plane_box">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
      title:"",
  },
  data() {
    return {

    }
  },
  methods: {

  }   
};

</script>
<style type="text/css" lang="scss" scoped>
  .time_plane{
    position:relative;
    min-height: 100px;
    padding-left: 200px;
    overflow: hidden;
    padding-top: 25px;
    .time_plane_title{
      position:absolute;
      top: 30px;
      left: 0px;
      color: #fff;
      font-weight: 600;
      z-index: 2;
      img{
        height: 42px;
        width: auto;
      }
      .flex_center{
        position:absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 100%;
      }
    }
    .time_plane_height{
      position:absolute; 
      left: 0px;
      top: 0px;     
      width: 157px;
      background-color:#fafafa;
      height: 100%;
    }
  }
</style>