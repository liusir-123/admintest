<template>
  <div class="content-transparent ">
    <div style="margin:0px; border-radius:10px 10px 0px 0px;" class="wplane paddingAll0 padding_b ">
      <div class="tabInfoTitle flex_rowBetwen">
        <h6>注册方式</h6>
      </div>
      <el-form class="margin_t" :model="vipForm" ref="vipForm" label-width="100px">
        <el-form-item label="注册方式" prop="region">
          <el-select v-model="vipForm.region" placeholder="请选择会员等级">
            <el-option label="普通会员" value="shanghai"></el-option>
            <el-option label="高级会员" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱账号" prop="name">
          <el-input style="width:250px" v-model="vipForm.name"></el-input>
        </el-form-item>
        <el-form-item label="stmp授权码" prop="name">
          <el-input style="width:250px" v-model="vipForm.name"></el-input>
        </el-form-item>
        <el-form-item label="发件服务器" prop="name">
          <el-input style="width:250px" v-model="vipForm.name"></el-input>
        </el-form-item>
        <el-form-item label="注册审核" prop="name">
          <el-input style="width:250px" v-model="vipForm.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div style="margin:0px; border-radius:0px 0px 10px 10px;" class="wplane paddingAll0 padding_b">
      <div class="tabInfoTitle flex_rowBetwen">
        <h6>注册资料项</h6>
      </div>
      <div class="paddingAll">
        <el-button type="primary" @click="dialogVisible = true" icon="el-icon-plus" plain>新增资料项</el-button>
        <el-table fixed="right" class="margin_t" :data="tableData" style="width: 100%">
          <el-table-column align="center" label="资料项名称"></el-table-column>
          <el-table-column align="center" label="提示文字"></el-table-column>
          <el-table-column align="center" label="会员中心启用">
            <template slot-scope="scope">
              <i class="el-icon-check iconSuccess"></i>
              <!-- <i class="el-icon-close iconInfo" ></i> -->
            </template>
          </el-table-column>
          <el-table-column align="center" label="会员中心启用">
            <template slot-scope="scope">
              <i class="el-icon-check iconSuccess"></i>
              <!-- <i class="el-icon-close iconInfo" ></i> -->
            </template>
          </el-table-column>
          <el-table-column align="center" label="必填">
            <template slot-scope="scope">
              <i class="el-icon-check iconSuccess"></i>
              <!-- <i class="el-icon-close iconInfo" ></i> -->
            </template>
          </el-table-column>
          <el-table-column align="center" label="排序">
            <template slot-scope="scope">
              <i class="el-icon-bottom "></i>
              <i class="el-icon-top "></i>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="t_l padding_left">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">取消</el-button>
        <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">提交</el-button>
      </div>
    </div>
    <el-dialog title="添加资料项" :visible.sync="dialogVisible" width="35%" :before-close="handleClose">
      <el-form class="margin_t" :model="vipForm" ref="vipForm" label-width="100px">
        <el-form-item label="名称 : " prop="name">
          <el-input style="width:250px" v-model="vipForm.name"></el-input>
        </el-form-item>
        <el-form-item label="表单类型" prop="region">
          <el-select style="width:250px;" v-model="vipForm.region" placeholder="请选择会员等级">
            <el-option label="普通会员" value="shanghai"></el-option>
            <el-option label="高级会员" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选项" prop="name">
          <el-input style="width:250px" :autosize="rows" type="textarea" v-model="vipForm.name"></el-input>
        </el-form-item>
        <el-form-item label="提示文字" prop="name">
          <el-input style="width:250px" v-model="vipForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer t_c">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "vipRegister",
  data() {
    return {
      vipForm: {
        type: 1,
      },
      rows:{
        minRow:10,
        maxRow:13,
      },
      tableData: [1],
      dialogVisible: false
    }
  },
  created() {

  },
  mounetd() {

  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();

    }
  },
}

</script>
<style lang="scss" scoped>
.iconSuccess {
  color: #67C23A;
  font-weight: 600;
}

.iconInfo {
  color: #CCCCCC;
  font-weight: 600;
}

</style>
