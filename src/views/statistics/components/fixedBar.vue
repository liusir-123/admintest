<template>
  <div>
    <span class="m_info">快速查看</span>
    <el-button @click="select(index)" v-for="(item,index) in type " :key="index" :type="dateQuery.type != index ? '' : 'primary'" plain size="mini">
      {{item}}
    </el-button>
    <span class="m_info ">选择日期</span>
    <el-date-picker v-model="dateQuery.date" type="daterange" @change="dateChange" size="mini" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
    </el-date-picker>
    <el-button size="mini" @click="clear" class="margin_l">清空</el-button>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      type: [
        '今日',
        '昨日',
        '最近7日',
        '最近30日',
      ],
      dateQuery: {
        type: 0,
        date: "",
        start_time:"",
        end_time:"",
      }
    }
  },
  methods: {
    select(index) {
      this.dateQuery.type = index
      var date = new Date();
      switch (index) {
        case 0:
          this.dateQuery.start_time = date.format("yyyy-MM-dd")
          this.dateQuery.end_time = date.format("yyyy-MM-dd")
          break;
        case 1:
          this.dateQuery.end_time = date.format("yyyy-MM-dd")
          this.dateQuery.start_time = new Date(date.getTime() - 60 * 60 * 1000 * 24 * 7).format("yyyy-MM-dd")
          break;
        case 2:
          this.dateQuery.end_time = date.format("yyyy-MM-dd")
          let datatime = date.getTime() - 60 * 60 * 1000 * 24 * 15;
          this.dateQuery.start_time = new Date(datatime).format("yyyy-MM-dd")
          break;
        case 3:
          this.dateQuery.start_time = new Date(date.getFullYear(), date.getMonth(), 1).format("yyyy-MM-dd")
          this.dateQuery.end_time = new Date(date.getFullYear(), date.getMonth() + 1, 0).format("yyyy-MM-dd")
          break;
      }
      this.$emit("change", this.dateQuery)
    },
    dateChange() {
      this.$emit("change", this.dateQuery)
    },
    clear() {
      this.dateQuery = {
        type: 0,
        date: "",
        start_time:"",
        end_time:"",
      }
    },
  },
}

</script>
<style lang="scss" scoped>
*+.m_info {
  margin-left: 20px;
}

.m_info {
  margin-right: 6px;
}
</style>
