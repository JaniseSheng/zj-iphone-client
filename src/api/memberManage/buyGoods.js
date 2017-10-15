import { axiosPost } from '@/lib/ajax'
import { apiwarehouse } from '@/lib/config'

export const bugGoods = (params = {}) => { // 会员充值
  return axiosPost(`/${apiwarehouse}/inventory/consume`, params);
}
