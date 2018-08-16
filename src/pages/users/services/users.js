import { PAGE_SIZE } from '../../../constants';
import ajax from '../../../utils/request';

export function fetch({ page = 1 }) {
  return ajax.get(`/users?_page=${page}&_limit=${PAGE_SIZE}`);
}
export function remove(id) {
  return ajax(`/users/${id}`),{
    method: 'DELETE'
  }
}
export function patch(id, values) {
  return ajax(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}
export function create(values) {
  return ajax('/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
