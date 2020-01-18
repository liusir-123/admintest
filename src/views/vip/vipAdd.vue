<template>
  <div class="content-transparent paddingAll">
    <div class="wplane paddingAll0 padding_b">
      <div class="tabInfoTitle flex_rowBetwen ">
        <h6>个人信息表单</h6>
      </div> 
      <div class="vipForm paddingAll">
        <div class="_border _relative paddingAll">
          <h6 class="_absolute">基础信息</h6>
          <el-form :model="vipForm" ref="vipForm" label-width="100px">
            <el-form-item label="账号" prop="name">
              <el-input style="width:250px" v-model="vipForm.name"></el-input>
            </el-form-item>
            <el-form-item label="账号" prop="name">
              <el-input style="width:250px" v-model="vipForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="name">
              <el-input style="width:250px" v-model="vipForm.name"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="name">
              <el-input style="width:250px" v-model="vipForm.name"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="name">
              <el-input style="width:250px" v-model="vipForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="name">
              <el-input style="width:250px" v-model="vipForm.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="name">
              <el-input style="width:250px" v-model="vipForm.name"></el-input>
            </el-form-item>
            <el-form-item label="会员等级" prop="region">
              <el-select v-model="vipForm.region" placeholder="请选择会员等级">
                <el-option label="普通会员" value="shanghai"></el-option>
                <el-option label="高级会员" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="vipForm paddingAll">
        <div class="_border _relative paddingAll">
          <h6 class="_absolute">其他信息（仅管理员可见）</h6>
          <el-form :model="vipForm" ref="vipForm" label-width="100px" class="demo-vipForm">
            <el-form-item label="分组" prop="type">
              <el-checkbox-group v-model="vipForm.type">
                <el-checkbox label="种子用户" name="type"></el-checkbox>
                <el-checkbox label="活跃用户" name="type"></el-checkbox>
                <el-checkbox label="土豪会员" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="备注" prop="desc">
              <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" class="width400" v-model="vipForm.desc"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="t_c ">
        <el-button>取 消</el-button>
        <el-button type="primary">提 交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vipAdd",
  data() {
    return {
      vipForm: {
        type: 1,
      }
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
</style>
