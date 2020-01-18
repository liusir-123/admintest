import { debounce } from '@/utils'

export default {
  data() {
    return {
      runlegend: [''],
      color: ['#98A9F2', '#64D9FF', "yellow", '#91c7ae', '#749f83', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    }
  },
  mounted() {
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.__resizeHanlder)
  },
  methods: {
    /**
     * [获取当前月的所有天]
     */
    getDateArr(model) {
      let Num = new Date().getDate() + 1;
      let arr = []
      for (let i = 1; i < Num; i++) {
        arr.push(i)
      }
      
      return arr
    },
    /**
     * 设置线型图区域 过度颜色
     * @param {[num]} index [颜色数组的index]
     */
    setAreaStyle(index) {
      return {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: this.color[index] // 0% 处的颜色
          }, {
            offset: 1,
            color: '#fff' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        },
        shadowBlur: {
          shadowColor: "#b9bcb6",
          shadowBlur: 10,
        },
        opacity: 0.6,
      }
    },
    /**
     * 获取当前是时间及num之前的时间
     */
    getTimeArr(last){
      let Num = new Date().getHours()+1;
      let arr = []
      for (var i = Num; i > Num - last; i--) {
        arr.push(i + '点')
      }
      return arr.reverse()
    },
  }
}
