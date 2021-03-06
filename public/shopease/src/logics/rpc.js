/**
 * Created by tdzl2003 on 6/18/16.
 */

import URI from 'urijs';

async function request(url, _options) {
  const uri = new URI(url);

  const options = _options || {};
  options.method = options.method || 'GET';
  options.headers = options.headers || {};


  if (__DEV__) {
    console.log(`${options.method} ${uri}`);
    if (options.body) {
      console.log(options.body);
    }
  }

  const resp = await fetch(uri.toString(), options);
  console.log(resp);
  const text = await resp.text();
  const json = JSON.parse(text);
  console.log(json);
  return json;
}

export function get(url, options) {
  return request(url, options);
}

export function post(url, data, options) {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
}

export function put(url, data, options) {
  return request(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
}


export function del(url, data, options) {
  return request(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
}

