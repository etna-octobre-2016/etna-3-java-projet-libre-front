import request from "modules/core/request.js";
import response from "modules/api/response.js";

export default class Auth
{
  static login(credentials)
  {
    return new Promise(function(resolve, reject){
      
      var body,
          headers,
          req;

      body = JSON.stringify({
        email: credentials.email,
        password: credentials.password
      });
      headers = {
        "Content-Type": "application/json"
      };
      req = new request("@@API_BASE_URL/login", "POST", body, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
  static signup(account)
  {
    return new Promise(function(resolve, reject){
      
      var body,
          headers,
          req;

      body = JSON.stringify({
        email: account.email,
        password: account.password,
        userName: account.username
      });
      headers = {
        "Content-Type": "application/json"
      };
      req = new request("@@API_BASE_URL/createUser", "POST", body, headers);
      req.send().then(
        response.validate.bind(null, resolve, reject),
        response.validate.bind(null, resolve, reject)
      );
    });
  }
}