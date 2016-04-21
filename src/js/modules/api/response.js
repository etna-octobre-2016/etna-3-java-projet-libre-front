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
        var data = (typeof response.data === "string") ? JSON.parse(response.data) : response.data; // TODO: remove this monkey patch when the back end is fixed

        resolve({
          // data: response.data,
          data: data,
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
