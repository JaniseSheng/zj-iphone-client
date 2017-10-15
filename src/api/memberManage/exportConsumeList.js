import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const exportConsumeList = (params = {}) => {
  return axiosPost(`/${apicustomer}/${apicustomer}/exportConsumeList`, params);
}
