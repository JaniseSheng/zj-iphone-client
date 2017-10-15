import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const queryCardInfo = (params = {}) => { // 查询会员卡信息
  return axiosPost(`/${apicustomer}/${apicustomer}/queryCardInfo`, params);
}

export const queryCustomerInfo = (params = {}) => { // 查询会员信息
  return axiosPost(`/${apicustomer}/${apicustomer}/queryCustomerInfo`, params);
}

export const queryRechargeList = (params = {}) => { // 查询充值记录
  return axiosPost(`/${apicustomer}/${apicustomer}/queryRechargeList`, params);
}

export const queryConsumeList = (params = {}) => { // 查询消费记录
  return axiosPost(`/${apicustomer}/${apicustomer}/queryConsumeList`, params);
}

