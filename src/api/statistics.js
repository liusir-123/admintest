import request from '@/utils/request'

export function getStatisticsInfo (data) { //获取数据中心信息
  return request({
    url: '/index/dc',
    method: 'post',
    data
  })
}
