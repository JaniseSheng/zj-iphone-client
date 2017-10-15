import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const querySingleRecharge = (params = {}) => { // 查询单个用户充值记录
  return axiosPost(`/${apicustomer}/${apicustomer}/querySingleRecharge`, params);
}

export const querySingleConsume = (params = {}) => { // 查询单个用户消费记录
  return axiosPost(`/${apicustomer}/${apicustomer}/querySingleConsume`, params);
}
