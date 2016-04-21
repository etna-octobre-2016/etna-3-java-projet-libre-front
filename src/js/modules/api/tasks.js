import request from "modules/core/request.js";
import response from "modules/api/response.js";

export default class Tasks
{
  static fetchByTaskList(taskList)
  {
    return new Promise(function(resolve, reject){

      var headers,
          req;

      headers = {
        "Content-Type": "application/json"
      };
      req = new request(`@@API_BASE_URL/lists/${taskList.idlist}/tasks`, "GET", null, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
  static create(task)
  {
    return new Promise(function(resolve, reject){

      var body,
          headers,
          req;

      body = JSON.stringify(task);
      headers = {
        "Content-Type": "application/json"
      };
      req = new request("@@API_BASE_URL/tasks", "POST", body, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
}
