<template>
<div>
  <span class="checkTitle">{{ $t('layout.languagePicker') }}</span>
  <el-select class="el_min_select" size="mini" v-model="value"@change="handleSetLanguage">
    <el-option value="zh" label="中文版"></el-option>
    <el-option value="en" label="English"></el-option>
    <el-option value="es" label="Español"></el-option>
    <el-option value="ja" label="日本語"></el-option>
  </el-select>
</div>
</template>

<script>
export default {
  data(){
    return {
      value:this.$store.getters.language
    }
  },
  computed:{
    language(){
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage () {
      this.$i18n.locale = this.value
      this.$store.dispatch('setLanguage', this.value)
    }
  }
} 
</script>