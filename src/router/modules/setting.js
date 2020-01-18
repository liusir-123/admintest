import Layout from '@/components/layout'

const setting = {
  path: '/setting',
  component: Layout,
  name:"setting",
  redirect: '/setting/domain',
  meta: { title: 'setting', icon: 'setting'},
  children: [
    {
      path: 'domain',
      component: () => import('@/views/setting/domain'),
      name: 'domain',
      meta: { title: 'domain', icon: 'domain'}
    },
    {
      path: 'SMSplatform',
      component: () => import('@/views/setting/SMSplatform'),
      name: 'SMSplatform',
      meta: { title: 'SMSplatform', icon: 'SMSplatform'}
    },
    {
      path: 'LangVersion',
      component: () => import('@/views/setting/LangVersion'),
      name: 'LangVersion',
      meta: { title: 'LangVersion', icon: 'LangVersion'}
    }
  ]
}
  
export default setting
