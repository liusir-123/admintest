import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Layout from '@/components/layout'

// 路由模块儿
import statics from './modules/statics'
import product from './modules/product'
import article from './modules/article'
import vip from './modules/vip'
import setting from './modules/setting'


export const constantRoutes = []
export const asyncRoutes = [
  statics,
  product,
  article,
  vip,
  setting
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
router.addRoutes(asyncRoutes) 
export default router
