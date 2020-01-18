import Layout from '@/components/layout'

const vip =    {
    path: '/vip',
    component: Layout,
    name:"vip",
    redirect: '/vip/vipAdd',
    meta: { title: 'vip', icon: 'vip'},
    children: [
      {
        path: 'vipAdd',
        component: () => import('@/views/vip/vipAdd'),
        name: 'vipAdd',
        meta: { title: 'vipAdd', icon: 'vipAdd'}
      },
      {
        path: 'vipManage',
        component: () => import('@/views/vip/vipManage'),
        name: 'vipManage',
        meta: { title: 'vipManage', icon: 'vipManage'}
      },
      {
        path: 'vipExamine',
        component: () => import('@/views/vip/vipExamine'),
        name: 'vipExamine',
        meta: { title: 'vipExamine', icon: 'vipExamine'}
      },
      {
        path: 'vipGrade',
        component: () => import('@/views/vip/vipGrade'),
        name: 'vipGrade',
        meta: { title: 'vipGrade', icon: 'vipGrade'}
      },
      {
        path: 'vipGroup',
        component: () => import('@/views/vip/vipGroup'),
        name: 'vipGroup',
        meta: { title: 'vipGroup', icon: 'vipGroup'}
      },
      {
        path: 'vipSetting',
        component: () => import('@/views/vip/vipSetting'),
        name: 'vipSetting',
        meta: { title: 'vipSetting', icon: 'vipSetting'}
      },
    ]
  }

export default vip
