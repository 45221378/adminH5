let  baseURL;
switch (process.env.API_ENV){
  case 'dev':
    // baseURL = 'http://www.1v1.one:9191/hxj_srv/';

    baseURL = 'http://www.1v1.one:9191/hxj_srv/';
    break;
  case 'test':
    baseURL = 'http://www.1v1.one:9191/hxj_srv/';
    break;
  case 'uat':
    baseURL = 'http://www.1v1.one:1839/hxj_srv/';
    break;
  default:
    baseURL = 'http://39.106.112.1/flowService/';
}
export default baseURL;
