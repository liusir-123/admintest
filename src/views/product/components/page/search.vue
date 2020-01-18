<template>
  <div>
    <themPlane title="搜索优化">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" style="width:500px;"  wlabel-width="100px" class="demo-ruleForm">
        <el-form-item label="产品浏览标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
          <p class="m_info">注：若留空则使用“产品名称”作为浏览器标题</p>
        </el-form-item>
        <el-form-item label="产品详情关键词" prop="region">
          <el-input type="textarea" v-model="ruleForm.name"></el-input>
          <p class="m_info">注：多个关键词用英文“ , ”隔开</p>
        </el-form-item>
        <el-form-item label="产品详情描述" required>
          <el-input type="textarea" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="自定义地址" prop="delivery">
          <el-input  v-model="ruleForm.name"></el-input>
          <p class="m_info">注：只能是字母、数字、下划线、-组合</p>
        </el-form-item>
      </el-form>
    </themPlane>
<!--     <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button> -->
  </div>
</template>
<script>
  import themPlane from "../themPlane"
  export default{
    name:"search",
    components:{
      themPlane,
    },
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
      }
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
      },
    }
  };
</script>
<style lang="scss" scoped> 
  
</style>