export default class Request
{
  constructor(url, method = "GET", body = null, headers = {})
  {
    this.body = body;
    this.headers = headers;
    this.method = method;
    this.url = url;

    console.log(this);
  }
}
