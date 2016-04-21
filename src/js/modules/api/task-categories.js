import request from "modules/core/request.js";
import response from "modules/api/response.js";

export default class TaskCategories
{
  static fetch(category)
  {
    return new Promise(function(resolve, reject){

      var headers,
          req;

      headers = {
        "Content-Type": "application/json"
      };
      req = new request(`@@API_BASE_URL/categories/${category.idcategory}`, "GET", null, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
  static fetchAll()
  {
    return new Promise(function(resolve, reject){

      var headers,
          req;

      headers = {
        "Content-Type": "application/json"
      };
      req = new request("@@API_BASE_URL/categories", "GET", null, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
  static create(category)
  {
    return new Promise(function(resolve, reject){

      var body,
          headers,
          req;

      body = JSON.stringify(category);
      headers = {
        "Content-Type": "application/json"
      };
      req = new request("@@API_BASE_URL/categories", "POST", body, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
  static remove(category)
  {
    return new Promise(function(resolve, reject){

      var body,
          headers,
          req;

      body = JSON.stringify(category);
      headers = {
        "Content-Type": "application/json"
      };
      req = new request("@@API_BASE_URL/categories", "DELETE", body, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
}
