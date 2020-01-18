import Layout from '@/components/layout'

const statics =   { 
    path: '/',
    component: Layout,
    redirect: 'webSurvey',
    meta: { title: 'statistics', icon: 'statistics'},
    children: [
      { 
        path: 'webSurvey',
        component: () => import('@/views/statistics/index'),
        name: 'webSurvey',
        meta: { title: 'webSurvey', icon: 'webSurvey'}
      },
      {
        path: 'channelStatics',
        component: () => import('@/views/statistics/channelStatics'),
        name: 'channelStatics',
        meta: { title: 'channelStatics', icon: 'channelStatics'}
      },
      {
        path: 'webStatics',
        component: () => import('@/views/statistics/statics'),
        name: 'webStatics',
        meta: { title: 'webStatics', icon: 'webStatics'}
      },
      {
        path: 'productStatics',
        component: () => import('@/views/statistics/statics'),
        name: 'productStatics',
        meta: { title: 'productStatics', icon: 'productStatics'}
      },
      {
        path: 'articleStatics',
        component: () => import('@/views/statistics/statics'),
        name: 'articleStatics',
        meta: { title: 'articleStatics', icon: 'articleStatics'}
      },
      {
        path: 'detail',
        component: () => import('@/views/statistics/index'),
        name: 'detail',
        meta: { title: 'detail', icon: 'detail',hidden:true}
      },
    ] 
  }

export default statics
