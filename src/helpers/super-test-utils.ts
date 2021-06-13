import _ from "lodash";

export const checkStatusCode = function (res: any, expectedStatus: any = 200) {
  if (res.status === expectedStatus) {
    return res
  };
  var description = res.req.method + ' ' + res.req.path;
  var header = res.req._header;
  var data = (res.request && !!res.body) ? res.body : "null";
  var paddedDataStr = (data && _.isPlainObject(data)) ? (' ' + JSON.stringify(data)) : '';
  var resStr = (_.isPlainObject(res.body) ? JSON.stringify(res.body) : res.body);
  console.log(data);
  throw new Error(`
  description: ${description} 
  header: ${header} 
  expected status code: ${expectedStatus}.
  actual status code: ${res.statusCode}
  paddedDataStr: ${paddedDataStr}
  Reason: ${resStr}`);
};