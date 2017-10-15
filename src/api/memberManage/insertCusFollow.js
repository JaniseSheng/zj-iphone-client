/**
 * [ insertCusFollow ] 会员跟进记录
 * [ queryFollowRecord ] 查询单个用户跟进记录列表
 * [ updateCusAttribute ] 设置会员属性
 * [ queryCusAttribute ] 查看会员属性
 */

import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const insertCusFollow = (params = {}) => {
  return axiosPost(`/${apicustomer}/${apicustomer}/insertCusFollow`, params);
}

export const queryFollowRecord = (params = {}) => {
  console.log(params)
  return axiosPost(`/${apicustomer}/${apicustomer}/queryFollowRecord`, params)
}

export const updateCusAttribute = (params = {}) => {
  console.log(params)
  return axiosPost(`/${apicustomer}/${apicustomer}/updateCusAttribute`, params)
}

export const queryCusAttribute = (params = {}) => {
  console.log(params)
  return axiosPost(`/${apicustomer}/${apicustomer}/queryCusAttribute`, params)
}
