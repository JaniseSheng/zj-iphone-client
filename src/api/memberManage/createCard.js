import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'
export const insertCustomerRefCard = (params = {}) => {
  return axiosPost(`/${apicustomer}/${apicustomer}/insertCustomerRefCard`, params);
}
