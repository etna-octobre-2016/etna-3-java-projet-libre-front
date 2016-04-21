import request from "modules/core/request.js";
import response from "modules/api/response.js";

export default class TaskLists
{
  static fetchByCategory(category)
  {
    return new Promise(function(resolve, reject){

      var headers,
          req;

      headers = {
        "Content-Type": "application/json"
      };
      req = new request(`@@API_BASE_URL/categories/${category.idcategory}/lists`, "GET", null, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
  static create(list)
  {
    return new Promise(function(resolve, reject){

      var body,
          headers,
          req;

      body = JSON.stringify(list);
      headers = {
        "Content-Type": "application/json"
      };
      req = new request("@@API_BASE_URL/lists", "POST", body, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
}
