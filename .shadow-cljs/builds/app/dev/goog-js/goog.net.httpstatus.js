["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/httpstatus.js"],"~:js","goog.provide(\"goog.net.HttpStatus\");\n/** @enum {number} */ goog.net.HttpStatus = {CONTINUE:100, SWITCHING_PROTOCOLS:101, OK:200, CREATED:201, ACCEPTED:202, NON_AUTHORITATIVE_INFORMATION:203, NO_CONTENT:204, RESET_CONTENT:205, PARTIAL_CONTENT:206, MULTI_STATUS:207, MULTIPLE_CHOICES:300, MOVED_PERMANENTLY:301, FOUND:302, SEE_OTHER:303, NOT_MODIFIED:304, USE_PROXY:305, TEMPORARY_REDIRECT:307, BAD_REQUEST:400, UNAUTHORIZED:401, PAYMENT_REQUIRED:402, FORBIDDEN:403, NOT_FOUND:404, METHOD_NOT_ALLOWED:405, NOT_ACCEPTABLE:406, PROXY_AUTHENTICATION_REQUIRED:407, \nREQUEST_TIMEOUT:408, CONFLICT:409, GONE:410, LENGTH_REQUIRED:411, PRECONDITION_FAILED:412, REQUEST_ENTITY_TOO_LARGE:413, REQUEST_URI_TOO_LONG:414, UNSUPPORTED_MEDIA_TYPE:415, REQUEST_RANGE_NOT_SATISFIABLE:416, EXPECTATION_FAILED:417, UNPROCESSABLE_ENTITY:422, LOCKED:423, FAILED_DEPENDENCY:424, PRECONDITION_REQUIRED:428, TOO_MANY_REQUESTS:429, REQUEST_HEADER_FIELDS_TOO_LARGE:431, INTERNAL_SERVER_ERROR:500, NOT_IMPLEMENTED:501, BAD_GATEWAY:502, SERVICE_UNAVAILABLE:503, GATEWAY_TIMEOUT:504, HTTP_VERSION_NOT_SUPPORTED:505, \nINSUFFICIENT_STORAGE:507, NETWORK_AUTHENTICATION_REQUIRED:511, QUIRK_IE_NO_CONTENT:1223};\n/**\n * @param {number} status\n * @return {boolean}\n */\ngoog.net.HttpStatus.isSuccess = function(status) {\n  switch(status) {\n    case goog.net.HttpStatus.OK:\n    case goog.net.HttpStatus.CREATED:\n    case goog.net.HttpStatus.ACCEPTED:\n    case goog.net.HttpStatus.NO_CONTENT:\n    case goog.net.HttpStatus.PARTIAL_CONTENT:\n    case goog.net.HttpStatus.NOT_MODIFIED:\n    case goog.net.HttpStatus.QUIRK_IE_NO_CONTENT:\n      return true;\n    default:\n      return false;\n  }\n};\n","~:source","// Copyright 2011 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Constants for HTTP status codes.\n */\n\ngoog.provide('goog.net.HttpStatus');\n\n\n/**\n * HTTP Status Codes defined in RFC 2616, RFC 6585, and RFC 4918.\n * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html\n * @see http://tools.ietf.org/html/rfc6585\n * @see https://tools.ietf.org/html/rfc4918\n * @enum {number}\n */\ngoog.net.HttpStatus = {\n  // Informational 1xx\n  CONTINUE: 100,\n  SWITCHING_PROTOCOLS: 101,\n\n  // Successful 2xx\n  OK: 200,\n  CREATED: 201,\n  ACCEPTED: 202,\n  NON_AUTHORITATIVE_INFORMATION: 203,\n  NO_CONTENT: 204,\n  RESET_CONTENT: 205,\n  PARTIAL_CONTENT: 206,\n  MULTI_STATUS: 207,\n\n  // Redirection 3xx\n  MULTIPLE_CHOICES: 300,\n  MOVED_PERMANENTLY: 301,\n  FOUND: 302,\n  SEE_OTHER: 303,\n  NOT_MODIFIED: 304,\n  USE_PROXY: 305,\n  TEMPORARY_REDIRECT: 307,\n\n  // Client Error 4xx\n  BAD_REQUEST: 400,\n  UNAUTHORIZED: 401,\n  PAYMENT_REQUIRED: 402,\n  FORBIDDEN: 403,\n  NOT_FOUND: 404,\n  METHOD_NOT_ALLOWED: 405,\n  NOT_ACCEPTABLE: 406,\n  PROXY_AUTHENTICATION_REQUIRED: 407,\n  REQUEST_TIMEOUT: 408,\n  CONFLICT: 409,\n  GONE: 410,\n  LENGTH_REQUIRED: 411,\n  PRECONDITION_FAILED: 412,\n  REQUEST_ENTITY_TOO_LARGE: 413,\n  REQUEST_URI_TOO_LONG: 414,\n  UNSUPPORTED_MEDIA_TYPE: 415,\n  REQUEST_RANGE_NOT_SATISFIABLE: 416,\n  EXPECTATION_FAILED: 417,\n  UNPROCESSABLE_ENTITY: 422,\n  LOCKED: 423,\n  FAILED_DEPENDENCY: 424,\n  PRECONDITION_REQUIRED: 428,\n  TOO_MANY_REQUESTS: 429,\n  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,\n\n  // Server Error 5xx\n  INTERNAL_SERVER_ERROR: 500,\n  NOT_IMPLEMENTED: 501,\n  BAD_GATEWAY: 502,\n  SERVICE_UNAVAILABLE: 503,\n  GATEWAY_TIMEOUT: 504,\n  HTTP_VERSION_NOT_SUPPORTED: 505,\n  INSUFFICIENT_STORAGE: 507,\n  NETWORK_AUTHENTICATION_REQUIRED: 511,\n\n  /*\n   * IE returns this code for 204 due to its use of URLMon, which returns this\n   * code for 'Operation Aborted'. The status text is 'Unknown', the response\n   * headers are ''. Known to occur on IE 6 on XP through IE9 on Win7.\n   */\n  QUIRK_IE_NO_CONTENT: 1223\n};\n\n\n/**\n * Returns whether the given status should be considered successful.\n *\n * Successful codes are OK (200), CREATED (201), ACCEPTED (202),\n * NO CONTENT (204), PARTIAL CONTENT (206), NOT MODIFIED (304),\n * and IE's no content code (1223).\n *\n * @param {number} status The status code to test.\n * @return {boolean} Whether the status code should be considered successful.\n */\ngoog.net.HttpStatus.isSuccess = function(status) {\n  switch (status) {\n    case goog.net.HttpStatus.OK:\n    case goog.net.HttpStatus.CREATED:\n    case goog.net.HttpStatus.ACCEPTED:\n    case goog.net.HttpStatus.NO_CONTENT:\n    case goog.net.HttpStatus.PARTIAL_CONTENT:\n    case goog.net.HttpStatus.NOT_MODIFIED:\n    case goog.net.HttpStatus.QUIRK_IE_NO_CONTENT:\n      return true;\n\n    default:\n      return false;\n  }\n};\n","~:compiled-at",1596107158285,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.httpstatus.js\",\n\"lineCount\":23,\n\"mappings\":\"AAkBAA,IAAAC,QAAA,CAAa,qBAAb,CAAA;AAUA,sBAAAD,IAAAE,IAAAC,WAAA,GAAsB,CAEpBC,SAAU,GAFU,EAGpBC,oBAAqB,GAHD,EAMpBC,GAAI,GANgB,EAOpBC,QAAS,GAPW,EAQpBC,SAAU,GARU,EASpBC,8BAA+B,GATX,EAUpBC,WAAY,GAVQ,EAWpBC,cAAe,GAXK,EAYpBC,gBAAiB,GAZG,EAapBC,aAAc,GAbM,EAgBpBC,iBAAkB,GAhBE,EAiBpBC,kBAAmB,GAjBC,EAkBpBC,MAAO,GAlBa,EAmBpBC,UAAW,GAnBS,EAoBpBC,aAAc,GApBM,EAqBpBC,UAAW,GArBS,EAsBpBC,mBAAoB,GAtBA,EAyBpBC,YAAa,GAzBO,EA0BpBC,aAAc,GA1BM,EA2BpBC,iBAAkB,GA3BE,EA4BpBC,UAAW,GA5BS,EA6BpBC,UAAW,GA7BS,EA8BpBC,mBAAoB,GA9BA,EA+BpBC,eAAgB,GA/BI,EAgCpBC,8BAA+B,GAhCX;AAiCpBC,gBAAiB,GAjCG,EAkCpBC,SAAU,GAlCU,EAmCpBC,KAAM,GAnCc,EAoCpBC,gBAAiB,GApCG,EAqCpBC,oBAAqB,GArCD,EAsCpBC,yBAA0B,GAtCN,EAuCpBC,qBAAsB,GAvCF,EAwCpBC,uBAAwB,GAxCJ,EAyCpBC,8BAA+B,GAzCX,EA0CpBC,mBAAoB,GA1CA,EA2CpBC,qBAAsB,GA3CF,EA4CpBC,OAAQ,GA5CY,EA6CpBC,kBAAmB,GA7CC,EA8CpBC,sBAAuB,GA9CH,EA+CpBC,kBAAmB,GA/CC,EAgDpBC,gCAAiC,GAhDb,EAmDpBC,sBAAuB,GAnDH,EAoDpBC,gBAAiB,GApDG,EAqDpBC,YAAa,GArDO,EAsDpBC,oBAAqB,GAtDD,EAuDpBC,gBAAiB,GAvDG,EAwDpBC,2BAA4B,GAxDR;AAyDpBC,qBAAsB,GAzDF,EA0DpBC,gCAAiC,GA1Db,EAiEpBC,oBAAqB,IAjED,CAAtB;AA+EA;;;;AAAArD,IAAAE,IAAAC,WAAAmD,UAAA,GAAgCC,QAAQ,CAACC,MAAD,CAAS;AAC/C,SAAQA,MAAR;AACE,SAAKxD,IAAAE,IAAAC,WAAAG,GAAL;AACA,SAAKN,IAAAE,IAAAC,WAAAI,QAAL;AACA,SAAKP,IAAAE,IAAAC,WAAAK,SAAL;AACA,SAAKR,IAAAE,IAAAC,WAAAO,WAAL;AACA,SAAKV,IAAAE,IAAAC,WAAAS,gBAAL;AACA,SAAKZ,IAAAE,IAAAC,WAAAe,aAAL;AACA,SAAKlB,IAAAE,IAAAC,WAAAkD,oBAAL;AACE,aAAO,IAAP;AAEF;AACE,aAAO,KAAP;AAXJ;AAD+C,CAAjD;;\",\n\"sources\":[\"goog/net/httpstatus.js\"],\n\"sourcesContent\":[\"// Copyright 2011 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Constants for HTTP status codes.\\n */\\n\\ngoog.provide('goog.net.HttpStatus');\\n\\n\\n/**\\n * HTTP Status Codes defined in RFC 2616, RFC 6585, and RFC 4918.\\n * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html\\n * @see http://tools.ietf.org/html/rfc6585\\n * @see https://tools.ietf.org/html/rfc4918\\n * @enum {number}\\n */\\ngoog.net.HttpStatus = {\\n  // Informational 1xx\\n  CONTINUE: 100,\\n  SWITCHING_PROTOCOLS: 101,\\n\\n  // Successful 2xx\\n  OK: 200,\\n  CREATED: 201,\\n  ACCEPTED: 202,\\n  NON_AUTHORITATIVE_INFORMATION: 203,\\n  NO_CONTENT: 204,\\n  RESET_CONTENT: 205,\\n  PARTIAL_CONTENT: 206,\\n  MULTI_STATUS: 207,\\n\\n  // Redirection 3xx\\n  MULTIPLE_CHOICES: 300,\\n  MOVED_PERMANENTLY: 301,\\n  FOUND: 302,\\n  SEE_OTHER: 303,\\n  NOT_MODIFIED: 304,\\n  USE_PROXY: 305,\\n  TEMPORARY_REDIRECT: 307,\\n\\n  // Client Error 4xx\\n  BAD_REQUEST: 400,\\n  UNAUTHORIZED: 401,\\n  PAYMENT_REQUIRED: 402,\\n  FORBIDDEN: 403,\\n  NOT_FOUND: 404,\\n  METHOD_NOT_ALLOWED: 405,\\n  NOT_ACCEPTABLE: 406,\\n  PROXY_AUTHENTICATION_REQUIRED: 407,\\n  REQUEST_TIMEOUT: 408,\\n  CONFLICT: 409,\\n  GONE: 410,\\n  LENGTH_REQUIRED: 411,\\n  PRECONDITION_FAILED: 412,\\n  REQUEST_ENTITY_TOO_LARGE: 413,\\n  REQUEST_URI_TOO_LONG: 414,\\n  UNSUPPORTED_MEDIA_TYPE: 415,\\n  REQUEST_RANGE_NOT_SATISFIABLE: 416,\\n  EXPECTATION_FAILED: 417,\\n  UNPROCESSABLE_ENTITY: 422,\\n  LOCKED: 423,\\n  FAILED_DEPENDENCY: 424,\\n  PRECONDITION_REQUIRED: 428,\\n  TOO_MANY_REQUESTS: 429,\\n  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,\\n\\n  // Server Error 5xx\\n  INTERNAL_SERVER_ERROR: 500,\\n  NOT_IMPLEMENTED: 501,\\n  BAD_GATEWAY: 502,\\n  SERVICE_UNAVAILABLE: 503,\\n  GATEWAY_TIMEOUT: 504,\\n  HTTP_VERSION_NOT_SUPPORTED: 505,\\n  INSUFFICIENT_STORAGE: 507,\\n  NETWORK_AUTHENTICATION_REQUIRED: 511,\\n\\n  /*\\n   * IE returns this code for 204 due to its use of URLMon, which returns this\\n   * code for 'Operation Aborted'. The status text is 'Unknown', the response\\n   * headers are ''. Known to occur on IE 6 on XP through IE9 on Win7.\\n   */\\n  QUIRK_IE_NO_CONTENT: 1223\\n};\\n\\n\\n/**\\n * Returns whether the given status should be considered successful.\\n *\\n * Successful codes are OK (200), CREATED (201), ACCEPTED (202),\\n * NO CONTENT (204), PARTIAL CONTENT (206), NOT MODIFIED (304),\\n * and IE's no content code (1223).\\n *\\n * @param {number} status The status code to test.\\n * @return {boolean} Whether the status code should be considered successful.\\n */\\ngoog.net.HttpStatus.isSuccess = function(status) {\\n  switch (status) {\\n    case goog.net.HttpStatus.OK:\\n    case goog.net.HttpStatus.CREATED:\\n    case goog.net.HttpStatus.ACCEPTED:\\n    case goog.net.HttpStatus.NO_CONTENT:\\n    case goog.net.HttpStatus.PARTIAL_CONTENT:\\n    case goog.net.HttpStatus.NOT_MODIFIED:\\n    case goog.net.HttpStatus.QUIRK_IE_NO_CONTENT:\\n      return true;\\n\\n    default:\\n      return false;\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"net\",\"HttpStatus\",\"CONTINUE\",\"SWITCHING_PROTOCOLS\",\"OK\",\"CREATED\",\"ACCEPTED\",\"NON_AUTHORITATIVE_INFORMATION\",\"NO_CONTENT\",\"RESET_CONTENT\",\"PARTIAL_CONTENT\",\"MULTI_STATUS\",\"MULTIPLE_CHOICES\",\"MOVED_PERMANENTLY\",\"FOUND\",\"SEE_OTHER\",\"NOT_MODIFIED\",\"USE_PROXY\",\"TEMPORARY_REDIRECT\",\"BAD_REQUEST\",\"UNAUTHORIZED\",\"PAYMENT_REQUIRED\",\"FORBIDDEN\",\"NOT_FOUND\",\"METHOD_NOT_ALLOWED\",\"NOT_ACCEPTABLE\",\"PROXY_AUTHENTICATION_REQUIRED\",\"REQUEST_TIMEOUT\",\"CONFLICT\",\"GONE\",\"LENGTH_REQUIRED\",\"PRECONDITION_FAILED\",\"REQUEST_ENTITY_TOO_LARGE\",\"REQUEST_URI_TOO_LONG\",\"UNSUPPORTED_MEDIA_TYPE\",\"REQUEST_RANGE_NOT_SATISFIABLE\",\"EXPECTATION_FAILED\",\"UNPROCESSABLE_ENTITY\",\"LOCKED\",\"FAILED_DEPENDENCY\",\"PRECONDITION_REQUIRED\",\"TOO_MANY_REQUESTS\",\"REQUEST_HEADER_FIELDS_TOO_LARGE\",\"INTERNAL_SERVER_ERROR\",\"NOT_IMPLEMENTED\",\"BAD_GATEWAY\",\"SERVICE_UNAVAILABLE\",\"GATEWAY_TIMEOUT\",\"HTTP_VERSION_NOT_SUPPORTED\",\"INSUFFICIENT_STORAGE\",\"NETWORK_AUTHENTICATION_REQUIRED\",\"QUIRK_IE_NO_CONTENT\",\"isSuccess\",\"goog.net.HttpStatus.isSuccess\",\"status\"]\n}\n"]