
import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const rechargeAsset = (params = {}) => { // 会员充值
  return axiosPost(`/${apicustomer}/${apicustomer}/rechargeAsset`, params);
}
