<template>
  <div class="content-transparent ">
    <!-- 公告协议 -->
    <div style="margin:0px; border-radius:10px 10px 0px 0px;" class="wplane paddingAll0 padding_b padding_right">
      <div class="tabInfoTitle flex_rowBetwen">
        <h6>公告协议</h6>
      </div>
      <el-form class="margin_t" :model="vipForm" ref="vipForm" label-width="100px">
        <el-form-item label="会员公告：" prop="region">
          <el-radio-group v-model="radio">
            <el-radio :label="6">开启</el-radio>
            <el-radio :label="3">关闭</el-radio>
          </el-radio-group>
          <el-input type="text" placeholder="请输入公告标题" v-model="text" maxlength="100" show-word-limit class="margin_b margin_t" />
          <weditor id="addGonggao" ref="weditor"></weditor>
        </el-form-item>
        <el-form-item label="会员公告：" prop="region">
          <el-radio-group v-model="radio">
            <el-radio :label="6">开启</el-radio>
            <el-radio :label="3">关闭</el-radio>
          </el-radio-group>
          <el-input type="text" placeholder="请输入公告标题" v-model="text" maxlength="100" show-word-limit class="margin_b margin_t" />
          <weditor id="addGonggao2" ref="weditor"></weditor>
        </el-form-item>
      </el-form>
    </div>
    <!-- 密码找回 -->
    <div style="margin:0px; border-radius:0px 0px 0px 0px;" class="wplane paddingAll0 padding_b">
      <div class="tabInfoTitle flex_rowBetwen">
        <h6>密码找回</h6>
      </div>
      <div class="paddingAll">
        <el-form class="margin_t" :model="vipForm" ref="vipForm" label-width="150px">
          <el-form-item label="邮箱密码找回：" prop="region">
            <el-radio-group v-model="radio">
              <el-radio :label="6">开启</el-radio>
              <el-radio :label="3">关闭</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="手机密码找回：" prop="region">
            <el-radio-group v-model="radio">
              <el-radio :label="6">开启</el-radio>
              <el-radio :label="3">关闭</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 会员页面设计(不支持) -->
    <div style="margin:0px; border-radius:0px 0px 10px 10px;" class="wplane paddingAll0 padding_b">
      <div class="tabInfoTitle flex_rowBetwen">
        <h6>会员页面设计(不支持)</h6>
      </div>
      <div class="paddingAll">
        <div class="editor">
          <span>会员注册页 <i class="el-icon-edit"></i> </span>
          <span>会员注册页 <i class="el-icon-edit"></i> </span>
          <span>会员注册页 <i class="el-icon-edit"></i> </span>
        </div>
      </div>
      <div class="t_c padding_left padding_b">
        <el-button @click="handleEdit(scope.$index, scope.row)">取消</el-button>
        <el-button type="primary" @click="handleDelete(scope.$index, scope.row)">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import weditor from "@/components/wangeditor/index"
export default {
  name: "vipRegister",
  components: {
    weditor
  },
  data() {
    return {
      vipForm: {
        type: 1,
      },
      rows: {
        minRow: 10,
        maxRow: 13,
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
.editor{
  span{
    display:inline-block;
    height: 25px;
    line-height: 25px;
    font-size:12px;
    color:#333;
    margin-right: 5px;
    i{
      font-size: 20px;
      margin:0px 5px;
      vertical-align: middle;
    }
  }
}
</style>
