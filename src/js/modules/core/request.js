export default class Request
{
  constructor(url, method = "GET", body = null, headers = {})
  {
    this.body = body;
    this.headers = headers;
    this.method = method;
    this.url = url;
    this.xhr = new XMLHttpRequest();
  }
  send()
  {
    return new Promise((resolve, reject) => {

      this.xhr.open(this.method, this.url, true);
      for (let prop in this.headers)
      {
        if (this.headers.hasOwnProperty(prop))
        {
          this.xhr.setRequestHeader(prop, this.headers[prop]);
        }
      }
      this.xhr.onreadystatechange = () => {

        var error;

        error = false;
        if (this.xhr.readyState === 4)
        {
          if (this.xhr.status >= 400 || this.xhr.status === 0)
          {
            reject(this.xhr);
          }
          else
          {
            resolve(this.xhr);
          }
        }
      };
      if (this.body !== null)
      {
        this.xhr.send(this.body);
      }
      else
      {
        this.xhr.send();
      }
    });
  }
  setBody(body)
  {
    this.body = body;
    return this;
  }
  setHeaders(headers)
  {
    if (headers instanceof Object)
    {
      for (let prop in headers)
      {
        if (headers.hasOwnProperty(prop))
        {
          this.headers[prop] = headers[prop];
        }
      }
    }
    return this;
  }
  setMethod(method)
  {
    this.method = method;
    return this;
  }
  setURL(url)
  {
    this.url = url;
    return this;
  }
}
