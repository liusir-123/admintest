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
          <div class="s_plane ">
            <lineChart class="lineChart"></lineChart>
          </div>
        </el-col>
        <!-- 新老访客 -->
        <!-- 着陆页TOP10 -->
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane ">
            <toolTitle title="新老访客" content=""></toolTitle>
            <pieChart class="pieChart"></pieChart>
          </div>
        </el-col>
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane ">
            <toolTitle title="来源链接TOP10" content=""></toolTitle>
            <topTable class="topTable"></topTable>
          </div>
        </el-col>
        <!-- 访问来源 -->
        <!-- 访问设备 -->
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane ">
            <toolTitle title="访问来源" content=""></toolTitle>
            <pieChart class="pieChart"></pieChart>
          </div>
        </el-col>
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane ">
            <toolTitle title="访问设备" content=""></toolTitle>
            <pieChart class="pieChart"></pieChart>
          </div>
        </el-col>
        <!-- 访客地域分布 -->
        <el-col class="margin_t" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="s_plane ">
            <toolTitle title="访客地域分布" content=""></toolTitle>
            <div>
              <mapChart style="display:inline-block;" width="50%" class="mapChart"></mapChart>
              <div style="display:inline-block; vertical-align: top;width: 45%;">
                  <div class="p_title">
                    <span class="item">省份</span>
                    <span class="item">区域</span>
                    <span class="item">城市</span>
                  </div>
                  <div v-for="(item,index) in 10 " class="p_row">
                    <span>{{ index+1 + ' . ' + '山东' }}</span>
                    <span class="proBox" >
                      <el-progress  class="pro" :percentage="50" :show-text="false"></el-progress>
                    </span>   
                  </div>
              </div>
            </div>
          </div>
        </el-col>
        <!-- 爬虫统计 -->
        <!-- 来源链接TOP10 -->
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane ">
            <toolTitle title="爬虫统计" content=""></toolTitle>
            <pieChart class="pieChart"></pieChart>
          </div>
        </el-col>
        <el-col class="margin_t" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="s_plane ">
            <toolTitle title="来源链接TOP10" content=""></toolTitle>
            <topTable class="topTable"></topTable>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import fixedBar from './components/fixedBar'
import topTable from './components/topTable'
import toolTitle from './components/toolTitle'
import lineChart from '@/components/charts/lineChart'
import pieChart from '@/components/charts/pieChart'
import mapChart from '@/components/charts/mapChart'
export default {
  name: 'webSurvey',
  components: {
    fixedBar,
    toolTitle,
    lineChart,
    pieChart,
    mapChart,
    topTable
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
  .p_title{
    padding: 10px 20px;
    border-bottom: 1px solid #f1f1f1;
    .item{
      font-size: 13px;
      color: #444;
      margin-right: 10px;
    }
  }
  .p_row{
    display:flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
    height:35px;
    line-height: 35px;
    padding-right: 20px;
    .proBox{
      display: inline-block;
      vertical-align: middle;
      width: 60%;
      .pro{
        margin-top:15px;
      }
    }
  }
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