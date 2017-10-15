import { axiosPost } from '@/lib/ajax'
import { marketing } from '@/lib/config'

//查询市场活动列表
export const getActivityByPara = (params) => {
 return axiosPost(`/${marketing}/activity/getActivityByPara`, params);
}
//查询指定活动详情
export const getActivity = (params) => {
  return axiosPost(`/${marketing}/activity/getActivity`, params);
}
//取消市场活动
export const cancleActivity = (params) => {
  return axiosPost(`/${marketing}/activity/cancleActivity`, params);
}

//修改市场活动
export const updateActivity = (params) => {
  return axiosPost(`/${marketing}/activity/updateActivity`, params);
}
//查询活动邀约客户列表
export const getActivityCustomer = (params) => {
 return axiosPost(`/${marketing}/activity/getActivityCustomer`, params);
}

//新增市场活动
export const insertActivity = (params) => {
 return axiosPost(`/${marketing}/activity/insertActivity`, params);
}
//邀约和取消邀约
export const inviteCustomer = (params) => {
  return axiosPost(`/${marketing}/activity/inviteCustomer`, params);
}

//获取字典父及集合
export const market_market_getDictAll = (params) => {
  return axiosPost(`/${marketing}/dict/getDictAll`, params);
}
//根据父节点获取子节点
export const market_getDictOption = (parentid) => {
  return axiosPost(`/${marketing}/dict/getDictOption`, {parentid});
}
//新增字典
export const market_insertDict = (params = {}) => {
  return axiosPost(`/${marketing}/dict/insertDict`, params);
}
//更新字典
export const market_updateDict = (params = {}) => {
  return axiosPost(`/${marketing}/dict/updateDict`, params);
}
//删除字典
export const market_deleteDict = (id) => {
  return axiosPost(`/${marketing}/dict/deleteDict`, {id});
}
