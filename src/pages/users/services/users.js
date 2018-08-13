import { PAGE_SIZE } from '../constants';
import request from '../../../utils/request';
export function fetch({ page = 1 }) {
  return request(`/users?_page=${page}&_limit=${PAGE_SIZE}`);
}
export function remove(id) {
  return request(`/users/${id}`),{
    method: 'DELETE'
  }
}
export function patch(id, values) {
  return request(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}
