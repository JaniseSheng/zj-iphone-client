import axios from 'axios';
import {hostUrl} from './config';
import storage from '@/lib/storagejs';
import Router from 'vue-router'
import Message from '~/iview/src/components/message'

export const axiosPost = (url, params) => {
  const _route = new Router();
  const _url = hostUrl + url;
  let form_data = new FormData();
  for ( var key in params ) {
      form_data.append(key, params[key]);
  }
  const _axios = axios.create({
    timeout: 15000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
  });
  const requestData = !params ? params : form_data
  return _axios.post(_url, requestData).then(function(response) {
    const res = response.data;
    if (res.code == '0' || res.code == '587989015') {  // '587989015'会员卡重复标识
      return res.data || res;
    }
    throw res.message;
  }).catch(function(error) {
    let _err = error;
    try {
      if (error.response.data.code == '-1') {
        _route.push('/login');
        storage.set('islogin', false);
        _err = '登录超时!'
      }
      if (error.response.status == '404') {
        _err = '服务器链接失败!'
      }
      if (error.response.status == '400') {
        _err = '传送参数有误'
      }
      if (error.response.status == '500') {
        _err = '内部服务器错误 '
      }
      if (error.response.status == '504') {
        _err = '请求超时'
      }
    } catch (e) {
      Message.error(_err);
    }
    Message.error(_err);
    throw error;
  });
}

export const axiosGet = (url, params = {}) => {
    // let form_data = new FormData();
    // for ( var key in params ) {
    //     form_data.append(key, params[key]);
    // }
    return axios.get(hostUrl + url, params)
}
