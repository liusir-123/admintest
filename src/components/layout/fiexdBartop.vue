<template>
  <div  class="navbar_fixed">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'fiexdBartop',
  data() {
    return {
      bolen:false
    }
  },
  // created(){
  //   var that = this
  //   $(".navbar_fixed").css({
  //     "width":"calc(100% - "+ $(".app-slideBar").width() +"px)",
  //   })
  //   setTimeout(function() {
  //     that.bolen = true
  //   },1000)
  // },
  // mounted(){
  //   var that = this
  //   $(".navbar_fixed").css({
  //     "width":"calc(100% - "+ $(".app-slideBar").width() +"px)",
  //   })
  //   setTimeout(function() {
  //     that.bolen = true
  //   },1000)
  // },
  // beforeDestroy(){
  //   this.bolen = false
  // },
  methods:{

  }
};

</script>
<style lang="scss" scoped>

</style>
 