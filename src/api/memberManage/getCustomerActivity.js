/**
 * @param: 详见文档
 * @method: getCustomerActivity
 * @return: 活动参加活动记录
 * @调用: promise
 */
import { axiosPost } from '@/lib/ajax'
import { marketing } from '@/lib/config'
export const getCustomerActivity = (params = {}) => {
  return axiosPost(`/${marketing}/activity/getCustomerActivity`, params);
}
