<template>
  <section class="app-main">
    <el-scrollbar style="height:100%;">
      <transition name="fade-transform" mode="out-in">
        <router-view class="app-main-route-view" :key="key" />
      </transition>
    </el-scrollbar >
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}

</script>
