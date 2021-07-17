import {
    UNSPLASH_BASE_URL,
    UNSPLASH_COMMON_HEADERS
  } from '../stale';
  
  function api(path, success) {
    return fetch(`${UNSPLASH_BASE_URL}${path}`, {
      headers: UNSPLASH_COMMON_HEADERS
    }).then(res => res.json())
    .then(success) 
  }
  
  export default api;
  