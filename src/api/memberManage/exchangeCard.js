
import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const exchangeCard = (params = {}) => {
  return axiosPost(`/${apicustomer}/${apicustomer}/changeCard`, params);
}
