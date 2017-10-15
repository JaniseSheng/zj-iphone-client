import {axiosPost} from '@/lib/ajax'
import {system} from '@/lib/config'
// -------------------------- 当天普通福利 ------------------------------
//查询当天普通福利
export const queryMemberGoodsReport = (dateTime) => {
  return axiosPost(`/${system}/report/queryMemberGoodsReport`, {dateTime}).then(res=> {
    if (res.dayReport) {
      return res
    } else return null
  });
}

//查询当天历史普通福利
export const queryMemberGoodsReportList = (dateTime) => {
  return axiosPost(`/${system}/report/queryMemberGoodsReportList`, {dateTime})
}

//提交当天普通福利 （行政）
export const sumbitMemberDayReport = (report) => {
  return axiosPost(`/${system}/report/sumbitMemberDayReport`, {report: JSON.stringify(report)}).then(res=> {
    if (res.dayReport) {
      return res
    } else return null
  });
}

//提交当天普通福利 （财务）
export const sumbitFinancalMemberDayReport = (params) => {
  return axiosPost(`/${system}/report/sumbitFinancalMemberDayReport`, params)
}

//根据WorkId查找表格 （财务）
export const queryFinaicalMemberGoodsReport = (params) => {
  return axiosPost(`/${system}/report/queryFinaicalMemberGoodsReport`, params)
}

// -------------------------- 当天特价福利 ------------------------------

//查询当天特价福利
export const querySalesGoodsReport = (dateTime) => {
  return axiosPost(`/${system}/report/querySalesGoodsReport`, {dateTime}).then(res=> {
    if (res.dayReport) {
      return res
    } else return null
  });
}
//查询当天历史特价福利
export const querySaleGoodsReportList = (dateTime) => {
  return axiosPost(`/${system}/report/querySaleGoodsReportList`, {dateTime})
}
//提交当天历史特价福利 （行政）
export const sumbitSaleDayReport = (report) => {
  return axiosPost(`/${system}/report/sumbitSaleDayReport`, {report: JSON.stringify(report)}).then(res=> {
    if (res.dayReport) {
      return res
    } else return null
  });
}

//提交当天特价福利 （财务）
export const sumbitFinancalSaleDayReport = (params) => {
  return axiosPost(`/${system}/report/sumbitFinancalSaleDayReport`, params)
}
//根据WorkId查找表格 （财务）
export const queryFinancalSalesGoodsReport = (params) => {
  return axiosPost(`/${system}/report/queryFinancalSalesGoodsReport`, params)
}

// -------------------------- 当月普通福利 ------------------------------

//查询当月普通福利
export const getMonthReport = (month) => {
  return axiosPost(`/${system}/report/getMonthReport`, {month}).then(res=> {
    if (res.saleGodds || res.memberGoods) {
      return res
    } else return null
  });
}
//查询当月历史普通福利
export const queryMonthGoodsReportList = (dateTime) => {
  return axiosPost(`/${system}/report/queryMonthGoodsReportList`, {dateTime})
}
//提交当月 - 行政
export const sumbitMonthReport = (report) => {
  return axiosPost(`/${system}/report/sumbitMonthReport`, {report: JSON.stringify(report)})
}

//提交当月福利 （财务）
export const sumbitFinancalMonthReport = (params) => {
  return axiosPost(`/${system}/report/sumbitFinancalMonthReport`, params)
}
//根据WorkId查找表格 （财务）
export const queryMonthFinancialReport = (params) => {
  return axiosPost(`/${system}/report/queryMonthFinancialReport`, params)
}
