<template>
  <div class="content-transparent ">
    <div  class="navbar_fixed">
      <span>
        <el-button size="mini" type="primary" plain>全部文章(1000)</el-button>
        <el-button size="mini" plain>回收站(1000)</el-button>
      </span>
      <span>
        <el-button size="mini" icon="el-icon-plus" type="primary" plain>添加会员</el-button>
        <el-button size="mini"  type="primary" plain>批量导入</el-button>
        <el-button size="mini" type="primary" plain>导出</el-button>
      </span>
    </div>
    <div class="fiexd_content">
      <!-- 数据列表 -->
      <div class="wplane paddingAll0">
        <div class="tabInfoTitle flex_rowBetwen">
          <h6>数据列表</h6>
          <span>
            <el-select size="mini" style="width: 120px;" v-model="formInline.region" placeholder="显示条数">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select size="mini" style="width: 120px;" v-model="formInline.region" placeholder="排序方式">
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
              <el-table-column prop="name" label="账号">
              </el-table-column>
              <el-table-column prop="name" label="昵称">
              </el-table-column>
              <el-table-column prop="name" label="会员等级">
              </el-table-column>
              <el-table-column prop="name" label="手机">
              </el-table-column>
              <el-table-column prop="name" label="备注">
              </el-table-column>
              <el-table-column sortable prop="name" label="注册时间">
              </el-table-column>
              <el-table-column align="center" prop="name" label="操作" width="300">
                <template slot-scope="scope">
                  <el-button type="text">编辑</el-button>
                  <el-button type="text">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin: 20px 0px " class="flex_rowBetwen">
              <span>
                <el-button @click="toggleSelection([tableData[1], tableData[2]])">全选</el-button>
                <el-select style="width: 120px;" v-model="formInline.region" placeholder="批量选择">
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
  name: 'vipExamine',
  components: {
    Pagination
  },
  data() {
    return {
      total: 100,
      dialogVisible: false,
      listQuery: {
        page: 1
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
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {

  },
  methods: {
    showDialog(scope){
      this.dialogVisible = true
      console.log(scope.row)
    },
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
  .maxheight{
    height:100%;
    position: relative;
  }
</style>
