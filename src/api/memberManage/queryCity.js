import { axiosPost } from '@/lib/ajax'

export const getRegion = (params = {}) => { // 地址
  return axiosPost(`/system/region/getRegion`, params);
}
