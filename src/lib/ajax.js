import axios from 'axios';
import {hostUrl} from './config';
import Router from 'vue-router'

export const axiosPost = (url, params) => {
  const _url = hostUrl + url;
  return axios.post(_url, params).then(function(response) {
    const res = response.data;
    return res
  })
}
export const axiosPut = (url, params) => {
  const _url = hostUrl + url;
  return axios.put(_url, params).then(function(response) {
    const res = response.data;
    return res
  })
}

export const axiosPatch = (url, params) => {
  const _url = hostUrl + url;
  return axios.patch(_url, params).then(function(response) {
    const res = response.data;
    return res
  })
}
export const axiosDel = (url, params = '') => {
  const _url = hostUrl + url + params;
  return axios.delete(_url).then(function(response) {
    const res = response.data;
    return res
  })
}
export const axiosGet = (url, params = '') => {
  const _url = hostUrl + url + params;
  return axios.get(_url).then(function(response) {
    const res = response.data;
    return res
  })
}
