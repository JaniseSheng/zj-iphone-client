import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const getRecharge = (params = {}) => {
  return axiosPost(`/${apicustomer}/${apicustomer}/rechargeAsset`, params);
}
