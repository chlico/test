import axios from 'axios'
import { Loading, Message } from 'element-ui'
let loading

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 15000 // request timeout
});
service.interceptors.request.use(
  config => {
    loading = Loading.service({
      fullscreen: true,
      background: 'rgba(0, 0, 0, 0)'
    });   
    return config;
  },
  error => {
    return Promise.reject(new Error(error || 'Error'));
  }
);
service.interceptors.response.use(
  response => {
    const res = response.data;
    loading.close();   
    return res;
  },
  err => {
    if ((err = 'Error: Request failed with status code 500')) {
      Message({
        message: '服务器错误,请联系管理员！',
        type: 'error',
        duration: 5 * 1000
      });
    }
    loading.close();
    return Promise.reject(err);
  }
);

export default service;
