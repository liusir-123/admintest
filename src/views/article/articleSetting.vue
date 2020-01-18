<template>
  <div class="content-transparent paddingAll">
    <div style="min-height:100%;" class="wplane paddingAll0">
      <div class="tabInfoTitle flex_rowBetwen">
        <h6>功能设置</h6>
      </div>
      <div class="padding_left padding_right padding_b padding_t">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="width:40%;" class="demo-ruleForm">
          <el-form-item label="文章评论：" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="开启"></el-radio>
              <el-radio label="关闭"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="评论权限：" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="开启"></el-radio>
              <el-radio label="关闭"></el-radio>
            </el-radio-group>
            <el-form-item label="指定等级：" >
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form-item>
          <el-form-item label="评论审核：" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="开启"></el-radio>
              <el-radio label="关闭"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'articleSetting',
  data() {
    return {
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
    };
  },
  mounted() {

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
  }
};

</script>
<style lang="scss" scoped>
</style>
