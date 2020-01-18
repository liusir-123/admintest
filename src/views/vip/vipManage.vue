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
      <!-- search -->
      <div class="wplane">
        <el-collapse value="1">
          <el-collapse-item name="1">
            <h6 slot="title">简洁搜索栏</h6>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="会员账号">
                <el-input v-model="formInline.user" placeholder="输入会员账号/ID/手机号码"></el-input>
              </el-form-item>
              <el-form-item label="会员等级">
                <el-select v-model="formInline.region" placeholder="选择会员等级">
                  <el-option label="等级一" value="shanghai"></el-option>
                  <el-option label="等级二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" plain>查询结果</el-button>
                <el-button @click="onSubmit" plain>高级检索</el-button>
                <el-button  plain>重置</el-button>
              </el-form-item>
            </el-form>
          </el-collapse-item>
        </el-collapse> 
      </div>
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
              <el-table-column label="会员ID" width="250">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="账号">
              </el-table-column>
              <el-table-column prop="name" label="昵称">
              </el-table-column>
              <el-table-column prop="name" label="会员等级">
              </el-table-column>
              <el-table-column prop="name" label="会员分组">
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
<!--     <el-dialog title="快速编辑" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="浏览权限：" prop="resource">
          <el-input style="width:300px;" type="text" placeholder="请输入内容" v-model="ruleForm.resource" maxlength="10" show-word-limit />
        </el-form-item>
        <el-form-item label="文章分类" prop="resource">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标签" prop="resource">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期" prop="resource">
          <el-date-picker
            v-model="ruleForm.resource"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="请选择文章发布的日期和时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="虚拟阅读量" prop="resource">
          <el-input style="width:300px;" type="text" placeholder="请输入内容" v-model="ruleForm.resource" maxlength="10" show-word-limit />
        </el-form-item>
        <el-form-item label="虚拟点赞量" prop="resource">
          <el-input style="width:300px;" type="text" placeholder="请输入内容" v-model="ruleForm.resource" maxlength="10" show-word-limit />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer t_r">
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible = false">更新</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
export default {
  name: 'vipManage',
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
