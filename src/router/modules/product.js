import Layout from '@/components/layout'

const product = {
    path: '/product',
    component: Layout,
    redirect: '/product/productAdd',
    meta: { title: 'product', icon: 'product'},
    children: [
      {
        path: 'productAdd',
        component: () => import('@/views/product/productAdd'),
        name: 'productAdd',
        meta: { title: 'productAdd'}
      },
      {
        path: 'productManage',
        component: () => import('@/views/product/productManage'),
        name: 'productManage',
        meta: { title: 'productManage'}
      },
      {
        path: 'evaluateManage-1',
        component: () => import('@/views/article/evaluateManage'),
        name: 'evaluateManage-1',
        meta: { title: 'evaluateManage'}
      },
      {
        path: 'productClassify',
        component: () => import('@/views/product/productClassify'),
        name: 'productClassify',
        meta: { title: 'productClassify'}
      },
      {
        path: 'productSetting',
        component: () => import('@/views/product/productSetting'),
        name: 'productSetting',
        meta: { title: 'productSetting'}
      },
    ]
  }

export default product
