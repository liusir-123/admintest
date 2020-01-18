import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import { getToken , setToken  } from '@/utils/cookie'
import { getLanguage } from '@/lang/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: getToken(),
    language: getLanguage(),
    userInfo: "",
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    setUserinfo({ commit }, info) {
      commit('SET_USERINFO', info)
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
  },
  getters: {
    token: state => state.token,
    userInfo: state => state.userInfo,
    language: state => state.language
  }
})

export default store
