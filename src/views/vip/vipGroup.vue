<template>
  <div class="content-transparent paddingAll">
    <!-- 数据列表 -->
    <div class="wplane paddingAll0">
      <div class="tabInfoTitle flex_rowBetwen">
        <h6>数据列表</h6>
        <span>
          <el-button type="primary" plain icon="el-icon-plus" size="mini"> 新增分组</el-button>
        </span>
      </div>
      <div class="padding_left padding_right padding_b padding_t">
        <template>
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column align="center" prop="name" label="会员分组">
            </el-table-column>
            <el-table-column align="center" prop="name" label="操作">
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
<!--     <el-dialog title="新增会员等级" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
        <el-form-item label="等级ID: " prop="resource">
          <el-input style="width:300px;" type="text" v-model="ruleForm.resource" maxlength="10"  />
        </el-form-item>
        <el-form-item label="等级昵称: " prop="resource">
          <el-input style="width:300px;" type="text"  v-model="ruleForm.resource" maxlength="10"  />
        </el-form-item>
        <el-form-item label="等级折扣: " prop="resource">
          <el-input style="width:300px;" type="text" v-model="ruleForm.resource" maxlength="10"  >
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <el-form-item label="三级分销: " prop="resource">
          <el-switch v-model="value"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="t_c">
        <el-button  @click="dialogVisible = false">取 消</el-button>
        <el-button  type="primary" @click="dialogVisible = false">确定</el-button>
      </div>
    </el-dialog> -->
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
export default {
  name: 'vipGroup',
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
