<template>
  <div class="content-transparent ">
    <div  class="navbar_fixed">
      <span>
        <el-button size="mini" type="primary" plain>全部评论(1000)</el-button>
        <el-button size="mini" plain>待审核(1000)</el-button>
        <el-button size="mini" plain>已通过(1000)</el-button>
        <el-button size="mini" plain>回收站(1000)</el-button>
      </span>
      <span>
        <el-input
          placeholder="请输入搜索内容"
          v-model="input4">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </span>
    </div>
    <div class="fiexd_content">
      <!-- 数据列表 -->
      <div class="wplane paddingAll0">
        <div class="tabInfoTitle flex_rowBetwen">
          <h6> 数据列表</h6>
          <span>
            <el-select size="mini" style="width: 120px;" v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select size="mini" style="width: 120px;" v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </span>
        </div>
        <div class="padding_left padding_right padding_b padding_t">
          <template>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column label="评论" width="250">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="作者">
              </el-table-column>
              <el-table-column prop="name" label="回复至">
              </el-table-column>
              <el-table-column prop="name" label="发布时间">
              </el-table-column>
              <el-table-column align="center" prop="name" label="操作" width="300">
                <template slot-scope="scope">
                  <el-button type="text">审核通过</el-button>
                  <el-button type="text">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin: 20px 0px " class="flex_rowBetwen">
              <span>
                <el-button @click="toggleSelection([tableData[1], tableData[2]])">全选</el-button>
                <el-select style="width: 120px;" v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-button @click="toggleSelection()">确定</el-button>
              </span>
              <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" @pagination="getList" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
export default {
  name: 'evaluateManage',
  components: {
    Pagination
  },
  data() {
    return {
      total: 100,
      dialogVisible: true,
      listQuery: {
        page: 1,
      },
      formInline: {},
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: [],
    }
  },
  mounted() {

  },
  methods: {
    getList() {

    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};

</script>
<style lang="scss" scoped>
</style>
