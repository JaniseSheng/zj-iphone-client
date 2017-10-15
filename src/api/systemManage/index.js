import {axiosPost} from '@/lib/ajax'
import {apiuser} from '@/lib/config'

//查询用户列表
export const queryAllUserList = (params) => {
  return axiosPost(`/${apiuser}/permission/queryAllUserList`, params);
}
//禁用和启用用户
export const disableUser = (params) => {
  return axiosPost(`/${apiuser}/permission/disableUser`, params);
}
//用户授权
export const addUserRole = (params) => {
  return axiosPost(`/${apiuser}/permission/addUserRole`, params);
}
//根据用户ID查询
export const getUserById = (params) => {
  return axiosPost(`/${apiuser}/permission/getUserById`, params);
}
//根据用户ID查询对应用户的角色资源
export const getUserRoleResourceById = (uid) => {
  return axiosPost(`/${apiuser}/permission/getUserRoleResourceById`, {uid});
}
//获取钉钉获取部门模块
export const getDepartmentById = (params) => {
 return axiosPost(`/${apiuser}/ding/getDepartmentById`, params);
}

// --------------------- 获取资源列表 --------------------------------
//获取资源列表树结构
export const getAllResourceTree = () => {
  return axiosPost(`/${apiuser}/permission/getAllResourceTree`);
}
//获取资源列表列表
export const queryAllResourceList = (params) => {
  return axiosPost(`/${apiuser}/permission/queryAllResourceList`, params);
}
//添加资源
export const addResource = (params) => {
  return axiosPost(`/${apiuser}/permission/addResource`, params);
}
//修改资源
export const updateResource = (params) => {
  return axiosPost(`/${apiuser}/permission/updateResource`, params);
}
//删除资源
export const delResource = (uid) => {
  return axiosPost(`/${apiuser}/permission/delResource`, {uid});
}
//禁用、启用资源
export const disableResource = (params) => {
  return axiosPost(`/${apiuser}/permission/disableResource`, params);
}
