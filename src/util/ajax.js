import axios from 'axios'
const ajaxUrl = 'https://admin.dlheart.com';
// const ajaxUrl = 'http://192.168.2.120:8080';
// eslint-disable-next-line no-undef
let ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 60000
    // withCredentials: true,
    // crossDomain: true
});
// http请求拦截器
ajax.interceptors.request.use(config => {
    /*if (config.url.indexOf('/web/permissions/login') === -1) {
      let token = $.cookie('token');
        if (token !== 'null' && token !== undefined) {
          config.headers['login-token'] = token
        }
    }*/
    return config
});
// http响应拦截器
ajax.interceptors.response.use(data => {
    var returnData;
    if (typeof data === 'object') {
        returnData = data
    } else {
        returnData = JSON.parse(data)
    }
    if (returnData.data.code === 4003) { // 验证token是否失效
        // localStorage.setItem('isTimeOut', true)
        // localStorage.removeItem('menu')
        window.location.href = 'login.html';
        return Promise.reject(returnData)
    } else {
        return returnData
    }
});
export default ajax

