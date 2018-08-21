import ajax from '../../../utils/ajax';

export function getToken(data) {
  console.log(data);
  // return ajax(`http://www.1v1.one:9902/v2/rest/getToken/`);

  return ajax({
    url: 'http://www.1v1.one:9902/v2/rest/getToken/',
    method: 'POST',
    data,
  })
}

