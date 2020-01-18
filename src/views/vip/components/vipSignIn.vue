<template>
  <div class="content-transparent " style="height: 100%;">
    <div style="margin:0px; height: 100%; border-radius:10px 10px 0px 0px;" class="wplane paddingAll0 padding_b ">
      <div class="tabInfoTitle flex_rowBetwen">
        <h6>登录方式</h6>
      </div>
      <el-form class="margin_t" :model="vipForm" ref="vipForm" label-width="130px">
        <el-form-item label="两周内免登录：" prop="region">
          <el-radio-group v-model="radio">
            <el-radio :label="3">开启</el-radio>
            <el-radio :label="6">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="第三方登录：" prop="name">
          <el-radio-group v-model="radio">
            <el-radio :label="3">开启</el-radio>
            <el-radio :label="6">关闭</el-radio>
          </el-radio-group>
          <div>
            <p class="">设置流程：申请QQ联盟api接口（<el-button type="text">点击申请</el-button> ） > 填写QQ登录的APP ID > 等待QQ联盟审核通过 > 正式上线</p>
            <p class="m_info">主：仅限有独立域名的客户使用，且只有QQ联盟控制台里的当前流程在上线状态时，才可正常使用！</p>
            <p >qq回调地址请填写：http://您的域名/qqApi/callback.php(如果手机域名与电脑域名不一致请填写两个，用分</p>
            <el-form class="el_form" :model="vipForm" ref="vipForm" label-width="100px">
              <el-form-item  class="margin_b" label="QQ登录状态" prop="region">
                <el-radio-group v-model="radio">
                  <el-radio :label="3">关闭QQ登录功能</el-radio>
                  <el-radio :label="6">开启QQ登录功能</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item class="margin_b"  label="APP ID：" prop="region">
                  <el-input style="width:250px" v-model="vipForm.name"></el-input>
              </el-form-item>
              <el-form-item class="margin_b"  label="APP KEY：" prop="region">
                  <el-input style="width:250px" v-model="vipForm.name"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-form-item>
      </el-form>
      <div class=" t_c">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vipSignIn",
  data() {
    return {
      radio: 1,
      vipForm: {
        type: 1,
      },
      tableData: [1],
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
p{
  font-size: 13px;
  color:#333;
  margin: 0px;
}
.el_form{
  .margin_b{
    margin-bottom: 15px;
  }
}
.m_info{
  line-height: 17px;
  margin: 0px;
  color: #999;
}
</style>
