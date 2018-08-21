import request from '../../utils/request';

//
// const { api } = config
// const { userLogin } = api

export function login (data) {
  return request({
    url: 'user/login',
    method: 'post',
    data,
  })
}
