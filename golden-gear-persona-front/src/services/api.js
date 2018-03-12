const url = "http://localhost:8001";
// l
class Api {

  put(route, params) {
    return this.api(route, params, 'PUT');
  }

  delete(route, params) {
    return this.api(route, params, 'DELETE');
  }

  post(route, params) {
    return this.api(route, params, 'POST');
  }

  get(route) {
    return this.api(route, null, 'GET');
  }

  api(route, params, method) {
    let headers = null;
    headers = {
        'Content-Type': 'application/json',
      }
    params = params ? params : null;
    const options = Object.assign({ method: method }, { headers: headers }, params ? { body: JSON.stringify(params)} : null);
    route = `${url}${route}`;
    try {
      return fetch(route, options).then(res => {
        switch (res.status) {
          case 200:
          case 201:
          case 422: {
              return res.json();
          }
          case 401: {
            return Promise.reject();
          }
          case 403: {
            return res.json();
          }
          case 404: {
            return res.json();
          }
          default: {
            return res.json();
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Api();