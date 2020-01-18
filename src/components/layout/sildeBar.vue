<template>
  <el-menu :default-active="activeMenu" class="app-slideBar dont_copy">
    <el-scrollbar style="height:100%;">
      <div class="admin_logo">
          <img class="_icon"  />
          <p class="admin_name">{{ $t('tagsView.closeAll') }}</p>
      </div>
      <template  v-for="(item,index) in router">
        <el-submenu :unique-opened="true" v-if="item.children" :index="item.path" >
          <template slot="title">
            <img v-if="item.meta" :src="require('@/assets/images/menue/' + item.meta.icon + '.png')"  class="menue_icon">
            <img v-else :src="require('@/assets/images/menue/' + item.children[0].meta.icon + '.png')"  class="menue_icon">
            {{item.meta ? generateTitle(item.meta.title) : generateTitle(item.children[0].meta.title)}}
          </template>
          <el-menu-item :key="iindex" @click="toPath(iitem.path)" v-if="!iitem.meta.hidden" v-for="(iitem,iindex) in item.children" :index="iitem.path">{{generateTitle(iitem.meta.title)}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.path">{{generateTitle(item.meta.title)}}</el-menu-item>
      </template>
    </el-scrollbar>
  </el-menu>
</template>
<script>
import { asyncRoutes, constantRoutes } from '@/router'
export default {
  name: "slideBar",
  data() {
    return {
      router:[]
    }
  },
  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path , name } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      // $(".app-main-route-view")[0].offsetTop = 0
      // console.log($(".app-main-route-view")[0].offsetTop = 0)
      return name
    }
  },
  motented() {

  },
  created() {
    this.router = [...asyncRoutes , ...constantRoutes]
  },
  methods: {
    toPath(path){
      this.$router.push({
        name:path,
      })
    },
    generateTitle(title) {
      const hasKey = this.$te('route.' + title)
      if (hasKey) {
        const translatedTitle = this.$t('route.' + title)
        return translatedTitle
      }
      return title
    }
  }
}

</script>
