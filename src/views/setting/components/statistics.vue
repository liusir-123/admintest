<template>
  <div>
    <div class="wplane  paddingAll ">
      <div>
        <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
        <el-button type="primary" class="margin_l" plain>筛 选</el-button>
        <el-button>重 置</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%;margin-top: 20px;">
        <el-table-column prop="date" align="center " width="100" label="序列ID" >
        </el-table-column>
        <el-table-column prop="name" align="center" label="发送类型" >
        </el-table-column>
        <el-table-column prop="address" align="center" label="发送电话">
        </el-table-column>
        <el-table-column prop="address" align="center" width="450" label="内容">
        </el-table-column>
        <el-table-column prop="address" align="center" label="短信状态">
        </el-table-column>
        <el-table-column prop="address" align="center" label="发送时间">
        </el-table-column>
      </el-table>
      <div class="flex_center margin_t">
        <pagination style="margin:0 auto;" v-show="total>0" :total="total" :page.sync="listQuery.page" @pagination="getList" />
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
export default {
  name: "statistics",
  components:{
    Pagination
  },
  data() {
    return {
      dialogVisible: false,
      listQuery:{},
      total:100,
    }
  },
  created() {

  },
  mounetd() {

  },
  methods: {

  }
}

</script>
<style lang="scss" scoped>


</style>
