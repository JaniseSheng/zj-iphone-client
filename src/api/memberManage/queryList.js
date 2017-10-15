import { axiosPost } from '@/lib/ajax'
import { apicustomer } from '@/lib/config'

export const queryList = (params = {}) => {
  return axiosPost(`/${apicustomer}/${apicustomer}/queryCardList`, params);
}

export const changeCardState = (params = {}) => {
  return axiosPost(`/${apicustomer}/${apicustomer}/changeCardState`, params);
}

export const unbindCard = (params = {}) => {
  return axiosPost(`/${apicustomer}/${apicustomer}/unbindCard`, params);
}
