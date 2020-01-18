import axios from 'axios'
import store from '@/store'
import { Message, MessageBox ,Loading } from 'element-ui'
import router  from '@/router/index'
import { getToken } from '@/utils/cookie'
let loading
const service = axios.create({
  // baseURL: process.env.ENV_CONFIG == "prod" ? window.location.origin+":12701" : process.env.BASE_API,
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  loading = Loading.service({
      lock: true,
      text: '加载中……',
      background: 'rgba(0, 0, 0, .2)'
  })
  config.headers['token'] = getToken();
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    setTimeout(function () {
      loading.close()
    },300)
    const res = response.data
    if (res.code !== 200) {
      // Message({
      //   message: res.msg || '请求超时',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // // token过期 
      // if(res.code == 4000 &&  !window.windowDoding ){
      //   window.windowDoding = true
      //   store.commit('SET_TOKEN', '') ;
      //   MessageBox.confirm("登录已超时！").then(action => {
      //     window.location.href = process.env.CALLBACK_URL
      //   });
      // }
      // if(res.code == 2000 ){ 
      //   store.commit('SET_TOKEN', '') ;
      //   window.location.href = process.env.CALLBACK_URL
      // }
      return Promise.reject(new Error(res.msg || '请求超时'))
    } else{
      return res
    }
  },
  error => {
    Message({
      message: error.msg || '请求超时' ,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
