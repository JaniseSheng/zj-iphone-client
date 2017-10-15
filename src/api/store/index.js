import { axiosPost } from '@/lib/ajax'
import { apiwarehouse } from '@/lib/config'

//获取字典父及集合
export const getDictAll = (params) => {
  return axiosPost(`/${apiwarehouse}/dict/getDictAll`, params);
}
//根据父节点获取子节点
export const getDictOption = (parentid) => {
  return axiosPost(`/${apiwarehouse}/dict/getDictOption`, {parentid});
}
//新增字典
export const insertDict = (params = {}) => {
  return axiosPost(`/${apiwarehouse}/dict/insertDict`, params);
}
//更新字典
export const updateDict = (params = {}) => {
  return axiosPost(`/${apiwarehouse}/dict/updateDict`, params);
}
//删除字典
export const deleteDict = (id) => {
  return axiosPost(`/${apiwarehouse}/dict/deleteDict`, {id});
}

// 新增商品
export const insertGoods = (params = {}) => {
  return axiosPost(`/${apiwarehouse}/goods/insertGoods`, params);
}
// 修改商品
export const updateGoods = (params = {}) => {
  return axiosPost(`/${apiwarehouse}/goods/updateGoods`, params);
}
// 删除商品
export const deleteGoods = (goodsNo) => {
  return axiosPost(`/${apiwarehouse}/goods/deleteGoods`, {goodsNo});
}
// 获取商品列表
export const getGoodsByPara = (params = {}) => {
  return axiosPost(`/${apiwarehouse}/goods/getGoodsByPara`, params);
}
// 获取商品列表
export const getGoodsOption = (type) => {
  return axiosPost(`/${apiwarehouse}/goods/getGoodsOption`, {type});
}


//新增库存
export const insertInventory = (params = {}) => {
  return axiosPost(`/${apiwarehouse}/inventory/insertInventory`, params);
}
//查询商品库存列表
export const getGoodsTotalByPara = (params = {}) => {
  return axiosPost(`/${apiwarehouse}/inventory/getGoodsTotalByPara`, params);
}
//获取盘点历史数据
export const getCheckByPara = (params = {}) => {
 return axiosPost(`/${apiwarehouse}/check/getCheckByPara`, params);
}


//库存盘点商品
export const getCheckGoodsByPara = (params = {})=>{
  return axiosPost(`/${apiwarehouse}/check/getCheckGoodsByPara`, params);

}
//保存盘点信息
export const insertAddCheck = (params = {})=>{
 return axiosPost(`/${apiwarehouse}/check/insertAddCheck`, params);

}

//出入库的商品查询
export const getInventoryByPara = (params = {})=>{
 return axiosPost(`/${apiwarehouse}/inventory/getInventoryByPara`, params);
}

//查询指定库存记录
export const getInventory = (params = {})=>{
  return axiosPost(`/${apiwarehouse}/inventory/getInventory`, params);
}
//出入库审核-通过
export const auditInventoryPass = (inventoryno)=>{
  return axiosPost(`/${apiwarehouse}/inventory/auditInventoryPass`, {inventoryno});

}
//出入库审核-驳回
export const auditInventoryRefuse = (inventoryno)=>{
  return axiosPost(`/${apiwarehouse}/inventory/auditInventoryRefuse`, {inventoryno});
}
//删除出入库记录
export const deleteInventory = (inventoryno)=>{
  return axiosPost(`/${apiwarehouse}/inventory/deleteInventory`, {inventoryno});
}
//修改出入库记录
export const updateInventory = (params = {})=>{
  return axiosPost(`/${apiwarehouse}/inventory/updateInventory`, params);
}
