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
      required: false
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
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ legend, series ,type } = {}) {
      this.chart.setOption({
        color:this.color,
        textStyle:{
          color:"#333333"
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
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth:false,
        }]
      })
    }
  }
}
</script>
