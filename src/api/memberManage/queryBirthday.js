import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const queryCustomerBirthday = (params = {}) => {
  return axiosPost(`/${apicustomer}/${apicustomer}/queryCustomerBirthday`, params);
}
