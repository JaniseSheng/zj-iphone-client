import { axiosPost, axiosGet } from '@/lib/ajax'
import { apiuser, serviceHost } from '@/lib/config'

// 登陆
export const login = (params = {}) => {
  return axiosPost(`/${apiuser}/login/login`, params);
}
// ------------- 账号激活 ----------------

// 获取图片验证码
export const picActivateUrl = `${serviceHost}${apiuser}/user/getPicturecodeByActivate`

// 图片验证码请求资源
export const reQuirePicActivateCode = (params = {}) => {
  return axiosGet(`/${apiuser}/user/getPicturecodeByActivate`, params);
}
// 发送短信验证码
export const sendMessageByActivate = (params = {}) => {
  return axiosPost(`/${apiuser}/user/sendMessageByActivate`, params);
}
// 激活账户
export const activateAccount = (params = {}) => {
  return axiosPost(`/${apiuser}/user/activateAccount`, params);
}


// ------------- 忘记密码 ----------------

// 获取图片验证码
export const picActivateUrl1 = `${serviceHost}${apiuser}/user/getPicturecodeByFind`

// 图片验证码请求资源
export const reQuirePicActivateCode2 = (params = {}) => {
  return axiosGet(`/${apiuser}/user/getPicturecodeByFind`, params);
}

// 发送短信验证码
export const sendMessageByFind = (params = {}) => {
  return axiosPost(`/${apiuser}/user/sendMessageByFind`, params);
}
// 找回账户
export const findAccount = (params = {}) => {
  return axiosPost(`/${apiuser}/user/findAccount`, params);
}

// ------------- 修改密码 ----------------

// 获取图片验证码
export const picActivateUrl2 = `${serviceHost}${apiuser}/user/getPicturecodeByUpdate`

// 发送短信验证码
export const sendMessageByUpdate = (params = {}) => {
  return axiosPost(`/${apiuser}/user/sendMessageByUpdate`, params);
}
// 查询旧密码是否正确
export const checkOldPassWord = (params = {}) => {
  return axiosPost(`/${apiuser}/user/checkOldPassWord`, params);
}
// 激活账户
export const updateAccount = (params = {}) => {
  return axiosPost(`/${apiuser}/user/updateAccount`, params);
}
