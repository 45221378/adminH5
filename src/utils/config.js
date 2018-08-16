let baseURL;
// console.log(process.env);
// console.log(process.env.API);
switch (process.env.API_ENV) {
  case "dev":
    baseURL = "http://jsonplaceholder.typicode.com";
    break;
  case "test":
    baseURL = "http://jsonplaceholder.typicode.com";
    break;
  case "uat":
    baseURL = "http://jsonplaceholder.typicode.com";
    break;
  default:
    baseURL = "http://jsonplaceholder.typicode.com";
}
export default baseURL;
