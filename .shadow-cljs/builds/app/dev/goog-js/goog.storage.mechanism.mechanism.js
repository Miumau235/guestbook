["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/storage/mechanism/mechanism.js"],"~:js","goog.provide(\"goog.storage.mechanism.Mechanism\");\n/** @struct @constructor */ goog.storage.mechanism.Mechanism = function() {\n};\n/**\n * @param {string} key\n * @param {string} value\n */\ngoog.storage.mechanism.Mechanism.prototype.set = goog.abstractMethod;\n/**\n * @param {string} key\n * @return {?string}\n */\ngoog.storage.mechanism.Mechanism.prototype.get = goog.abstractMethod;\n/**\n * @param {string} key\n */\ngoog.storage.mechanism.Mechanism.prototype.remove = goog.abstractMethod;\n","~:source","// Copyright 2011 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Abstract interface for storing and retrieving data using\n * some persistence mechanism.\n *\n */\n\ngoog.provide('goog.storage.mechanism.Mechanism');\n\n\n\n/**\n * Basic interface for all storage mechanisms.\n *\n * @constructor\n * @struct\n */\ngoog.storage.mechanism.Mechanism = function() {};\n\n\n/**\n * Set a value for a key.\n *\n * @param {string} key The key to set.\n * @param {string} value The string to save.\n */\ngoog.storage.mechanism.Mechanism.prototype.set = goog.abstractMethod;\n\n\n/**\n * Get the value stored under a key.\n *\n * @param {string} key The key to get.\n * @return {?string} The corresponding value, null if not found.\n */\ngoog.storage.mechanism.Mechanism.prototype.get = goog.abstractMethod;\n\n\n/**\n * Remove a key and its value.\n *\n * @param {string} key The key to remove.\n */\ngoog.storage.mechanism.Mechanism.prototype.remove = goog.abstractMethod;\n","~:compiled-at",1596107158275,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.storage.mechanism.mechanism.js\",\n\"lineCount\":18,\n\"mappings\":\"AAoBAA,IAAAC,QAAA,CAAa,kCAAb,CAAA;AAUA,4BAAAD,IAAAE,QAAAC,UAAAC,UAAA,GAAmCC,QAAQ,EAAG;CAA9C;AASA;;;;AAAAL,IAAAE,QAAAC,UAAAC,UAAAE,UAAAC,IAAA,GAAiDP,IAAAQ,eAAjD;AASA;;;;AAAAR,IAAAE,QAAAC,UAAAC,UAAAE,UAAAG,IAAA,GAAiDT,IAAAQ,eAAjD;AAQA;;;AAAAR,IAAAE,QAAAC,UAAAC,UAAAE,UAAAI,OAAA,GAAoDV,IAAAQ,eAApD;;\",\n\"sources\":[\"goog/storage/mechanism/mechanism.js\"],\n\"sourcesContent\":[\"// Copyright 2011 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Abstract interface for storing and retrieving data using\\n * some persistence mechanism.\\n *\\n */\\n\\ngoog.provide('goog.storage.mechanism.Mechanism');\\n\\n\\n\\n/**\\n * Basic interface for all storage mechanisms.\\n *\\n * @constructor\\n * @struct\\n */\\ngoog.storage.mechanism.Mechanism = function() {};\\n\\n\\n/**\\n * Set a value for a key.\\n *\\n * @param {string} key The key to set.\\n * @param {string} value The string to save.\\n */\\ngoog.storage.mechanism.Mechanism.prototype.set = goog.abstractMethod;\\n\\n\\n/**\\n * Get the value stored under a key.\\n *\\n * @param {string} key The key to get.\\n * @return {?string} The corresponding value, null if not found.\\n */\\ngoog.storage.mechanism.Mechanism.prototype.get = goog.abstractMethod;\\n\\n\\n/**\\n * Remove a key and its value.\\n *\\n * @param {string} key The key to remove.\\n */\\ngoog.storage.mechanism.Mechanism.prototype.remove = goog.abstractMethod;\\n\"],\n\"names\":[\"goog\",\"provide\",\"storage\",\"mechanism\",\"Mechanism\",\"goog.storage.mechanism.Mechanism\",\"prototype\",\"set\",\"abstractMethod\",\"get\",\"remove\"]\n}\n"]