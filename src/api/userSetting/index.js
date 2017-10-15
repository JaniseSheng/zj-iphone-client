import {axiosPost} from '@/lib/ajax'
import {apiuser} from '@/lib/config'

//查询角色列表
export const queryAllRoleList = (params) => {
  return axiosPost(`/${apiuser}/permission/queryAllRoleList`, params);
}
//添加角色
export const addRole = (params) => {
  return axiosPost(`/${apiuser}/permission/addRole`, params);
}
//修改角色
export const updateRole = (params) => {
  return axiosPost(`/${apiuser}/permission/updateRole`, params);
}
//获取角色下资源
export const getRoleById = (uid) => {
  return axiosPost(`/${apiuser}/permission/getRoleById`, {uid});
}
//删除角色
export const delRole = (params) => {
  return axiosPost(`/${apiuser}/permission/delRole`, params);
}
//获取角色包含下用户列表
export const getUserByRole = (params) => {
  return axiosPost(`/${apiuser}/permission/getUserByRole`, params);
}
//获取角色包含下用户列表中添加用户列表
export const addRoleUser = (params) => {
  return axiosPost(`/${apiuser}/permission/addRoleUser`, params);
}
//删除角色下用户
export const deleteRoleUser = (params) => {
  return axiosPost(`/${apiuser}/permission/deleteRoleUser`, params);
}
