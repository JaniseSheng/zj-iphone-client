/**
 * @params 见文档
 * @return 修改会员信息失败与成功
 */
import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const updateCustomerInfo = (params = {}) => { // 会员充值
  return axiosPost(`/${apicustomer}/${apicustomer}/updateCustomerInfo`, params);
}
