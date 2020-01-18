<template>
  <div class="app-navbar">
    <div class="app-navbar-title">{{title}}</div>
    <div>
      <LangSelect class="loginOut-btn" ></LangSelect>
      <el-button class="loginOut-btn" size="mini" @click="loginOut" icon="el-icon-switch-button">
        {{ $t('layout.loginOut') }}
      </el-button>
    </div>
  </div>
</template>
<script>
import LangSelect from '@/components/LangSelect'
export default {
  name: "navBar",
  components: {
    LangSelect
  },
  data() {
    return {

    }
  },
  computed: {
    lang: {
      get() {
        return this.$store.state.language
      },
      set(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLanguage', lang)
      }
    },
    title(){
      return this.generateTitle(this.$route.meta.title)
    },
  },
  methods: {
    loginOut() {

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