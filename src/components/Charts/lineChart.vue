<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {  
      type: String,
      default: '380px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      let series = [
          {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              areaStyle: this.setAreaStyle(0),
              data:[120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230]
          },
          {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              areaStyle: this.setAreaStyle(1),
              data:[220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230]
          }
      ]
      let legend = []
      for (var i = 0; i < series.length; i++) {
        legend.push(series[i].name)
      }
      this.chartData = this.chartData || {series,legend,type:"week"}
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ legend, series ,type } = {}) {
      this.chart.setOption({
        color:this.color,
        textStyle:{
          color:"#333333"
        },
        xAxis: {
          name:"日期",
          nameLocation:"end",
          nameTextStyle:{
            fontSize:14,
            color:"#999999",
          },
          data:this.getTimeArr(10), 
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 20,
          containLabel: true
        },
        tooltip: {
          confine: true,
          trigger: 'axis',
          axisPointer: {
              type: 'line',
              axis: "x",
              lineStyle:{
                  color:"#64D9FF",
                  type:"dashed"
              },
          },
          extraCssText: 'z-index:1',
          backgroundColor:"#ffffff",
          textStyle:{
            color:"#333333"
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        // legend: {
        //   orient:"horizontal",//horizontal /vertical
        //   right:0,
        //   top:10,
        //   align:"left",
        //   data:legend,
        // },
        series:series
      })
    }
  }
}
</script>
