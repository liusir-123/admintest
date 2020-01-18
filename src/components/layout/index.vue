<template>
  <div class="app-content">
    <sildeBar />
    <div class="router-page">
      <navBar />
      <app-main />
    </div>
  </div>
</template>
<script>
import AppMain from "./AppMain";
import sildeBar from "./sildeBar";
import navBar from "./navBar";
export default {
  components: {
    AppMain,
    sildeBar,
    navBar
  },
  data() {
    return {};
  },
  motented() {},
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>