import request from "modules/core/request.js";
import response from "modules/api/response.js";

export default class TaskCategories
{
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
      req = new request("@@API_BASE_URL/category", "POST", body, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
}
