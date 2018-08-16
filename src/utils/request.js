import axios from 'axios';
// import store from '../index';
import { Toast } from 'antd-mobile';
// import qs from 'qs';
import baseURL from '../utils/config';
// import getSign from './getSign';
import { shim } from 'promise.prototype.finally';
shim();
const time = 3;
const ajax = axios.create({
  baseURL,
  // transformRequest: [
  //   function(data) {
  //     return qs.stringify(getSign(data)); //只适用于put，post,patch方法
  //   },
  // ],
});
ajax.interceptors.request.use(
  function(config) {
    Toast.loading('加载中', 0);
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    Toast.hide();
    return Promise.reject(error);
  }
);
ajax.interceptors.response.use(
  function(response) {
    const { head = {}, body = {} } = response.data;
    const { retCode, msg } = head;
    if (retCode === 'success') {
      Toast.hide();
      return body;
    } else {
      Toast.hide();
      Toast.info(msg, time);
    }
    return Promise.reject(response.data);
  },
  function(error) {
    const { response, request } = error;
    Toast.hide();
    if (!response) {
      const { status } = request;
      Toast.offline(`${status}:网络连接失败`);
    } else {
      const { status } = response;
      Toast.offline(`${status}:网络连接失败`);
    }
    return Promise.reject(error);
  }
);
export { baseURL };
export default ajax;
