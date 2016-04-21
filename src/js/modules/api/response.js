export default class Response
{
  static validate(resolve, reject, xhr)
  {
    var response;
    
    try 
    {
      response = JSON.parse(xhr.responseText);
      if (typeof response.status === "string")
      {
        resolve({
          data: response.data,
          message: response.message,
          status: response.status,
          xhr: xhr
        });
      }
      else
      {
        reject({
          error: new Error("bad JSON response format"),
          cause: "no status code in the response"
        });
      }
    }
    catch (e)
    {
      reject({
        error: new Error("error during JSON response parsing"),
        cause: e.message
      });
    }
  }
}