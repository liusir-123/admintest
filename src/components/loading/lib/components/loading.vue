<template>
  <div v-if="false" class="meng-marsk">
    <!-- <dlMask  name="lineTo" borderRadius="20px" width="200px" height="84px" :bolen.sync="bolen" align="left" title="提示信息" ref="marsk"> -->
    <div slot="header"></div>
    <transition name="animation">
      <div v-if="type =='warning'" style="margin-top: 60px;" class="mask_loding dont_copy">
        <!-- <img class="icon-loding rotateAll" src="@/assets/images/loding.png" alt="">{{msg}} -->
      </div>
      <div v-if="type =='success'" style="margin-top: 60px;" class="mask_loding dont_copy">
        <!-- <img class="icon-loding" src="@/assets/images/success.png" alt="">{{msg}} -->
      </div>
    </transition>
  </div>
  <!-- </dlMask> -->
</template>
<script>
  export default {
    name:"loding",
    props:{
        type:{
          type:String, 
          default:"success",
        },
        msg:{
            type:String,
            default:"查询中...",
        },
        bolen:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    components:{},
    data(){
        return{
            
        }
    },
    created(){
        console.log(this.type)
    },
    mounted(){
    },
    methods:{

    },
}
</script>
<style lang="scss" type="text/css" scoped>
.meng-marsk {
  position: absolute;
  height: 100%;
  width:100%;
  text-align: center;
  /*background-color: rgba(0,0,0,.2);*/
}

.mask_loding {
  font-size: 17px;
  color: #222;

  .icon-loding {
    vertical-align: middle;
    margin-right: 14px;
    width: 30px;
  }
}

</style>
