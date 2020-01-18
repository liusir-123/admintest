import Layout from '@/components/layout'

const article =  {
    path: '/article',
    component: Layout,
    name:"article",
    redirect: '/article/articleAdd',
    meta: { title: 'article', icon: 'article'},
    children: [
      {
        path: 'articleAdd',
        component: () => import('@/views/article/articleAdd'),
        name: 'articleAdd',
        meta: { title: 'articleAdd', icon: 'articleAdd'}
      },
      {
        path: 'articleManage',
        component: () => import('@/views/article/articleManage'),
        name: 'articleManage',
        meta: { title: 'articleManage', icon: 'articleManage'}
      },
      {
        path: 'evaluateManage-2',
        component: () => import('@/views/article/evaluateManage'),
        name: 'evaluateManage-2',
        meta: { title: 'evaluateManage'}
      },
      {
        path: 'articleClassify',
        component: () => import('@/views/product/productClassify'),
        name: 'articleClassify',
        meta: { title: 'articleClassify'}
      },
      {
        path: 'articleTags',
        component: () => import('@/views/article/articleTags'),
        name: 'articleTags',
        meta: { title: 'articleTags', icon: 'articleTags'}
      },
      {
        path: 'articleSetting',
        component: () => import('@/views/article/articleSetting'),
        name: 'articleSetting',
        meta: { title: 'articleSetting', icon: 'articleSetting'}
      },
    ]
  }

export default article
