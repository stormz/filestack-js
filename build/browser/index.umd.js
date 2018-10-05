(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('filestack', ['exports'], factory) :
	(factory((global.filestack = {})));
}(this, (function (exports) { 'use strict';

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * getSecurity is disabled for browsers.
 */
var getSecurity = function () {
    console.warn('This method is only availale in Node runtimes');
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @private
 */
var PICKER_VERSION = '1.2.1';
/**
 * @private
 */
var config;
/* istanbul ignore next */
if (undefined === 'production') {
    config = {
        urls: {
            storeApiUrl: 'https://www.filestackapi.com/api/store',
            fileApiUrl: 'https://www.filestackapi.com/api/file',
            uploadApiUrl: 'https://upload.filestackapi.com',
            cloudApiUrl: 'https://cloud.filestackapi.com',
            cdnUrl: 'https://cdn.filestackcontent.com',
            processApiUrl: 'https://process.filestackapi.com',
            pickerUrl: "https://static.filestackapi.com/picker/" + PICKER_VERSION + "/picker.js",
        },
    };
}
else {
    config = {
        urls: {
            storeApiUrl: 'https://www.filestackapi.com/api/store',
            fileApiUrl: 'https://www.filestackapi.com/api/file',
            uploadApiUrl: 'https://upload.filestackapi.com',
            cloudApiUrl: 'https://cloud.filestackapi.com',
            cdnUrl: 'https://cdn.filestackcontent.com',
            processApiUrl: 'https://process.filestackapi.com',
            pickerUrl: "https://static.filestackapi.com/picker/" + PICKER_VERSION + "/picker.js",
        },
    };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var isFunction = function isFunction(x) {
  return typeof x === 'function';
};

var isNil = function isNil(x) {
  return x === null || x === void 0;
};

var fail = function fail(message) {
  throw new TypeError('[tcomb] ' + message);
};

var getFunctionName = function getFunctionName(f) {
  return f.displayName || f.name || '<function' + f.length + '>';
};

function replacer(key, value) {
  if (typeof value === 'function') {
    return getFunctionName(value);
  }
  return value;
}

var stringify = function stringify(x) {
  try { // handle "Converting circular structure to JSON" error
    return JSON.stringify(x, replacer, 2);
  }
  catch (e) {
    return String(x);
  }
};

function assert(guard, message) {
  if (guard !== true) {
    if (isFunction(message)) { // handle lazy messages
      message = message();
    }
    else if (isNil(message)) { // use a default message
      message = 'Assert failed (turn on "Pause on exceptions" in your Source panel)';
    }
    assert.fail(message);
  }
}

assert.fail = fail;
assert.stringify = stringify;

var assert_1 = assert;

var isString = function isString(x) {
  return typeof x === 'string';
};

var isArray = function isArray(x) {
  return Array.isArray ? Array.isArray(x) : x instanceof Array;
};

var isObject = function isObject(x) {
  return !isNil(x) && typeof x === 'object' && !isArray(x);
};

var isType = function isType(x) {
  return isFunction(x) && isObject(x.meta);
};

var getTypeName = function getTypeName(ctor) {
  if (isType(ctor)) {
    return ctor.displayName;
  }
  return getFunctionName(ctor);
};

var forbidNewOperator = function forbidNewOperator(x, type) {
  assert_1(!(x instanceof type), function () { return 'Cannot use the new operator to instantiate the type ' + getTypeName(type); });
};

var irreducible = function irreducible(name, predicate) {

  if (undefined !== 'production') {
    assert_1(isString(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to irreducible(name, predicate) (expected a string)'; });
    assert_1(isFunction(predicate), 'Invalid argument predicate ' + assert_1.stringify(predicate) + ' supplied to irreducible(name, predicate) (expected a function)');
  }

  function Irreducible(value, path) {

    if (undefined !== 'production') {
      forbidNewOperator(this, Irreducible);
      path = path || [name];
      assert_1(predicate(value), function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  Irreducible.meta = {
    kind: 'irreducible',
    name: name,
    predicate: predicate,
    identity: true
  };

  Irreducible.displayName = name;

  Irreducible.is = predicate;

  return Irreducible;
};

var Any = irreducible('Any', function () { return true; });

var _Array = irreducible('Array', isArray);

var isBoolean = function isBoolean(x) {
  return x === true || x === false;
};

var _Boolean = irreducible('Boolean', isBoolean);

var _Date = irreducible('Date', function (x) { return x instanceof Date; });

var _Error = irreducible('Error', function (x) { return x instanceof Error; });

var _Function = irreducible('Function', isFunction);

var Nil = irreducible('Nil', isNil);

var isNumber = function isNumber(x) {
  return typeof x === 'number' && isFinite(x) && !isNaN(x);
};

var _Number = irreducible('Number', isNumber);

var isTypeName = function isTypeName(name) {
  return isNil(name) || isString(name);
};

// return true if the type constructor behaves like the identity function
var isIdentity = function isIdentity(type) {
  if (isType(type)) {
    if (undefined !== 'production') {
      assert_1(_Boolean.is(type.meta.identity), function () { return 'Invalid meta identity ' + assert_1.stringify(type.meta.identity) + ' supplied to type ' + getTypeName(type); });
    }
    return type.meta.identity;
  }
  // for tcomb the other constructors, like ES6 classes, are identity-like
  return true;
};

// creates an instance of a type, handling the optional new operator
var create = function create(type, value, path) {
  if (isType(type)) {
    return !type.meta.identity && typeof value === 'object' && value !== null ? new type(value, path): type(value, path);
  }

  if (undefined !== 'production') {
    // here type should be a class constructor and value some instance, just check membership and return the value
    path = path || [getFunctionName(type)];
    assert_1(value instanceof type, function () { return 'Invalid value ' + stringify(value) + ' supplied to ' + path.join('/'); });
  }

  return value;
};

// returns true if x is an instance of type
var is = function is(x, type) {
  if (isType(type)) {
    return type.is(x);
  }
  return x instanceof type; // type should be a class constructor
};

function getDefaultName(type, predicate) {
  return '{' + getTypeName(type) + ' | ' + getFunctionName(predicate) + '}';
}

function refinement(type, predicate, name) {

  if (undefined !== 'production') {
    assert_1(isFunction(type), function () { return 'Invalid argument type ' + assert_1.stringify(type) + ' supplied to refinement(type, predicate, [name]) combinator (expected a type)'; });
    assert_1(isFunction(predicate), function () { return 'Invalid argument predicate supplied to refinement(type, predicate, [name]) combinator (expected a function)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to refinement(type, predicate, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type, predicate);
  var identity = isIdentity(type);

  function Refinement(value, path) {

    if (undefined !== 'production') {
      if (identity) {
        forbidNewOperator(this, Refinement);
      }
      path = path || [displayName];
    }

    var x = create(type, value, path);

    if (undefined !== 'production') {
      assert_1(predicate(x), function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return x;
  }

  Refinement.meta = {
    kind: 'subtype',
    type: type,
    predicate: predicate,
    name: name,
    identity: identity
  };

  Refinement.displayName = displayName;

  Refinement.is = function (x) {
    return is(x, type) && predicate(x);
  };

  Refinement.update = function (instance, patch) {
    return Refinement(assert_1.update(instance, patch));
  };

  return Refinement;
}

refinement.getDefaultName = getDefaultName;
var refinement_1 = refinement;

var Integer = refinement_1(_Number, function (x) { return x % 1 === 0; }, 'Integer');

var _Object = irreducible('Object', isObject);

var _RegExp = irreducible('RegExp', function (x) { return x instanceof RegExp; });

var _String = irreducible('String', isString);

var Type = irreducible('Type', isType);

function getDefaultName$1(domain, codomain) {
  return '{[key: ' + getTypeName(domain) + ']: ' + getTypeName(codomain) + '}';
}

function dict(domain, codomain, name) {

  if (undefined !== 'production') {
    assert_1(isFunction(domain), function () { return 'Invalid argument domain ' + assert_1.stringify(domain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert_1(isFunction(codomain), function () { return 'Invalid argument codomain ' + assert_1.stringify(codomain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to dict(domain, codomain, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName$1(domain, codomain);
  var domainNameCache = getTypeName(domain);
  var codomainNameCache = getTypeName(codomain);
  var identity = isIdentity(domain) && isIdentity(codomain);

  function Dict(value, path) {

    if (undefined === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (undefined !== 'production') {
      path = path || [displayName];
      assert_1(isObject(value), function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = {}; // make a temporary copy, will be discarded if idempotent remains true
    for (var k in value) {
      if (value.hasOwnProperty(k)) {
        k = create(domain, k, ( undefined !== 'production' ? path.concat(domainNameCache) : null ));
        var actual = value[k];
        var instance = create(codomain, actual, ( undefined !== 'production' ? path.concat(k + ': ' + codomainNameCache) : null ));
        idempotent = idempotent && ( actual === instance );
        ret[k] = instance;
      }
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (undefined !== 'production') {
      Object.freeze(ret);
    }

    return ret;
  }

  Dict.meta = {
    kind: 'dict',
    domain: domain,
    codomain: codomain,
    name: name,
    identity: identity
  };

  Dict.displayName = displayName;

  Dict.is = function (x) {
    if (!isObject(x)) {
      return false;
    }
    for (var k in x) {
      if (x.hasOwnProperty(k)) {
        if (!is(k, domain) || !is(x[k], codomain)) {
          return false;
        }
      }
    }
    return true;
  };

  Dict.update = function (instance, patch) {
    return Dict(assert_1.update(instance, patch));
  };

  return Dict;
}

dict.getDefaultName = getDefaultName$1;
var dict_1 = dict;

// safe mixin, cannot override props unless specified
var mixin = function mixin(target, source, overwrite) {
  if (isNil(source)) { return target; }
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      if (overwrite !== true) {
        if (undefined !== 'production') {
          assert_1(!target.hasOwnProperty(k) || target[k] === source[k], function () { return 'Invalid call to mixin(target, source, [overwrite]): cannot overwrite property "' + k + '" of target object'; });
        }
      }
      target[k] = source[k];
    }
  }
  return target;
};

var isUnion = function isUnion(x) {
  return isType(x) && ( x.meta.kind === 'union' );
};

// All the .declare-d types should be clearly different from each other thus they should have
// different names when a name was not explicitly provided.
var nextDeclareUniqueId = 1;

var declare = function declare(name) {
  if (undefined !== 'production') {
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + name + ' supplied to declare([name]) (expected a string)'; });
  }

  var type;

  function Declare(value, path) {
    if (undefined !== 'production') {
      assert_1(!isNil(type), function () { return 'Type declared but not defined, don\'t forget to call .define on every declared type'; });
      if (isUnion(type)) {
        assert_1(type.dispatch === Declare.dispatch, function () { return 'Please define the custom ' + name + '.dispatch function before calling ' + name + '.define()'; });
      }
    }
    return type(value, path);
  }

  Declare.define = function (spec) {
    if (undefined !== 'production') {
      assert_1(isType(spec), function () { return 'Invalid argument type ' + assert_1.stringify(spec) +  ' supplied to define(type) (expected a type)'; });
      assert_1(isNil(type), function () { return 'Declare.define(type) can only be invoked once'; });
      // assert(isNil(spec.meta.name) && Object.keys(spec.prototype).length === 0, function () { return 'Invalid argument type ' + assert.stringify(spec) + ' supplied to define(type) (expected a fresh, unnamed type)'; });
    }

    if (isUnion(spec) && Declare.hasOwnProperty('dispatch')) {
      spec.dispatch = Declare.dispatch;
    }
    type = spec;
    mixin(Declare, type, true); // true because it overwrites Declare.displayName
    if (name) {
      type.displayName = Declare.displayName = name;
      Declare.meta.name = name;
    }
    Declare.meta.identity = type.meta.identity;
    Declare.prototype = type.prototype;
    return Declare;
  };

  Declare.displayName = name || ( getTypeName(Declare) + "$" + nextDeclareUniqueId++ );
  // in general I can't say if this type will be an identity, for safety setting to false
  Declare.meta = { identity: false };
  Declare.prototype = null;
  return Declare;
};

function getDefaultName$2(map) {
  return Object.keys(map).map(function (k) { return assert_1.stringify(k); }).join(' | ');
}

function enums(map, name) {

  if (undefined !== 'production') {
    assert_1(isObject(map), function () { return 'Invalid argument map ' + assert_1.stringify(map) + ' supplied to enums(map, [name]) combinator (expected a dictionary of String -> String | Number)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to enums(map, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName$2(map);

  function Enums(value, path) {

    if (undefined !== 'production') {
      forbidNewOperator(this, Enums);
      path = path || [displayName];
      assert_1(Enums.is(value), function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/') + ' (expected one of ' + assert_1.stringify(Object.keys(map)) + ')'; });
    }

    return value;
  }

  Enums.meta = {
    kind: 'enums',
    map: map,
    name: name,
    identity: true
  };

  Enums.displayName = displayName;

  Enums.is = function (x) {
    return map.hasOwnProperty(x);
  };

  return Enums;
}

enums.of = function (keys, name) {
  keys = isString(keys) ? keys.split(' ') : keys;
  var value = {};
  keys.forEach(function (k) {
    value[k] = k;
  });
  return enums(value, name);
};

enums.getDefaultName = getDefaultName$2;
var enums_1 = enums;

function getDefaultName$3(type) {
  return 'Array<' + getTypeName(type) + '>';
}

function list(type, name) {

  if (undefined !== 'production') {
    assert_1(isFunction(type), function () { return 'Invalid argument type ' + assert_1.stringify(type) + ' supplied to list(type, [name]) combinator (expected a type)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to list(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName$3(type);
  var typeNameCache = getTypeName(type);
  var identity = isIdentity(type); // the list is identity iif type is identity

  function List(value, path) {

    if (undefined === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (undefined !== 'production') {
      path = path || [displayName];
      assert_1(isArray(value), function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of ' + typeNameCache + ')'; });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = []; // make a temporary copy, will be discarded if idempotent remains true
    for (var i = 0, len = value.length; i < len; i++ ) {
      var actual = value[i];
      var instance = create(type, actual, ( undefined !== 'production' ? path.concat(i + ': ' + typeNameCache) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (undefined !== 'production') {
      Object.freeze(ret);
    }

    return ret;
  }

  List.meta = {
    kind: 'list',
    type: type,
    name: name,
    identity: identity
  };

  List.displayName = displayName;

  List.is = function (x) {
    return isArray(x) && x.every(function (e) {
      return is(e, type);
    });
  };

  List.update = function (instance, patch) {
    return List(assert_1.update(instance, patch));
  };

  return List;
}

list.getDefaultName = getDefaultName$3;
var list_1 = list;

var isMaybe = function isMaybe(x) {
  return isType(x) && ( x.meta.kind === 'maybe' );
};

function getDefaultName$4(type) {
  return '?' + getTypeName(type);
}

function maybe(type, name) {

  if (isMaybe(type) || type === Any || type === Nil) { // makes the combinator idempotent and handle Any, Nil
    return type;
  }

  if (undefined !== 'production') {
    assert_1(isFunction(type), function () { return 'Invalid argument type ' + assert_1.stringify(type) + ' supplied to maybe(type, [name]) combinator (expected a type)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to maybe(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName$4(type);
  var identity = isIdentity(type);

  function Maybe(value, path) {
    if (undefined !== 'production') {
      if (identity) {
        forbidNewOperator(this, Maybe);
      }
    }
    return Nil.is(value) ? value : create(type, value, path);
  }

  Maybe.meta = {
    kind: 'maybe',
    type: type,
    name: name,
    identity: identity
  };

  Maybe.displayName = displayName;

  Maybe.is = function (x) {
    return Nil.is(x) || is(x, type);
  };

  return Maybe;
}

maybe.getDefaultName = getDefaultName$4;
var maybe_1 = maybe;

function getDefaultInterfaceName(props) {
  return '{' + Object.keys(props).map(function (prop) {
    return prop + ': ' + getTypeName(props[prop]);
  }).join(', ') + '}';
}

var getDefaultInterfaceName_1 = getDefaultInterfaceName;

var isStruct = function isStruct(x) {
  return isType(x) && ( x.meta.kind === 'struct' );
};

var isInterface = function isInterface(x) {
  return isType(x) && ( x.meta.kind === 'interface' );
};

function isRefinement(type) {
  return isType(type) && type.meta.kind === 'subtype';
}

function getPredicates(type) {
  return isRefinement(type) ?
    [type.meta.predicate].concat(getPredicates(type.meta.type)) :
    [];
}

function getUnrefinedType(type) {
  return isRefinement(type) ?
    getUnrefinedType(type.meta.type) :
    type;
}

function decompose(type) {
  return {
    predicates: getPredicates(type),
    unrefinedType: getUnrefinedType(type)
  };
}

var decompose_1 = decompose;

function compose(predicates, unrefinedType, name) {
  var result = predicates.reduce(function (type, predicate) {
    return refinement_1(type, predicate);
  }, unrefinedType);
  if (name) {
    result.displayName = name;
    result.meta.name = name;
  }
  return result;
}

function getProps(type) {
  return isObject(type) ? type : type.meta.props;
}

function getDefaultProps(type) {
  return isObject(type) ? null : type.meta.defaultProps;
}

function pushAll(arr, elements) {
  Array.prototype.push.apply(arr, elements);
}

function extend(combinator, mixins, options) {
  if (undefined !== 'production') {
    assert_1(isFunction(combinator), function () { return 'Invalid argument combinator supplied to extend(combinator, mixins, options), expected a function'; });
    assert_1(isArray(mixins), function () { return 'Invalid argument mixins supplied to extend(combinator, mixins, options), expected an array'; });
  }
  var props = {};
  var prototype = {};
  var predicates = [];
  var defaultProps = {};
  mixins.forEach(function (x, i) {
    var decomposition = decompose_1(x);
    var unrefinedType = decomposition.unrefinedType;
    if (undefined !== 'production') {
      assert_1(isObject(unrefinedType) || isStruct(unrefinedType) || isInterface(unrefinedType), function () { return 'Invalid argument mixins[' + i + '] supplied to extend(combinator, mixins, options), expected an object, struct, interface or a refinement (of struct or interface)'; });
    }
    pushAll(predicates, decomposition.predicates);
    mixin(props, getProps(unrefinedType));
    mixin(prototype, unrefinedType.prototype);
    mixin(defaultProps, getDefaultProps(unrefinedType), true);
  });
  options = combinator.getOptions(options);
  options.defaultProps = mixin(defaultProps, options.defaultProps, true);
  var result = compose(predicates, combinator(props, {
    strict: options.strict,
    defaultProps: options.defaultProps
  }), options.name);
  mixin(result.prototype, prototype);
  return result;
}

var extend_1 = extend;

function getDefaultName$5(props) {
  return 'Struct' + getDefaultInterfaceName_1(props);
}

function extendStruct(mixins, name) {
  return extend_1(struct, mixins, name);
}

function getOptions(options) {
  if (!isObject(options)) {
    options = isNil(options) ? {} : { name: options };
  }
  if (!options.hasOwnProperty('strict')) {
    options.strict = struct.strict;
  }
  if (!options.hasOwnProperty('defaultProps')) {
    options.defaultProps = {};
  }
  return options;
}

function struct(props, options) {

  options = getOptions(options);
  var name = options.name;
  var strict = options.strict;
  var defaultProps = options.defaultProps;

  if (undefined !== 'production') {
    assert_1(dict_1(_String, _Function).is(props), function () { return 'Invalid argument props ' + assert_1.stringify(props) + ' supplied to struct(props, [options]) combinator (expected a dictionary String -> Type)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to struct(props, [options]) combinator (expected a string)'; });
    assert_1(isBoolean(strict), function () { return 'Invalid argument strict ' + assert_1.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
    assert_1(isObject(defaultProps), function () { return 'Invalid argument defaultProps ' + assert_1.stringify(defaultProps) + ' supplied to struct(props, [options]) combinator (expected an object)'; });
  }

  var displayName = name || getDefaultName$5(props);

  function Struct(value, path) {

    if (Struct.is(value)) { // implements idempotency
      return value;
    }

    if (undefined !== 'production') {
      path = path || [displayName];
      assert_1(isObject(value), function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an object)'; });
      // strictness
      if (strict) {
        for (k in value) {
          if (value.hasOwnProperty(k)) {
            assert_1(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
          }
        }
      }
    }

    if (!(this instanceof Struct)) { // `new` is optional
      return new Struct(value, path);
    }

    for (var k in props) {
      if (props.hasOwnProperty(k)) {
        var expected = props[k];
        var actual = value[k];
        // apply defaults
        if (actual === undefined) {
          actual = defaultProps[k];
        }
        this[k] = create(expected, actual, ( undefined !== 'production' ? path.concat(k + ': ' + getTypeName(expected)) : null ));
      }
    }

    if (undefined !== 'production') {
      Object.freeze(this);
    }

  }

  Struct.meta = {
    kind: 'struct',
    props: props,
    name: name,
    identity: false,
    strict: strict,
    defaultProps: defaultProps
  };

  Struct.displayName = displayName;

  Struct.is = function (x) {
    return x instanceof Struct;
  };

  Struct.update = function (instance, patch) {
    return new Struct(assert_1.update(instance, patch));
  };

  Struct.extend = function (xs, name) {
    return extendStruct([Struct].concat(xs), name);
  };

  return Struct;
}

struct.strict = false;
struct.getOptions = getOptions;
struct.getDefaultName = getDefaultName$5;
struct.extend = extendStruct;
var struct_1 = struct;

function getDefaultName$6(types) {
  return '[' + types.map(getTypeName).join(', ') + ']';
}

function tuple(types, name) {

  if (undefined !== 'production') {
    assert_1(isArray(types) && types.every(isFunction), function () { return 'Invalid argument types ' + assert_1.stringify(types) + ' supplied to tuple(types, [name]) combinator (expected an array of types)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to tuple(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName$6(types);
  var identity = types.every(isIdentity);

  function Tuple(value, path) {

    if (undefined === 'production') {
      if (identity) {
        return value;
      }
    }

    if (undefined !== 'production') {
      path = path || [displayName];
      assert_1(isArray(value) && value.length === types.length, function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of length ' + types.length + ')'; });
    }

    var idempotent = true;
    var ret = [];
    for (var i = 0, len = types.length; i < len; i++) {
      var expected = types[i];
      var actual = value[i];
      var instance = create(expected, actual, ( undefined !== 'production' ? path.concat(i + ': ' + getTypeName(expected)) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (undefined !== 'production') {
      Object.freeze(ret);
    }

    return ret;
  }

  Tuple.meta = {
    kind: 'tuple',
    types: types,
    name: name,
    identity: identity
  };

  Tuple.displayName = displayName;

  Tuple.is = function (x) {
    return isArray(x) &&
      x.length === types.length &&
      types.every(function (type, i) {
        return is(x[i], type);
      });
  };

  Tuple.update = function (instance, patch) {
    return Tuple(assert_1.update(instance, patch));
  };

  return Tuple;
}

tuple.getDefaultName = getDefaultName$6;
var tuple_1 = tuple;

function getDefaultName$7(types) {
  return types.map(getTypeName).join(' | ');
}

function union(types, name) {

  if (undefined !== 'production') {
    assert_1(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert_1.stringify(types) + ' supplied to union(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to union(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName$7(types);
  var identity = types.every(isIdentity);

  function Union(value, path) {

    if (undefined === 'production') {
      if (identity) {
        return value;
      }
    }

    var type = Union.dispatch(value);
    if (!type && Union.is(value)) {
      return value;
    }

    if (undefined !== 'production') {
      if (identity) {
        forbidNewOperator(this, Union);
      }
      path = path || [displayName];
      assert_1(isFunction(type), function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/') + ' (no constructor returned by dispatch)'; });
      path[path.length - 1] += '(' + getTypeName(type) + ')';
    }

    return create(type, value, path);
  }

  Union.meta = {
    kind: 'union',
    types: types,
    name: name,
    identity: identity
  };

  Union.displayName = displayName;

  Union.is = function (x) {
    return types.some(function (type) {
      return is(x, type);
    });
  };

  Union.dispatch = function (x) { // default dispatch implementation
    for (var i = 0, len = types.length; i < len; i++ ) {
      var type = types[i];
      if (isUnion(type)) { // handle union of unions
        var t = type.dispatch(x);
        if (!isNil(t)) {
          return t;
        }
      }
      else if (is(x, type)) {
        return type;
      }
    }
  };

  Union.update = function (instance, patch) {
    return Union(assert_1.update(instance, patch));
  };

  return Union;
}

union.getDefaultName = getDefaultName$7;
var union_1 = union;

function getDefaultName$8(domain, codomain) {
  return '(' + domain.map(getTypeName).join(', ') + ') => ' + getTypeName(codomain);
}

function isInstrumented(f) {
  return _Function.is(f) && isObject(f.instrumentation);
}

function getOptionalArgumentsIndex(types) {
  var end = types.length;
  var areAllMaybes = false;
  for (var i = end - 1; i >= 0; i--) {
    var type = types[i];
    if (!isType(type) || type.meta.kind !== 'maybe') {
      return (i + 1);
    } else {
      areAllMaybes = true;
    }
  }
  return areAllMaybes ? 0 : end;
}

function func(domain, codomain, name) {

  domain = isArray(domain) ? domain : [domain]; // handle handy syntax for unary functions

  if (undefined !== 'production') {
    assert_1(list_1(_Function).is(domain), function () { return 'Invalid argument domain ' + assert_1.stringify(domain) + ' supplied to func(domain, codomain, [name]) combinator (expected an array of types)'; });
    assert_1(_Function.is(codomain), function () { return 'Invalid argument codomain ' + assert_1.stringify(codomain) + ' supplied to func(domain, codomain, [name]) combinator (expected a type)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to func(domain, codomain, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName$8(domain, codomain);
  var domainLength = domain.length;
  var optionalArgumentsIndex = getOptionalArgumentsIndex(domain);

  function FuncType(value, path) {

    if (!isInstrumented(value)) { // automatically instrument the function
      return FuncType.of(value);
    }

    if (undefined !== 'production') {
      path = path || [displayName];
      assert_1(FuncType.is(value), function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  FuncType.meta = {
    kind: 'func',
    domain: domain,
    codomain: codomain,
    name: name,
    identity: true
  };

  FuncType.displayName = displayName;

  FuncType.is = function (x) {
    return isInstrumented(x) &&
      x.instrumentation.domain.length === domainLength &&
      x.instrumentation.domain.every(function (type, i) {
        return type === domain[i];
      }) &&
      x.instrumentation.codomain === codomain;
  };

  FuncType.of = function (f, curried) {

    if (undefined !== 'production') {
      assert_1(_Function.is(f), function () { return 'Invalid argument f supplied to func.of ' + displayName + ' (expected a function)'; });
      assert_1(isNil(curried) || isBoolean(curried), function () { return 'Invalid argument curried ' + assert_1.stringify(curried) + ' supplied to func.of ' + displayName + ' (expected a boolean)'; });
    }

    if (FuncType.is(f)) { // makes FuncType.of idempotent
      return f;
    }

    function fn() {
      var args = Array.prototype.slice.call(arguments);
      var argsLength = args.length;

      if (undefined !== 'production') {
        // type-check arguments
        var tupleLength = curried ? argsLength : Math.max(argsLength, optionalArgumentsIndex);
        tuple_1(domain.slice(0, tupleLength), 'arguments of function ' + displayName)(args);
      }

      if (curried && argsLength < domainLength) {
        if (undefined !== 'production') {
          assert_1(argsLength > 0, 'Invalid arguments.length = 0 for curried function ' + displayName);
        }
        var g = Function.prototype.bind.apply(f, [this].concat(args));
        var newDomain = func(domain.slice(argsLength), codomain);
        return newDomain.of(g, true);
      }
      else {
        return create(codomain, f.apply(this, args));
      }
    }

    fn.instrumentation = {
      domain: domain,
      codomain: codomain,
      f: f
    };

    fn.displayName = getFunctionName(f);

    return fn;

  };

  return FuncType;

}

func.getDefaultName = getDefaultName$8;
func.getOptionalArgumentsIndex = getOptionalArgumentsIndex;
var func_1 = func;

var isIdentity$1 = isIdentity;

function getDefaultName$9(types) {
  return types.map(getTypeName).join(' & ');
}

function intersection(types, name) {

  if (undefined !== 'production') {
    assert_1(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert_1.stringify(types) + ' supplied to intersection(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to intersection(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName$9(types);
  var identity = types.every(isIdentity$1);

  function Intersection(value, path) {

    if (undefined !== 'production') {
      if (identity) {
        isIdentity(this, Intersection);
      }
      path = path || [displayName];
      assert_1(Intersection.is(value), function () { return 'Invalid value ' + assert_1.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  Intersection.meta = {
    kind: 'intersection',
    types: types,
    name: name,
    identity: identity
  };

  Intersection.displayName = displayName;

  Intersection.is = function (x) {
    return types.every(function (type) {
      return is(x, type);
    });
  };

  Intersection.update = function (instance, patch) {
    return Intersection(assert_1.update(instance, patch));
  };

  return Intersection;
}

intersection.getDefaultName = getDefaultName$9;
var intersection_1 = intersection;

function assign(x, y) {
  for (var k in y) {
    if (y.hasOwnProperty(k)) {
      x[k] = y[k];
    }
  }
  return x;
}

var assign_1 = assign;

function extendInterface(mixins, name) {
  return extend_1(inter, mixins, name);
}

function getOptions$1(options) {
  if (!isObject(options)) {
    options = isNil(options) ? {} : { name: options };
  }
  if (!options.hasOwnProperty('strict')) {
    options.strict = inter.strict;
  }
  return options;
}

function inter(props, options) {

  options = getOptions$1(options);
  var name = options.name;
  var strict = options.strict;

  if (undefined !== 'production') {
    assert_1(dict_1(_String, _Function).is(props), function () { return 'Invalid argument props ' + assert_1.stringify(props) + ' supplied to interface(props, [options]) combinator (expected a dictionary String -> Type)'; });
    assert_1(isTypeName(name), function () { return 'Invalid argument name ' + assert_1.stringify(name) + ' supplied to interface(props, [options]) combinator (expected a string)'; });
    assert_1(isBoolean(strict), function () { return 'Invalid argument strict ' + assert_1.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
  }

  var displayName = name || getDefaultInterfaceName_1(props);
  var identity = Object.keys(props).map(function (prop) { return props[prop]; }).every(isIdentity);

  function Interface(value, path) {

    if (undefined === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (undefined !== 'production') {
      path = path || [displayName];
      assert_1(!isNil(value), function () { return 'Invalid value ' + value + ' supplied to ' + path.join('/'); });
      // strictness
      if (strict) {
        for (var k in value) {
          assert_1(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
        }
      }
    }

    var idempotent = true;
    var ret = identity ? {} : assign_1({}, value);
    for (var prop in props) {
      var expected = props[prop];
      var actual = value[prop];
      var instance = create(expected, actual, ( undefined !== 'production' ? path.concat(prop + ': ' + getTypeName(expected)) : null ));
      idempotent = idempotent && ( actual === instance );
      ret[prop] = instance;
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (undefined !== 'production') {
      Object.freeze(ret);
    }

    return ret;

  }

  Interface.meta = {
    kind: 'interface',
    props: props,
    name: name,
    identity: identity,
    strict: strict
  };

  Interface.displayName = displayName;

  Interface.is = function (x) {
    if (isNil(x)) {
      return false;
    }
    if (strict) {
      for (var k in x) {
        if (!props.hasOwnProperty(k)) {
          return false;
        }
      }
    }
    for (var prop in props) {
      if (!is(x[prop], props[prop])) {
        return false;
      }
    }
    return true;
  };

  Interface.update = function (instance, patch) {
    return Interface(assert_1.update(instance, patch));
  };

  Interface.extend = function (xs, name) {
    return extendInterface([Interface].concat(xs), name);
  };

  return Interface;
}

inter.strict = false;
inter.getOptions = getOptions$1;
inter.getDefaultName = getDefaultInterfaceName_1;
inter.extend = extendInterface;
var _interface = inter;

function getShallowCopy(x) {
  if (isObject(x)) {
    if (x instanceof Date || x instanceof RegExp) {
      return x;
    }
    return assign_1({}, x);
  }
  if (isArray(x)) {
    return x.concat();
  }
  return x;
}

function isCommand(k) {
  return update.commands.hasOwnProperty(k);
}

function getCommand(k) {
  return update.commands[k];
}

function update(instance, patch) {

  if (undefined !== 'production') {
    assert_1(isObject(patch), function () { return 'Invalid argument patch ' + assert_1.stringify(patch) + ' supplied to function update(instance, patch): expected an object containing commands'; });
  }

  var value = instance;
  var isChanged = false;
  var newValue;
  for (var k in patch) {
    if (patch.hasOwnProperty(k)) {
      if (isCommand(k)) {
        newValue = getCommand(k)(patch[k], value);
        if (newValue !== instance) {
          isChanged = true;
          value = newValue;
        } else {
          value = instance;
        }
      }
      else {
        if (value === instance) {
          value = getShallowCopy(instance);
        }
        newValue = update(value[k], patch[k]);
        isChanged = isChanged || ( newValue !== value[k] );
        value[k] = newValue;
      }
    }
  }
  return isChanged ? value : instance;
}

// built-in commands

function $apply(f, value) {
  if (undefined !== 'production') {
    assert_1(isFunction(f), 'Invalid argument f supplied to immutability helper { $apply: f } (expected a function)');
  }
  return f(value);
}

function $push(elements, arr) {
  if (undefined !== 'production') {
    assert_1(isArray(elements), 'Invalid argument elements supplied to immutability helper { $push: elements } (expected an array)');
    assert_1(isArray(arr), 'Invalid value supplied to immutability helper $push (expected an array)');
  }
  if (elements.length > 0) {
    return arr.concat(elements);
  }
  return arr;
}

function $remove(keys, obj) {
  if (undefined !== 'production') {
    assert_1(isArray(keys), 'Invalid argument keys supplied to immutability helper { $remove: keys } (expected an array)');
    assert_1(isObject(obj), 'Invalid value supplied to immutability helper $remove (expected an object)');
  }
  if (keys.length > 0) {
    obj = getShallowCopy(obj);
    for (var i = 0, len = keys.length; i < len; i++ ) {
      delete obj[keys[i]];
    }
  }
  return obj;
}

function $set(value) {
  return value;
}

function $splice(splices, arr) {
  if (undefined !== 'production') {
    assert_1(isArray(splices) && splices.every(isArray), 'Invalid argument splices supplied to immutability helper { $splice: splices } (expected an array of arrays)');
    assert_1(isArray(arr), 'Invalid value supplied to immutability helper $splice (expected an array)');
  }
  if (splices.length > 0) {
    arr = getShallowCopy(arr);
    return splices.reduce(function (acc, splice) {
      acc.splice.apply(acc, splice);
      return acc;
    }, arr);
  }
  return arr;
}

function $swap(config, arr) {
  if (undefined !== 'production') {
    assert_1(isObject(config), 'Invalid argument config supplied to immutability helper { $swap: config } (expected an object)');
    assert_1(isNumber(config.from), 'Invalid argument config.from supplied to immutability helper { $swap: config } (expected a number)');
    assert_1(isNumber(config.to), 'Invalid argument config.to supplied to immutability helper { $swap: config } (expected a number)');
    assert_1(isArray(arr), 'Invalid value supplied to immutability helper $swap (expected an array)');
  }
  if (config.from !== config.to) {
    arr = getShallowCopy(arr);
    var element = arr[config.to];
    arr[config.to] = arr[config.from];
    arr[config.from] = element;
  }
  return arr;
}

function $unshift(elements, arr) {
  if (undefined !== 'production') {
    assert_1(isArray(elements), 'Invalid argument elements supplied to immutability helper {$unshift: elements} (expected an array)');
    assert_1(isArray(arr), 'Invalid value supplied to immutability helper $unshift (expected an array)');
  }
  if (elements.length > 0) {
    return elements.concat(arr);
  }
  return arr;
}

function $merge(whatToMerge, value) {
  var isChanged = false;
  var result = getShallowCopy(value);
  for (var k in whatToMerge) {
    if (whatToMerge.hasOwnProperty(k)) {
      result[k] = whatToMerge[k];
      isChanged = isChanged || ( result[k] !== value[k] );
    }
  }
  return isChanged ? result : value;
}

update.commands = {
  $apply: $apply,
  $push: $push,
  $remove: $remove,
  $set: $set,
  $splice: $splice,
  $swap: $swap,
  $unshift: $unshift,
  $merge: $merge
};

var update_1 = update;

var match = function match(x) {
  var type, guard, f, count;
  for (var i = 1, len = arguments.length; i < len; ) {
    type = arguments[i];
    guard = arguments[i + 1];
    f = arguments[i + 2];

    if (isFunction(f) && !isType(f)) {
      i = i + 3;
    }
    else {
      f = guard;
      guard = Any.is;
      i = i + 2;
    }

    if (undefined !== 'production') {
      count = (count || 0) + 1;
      assert_1(isType(type), function () { return 'Invalid type in clause #' + count; });
      assert_1(isFunction(guard), function () { return 'Invalid guard in clause #' + count; });
      assert_1(isFunction(f), function () { return 'Invalid block in clause #' + count; });
    }

    if (type.is(x) && guard(x)) {
      return f(x);
    }
  }
  assert_1.fail('Match error');
};

/*! @preserve
 *
 * tcomb.js - Type checking and DDD for JavaScript
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Giulio Canti
 *
 */

// core


// types
assert_1.Any = Any;
assert_1.Array = _Array;
assert_1.Boolean = _Boolean;
assert_1.Date = _Date;
assert_1.Error = _Error;
assert_1.Function = _Function;
assert_1.Nil = Nil;
assert_1.Number = _Number;
assert_1.Integer = Integer;
assert_1.IntegerT = assert_1.Integer;
assert_1.Object = _Object;
assert_1.RegExp = _RegExp;
assert_1.String = _String;
assert_1.Type = Type;
assert_1.TypeT = assert_1.Type;

// short alias are deprecated
assert_1.Arr = assert_1.Array;
assert_1.Bool = assert_1.Boolean;
assert_1.Dat = assert_1.Date;
assert_1.Err = assert_1.Error;
assert_1.Func = assert_1.Function;
assert_1.Num = assert_1.Number;
assert_1.Obj = assert_1.Object;
assert_1.Re = assert_1.RegExp;
assert_1.Str = assert_1.String;

// combinators
assert_1.dict = dict_1;
assert_1.declare = declare;
assert_1.enums = enums_1;
assert_1.irreducible = irreducible;
assert_1.list = list_1;
assert_1.maybe = maybe_1;
assert_1.refinement = refinement_1;
assert_1.struct = struct_1;
assert_1.tuple = tuple_1;
assert_1.union = union_1;
assert_1.func = func_1;
assert_1.intersection = intersection_1;
assert_1.subtype = assert_1.refinement;
assert_1.inter = _interface; // IE8 alias
assert_1['interface'] = assert_1.inter;

// functions
assert_1.assert = assert_1;
assert_1.update = update_1;
assert_1.mixin = mixin;
assert_1.isType = isType;
assert_1.is = is;
assert_1.getTypeName = getTypeName;
assert_1.match = match;

var tcomb = assert_1;

var stringify$1 = tcomb.stringify;

var noobj = {};

var ValidationError = tcomb.struct({
  message: tcomb.Any,
  actual: tcomb.Any,
  expected: tcomb.Any,
  path: tcomb.list(tcomb.union([tcomb.String, tcomb.Number]))
}, 'ValidationError');

function getDefaultValidationErrorMessage(actual, expected, path) {
  var expectedName = tcomb.getTypeName(expected);
  var to = path.length ? '/' + path.join('/') + ': ' + expectedName : expectedName;
  return 'Invalid value ' + stringify$1(actual) + ' supplied to ' + to;
}

function getValidationErrorMessage(actual, expected, path, context) {
  if (tcomb.Function.is(expected.getValidationErrorMessage)) {
    return expected.getValidationErrorMessage(actual, path, context);
  }
  else {
    return getDefaultValidationErrorMessage(actual, expected, path);
  }
}

ValidationError.of = function (actual, expected, path, context) {
  return new ValidationError({
    message: getValidationErrorMessage(actual, expected, path, context),
    actual: actual,
    expected: expected,
    path: path
  });
};

var ValidationResult = tcomb.struct({
  errors: tcomb.list(ValidationError),
  value: tcomb.Any
}, 'ValidationResult');

ValidationResult.prototype.isValid = function () {
  return !(this.errors.length);
};

ValidationResult.prototype.firstError = function () {
  return this.isValid() ? null : this.errors[0];
};

ValidationResult.prototype.toString = function () {
  if (this.isValid()) {
    return '[ValidationResult, true, ' + stringify$1(this.value) + ']';
  }
  else {
    return '[ValidationResult, false, (' + this.errors.map(function (err) {
      return stringify$1(err.message);
    }).join(', ') + ')]';
  }
};

function validate(x, type, options) {
  options = options || {};
  var path = tcomb.Array.is(options) ? options : options.path || [];
  return new ValidationResult(recurse(x, type, path, options));
}

function recurse(x, type, path, options) {
  if (tcomb.isType(type)) {
    return validators[type.meta.kind](x, type, path, options);
  }
  else {
    return validators.es6classes(x, type, path, options);
  }
}

var validators = validate.validators = {};

validators.es6classes = function validateES6Classes(x, type, path, options) {
  return {
    value: x,
    errors: x instanceof type ? [] : [ValidationError.of(x, type, path, options.context)]
  };
};

// irreducibles and enums
validators.irreducible =
validators.enums = function validateIrreducible(x, type, path, options) {
  return {
    value: x,
    errors: type.is(x) ? [] : [ValidationError.of(x, type, path, options.context)]
  };
};

validators.list = function validateList(x, type, path, options) {

  // x should be an array
  if (!tcomb.Array.is(x)) {
    return {value: x, errors: [ValidationError.of(x, type, path, options.context)]};
  }

  var ret = {value: [], errors: []};
  // every item should be of type `type.meta.type`
  for (var i = 0, len = x.length; i < len; i++ ) {
    var item = recurse(x[i], type.meta.type, path.concat(i), options);
    ret.value[i] = item.value;
    ret.errors = ret.errors.concat(item.errors);
  }
  return ret;
};

validators.subtype = function validateSubtype(x, type, path, options) {

  // x should be a valid inner type
  var ret = recurse(x, type.meta.type, path, options);
  if (ret.errors.length) {
    return ret;
  }

  // x should satisfy the predicate
  if (!type.meta.predicate(ret.value)) {
    ret.errors = [ValidationError.of(x, type, path, options.context)];
  }

  return ret;

};

validators.maybe = function validateMaybe(x, type, path, options) {
  return tcomb.Nil.is(x) ?
    {value: x, errors: []} :
    recurse(x, type.meta.type, path, options);
};

validators.struct = function validateStruct(x, type, path, options) {

  // x should be an object
  if (!tcomb.Object.is(x)) {
    return {value: x, errors: [ValidationError.of(x, type, path, options.context)]};
  }

  // [optimization]
  if (type.is(x)) {
    return {value: x, errors: []};
  }

  var ret = {value: {}, errors: []};
  var props = type.meta.props;
  var defaultProps = type.meta.defaultProps || noobj;
  // every item should be of type `props[name]`
  for (var name in props) {
    if (props.hasOwnProperty(name)) {
      var actual = x[name];
      // apply defaults
      if (actual === undefined) {
        actual = defaultProps[name];
      }
      var prop = recurse(actual, props[name], path.concat(name), options);
      ret.value[name] = prop.value;
      ret.errors = ret.errors.concat(prop.errors);
    }
  }
  var strict = options.hasOwnProperty('strict') ? options.strict : type.meta.strict;
  if (strict) {
    for (var field in x) {
      if (x.hasOwnProperty(field) && !props.hasOwnProperty(field)) {
        ret.errors.push(ValidationError.of(x[field], tcomb.Nil, path.concat(field), options.context));
      }
    }
  }
  if (!ret.errors.length) {
    ret.value = new type(ret.value);
  }
  return ret;
};

validators.tuple = function validateTuple(x, type, path, options) {

  var types = type.meta.types;
  var len = types.length;

  // x should be an array of at most `len` items
  if (!tcomb.Array.is(x) || x.length > len) {
    return {value: x, errors: [ValidationError.of(x, type, path, options.context)]};
  }

  var ret = {value: [], errors: []};
  // every item should be of type `types[i]`
  for (var i = 0; i < len; i++) {
    var item = recurse(x[i], types[i], path.concat(i), options);
    ret.value[i] = item.value;
    ret.errors = ret.errors.concat(item.errors);
  }
  return ret;
};

validators.dict = function validateDict(x, type, path, options) {

  // x should be an object
  if (!tcomb.Object.is(x)) {
    return {value: x, errors: [ValidationError.of(x, type, path, options.context)]};
  }

  var ret = {value: {}, errors: []};
  // every key should be of type `domain`
  // every value should be of type `codomain`
  for (var k in x) {
    if (x.hasOwnProperty(k)) {
      var subpath = path.concat(k);
      var key = recurse(k, type.meta.domain, subpath, options);
      var item = recurse(x[k], type.meta.codomain, subpath, options);
      ret.value[k] = item.value;
      ret.errors = ret.errors.concat(key.errors, item.errors);
    }
  }
  return ret;
};

validators.union = function validateUnion(x, type, path, options) {
  var ctor = type.dispatch(x);
  return tcomb.Function.is(ctor) ?
    recurse(x, ctor, path.concat(type.meta.types.indexOf(ctor)), options) :
    {value: x, errors: [ValidationError.of(x, type, path, options.context)]};
};

validators.intersection = function validateIntersection(x, type, path, options) {

  var types = type.meta.types;
  var len = types.length;

  var ret = {value: x, errors: []};
  var nrOfStructs = 0;
  // x should be of type `types[i]` for all i
  for (var i = 0; i < len; i++) {
    if (types[i].meta.kind === 'struct') {
      nrOfStructs++;
    }
    var item = recurse(x, types[i], path, options);
    ret.errors = ret.errors.concat(item.errors);
  }
  if (nrOfStructs > 1) {
    ret.errors.push(ValidationError.of(x, type, path, options.context));
  }
  return ret;
};

validators['interface'] = function validateInterface(x, type, path, options) { // eslint-disable-line dot-notation

  // x should be an object
  if (!tcomb.Object.is(x)) {
    return {value: x, errors: [ValidationError.of(x, type, path, options.context)]};
  }

  var ret = {value: {}, errors: []};
  var props = type.meta.props;
  // every item should be of type `props[name]`
  for (var name in props) {
    var prop = recurse(x[name], props[name], path.concat(name), options);
    ret.value[name] = prop.value;
    ret.errors = ret.errors.concat(prop.errors);
  }
  var strict = options.hasOwnProperty('strict') ? options.strict : type.meta.strict;
  if (strict) {
    for (var field in x) {
      if (!props.hasOwnProperty(field) && !tcomb.Nil.is(x[field])) {
        ret.errors.push(ValidationError.of(x[field], tcomb.Nil, path.concat(field), options.context));
      }
    }
  }
  return ret;
};

tcomb.mixin(tcomb, {
  ValidationError: ValidationError,
  ValidationResult: ValidationResult,
  validate: validate
});

var tcombValidation = tcomb;
var tcombValidation_1 = tcombValidation.Boolean;
var tcombValidation_2 = tcombValidation.Function;
var tcombValidation_3 = tcombValidation.Integer;
var tcombValidation_4 = tcombValidation.Number;
var tcombValidation_5 = tcombValidation.String;
var tcombValidation_6 = tcombValidation.enums;
var tcombValidation_7 = tcombValidation.refinement;
var tcombValidation_8 = tcombValidation.union;
var tcombValidation_9 = tcombValidation.tuple;
var tcombValidation_10 = tcombValidation.struct;
var tcombValidation_11 = tcombValidation.validate;
var tcombValidation_12 = tcombValidation.maybe;
var tcombValidation_13 = tcombValidation.list;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var componentEmitter = createCommonjsModule(function (module) {
/**
 * Expose `Emitter`.
 */

{
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};
});

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject$1(obj) {
  return null !== obj && 'object' === typeof obj;
}

var isObject_1 = isObject$1;

/**
 * Module of mixed-in functions shared between node and client code
 */


/**
 * Expose `RequestBase`.
 */

var requestBase = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin$1(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin$1(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype['catch'] = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject_1(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject_1(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject_1(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject_1(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

var type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

var params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

var parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

var cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};

var utils = {
	type: type,
	params: params,
	parseLinks: parseLinks,
	cleanHeader: cleanHeader
};

/**
 * Module dependencies.
 */



/**
 * Expose `ResponseBase`.
 */

var responseBase = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin$2(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin$2(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.created = 201 == status;
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
    this.unprocessableEntity = 422 == status;
};

function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  };
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

var agentBase = Agent;

var client = createCommonjsModule(function (module, exports) {
/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = commonjsGlobal;
}







/**
 * Noop.
 */

function noop(){}
/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject_1(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject_1(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

responseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

componentEmitter(Request.prototype);
requestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status; } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new agentBase();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  agentBase.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

agentBase.prototype.del = agentBase.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
});
var client_1 = client.get;
var client_2 = client.post;
var client_3 = client.put;
var client_4 = client.delete;
var client_5 = client.head;
var client_6 = client.Request;


var agent = Object.freeze({
	default: client,
	__moduleExports: client,
	get: client_1,
	post: client_2,
	put: client_3,
	delete: client_4,
	head: client_5,
	Request: client_6
});

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @private
 * @param method
 * @param url
 */
var requestWithSource = function (method, url) {
    var newReq = agent;
    return newReq[method](url).set('Filestack-Source', 'JS-1.6.1');
};
/**
 * @private
 */
var request = agent;

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Original implementation of throat by Forbes Lindesay
 * https://github.com/ForbesLindesay/throat
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @private
 */
var Delayed = /** @class */ (function () {
    function Delayed(resolve, fn, self, args) {
        this.resolve = resolve;
        this.fn = fn;
        this.self = self || null;
        this.args = args;
    }
    return Delayed;
}());
/**
 * @private
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this._s1 = [];
        this._s2 = [];
    }
    Queue.prototype.push = function (value) {
        this._s1.push(value);
    };
    Queue.prototype.shift = function () {
        var s2 = this._s2;
        if (s2.length === 0) {
            var s1 = this._s1;
            if (s1.length === 0) {
                return;
            }
            this._s1 = s2;
            s2 = this._s2 = s1.reverse();
        }
        return s2.pop();
    };
    Queue.prototype.isEmpty = function () {
        return !this._s1.length && !this._s2.length;
    };
    return Queue;
}());
/**
 *
 * @private
 * @param size
 * @param fn
 */
function throat(size, fn) {
    var queue = new Queue();
    function run(fn, self, args) {
        if (size) {
            size--;
            var result = new Promise(function (resolve) {
                resolve(fn.apply(self, args));
            });
            result.then(release, release);
            return result;
        }
        else {
            return new Promise(function (resolve) {
                queue.push(new Delayed(resolve, fn, self, args));
            });
        }
    }
    function release() {
        size++;
        if (!queue.isEmpty()) {
            var next = queue.shift();
            next.resolve(run(next.fn, next.self, next.args));
        }
    }
    if (fn !== undefined && typeof fn !== 'function') {
        throw new TypeError('Expected throat fn to be a function but got ' + typeof fn);
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return run(fn, this, args);
    };
}

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var throat$1 = throat;
/**
 * Resolve cdn url based on handle type
 *
 * @private
 * @param session session object
 * @param handle file handle (hash, src://alias, url)
 */
var resolveCdnUrl = function (session, handle) {
    var processURL = session.urls.processApiUrl;
    var cdnURL = session.urls.cdnUrl;
    if (!handle || handle.length === 0) {
        return cdnURL;
    }
    if (handle.indexOf('http:') > -1 || handle.indexOf('https:') > -1) {
        if (!session.apikey) {
            throw new Error('Api key is required when external url is provided');
        }
        return processURL + "/" + session.apikey;
    }
    if (handle.indexOf('src:') > -1) {
        if (!session.apikey) {
            throw new Error('Api key is required when storage alias is provided');
        }
        return cdnURL + "/" + session.apikey;
    }
    return cdnURL;
};
/**
 * Check config options
 *
 * @private
 * @param name
 * @param allowed
 * @param options
 */
var checkOptions = function (name, allowed, options) {
    if (options === void 0) { options = {}; }
    var keys = Object.keys(options);
    var allowedNames = allowed.map(function (a) { return a.name; });
    var namesFormatted = allowedNames.join(', ');
    keys.forEach(function (key) {
        if (allowedNames.indexOf(key) < 0) {
            throw new Error(key + " is not a valid option for " + name + ". Valid options are: " + namesFormatted);
        }
    });
    allowed.forEach(function (obj) {
        var value = options[obj.name];
        if (obj.name === 'location' && typeof value === 'string') {
            value = value.toLowerCase();
        }
        if (value !== undefined) {
            var result = tcombValidation_11(value, obj.type);
            if (!result.isValid()) {
                var error = result.firstError();
                if (error && error.message) {
                    throw new Error(error.message);
                }
            }
        }
    });
    return keys;
};
/**
 * Removes empty options from object
 *
 * @private
 * @param obj
 */
var removeEmpty = function (obj) {
    var newObj = __assign({}, obj);
    Object.keys(newObj).forEach(function (k) { return (!newObj[k] && newObj[k] !== undefined) && delete newObj[k]; });
    return newObj;
};
/**
 *
 * @private
 * @param fn
 * @param interval
 * @param callFirst
 */
var throttle = function throttle(fn, interval, callFirst) {
    var wait = false;
    var callNow = false;
    /* istanbul ignore next */
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        callNow = !!callFirst && !wait;
        var context = this;
        if (!wait) {
            wait = true;
            setTimeout(function () {
                wait = false;
                if (!callFirst) {
                    return fn.apply(context, args);
                }
            }, interval);
        }
        if (callNow) {
            callNow = false;
            return fn.apply(this, arguments);
        }
    };
};
/**
 *
 * @private
 * @param start
 * @param stop
 * @param step
 */
var range = function (start, stop, step) {
    if (step === void 0) { step = 1; }
    var toReturn = [];
    for (; start < stop; start += step) {
        toReturn.push(start);
    }
    return toReturn;
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Remove given file
 *
 * @private
 * @param session
 * @param handle
 * @param security
 */
var remove = function (session, handle, skipStorage, security) {
    if (!handle || typeof handle !== 'string') {
        throw new Error('A valid Filestack handle is required for remove');
    }
    if (!(session.policy && session.signature) && (!security || !(security.policy && security.signature))) {
        throw new Error('Security policy and signature are required for remove');
    }
    var fileApiUrl = session.urls.fileApiUrl;
    var baseURL = fileApiUrl + "/" + handle;
    var options = {
        key: session.apikey,
        policy: (security && security.policy) || session.policy,
        signature: (security && security.signature) || session.signature,
    };
    if (skipStorage) {
        options.skip_storage = true;
    }
    return new Promise(function (resolve, reject) {
        request
            .delete(baseURL)
            .query(options)
            .end(function (err, res) {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
};
/**
 * Returns file metadata
 *
 * @private
 * @param session
 * @param handle
 * @param opts
 * @param security
 */
var metadata = function (session, handle, opts, security) {
    if (!handle || typeof handle !== 'string') {
        throw new Error('A valid Filestack handle is required for metadata');
    }
    var allowed = [
        { name: 'size', type: tcombValidation_1 },
        { name: 'mimetype', type: tcombValidation_1 },
        { name: 'filename', type: tcombValidation_1 },
        { name: 'width', type: tcombValidation_1 },
        { name: 'height', type: tcombValidation_1 },
        { name: 'uploaded', type: tcombValidation_1 },
        { name: 'writeable', type: tcombValidation_1 },
        { name: 'cloud', type: tcombValidation_1 },
        { name: 'sourceUrl', type: tcombValidation_1 },
        { name: 'md5', type: tcombValidation_1 },
        { name: 'sha1', type: tcombValidation_1 },
        { name: 'sha224', type: tcombValidation_1 },
        { name: 'sha256', type: tcombValidation_1 },
        { name: 'sha384', type: tcombValidation_1 },
        { name: 'sha512', type: tcombValidation_1 },
        { name: 'location', type: tcombValidation_1 },
        { name: 'path', type: tcombValidation_1 },
        { name: 'container', type: tcombValidation_1 },
        { name: 'exif', type: tcombValidation_1 },
    ];
    checkOptions('metadata', allowed, opts);
    var options = __assign({}, opts);
    options.source_url = options.sourceUrl; // source_url is snake_case
    options.policy = (security && security.policy) || session.policy;
    options.signature = (security && security.signature) || session.signature;
    var baseURL = session.urls.fileApiUrl + "/" + handle + "/metadata";
    return new Promise(function (resolve, reject) {
        request
            .get(baseURL)
            .query(removeEmpty(options))
            .end(function (err, res) {
            if (err) {
                reject(err);
            }
            else {
                resolve(__assign({}, res.body, { handle: handle }));
            }
        });
    });
};
/**
 * @private
 */
var ERequestMethod;
(function (ERequestMethod) {
    ERequestMethod["get"] = "get";
    ERequestMethod["head"] = "head";
})(ERequestMethod || (ERequestMethod = {}));
/**
 * @private
 */
var EResponseType;
(function (EResponseType) {
    EResponseType["blob"] = "blob";
    EResponseType["json"] = "json";
})(EResponseType || (EResponseType = {}));
/**
 * Returns file information
 *
 * @private
 * @param session
 * @param handle
 * @param options
 * @param security
 */
var retrieve = function (session, handle, options, security) {
    if (options === void 0) { options = {}; }
    if (!handle
        || handle.length === 0
        || typeof handle !== 'string') {
        throw new Error('File handle is required');
    }
    var allowed = [
        { name: 'metadata', type: tcombValidation_1 },
        { name: 'head', type: tcombValidation_1 },
        { name: 'dl', type: tcombValidation_1 },
        { name: 'cache', type: tcombValidation_1 },
        { name: 'extension', type: tcombValidation_5 },
    ];
    checkOptions('retrieveOptions', allowed, options);
    var requestOptions = __assign({}, options);
    requestOptions.key = session.apikey;
    requestOptions.policy = security && security.policy || session.policy;
    requestOptions.signature = security && security.signature || session.signature;
    var method = ERequestMethod.get;
    var responseType = EResponseType.blob;
    if (requestOptions.head) {
        method = ERequestMethod.head;
        responseType = EResponseType.json;
        delete requestOptions.head;
    }
    var extension;
    if (requestOptions.extension && requestOptions.extension.length) {
        extension = requestOptions.extension;
        delete requestOptions.extension;
    }
    var metadata;
    if (requestOptions.metadata) {
        if (method === ERequestMethod.head) {
            throw new Error('Head and metadata options cannot be used together');
        }
        responseType = EResponseType.json;
        metadata = requestOptions.metadata;
        delete requestOptions.metadata;
    }
    var baseURL = session.urls.fileApiUrl + "/" + handle + (extension ? "+" + extension : '') + (metadata ? '/metadata' : '');
    return new Promise(function (resolve, reject) {
        request[method](baseURL)
            .query(requestOptions)
            .responseType(responseType)
            .end(function (err, res) {
            if (err) {
                return reject(err);
            }
            if (method === ERequestMethod.head) {
                return resolve(res.headers);
            }
            resolve(res.body);
        });
    });
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @private
 */
var toSnakeCase = function (original) {
    var snakeCased = {};
    var keys = Object.keys(original);
    for (var i = 0; i < keys.length; i++) {
        var newKey = keys[i].split(/(?=[A-Z])/).join('_').toLowerCase();
        if (typeof original[keys[i]] === 'object'
            && !Array.isArray(original[keys[i]])) {
            snakeCased[newKey] = toSnakeCase(original[keys[i]]);
        }
        else {
            snakeCased[newKey] = original[keys[i]];
        }
    }
    return snakeCased;
};
(function (EAlignOptions) {
    EAlignOptions["left"] = "left";
    EAlignOptions["right"] = "right";
    EAlignOptions["center"] = "center";
    EAlignOptions["bottom"] = "bottom";
    EAlignOptions["top"] = "top";
})(exports.EAlignOptions || (exports.EAlignOptions = {}));
(function (EAlignFacesOptions) {
    EAlignFacesOptions["left"] = "left";
    EAlignFacesOptions["right"] = "right";
    EAlignFacesOptions["center"] = "center";
    EAlignFacesOptions["bottom"] = "bottom";
    EAlignFacesOptions["top"] = "top";
    EAlignFacesOptions["faces"] = "faces";
})(exports.EAlignFacesOptions || (exports.EAlignFacesOptions = {}));
(function (EFitOptions) {
    EFitOptions["clip"] = "clip";
    EFitOptions["crop"] = "crop";
    EFitOptions["scale"] = "scale";
    EFitOptions["max"] = "max";
})(exports.EFitOptions || (exports.EFitOptions = {}));
(function (EBlurMode) {
    EBlurMode["linear"] = "linear";
    EBlurMode["gaussian"] = "gaussian";
})(exports.EBlurMode || (exports.EBlurMode = {}));
(function (EShapeType) {
    EShapeType["oval"] = "oval";
    EShapeType["rect"] = "rect";
})(exports.EShapeType || (exports.EShapeType = {}));
(function (ENoiseType) {
    ENoiseType["none"] = "none";
    ENoiseType["low"] = "low";
    ENoiseType["medium"] = "medium";
    ENoiseType["high"] = "high";
})(exports.ENoiseType || (exports.ENoiseType = {}));
(function (EStyleType) {
    EStyleType["artwork"] = "artwork";
    EStyleType["photo"] = "photo";
})(exports.EStyleType || (exports.EStyleType = {}));
(function (EColorspaceType) {
    EColorspaceType["RGB"] = "RGB";
    EColorspaceType["CMYK"] = "CMYK";
    EColorspaceType["Input"] = "Input";
})(exports.EColorspaceType || (exports.EColorspaceType = {}));
(function (ECropfacesType) {
    ECropfacesType["thumb"] = "thumb";
    ECropfacesType["crop"] = "crop";
    ECropfacesType["fill"] = "fill";
})(exports.ECropfacesType || (exports.ECropfacesType = {}));
/**
 * Convert to format
 */
var EVideoTypes;
(function (EVideoTypes) {
    EVideoTypes["h264"] = "h264";
    EVideoTypes["h264_hi"] = "h264.hi";
    EVideoTypes["webm"] = "webm";
    EVideoTypes["webm-hi"] = "webm.hi";
    EVideoTypes["ogg"] = "ogg";
    EVideoTypes["ogg-hi"] = "ogg.hi";
    EVideoTypes["hls-variant"] = "hls.variant";
    EVideoTypes["mp3"] = "mp3";
    EVideoTypes["oga"] = "oga";
    EVideoTypes["m4a"] = "m4a";
    EVideoTypes["aac"] = "aac";
    EVideoTypes["hls"] = "hls.variant.audio";
})(EVideoTypes || (EVideoTypes = {}));
/**
 * Video storage location
 */
var EVideoLocations;
(function (EVideoLocations) {
    EVideoLocations["s3"] = "s3";
    EVideoLocations["azure"] = "azure";
    EVideoLocations["gcs"] = "gcs";
    EVideoLocations["rackspace"] = "rackspace";
    EVideoLocations["dropbox"] = "dropbox";
})(EVideoLocations || (EVideoLocations = {}));
var EVideoAccess;
(function (EVideoAccess) {
    EVideoAccess["private"] = "private";
    EVideoAccess["public"] = "public";
})(EVideoAccess || (EVideoAccess = {}));
var EVideoAccessMode;
(function (EVideoAccessMode) {
    EVideoAccessMode["preserve"] = "preserve";
    EVideoAccessMode["constrain"] = "constrain";
    EVideoAccessMode["letterbox"] = "letterbox";
    EVideoAccessMode["pad"] = "pad";
    EVideoAccessMode["crop"] = "crop";
})(EVideoAccessMode || (EVideoAccessMode = {}));
// ===== Custom Validators =====
/**
 * @private
 */
var vRange = function (start, end) {
    var validator = tcombValidation_7(tcombValidation_3, function (n) { return n >= start && n <= end; });
    validator['displayName'] = "Value is not in allowed range(" + start + "-" + end + ")";
    return validator;
};
/**
 * @private
 */
var vFloat = function () {
    return tcombValidation_7(tcombValidation_4, function (n) { return n > 0 && n < 1; });
};
/**
 * @private
 */
var vFloatOrRange = function (start, end) {
    return tcombValidation_8([vFloat(), vRange(start, end)]);
};
/**
 * @private
 */
var vNumberOrAll = function () {
    return tcombValidation_8([tcombValidation_3, tcombValidation_6.of('all')]);
};
/**
 * @private
 */
var vAlignment = tcombValidation_6.of('top left right bottom center');
/**
 * @private
 */
var vBlurMode = tcombValidation_6.of('linear gaussian');
/**
 * @private
 */
var vColor = tcombValidation_5;
/**
 * @private
 */
var vRotate = tcombValidation_8([tcombValidation_6.of('exif'), vRange(1, 359)]);
/**
 * @private
 */
var vShapeType = tcombValidation_6.of('rect oval');
/**
 * @private
 */
var vFit = tcombValidation_6.of('clip crop scale max');
/**
 * @private
 */
var vColorspace = tcombValidation_6.of('RGB CMYK Input');
/**
 * @private
 */
var vCropfaces = tcombValidation_6.of('thumb crop fill');
/**
 * @private
 * Apply tcomb validators to object
 *
 * @private
 * @param validators
 * @param canBeBoolean
 * @param maybe
 */
var applySchemaValidators = function (validators, canBeBoolean, maybe) {
    if (canBeBoolean === void 0) { canBeBoolean = false; }
    if (maybe === void 0) { maybe = false; }
    // single validator
    if (typeof validators === 'function') {
        return maybe ? tcombValidation_12(validators) : validators;
    }
    var defaultValidators = tcombValidation_10(validators);
    if (!canBeBoolean) {
        return maybe ? tcombValidation_12(defaultValidators) : defaultValidators;
    }
    var vBoolean = tcombValidation_1;
    var isValid = tcombValidation_8([vBoolean, defaultValidators], 'canBeBoolean');
    isValid.dispatch = function (x) {
        return (typeof x === 'boolean') ? vBoolean : defaultValidators;
    };
    return maybe ? tcombValidation_12(isValid) : isValid;
};
/**
 * Convert custom schema for tcomb-validation with maybe function (not required param)
 *
 * @private
 * @param schema
 */
var toTcombSchema = function (schema) {
    var result = {};
    if (!Array.isArray(schema) && typeof schema === 'object') {
        Object.keys(schema).map(function (key) {
            result[key] = tcombValidation_12(schema[key]);
        });
        return result;
    }
    schema.forEach(function (el) {
        if (el.props) {
            result[el.name] = applySchemaValidators(toTcombSchema(el.props), el.canBeBoolean, !el.required);
            return;
        }
        result[el.name] = applySchemaValidators(el.validator, el.canBeBoolean, !el.required);
    });
    return tcombValidation_10(result);
};
/**
 * @private
 */
var validationSchema = [
    {
        name: 'flip',
        validator: tcombValidation_1,
    }, {
        name: 'compress',
        validator: tcombValidation_1,
    }, {
        name: 'flop',
        validator: tcombValidation_1,
    }, {
        name: 'tags',
        validator: tcombValidation_1,
    }, {
        name: 'sfw',
        validator: tcombValidation_1,
    }, {
        name: 'monochrome',
        validator: tcombValidation_1,
    }, {
        name: 'enhance',
        validator: tcombValidation_1,
    }, {
        name: 'redeye',
        validator: tcombValidation_1,
    }, {
        name: 'negative',
        validator: tcombValidation_1,
    }, {
        name: 'resize',
        props: {
            width: tcombValidation_3,
            height: tcombValidation_3,
            fit: vFit,
            align: vAlignment,
        },
    }, {
        name: 'crop',
        props: {
            dim: tcombValidation_9([tcombValidation_3, tcombValidation_3, tcombValidation_3, tcombValidation_3]),
        },
    }, {
        name: 'resize',
        props: {
            width: tcombValidation_3,
            height: tcombValidation_3,
            fit: vFit,
            align: vAlignment,
        },
    }, {
        name: 'rotate',
        props: {
            deg: vRotate,
            colour: vColor,
            background: vColor,
        },
    }, {
        name: 'rounded_corners',
        canBeBoolean: true,
        props: {
            radius: vRange(1, 10000),
            blur: vRange(0, 20),
            background: vColor,
        },
    }, {
        name: 'vignette',
        props: {
            amount: vRange(0, 100),
            blurmode: vBlurMode,
            background: vColor,
        },
    }, {
        name: 'polaroid',
        canBeBoolean: true,
        props: {
            color: vColor,
            rotate: vRotate,
            background: vColor,
        },
    }, {
        name: 'torn_edges',
        canBeBoolean: true,
        props: {
            spread: tcombValidation_9([vRange(1, 10000), vRange(1, 10000)]),
            background: vColor,
        },
    }, {
        name: 'shadow',
        canBeBoolean: true,
        props: {
            blur: vRange(0, 20),
            opacity: vRange(0, 100),
            vector: tcombValidation_9([vRange(-1000, 1000), vRange(-1000, 1000)]),
            color: vColor,
            background: vColor,
        },
    }, {
        name: 'circle',
        canBeBoolean: true,
        props: {
            background: vColor,
        },
    }, {
        name: 'border',
        canBeBoolean: true,
        props: {
            width: vRange(1, 1000),
            color: vColor,
            background: vColor,
        },
    }, {
        name: 'sharpen',
        canBeBoolean: true,
        props: {
            amount: vRange(1, 20),
        },
    }, {
        name: 'blackwhite',
        canBeBoolean: true,
        props: {
            threshold: vRange(0, 100),
        },
    }, {
        name: 'blur',
        canBeBoolean: true,
        props: [{
                name: 'amount',
                validator: vRange(2, 20),
                required: true,
            }],
    }, {
        name: 'sepia',
        canBeBoolean: true,
        props: {
            tone: vRange(1, 100),
        },
    }, {
        name: 'pixelate',
        canBeBoolean: true,
        props: [{
                name: 'amount',
                validator: vRange(2, 100),
                required: true,
            }],
    }, {
        name: 'oil_paint',
        canBeBoolean: true,
        props: {
            amount: vRange(1, 10),
        },
    }, {
        name: 'modulate',
        canBeBoolean: true,
        props: {
            brightness: vRange(0, 10000),
            hue: vRange(0, 359),
            saturation: vRange(0, 10000),
        },
    }, {
        name: 'partial_pixelate',
        props: {
            amount: vRange(2, 100),
            blur: vRange(0, 20),
            type: vShapeType,
            objects: tcombValidation_13(tcombValidation_9([tcombValidation_3, tcombValidation_3, tcombValidation_3, tcombValidation_3])),
        },
    }, {
        name: 'partial_blur',
        props: {
            amount: vRange(2, 100),
            blur: vRange(0, 20),
            type: vShapeType,
            objects: tcombValidation_13(tcombValidation_9([tcombValidation_3, tcombValidation_3, tcombValidation_3, tcombValidation_3])),
        },
    }, {
        name: 'collage',
        props: {
            files: tcombValidation_13(tcombValidation_5),
            margin: tcombValidation_3,
            width: tcombValidation_3,
            height: tcombValidation_3,
            color: vColor,
            fit: vFit,
            autorotate: tcombValidation_1,
        },
    }, {
        name: 'upscale',
        canBeBoolean: true,
        props: {
            upscale: tcombValidation_1,
            noise: tcombValidation_6.of('none low medium high'),
            style: tcombValidation_6.of('artwork photo'),
        },
    }, {
        name: 'ascii',
        canBeBoolean: true,
        props: {
            background: vColor,
            foreground: vColor,
            colored: tcombValidation_1,
            size: vRange(10, 100),
            reverse: tcombValidation_1,
        },
    }, {
        name: 'quality',
        props: {
            value: tcombValidation_4,
        },
    }, {
        name: 'security',
        props: {
            policy: tcombValidation_5,
            signature: tcombValidation_5,
        },
    }, {
        name: 'cache',
        canBeBoolean: true,
        props: {
            cache: tcombValidation_1,
            expiry: tcombValidation_3,
        },
    }, {
        name: 'output',
        props: {
            format: tcombValidation_5,
            colorspace: vColorspace,
            strip: tcombValidation_1,
            quality: vRange(1, 100),
            page: vRange(1, 10000),
            compress: tcombValidation_1,
            density: vRange(1, 500),
            background: vColor,
            secure: tcombValidation_1,
            docinfo: tcombValidation_1,
            pageformat: tcombValidation_6.of('a3 A3 a4 A4 a5 A5 b4 B4 b5 B5 letter legal tabloid'),
            pageorientation: tcombValidation_6.of('portrait landscape'),
        },
    }, {
        name: 'crop_faces',
        props: {
            mode: vCropfaces,
            width: tcombValidation_3,
            height: tcombValidation_3,
            faces: vNumberOrAll(),
            buffer: tcombValidation_3,
        },
    }, {
        name: 'detect_faces',
        canBeBoolean: true,
        props: {
            minsize: vFloatOrRange(0, 10000),
            maxsize: vFloatOrRange(0, 10000),
            color: vColor,
            export: tcombValidation_1,
        },
    }, {
        name: 'pixelate_faces',
        props: {
            faces: vNumberOrAll(),
            minsize: vFloatOrRange(0, 10000),
            maxsize: vFloatOrRange(0, 10000),
            buffer: vRange(0, 1000),
            amount: vRange(2, 100),
            blur: vRange(0, 20),
            type: vShapeType,
        },
    }, {
        name: 'blur_faces',
        props: {
            faces: vNumberOrAll(),
            minsize: vFloatOrRange(0, 10000),
            maxsize: vFloatOrRange(0, 10000),
            buffer: vRange(0, 1000),
            amount: vRange(2, 100),
            blur: vRange(0, 20),
            type: vShapeType,
        },
    }, {
        name: 'video_convert',
        props: {
            preset: tcombValidation_6.of('h264 h264.hi webm webm.hi ogg ogg.hi hls.variant mp3 oga m4a aac hls.variant.audio'),
            force: tcombValidation_1,
            title: tcombValidation_5,
            extname: tcombValidation_5,
            filename: tcombValidation_5,
            location: tcombValidation_6.of('S3 s3 azure gcs rackspace dropbox'),
            path: tcombValidation_5,
            access: tcombValidation_6.of('private public'),
            container: tcombValidation_5,
            audio_bitrate: vRange(0, 999),
            video_bitrate: vRange(1, 5000),
            audio_sample_rate: vRange(0, 99999),
            audio_channels: vRange(1, 12),
            upscale: tcombValidation_1,
            aspect_mode: tcombValidation_6.of('preserve constrain letterbox pad crop'),
            clip_length: tcombValidation_5,
            clip_offset: tcombValidation_5,
            width: tcombValidation_4,
            height: tcombValidation_4,
            two_pass: tcombValidation_1,
            fps: vRange(1, 300),
            keyframe_interval: vRange(1, 300),
            watermark_url: tcombValidation_5,
            watermark_top: tcombValidation_4,
            watermark_bottom: tcombValidation_4,
            watermark_right: tcombValidation_4,
            watermark_left: tcombValidation_4,
            watermark_width: tcombValidation_4,
            watermark_height: tcombValidation_4,
        },
    },
];
/**
 * Converts nested arrays to string
 *
 * @private
 * @example [1,2, [2,3]] => "[1,2, [2,3]]"
 * @param arr - any array
 */
var arrayToString = function (arr) {
    var toReturn = arr.map(function (el) {
        if (Array.isArray(el)) {
            return arrayToString(el);
        }
        return el;
    });
    return "[" + toReturn + "]";
};
/**
 * Flatten transformation option to string
 *
 * @private
 * @example {resize:{width: 100,height: 200}} => resize=width:100,height:200
 * @param key - option key
 * @param values - option params
 */
var optionToString = function (key, values) {
    var optionsString = [];
    // if we just want to enable feature
    if (typeof values === 'boolean') {
        if (!values && key === 'cache') {
            return key + "=false";
        }
        if (!values) {
            return '';
        }
        return key;
    }
    if (typeof values === 'object' && !Object.keys(values).length) {
        return '';
    }
    Object.keys(values).forEach(function (i) {
        if (Array.isArray(values[i])) {
            optionsString.push(i + ":" + arrayToString(values[i]));
            return;
        }
        optionsString.push(i + ":" + values[i]);
    });
    return key + "=" + optionsString.join(',');
};
/**
 * Creates filestack transform url.
 * Transform params can be provided in camelCase or snakeCase style
 *
 * @example
 * ```js
 * // camelCase
 * console.log(transform(session, {
 *    partialPixelate: {
 *      objects: [[10, 20, 200, 250], [275, 91, 500, 557]],
 *    },
 *  }, 'testfile'));
 * ```
 * result => https://cdn.filestackcontent.com/partial_pixelate=objects:[[10,20,200,250],[275,91,500,557]]/testfile
 *
 * ```js
 * // snakeCase
 * console.log(transform(session, {
 *    partial_pixelate: {
 *      objects: [[10, 20, 200, 250], [275, 91, 500, 557]],
 *    },
 *  }, 'testfile'));
 * ```
 * result => https://cdn.filestackcontent.com/partial_pixelate=objects:[[10,20,200,250],[275,91,500,557]]/testfile
 *
 * @private
 * @throws Error
 * @param options Transformation options
 */
var transform = function (session, url, options) {
    if (options === void 0) { options = {}; }
    options = toSnakeCase(options);
    // strict will not allow additional params
    var validate = tcombValidation_11(options, toTcombSchema(validationSchema), { strict: true });
    if (!validate.isValid()) {
        var firstError = validate.firstError();
        throw new Error("Wrong options provided: " + (firstError ? firstError.message : 'unknown'));
    }
    var transformsArray = [];
    if (session.policy && session.signature) {
        options.security = {
            policy: session.policy,
            signature: session.signature,
        };
    }
    Object.keys(options).forEach(function (key) {
        transformsArray.push(optionToString(key, options[key]));
    });
    // remove empty transform entries
    transformsArray = transformsArray.filter(function (val) {
        return val.length;
    });
    // See URL format: https://www.filestack.com/docs/image-transformations
    var baseURL = resolveCdnUrl(session, url);
    if (!transformsArray.length) {
        return baseURL + "/" + url;
    }
    var transformString = transformsArray.join('/');
    return baseURL + "/" + transformString + "/" + url;
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @private
 * @param session
 * @param url
 * @param opts
 * @param token
 * @param security
 */
var storeURL = function (session, url, opts, token, security) {
    if (!url || typeof url !== 'string') {
        throw new Error('url is required for storeURL');
    }
    var allowed = [
        { name: 'filename', type: tcombValidation_5 },
        { name: 'location', type: tcombValidation_6.of('s3 gcs rackspace azure dropbox') },
        { name: 'path', type: tcombValidation_5 },
        { name: 'region', type: tcombValidation_5 },
        { name: 'container', type: tcombValidation_5 },
        { name: 'access', type: tcombValidation_6.of('public private') },
    ];
    checkOptions('storeURL', allowed, opts);
    var options = __assign({}, opts);
    var location = options.location || 's3';
    options.key = session.apikey;
    options.policy = security && security.policy || session.policy;
    options.signature = security && security.signature || session.signature;
    var baseURL = session.urls.storeApiUrl + "/" + location;
    return new Promise(function (resolve, reject) {
        var req = request
            .post(baseURL)
            .query(removeEmpty(options))
            .field('url', url);
        if (token) {
            token.cancel = function () {
                req.abort();
                reject(new Error('Upload cancelled'));
            };
        }
        req.then(function (res) {
            if (res.body && res.body.url) {
                var handle = res.body.url.split('/').pop();
                var response = __assign({}, res.body, { handle: handle, mimetype: res.body.type });
                resolve(response);
            }
            else {
                resolve(res.body);
            }
        }).catch(function (err) {
            reject(err);
        });
    });
};

var bowser = createCommonjsModule(function (module) {
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if ('object' != 'undefined' && module.exports) module.exports = definition();
  else if (typeof undefined == 'function' && undefined.amd) undefined(name, definition);
  else root[name] = definition();
}(commonjsGlobal, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true;

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)(o|0)s/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result;

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      };
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      };
    }
    else if (/Whale/i.test(ua)) {
      result = {
        name: 'NAVER Whale browser'
        , whale: t
        , version: getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
      };
    }
    else if (/MZBrowser/i.test(ua)) {
      result = {
        name: 'MZ Browser'
        , mzbrowser: t
        , version: getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
      };
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      };
    }
    else if (/focus/i.test(ua)) {
      result = {
        name: 'Focus'
        , focus: t
        , version: getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
      };
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      };
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      };
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      };
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      };
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      };
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      };
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      };
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , osname: 'Windows Phone'
      , windowsphone: t
      };
      if (edgeVersion) {
        result.msedge = t;
        result.version = edgeVersion;
      }
      else {
        result.msie = t;
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      };
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , osname: 'Chrome OS'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      };
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      };
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , osname: 'Sailfish OS'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      };
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      };
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      };
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t;
        result.osname = 'Firefox OS';
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      };
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      };
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      };
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , osname: 'BlackBerry OS'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      };
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , osname: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t);
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , osname: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , osname: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      };
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      };
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      };
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      };
      if (versionIdentifier) {
        result.version = versionIdentifier;
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      };
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier;
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      };
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink";
        result.blink = t;
      } else {
        result.name = result.name || "Webkit";
        result.webkit = t;
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier;
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko";
      result.gecko = t;
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && (android || result.silk)) {
      result.android = t;
      result.osname = 'Android';
    } else if (!result.windowsphone && iosdevice) {
      result[iosdevice] = t;
      result.ios = t;
      result.osname = 'iOS';
    } else if (mac) {
      result.mac = t;
      result.osname = 'macOS';
    } else if (xbox) {
      result.xbox = t;
      result.osname = 'Xbox';
    } else if (windows) {
      result.windows = t;
      result.osname = 'Windows';
    } else if (linux) {
      result.linux = t;
      result.osname = 'Linux';
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i));
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t;
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t;
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.whale && compareVersions([result.version, '1.0']) === 1) ||
        (result.mzbrowser && compareVersions([result.version, '6.0']) === 1) ||
        (result.focus && compareVersions([result.version, '1.0']) === 1) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t;
    } else result.x = t;

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '');

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});
});
var bowser_1 = bowser.mobile;

/**
 * Implementation of atob() according to the HTML spec, except that instead of
 * throwing INVALID_CHARACTER_ERR we return null.
 */
function atob(input) {
  // WebIDL requires DOMStrings to just be converted using ECMAScript
  // ToString, which in our case amounts to calling String().
  input = String(input);
  // "Remove all space characters from input."
  input = input.replace(/[ \t\n\f\r]/g, '');
  // "If the length of input divides by 4 leaving no remainder, then: if
  // input ends with one or two U+003D EQUALS SIGN (=) characters, remove
  // them from input."
  if (input.length % 4 == 0 && /==?$/.test(input)) {
    input = input.replace(/==?$/, '');
  }
  // "If the length of input divides by 4 leaving a remainder of 1, throw an
  // INVALID_CHARACTER_ERR exception and abort these steps."
  //
  // "If input contains a character that is not in the following list of
  // characters and character ranges, throw an INVALID_CHARACTER_ERR
  // exception and abort these steps:
  //
  // U+002B PLUS SIGN (+)
  // U+002F SOLIDUS (/)
  // U+0030 DIGIT ZERO (0) to U+0039 DIGIT NINE (9)
  // U+0041 LATIN CAPITAL LETTER A to U+005A LATIN CAPITAL LETTER Z
  // U+0061 LATIN SMALL LETTER A to U+007A LATIN SMALL LETTER Z"
  if (input.length % 4 == 1 || !/^[+/0-9A-Za-z]*$/.test(input)) {
    return null;
  }
  // "Let output be a string, initially empty."
  var output = '';
  // "Let buffer be a buffer that can have bits appended to it, initially
  // empty."
  //
  // We append bits via left-shift and or.  accumulatedBits is used to track
  // when we've gotten to 24 bits.
  var buffer = 0;
  var accumulatedBits = 0;
  // "While position does not point past the end of input, run these
  // substeps:"
  for (var i = 0; i < input.length; i++) {
    // "Find the character pointed to by position in the first column of
    // the following table. Let n be the number given in the second cell of
    // the same row."
    //
    // "Append to buffer the six bits corresponding to number, most
    // significant bit first."
    //
    // atobLookup() implements the table from the spec.
    buffer <<= 6;
    buffer |= atobLookup(input[i]);
    // "If buffer has accumulated 24 bits, interpret them as three 8-bit
    // big-endian numbers. Append the three characters with code points
    // equal to those numbers to output, in the same order, and then empty
    // buffer."
    accumulatedBits += 6;
    if (accumulatedBits == 24) {
      output += String.fromCharCode((buffer & 0xff0000) >> 16);
      output += String.fromCharCode((buffer & 0xff00) >> 8);
      output += String.fromCharCode(buffer & 0xff);
      buffer = accumulatedBits = 0;
    }
    // "Advance position by one character."
  }
  // "If buffer is not empty, it contains either 12 or 18 bits. If it
  // contains 12 bits, discard the last four and interpret the remaining
  // eight as an 8-bit big-endian number. If it contains 18 bits, discard the
  // last two and interpret the remaining 16 as two 8-bit big-endian numbers.
  // Append the one or two characters with code points equal to those one or
  // two numbers to output, in the same order."
  if (accumulatedBits == 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits == 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 0xff00) >> 8);
    output += String.fromCharCode(buffer & 0xff);
  }
  // "Return output."
  return output;
}
/**
 * A lookup table for atob(), which converts an ASCII character to the
 * corresponding six-bit number.
 */
function atobLookup(chr) {
  if (/[A-Z]/.test(chr)) {
    return chr.charCodeAt(0) - 'A'.charCodeAt(0);
  }
  if (/[a-z]/.test(chr)) {
    return chr.charCodeAt(0) - 'a'.charCodeAt(0) + 26;
  }
  if (/[0-9]/.test(chr)) {
    return chr.charCodeAt(0) - '0'.charCodeAt(0) + 52;
  }
  if (chr == '+') {
    return 62;
  }
  if (chr == '/') {
    return 63;
  }
  // Throw exception; should not be hit in tests
}

var atob_1 = atob;

/**
 * btoa() as defined by the HTML5 spec, which mostly just references RFC4648.
 */
function btoa$1(s) {
  var i;
  // String conversion as required by WebIDL.
  s = String(s);
  // "The btoa() method must throw an INVALID_CHARACTER_ERR exception if the
  // method's first argument contains any character whose code point is
  // greater than U+00FF."
  for (i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 255) {
      return null;
    }
  }
  var out = '';
  for (i = 0; i < s.length; i += 3) {
    var groupsOfSix = [undefined, undefined, undefined, undefined];
    groupsOfSix[0] = s.charCodeAt(i) >> 2;
    groupsOfSix[1] = (s.charCodeAt(i) & 0x03) << 4;
    if (s.length > i + 1) {
      groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (s.charCodeAt(i + 1) & 0x0f) << 2;
    }
    if (s.length > i + 2) {
      groupsOfSix[2] |= s.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = s.charCodeAt(i + 2) & 0x3f;
    }
    for (var j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] == 'undefined') {
        out += '=';
      } else {
        out += btoaLookup(groupsOfSix[j]);
      }
    }
  }
  return out;
}

/**
 * Lookup table for btoa(), which converts a six-bit number into the
 * corresponding ASCII character.
 */
function btoaLookup(idx) {
  if (idx < 26) {
    return String.fromCharCode(idx + 'A'.charCodeAt(0));
  }
  if (idx < 52) {
    return String.fromCharCode(idx - 26 + 'a'.charCodeAt(0));
  }
  if (idx < 62) {
    return String.fromCharCode(idx - 52 + '0'.charCodeAt(0));
  }
  if (idx == 62) {
    return '+';
  }
  if (idx == 63) {
    return '/';
  }
  // Throw INVALID_CHARACTER_ERR exception here -- won't be hit in the tests.
}

var btoa_1 = btoa$1;

var abab = {
  atob: atob_1,
  btoa: btoa_1
};
var abab_1 = abab.atob;
var abab_2 = abab.btoa;

var sparkMd5 = createCommonjsModule(function (module, exports) {
(function (factory) {
    {
        // Node/CommonJS
        module.exports = factory();
    }
}(function (undefined) {

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;

        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;

        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;

        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b  = (b << 21 | b >>> 11) + c | 0;

        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    }

    function rhex(n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

                if (to !== undefined) {
                    end = clamp(to, length);
                }

                if (begin > end) {
                    return new ArrayBuffer(0);
                }

                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);

                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);

                return target;
            };
        })();
    }

    // ---------------------------------------------------

    /**
     * Helpers.
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);

        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);

        return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
    }

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */

    function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }

    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };

    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hash = function (str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);

        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);

        return state;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);

        return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));
});
var sparkMd5_1 = sparkMd5.ArrayBuffer;

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Calculates a MD5 checksum for passed buffer
 * @private
 * @param data  Data to be hashed
 * @returns     base64 encoded MD5 hash
 */
var calcMD5 = function (data) {
    return abab_2(sparkMd5_1.hash(data, true));
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Is file?
 *
 * @private
 * @return {Boolean}
 */
var isFile = function (file) {
    return file.toString() === '[object File]';
};
/**
 * Is blob?
 *
 * @private
 * @param blob
 * @returns {Boolean}
 */
var isBlob = function (blob) {
    return isFile(blob) || (blob.toString() === '[object Blob]');
};
/**
 * Convert encoded base64 string or dataURI to blob
 * @param b64data     String to decode
 * @param sliceSize   Byte quantity to split data into
 * @private
 * @returns {Blob}
 */
var b64toBlob = function (b64Data, sliceSize) {
    if (sliceSize === void 0) { sliceSize = 512; }
    var byteString;
    var contentType = '';
    if (b64Data.split(',')[0].indexOf('base64') >= 0) {
        byteString = b64Data.split(',')[1];
    }
    if (byteString !== undefined) {
        contentType = b64Data.split(',')[0].split(':')[1].split(';')[0];
        b64Data = decodeURI(byteString);
    }
    var byteCharacters = abab_1(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i += 1) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
};
/**
 * Get start and end for slice operations
 * @private
 * @returns Object where keys are `start` and `end`
 */
var getRange = function (_a, partNumber) {
    var config = _a.config, file = _a.file;
    var start = partNumber * config.partSize;
    var end = Math.min(start + config.partSize, file.size);
    return { start: start, end: end };
};
/**
 * Slice file into a single part
 * @private
 */
var sliceFile = function (ctx, partNumber) {
    var slice = File.prototype.slice;
    var _a = getRange(ctx, partNumber), start = _a.start, end = _a.end;
    return slice.call(ctx.file, start, end);
};
/**
 * Reads file as ArrayBuffer using HTML5 FileReader implementation
 * @private
 * @param file  Valid File instance
 * @returns     {Promise}
 */
var readFile = function (file) {
    return new Promise(function (resolve, reject) {
        var reader;
        if (File && FileReader && Blob) {
            reader = new FileReader();
            reader.onloadend = resolve;
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        }
        else {
            reject(new Error('The File APIs are not fully supported by your browser'));
        }
    });
};
/**
 * Reads a slice of a file based on the current part.
 * @private
 */
var getPart = function (part, ctx) {
    return readFile(sliceFile(ctx, part.number))
        .then(function (evt) {
        var buffer = evt.target.result;
        var newPart = __assign({}, part, { buffer: buffer, size: buffer.byteLength, md5: calcMD5(buffer) });
        return newPart;
    });
};
/**
 * Get a Blob from a File or string.
 * @private
 */
var getFile = function (fileOrString) {
    var file = fileOrString;
    if (typeof fileOrString === 'string') {
        file = b64toBlob(file);
    }
    if (!file || !isBlob(file)) {
        return Promise.reject(new TypeError('File argument is not a valid Blob'));
    }
    return Promise.resolve(file);
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @private
 * @param file
 * @param cfg
 */
var getName = function (file, cfg) { return cfg.customName || file.name; };

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @private
 */
/* istanbul ignore next */
var getHost = function (host) {
    return undefined === 'unit' && host;
};
/**
 * @private
 */
/* istanbul ignore next */
var getLocationURL = function (url) {
    return url && "https://" + url;
};
/**
 * Generates multi-part fields for all requests
 * @private
 * @param fields  Object containing form data keys
 * @param config  Upload config
 */
var getFormData = function (fields, _a) {
    var store = _a.store;
    var fd = {};
    Object.keys(fields).forEach(function (key) {
        if (fields[key])
            fd[key] = fields[key];
    });
    Object.keys(store).forEach(function (key) {
        if (store[key])
            fd[key] = store[key];
    });
    return fd;
};
/**
 * Starts the multi-part upload flow (/multipart/start)
 * @private
 * @param file    Valid File instance
 * @param config  Upload config
 * @returns {Promise}
 */
var start = function (_a) {
    var config = _a.config, file = _a.file;
    var fields = {
        apikey: config.apikey,
        filename: getName(file, config),
        mimetype: config.mimetype || file.type || 'application/octet-stream',
        size: file.size,
    };
    // Security
    if (config.policy && config.signature) {
        fields.policy = config.policy;
        fields.signature = config.signature;
    }
    // Intelligent Ingestion
    if (config.intelligent) {
        fields.multipart = true;
    }
    var formData = getFormData(fields, config);
    return requestWithSource('post', config.host + "/multipart/start")
        .timeout(config.timeout)
        .field(formData);
};
/**
 * Gets the S3 upload params for current part (/multipart/upload)
 * @private
 * @param startParams   Parameters returned from start call
 * @param partNumber    Current part number (1 - 10000)
 * @param size          Size of current part in bytes
 * @param md5           MD5 hash of part
 * @param config        Upload config
 * @param offset        Current offset if chunking a part.
 */
var getS3PartData = function (part, _a) {
    var config = _a.config, params = _a.params;
    /* istanbul ignore next */
    var host = getHost(config.host) || getLocationURL(params.location_url);
    var locationRegion = params.location_region;
    var fields = __assign({ apikey: config.apikey, part: part.number + 1, size: part.size, md5: part.md5 }, params);
    // Intelligent Ingestion
    if (part.offset !== undefined) {
        fields.multipart = true;
        fields.offset = part.offset === 0 ? '0' : part.offset;
    }
    var formData = getFormData(fields, config);
    var req = requestWithSource('post', host + "/multipart/upload");
    /* istanbul ignore next */
    if (locationRegion) {
        req.set('Filestack-Upload-Region', locationRegion);
    }
    req.timeout(config.timeout);
    req.field(formData);
    return new Promise(function (resolve, reject) {
        req.end(function (err, res) {
            if (err)
                return reject(err);
            return resolve(res);
        });
    });
};
/**
 * Uploads bytes directly to S3 with HTTP PUT
 * @private
 * @param part        ArrayBuffer with part data
 * @param params      Params for this part returned by getS3PartData response
 * @param onProgress  A function to be called on progress event for this part
 * @param config
 */
var uploadToS3 = function (part, params, onProgress, cfg) {
    /* istanbul ignore next */
    var host = getHost(cfg.host + "/fakeS3") || params.url;
    var timeout = cfg.timeout || (part.byteLength / 100);
    // console.log(part.byteLength );
    var req = request
        .put(host)
        .set(params.headers)
        .timeout(timeout)
        .send(part);
    // Don't call progress handler if user didn't specify a callback
    if (onProgress) {
        return req.on('progress', onProgress);
    }
    return req;
};
/**
 * Convert array of Etags into format for /multipart/complete call
 * @private
 * @param etags     Array of Etag strings
 */
var formatETags = function (etags) { return etags.map(function (tag, idx) { return idx + 1 + ":" + tag; }).join(';'); };
/**
 * Completes upload flow (/multipart/complete)
 * @private
 * @param file          File being uploaded
 * @param etags         An array of etags from each S3 part
 * @param startParams   Parameters returned from start call
 * @param config        Upload config
 */
var complete = function (etags, _a) {
    var config = _a.config, file = _a.file, params = _a.params;
    /* istanbul ignore next */
    var host = getHost(config.host) || getLocationURL(params.location_url);
    var locationRegion = params.location_region;
    var fields = __assign({ apikey: config.apikey, size: file.size, filename: getName(file, config), mimetype: config.mimetype || file.type || 'application/octet-stream', parts: formatETags(etags) }, params);
    if (config.workflowIds && config.workflowIds.length) {
        fields['workflow_ids'] = JSON.stringify(config.workflowIds);
    }
    // Intelligent Ingestion
    if (config.intelligent) {
        fields.multipart = true;
        delete fields.parts;
    }
    var formData = getFormData(fields, config);
    var req = requestWithSource('post', host + "/multipart/complete");
    /* istanbul ignore next */
    if (locationRegion) {
        req.set('Filestack-Upload-Region', locationRegion);
    }
    req.timeout(config.timeout);
    return req.field(formData);
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _this = undefined;
/**
 * Slice a part into smaller chunks
 * @private
 * @param part  Part buffer to slice.
 * @param size  Size of slices.
 * @returns     List of chunks.
 */
var slicePartIntoChunks = function (part, size) {
    var offset = 0;
    var chunks = [];
    while (offset < part.size) {
        var end = Math.min(offset + size, part.size);
        var buf = part.buffer.slice(offset, end);
        var chunk = {
            buffer: buf,
            offset: offset,
            size: buf.byteLength,
            number: part.number,
            md5: calcMD5(buf),
        };
        chunks.push(chunk);
        offset += size;
    }
    return chunks;
};
/**
 * Get chunk (of part) metadata and PUT chunk to S3
 * @private
 * @param chunk Chunk object, has offset information
 * @param startParams Parameters returned from start call
 * @param config Upload config
 * @returns {Promise}
 */
var uploadChunk = function (chunk, ctx) { return __awaiter(_this, void 0, void 0, function () {
    var s3Data, onProgress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getS3PartData(chunk, ctx)];
            case 1:
                s3Data = (_a.sent()).body;
                if (ctx.config.onProgress) {
                    /* istanbul ignore next */
                    onProgress = throttle(function (evt) {
                        /* istanbul ignore next */
                        if (evt.loaded > chunk.loaded) {
                            chunk.loaded = evt.loaded;
                        }
                    }, ctx.config.progressInterval);
                }
                chunk.request = uploadToS3(chunk.buffer, s3Data, onProgress, ctx.config);
                return [4 /*yield*/, chunk.request];
            case 2:
                _a.sent();
                chunk.loaded = chunk.size;
                return [2 /*return*/, chunk.request];
        }
    });
}); };
/**
 * Commits single part (/commit) for intelligent ingestion (only called after all chunks have been uploaded)
 * @private
 * @param file        File being uploaded
 * @param part        Part object
 * @param startParams Parameters returned from start call
 * @param config      Upload config
 * @returns {Promise}
 */
var commitPart = function (part, ctx) {
    var cfg = ctx.config;
    /* istanbul ignore next */
    var host = getHost(cfg.host) || getLocationURL(ctx.params.location_url);
    var fields = __assign({ apikey: cfg.apikey, part: part.number + 1, size: ctx.file.size }, ctx.params);
    var formData = getFormData(fields, cfg);
    return requestWithSource('post', host + "/multipart/commit")
        .timeout(cfg.timeout)
        .field(formData);
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _this$1 = undefined;
/**
 * @private
 */
var MIN_CHUNK_SIZE = 32 * 1024;
/**
 * @private
 */
var statuses = {
    INIT: "init" /* INIT */,
    RUNNING: "running" /* RUNNING */,
    DONE: "done" /* DONE */,
    FAILED: "failed" /* FAILED */,
    PAUSED: "paused" /* PAUSED */,
};
/**
 * Returns a Promise based on the flow state
 * If the flow is paused it will return a Promise that resolves when resumed
 * If the flow failed it will resolve harmlessly
 *
 * @private
 * @param func  function that returns a Promise
 */
var flowControl = function (ctx, func) {
    // console.log(ctx.state);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (ctx.state.status === statuses.FAILED) {
            return Promise.resolve();
        }
        return new Promise(function (resolve) {
            var check = function () {
                if (ctx.state.status === statuses.PAUSED) {
                    setTimeout(function () { return check(); }, 100);
                }
                else {
                    resolve(func.apply(void 0, args));
                }
            };
            check();
        });
    };
};
/**
 *
 * @private
 * @param num
 * @param ctx
 */
var makePart = function (num, ctx) {
    return {
        buffer: null,
        chunks: [],
        chunkSize: ctx.config.intelligentChunkSize
            ? ctx.config.intelligentChunkSize
            : bowser_1
                ? 1 * 1024 * 1024
                : 8 * 1024 * 1024,
        intelligentOverride: false,
        loaded: 0,
        number: num,
        request: null,
        size: 0,
    };
};
/**
 *
 * @private
 * @param part
 * @param ctx
 */
var uploadPart = function (part, ctx) { return __awaiter(_this$1, void 0, void 0, function () {
    var cfg, goChunk, s3Data, onProgress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cfg = ctx.config;
                if (!(cfg.intelligent === true || part.intelligentOverride)) return [3 /*break*/, 2];
                goChunk = flowControl(ctx, function (chunk) { return uploadChunk(chunk, ctx); });
                part.chunks = slicePartIntoChunks(part, part.chunkSize);
                return [4 /*yield*/, Promise.all(part.chunks.map(throat$1(cfg.concurrency, goChunk)))];
            case 1:
                _a.sent();
                return [2 /*return*/, commitPart(part, ctx)];
            case 2: return [4 /*yield*/, getS3PartData(part, ctx)];
            case 3:
                s3Data = (_a.sent()).body;
                if (cfg.onProgress) {
                    /* istanbul ignore next */
                    onProgress = throttle(function (evt) {
                        /* istanbul ignore next */
                        if (evt.loaded > part.loaded) {
                            part.loaded = evt.loaded;
                        }
                    }, cfg.progressInterval);
                }
                part.request = uploadToS3(part.buffer, s3Data, onProgress, cfg);
                return [2 /*return*/, part.request];
        }
    });
}); };
/**
 * Clean up array buffers in memory
 * Because promises aren't streams
 * @private
 */
var gc = function (part) {
    part.buffer = undefined;
    part.request = undefined;
    if (part.chunks && part.chunks.length) {
        part.chunks.forEach(gc);
    }
};
/**
 * Helpers to calculate total progress of file upload in bytes and percent
 * @private
 */
var sumBytes = function (bytes) { return bytes.reduce(function (a, b) { return a + b; }, 0); };
/**
 *
 * @private
 * @param bytes
 * @param file
 */
var percentOfFile = function (bytes, file) { return Math.round((bytes / file.size) * 100); };
/**
 *
 * @private
 * @param param0
 */
var getProgress = function (_a) {
    var config = _a.config, state = _a.state, file = _a.file;
    var parts = Object.keys(state.parts).map(function (k) { return state.parts[k]; });
    var partsLoaded = parts.map(function (p) { return p.loaded; });
    var chunksLoaded = parts
        .map(function (p) { return p.chunks; })
        .reduce(function (a, b) { return a.concat(b); }, [])
        .map(function (c) { return c.loaded; })
        .filter(function (n) { return n; });
    var loaded = partsLoaded;
    if (config.intelligent === true) {
        loaded = chunksLoaded;
    }
    if (config.intelligent === 'fallback') {
        var partsWithoutChunks = parts
            .filter(function (p) { return !p.intelligentOverride; })
            .map(function (p) { return p.loaded; });
        loaded = partsWithoutChunks.concat(chunksLoaded);
    }
    var totalBytes = sumBytes(loaded);
    var totalPercent = percentOfFile(totalBytes, file);
    var payload = {
        totalBytes: totalBytes,
        totalPercent: totalPercent,
    };
    var prev = state.previousPayload || {};
    /* istanbul ignore next */
    if (totalPercent < prev.totalPercent) {
        payload.totalBytes = prev.totalBytes;
        payload.totalPercent = prev.totalPercent;
    }
    state.previousPayload = payload;
    return payload;
};
/**
 * Entry point for multi-part upload flow
 *
 * @private
 * @param file    File to upload
 * @param config  Upload config
 * @param token   Control token
 */
var uploadFile = function (ctx, token) { return __awaiter(_this$1, void 0, void 0, function () {
    var file, state, config, startProgress, finishProgress, cancelAllRequests, failAndCleanUp, cancel, cancellable, retry, params, goPart, totalParts, allParts, partsFlow, etags, goComplete;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                file = ctx.file, state = ctx.state, config = ctx.config;
                startProgress = function (onProgress) {
                    if (onProgress) {
                        state.progressTick = setInterval(function () {
                            var payload = getProgress(ctx);
                            if (payload.totalPercent === 100) {
                                clearInterval(state.progressTick);
                            }
                            onProgress(payload);
                        }, config.progressInterval);
                    }
                };
                finishProgress = function (onProgress) {
                    if (onProgress) {
                        onProgress({
                            totalBytes: file.size,
                            totalPercent: 100,
                        });
                        clearInterval(state.progressTick);
                    }
                };
                /**
                 * Will pause progress tick and set state
                 */
                token.pause = function () {
                    if (state.status === statuses.RUNNING) {
                        state.status = statuses.PAUSED;
                        clearInterval(state.progressTick);
                    }
                };
                /**
                 * Will resume flow and start progress tick again
                 */
                token.resume = function () {
                    if (state.status === statuses.PAUSED) {
                        state.status = statuses.RUNNING;
                        startProgress(config.onProgress);
                    }
                };
                cancelAllRequests = function () {
                    var parts = Object.keys(state.parts).map(function (k) { return state.parts[k]; });
                    parts.forEach(function (part) {
                        if (part.request)
                            part.request.abort();
                        part.chunks.forEach(function (chunk) {
                            if (chunk.request)
                                chunk.request.abort();
                        });
                        gc(part);
                    });
                };
                failAndCleanUp = function () {
                    cancelAllRequests();
                    clearInterval(state.progressTick);
                    state.status = statuses.FAILED;
                    if (file.buffer) {
                        file.buffer = null;
                    }
                };
                cancel = new Promise(function (_, reject) {
                    token.cancel = function () {
                        if (state.status === statuses.RUNNING || state.status === statuses.PAUSED) {
                            failAndCleanUp();
                            reject(new Error('Upload cancelled'));
                        }
                    };
                });
                cancellable = function (p) {
                    return Promise.race([cancel, p]);
                };
                retry = function (location, func, err, part) {
                    var attempt = state.retries[location] || 0;
                    var waitTime = Math.min(config.retryMaxTime, (Math.pow(config.retryFactor, attempt)) * 1000);
                    var promise = new Promise(function (resolve, reject) {
                        if (attempt === config.retry
                            || (err.status === 400 && err.method !== 'PUT')
                            || err.status === 401
                            || err.status === 403
                            || err.status === 404
                            || part && part.chunkSize <= MIN_CHUNK_SIZE) {
                            failAndCleanUp();
                            return reject(err);
                        }
                        var exec = function () { return setTimeout(function () { return resolve(func()); }, waitTime); };
                        // FII S3 retry (resize chunk)
                        if (part && (config.intelligent || part.intelligentOverride) && (
                        // Browser S3 network error
                        (err.method === 'PUT' && (err.crossDomain || err.status === 400 || err.timeout))
                            // Node S3 network error
                            || (err.code === 'ECONNRESET' || err.code === 'ETIMEDOUT'))) {
                            part.chunkSize /= 2;
                            if (config.onRetry) {
                                config.onRetry({
                                    location: location,
                                    parts: state.parts,
                                    filename: getName(file, config),
                                    chunkSize: part.chunkSize,
                                    attempt: undefined,
                                });
                            }
                            if (config.intelligent === 'fallback') {
                                part.intelligentOverride = true;
                            }
                            return exec();
                        }
                        // Normal retry (with retry limit)
                        attempt += 1;
                        state.retries[location] = attempt;
                        if (config.onRetry) {
                            config.onRetry({
                                location: location,
                                parts: state.parts,
                                filename: getName(file, config),
                                attempt: attempt,
                            });
                        }
                        return exec();
                    });
                    return cancellable(promise);
                };
                // Here we go
                state.status = statuses.RUNNING;
                return [4 /*yield*/, cancellable(start(ctx))];
            case 1:
                params = (_a.sent()).body;
                ctx.params = params;
                goPart = flowControl(ctx, function (partObj) { return __awaiter(_this, void 0, void 0, function () {
                    var part, location, _a, etag, status_1, err, err_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, getPart(partObj, ctx)];
                            case 1:
                                part = _b.sent();
                                if (part.size === 0) {
                                    return [2 /*return*/, Promise.reject(new Error('Upload aborted due to empty chunk.'))];
                                }
                                location = "upload part " + (part.number + 1);
                                state.parts[part.number] = part;
                                _b.label = 2;
                            case 2:
                                _b.trys.push([2, 4, , 5]);
                                return [4 /*yield*/, uploadPart(part, ctx)];
                            case 3:
                                _a = _b.sent(), etag = _a.headers.etag, status_1 = _a.status;
                                if (status_1 === 206) {
                                    err = new Error('Intelligent part failed to commit');
                                    return [2 /*return*/, retry(location, function () { return goPart(part); }, err, part)];
                                }
                                part.loaded = part.size;
                                gc(part);
                                if (!config.intelligent && !etag) {
                                    return [2 /*return*/, Promise.reject(new Error('Response from S3 is missing ETag header.'))];
                                }
                                return [2 /*return*/, etag];
                            case 4:
                                err_1 = _b.sent();
                                return [2 /*return*/, retry(location, function () { return goPart(part); }, err_1, part)];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                totalParts = Math.ceil(file.size / config.partSize);
                allParts = range(0, totalParts).map(function (p) { return makePart(p, ctx); });
                partsFlow = Promise.all(allParts.map(throat$1(config.concurrency, goPart)));
                startProgress(config.onProgress);
                return [4 /*yield*/, cancellable(partsFlow)];
            case 2:
                etags = _a.sent();
                goComplete = flowControl(ctx, function () { return __awaiter(_this, void 0, void 0, function () {
                    var res, err_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, complete(etags, ctx)];
                            case 1:
                                res = _a.sent();
                                if (res.status === 202) {
                                    return [2 /*return*/, new Promise(function (resolve) {
                                            setTimeout(function () { return resolve(goComplete()); }, 1000);
                                        })];
                                }
                                state.status = statuses.DONE;
                                finishProgress(config.onProgress);
                                if (file.buffer) {
                                    file.buffer = null;
                                }
                                if (res.body && res.body.error && res.body.error.text) {
                                    return [2 /*return*/, Promise.reject(new Error("File upload error: " + res.body.error.text))];
                                }
                                return [2 /*return*/, res.body];
                            case 2:
                                err_2 = _a.sent();
                                return [2 /*return*/, retry('complete', goComplete, err_2)];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, cancellable(goComplete())];
        }
    });
}); };
/**
 * User facing method to upload a single file
 * @private
 * @param session Session object that contains apikey
 * @param file A valid file path (in Node). In browsers a File, Blob, or base64 encoded string
 * @param options Configures the uploader
 * @param storeOptions Storage options for the backend
 * @param token Control token
 */
var upload = function (session, fileOrString, options, storeOptions, token, security) {
    if (options === void 0) { options = {}; }
    if (storeOptions === void 0) { storeOptions = {}; }
    if (token === void 0) { token = {}; }
    return getFile(fileOrString).then(function (file) {
        if ((file.size !== undefined && file.size === 0) || file.length === 0) {
            return Promise.reject(new Error('file has a size of 0.'));
        }
        var allowedOptions = [
            { name: 'host', type: tcombValidation_5 },
            { name: 'path', type: tcombValidation_1 },
            { name: 'mimetype', type: tcombValidation_5 },
            { name: 'partSize', type: tcombValidation_4 },
            { name: 'concurrency', type: tcombValidation_7(tcombValidation_3, function (n) { return n > 0; }) },
            { name: 'onProgress', type: tcombValidation_2 },
            { name: 'progressInterval', type: tcombValidation_3 },
            { name: 'onRetry', type: tcombValidation_2 },
            { name: 'retry', type: tcombValidation_3 },
            { name: 'retryFactor', type: tcombValidation_3 },
            { name: 'retryMaxTime', type: tcombValidation_3 },
            { name: 'timeout', type: tcombValidation_3 },
            { name: 'intelligent', type: tcombValidation_8([tcombValidation_1, tcombValidation_6.of('fallback')]) },
            { name: 'intelligentChunkSize', type: tcombValidation_4 },
            { name: 'workflowIds', type: tcombValidation_13(tcombValidation_5) },
        ];
        var allowedStoreOptions = [
            { name: 'location', type: tcombValidation_6.of('s3 gcs rackspace azure dropbox') },
            { name: 'region', type: tcombValidation_5 },
            { name: 'path', type: tcombValidation_5 },
            { name: 'container', type: tcombValidation_5 },
            { name: 'filename', type: tcombValidation_5 },
            { name: 'access', type: tcombValidation_6.of('public private') },
        ];
        // Throw if any options are invalid
        checkOptions('upload (options)', allowedOptions, options);
        checkOptions('upload (storeOptions)', allowedStoreOptions, storeOptions);
        // Custom filename option
        var storeOpts = __assign({}, storeOptions);
        var opts = __assign({}, options);
        var customName;
        if (storeOpts.filename) {
            customName = storeOpts.filename;
        }
        else if (file.name === undefined) {
            // Blobs and buffers don't have names, Files do. Give a placeholder name for blobs.
            if (file.type) {
                var ext = file.type.split('/').pop();
                customName = "untitled." + ext;
            }
            else {
                customName = 'untitled';
            }
        }
        // Default location param
        if (storeOpts.location === undefined) {
            storeOpts.location = 's3';
        }
        // Intelligent Ingestion requires part size of exactly 8MB
        if (opts.intelligent) {
            opts.partSize = 8 * 1024 * 1024;
        }
        // Set security if on session or override
        var policy = security && security.policy || session.policy;
        var signature = security && security.signature || session.signature;
        // Configurables
        var config = __assign({ host: session.urls.uploadApiUrl, apikey: session.apikey, policy: policy,
            signature: signature, partSize: 6 * 1024 * 1024, concurrency: 3, progressInterval: 1000, retry: 10, retryFactor: 2, retryMaxTime: 15000, customName: customName, mimetype: options.mimetype, store: {
                store_location: storeOpts.location,
                store_region: storeOpts.region,
                store_container: storeOpts.container,
                store_path: storeOpts.path,
                store_access: storeOpts.access,
            }, timeout: 120000 }, opts);
        var initialState = {
            parts: {},
            progressTick: null,
            previousPayload: null,
            retries: {},
            status: statuses.INIT,
        };
        var context = {
            file: file,
            config: config,
            state: initialState,
        };
        return uploadFile(context, token);
    });
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns file preview url
 *
 * @private
 * @param session
 * @param handle
 * @param opts
 * @param security
 */
var getUrl = function (session, handle, opts, security) {
    var options = __assign({}, opts);
    var policy = security && security.policy || session.policy;
    var signature = security && security.signature || session.signature;
    var hasSecurity = signature && policy;
    var baseUrl = [session.urls.cdnUrl];
    var css = options.css && encodeURIComponent("\"" + options.css + "\"");
    var previewTask = css ? "preview=css:" + css : 'preview';
    if (handle.indexOf('src:') !== -1) {
        baseUrl.push(session.apikey + "/" + previewTask);
    }
    else {
        baseUrl.push(previewTask);
    }
    if (hasSecurity) {
        baseUrl.push("security=policy:" + policy + ",signature:" + signature);
    }
    baseUrl.push(handle);
    return baseUrl.join('/');
};
/**
 * Appends image preview into page
 *
 * @private
 * @param session
 * @param handle
 * @param opts
 */
var preview = function (session, handle, opts) {
    if (!handle || typeof handle !== 'string') {
        throw new Error('A valid Filestack handle or storage alias is required for preview');
    }
    var allowed = [
        { name: 'id', type: tcombValidation_5 },
        { name: 'css', type: tcombValidation_5 },
    ];
    checkOptions('preview', allowed, opts);
    var options = removeEmpty(opts);
    var url = getUrl(session, handle, options);
    if (options.id) {
        var id = options.id;
        var iframe = document.createElement('iframe');
        var domElement = document.getElementById(id);
        iframe.src = url;
        iframe.width = '100%';
        iframe.height = '100%';
        if (!domElement) {
            throw new Error("DOM Element with id \"" + id + "\" not found.");
        }
        return domElement.appendChild(iframe);
    }
    return window.open(url, handle);
};

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @private
 */
var PICKER_KEY = '__fs_picker_token';
/**
 * @private
 */
var CloudClient = /** @class */ (function () {
    function CloudClient(session, options) {
        this.cache = false;
        this.session = session;
        this.cloudApiUrl = session.urls.cloudApiUrl;
        if (options && options.sessionCache) {
            this.cache = options.sessionCache;
        }
    }
    Object.defineProperty(CloudClient.prototype, "token", {
        get: function () {
            if (this.cache) {
                var token = localStorage.getItem(PICKER_KEY);
                if (token)
                    return token;
            }
            return this._token;
        },
        set: function (key) {
            if (this.cache) {
                localStorage.setItem(PICKER_KEY, key);
            }
            this._token = key;
        },
        enumerable: true,
        configurable: true
    });
    CloudClient.prototype.prefetch = function () {
        var params = {
            apikey: this.session.apikey,
        };
        return requestWithSource('get', this.cloudApiUrl + "/prefetch")
            .query(params)
            .then(function (res) { return res.body; });
    };
    CloudClient.prototype.list = function (clouds, token) {
        var _this = this;
        if (token === void 0) { token = {}; }
        var payload = {
            apikey: this.session.apikey,
            clouds: clouds,
            flow: 'web',
            token: this.token,
        };
        if (this.session.policy && this.session.signature) {
            payload.policy = this.session.policy;
            payload.signature = this.session.signature;
        }
        return new Promise(function (resolve, reject) {
            var req = requestWithSource('post', _this.cloudApiUrl + "/folder/list")
                .send(payload)
                .end(function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    if (response.body && response.body.token) {
                        _this.token = response.body.token;
                    }
                    resolve(response.body);
                }
            });
            token.cancel = function () {
                req.abort();
                reject(new Error('Cancelled'));
            };
        });
    };
    CloudClient.prototype.store = function (name, path, options, customSource, token) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (customSource === void 0) { customSource = {}; }
        if (token === void 0) { token = {}; }
        var _a;
        // Default to S3
        if (options.location === undefined)
            options.location = 's3';
        var payload = {
            apikey: this.session.apikey,
            token: this.token,
            flow: 'web',
            clouds: (_a = {}, _a[name] = {
                    path: path,
                    store: removeEmpty(options),
                }, _a),
        };
        if (name === 'customsource' && customSource.customSourcePath) {
            payload.clouds.customsource.customSourcePath = customSource.customSourcePath;
        }
        if (name === 'customsource' && customSource.customSourceContainer) {
            payload.clouds.customsource.customSourceContainer = customSource.customSourceContainer;
        }
        if (this.session.policy && this.session.signature) {
            payload.policy = this.session.policy;
            payload.signature = this.session.signature;
        }
        return new Promise(function (resolve, reject) {
            var req = requestWithSource('post', _this.cloudApiUrl + "/store/")
                .send(payload)
                .end(function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    if (response.body && response.body.token) {
                        _this.token = response.body.token;
                    }
                    if (response.body && response.body[name]) {
                        resolve(response.body[name]);
                    }
                    else {
                        resolve(response.body);
                    }
                }
            });
            token.cancel = function () {
                req.abort();
                reject(new Error('Cancelled'));
            };
        });
    };
    CloudClient.prototype.link = function (name, path, customSource, token) {
        var _this = this;
        if (customSource === void 0) { customSource = {}; }
        if (token === void 0) { token = {}; }
        var _a;
        var payload = {
            apikey: this.session.apikey,
            token: this.token,
            flow: 'web',
            clouds: (_a = {}, _a[name] = {
                    path: path,
                }, _a),
        };
        if (name === 'customsource' && customSource.customSourcePath) {
            payload.clouds.customsource.customSourcePath = customSource.customSourcePath;
        }
        if (name === 'customsource' && customSource.customSourceContainer) {
            payload.clouds.customsource.customSourceContainer = customSource.customSourceContainer;
        }
        if (this.session.policy && this.session.signature) {
            payload.policy = this.session.policy;
            payload.signature = this.session.signature;
        }
        return new Promise(function (resolve, reject) {
            var req = requestWithSource('post', _this.cloudApiUrl + "/link/")
                .send(payload)
                .end(function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    if (response.body && response.body.token) {
                        _this.token = response.body.token;
                    }
                    if (response.body[name]) {
                        resolve(response.body[name]);
                    }
                    else {
                        resolve(response.body);
                    }
                }
            });
            token.cancel = function () {
                req.abort();
                reject(new Error('Cancelled'));
            };
        });
    };
    CloudClient.prototype.logout = function (name) {
        var _this = this;
        var _a;
        var payload = {
            apikey: this.session.apikey,
            flow: 'web',
            token: this.token,
        };
        if (name) {
            payload.clouds = (_a = {}, _a[name] = {}, _a);
        }
        else {
            // No name means logout of ALL clouds. Clear local session.
            if (this.cache) {
                localStorage.removeItem(PICKER_KEY);
            }
        }
        return new Promise(function (resolve, reject) {
            requestWithSource('post', _this.cloudApiUrl + "/auth/logout/")
                .send(payload)
                .end(function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    if (response.body && response.body.token) {
                        _this.token = response.body.token;
                    }
                    resolve(response.body);
                }
            });
        });
    };
    CloudClient.prototype.metadata = function (url) {
        var _this = this;
        var payload = {
            apikey: this.session.apikey,
            url: url,
        };
        if (this.session.policy && this.session.signature) {
            payload.policy = this.session.policy;
            payload.signature = this.session.signature;
        }
        return new Promise(function (resolve, reject) {
            requestWithSource('post', _this.cloudApiUrl + "/metadata")
                .send(payload)
                .end(function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(response.body);
                }
            });
        });
    };
    // OpenTok API Endpoints
    CloudClient.prototype.tokInit = function (type) {
        var _this = this;
        if (type !== 'video' && type !== 'audio') {
            throw new Error('Type must be one of video or audio.');
        }
        return new Promise(function (resolve, reject) {
            return requestWithSource('post', _this.cloudApiUrl + "/recording/" + type + "/init")
                .end(function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(response);
                }
            });
        });
    };
    CloudClient.prototype.tokStart = function (type, key, sessionId) {
        var _this = this;
        if (type !== 'video' && type !== 'audio') {
            throw new Error('Type must be one of video or audio.');
        }
        var payload = {
            apikey: key,
            session_id: sessionId,
        };
        return new Promise(function (resolve, reject) {
            return requestWithSource('post', _this.cloudApiUrl + "/recording/" + type + "/start")
                .send(payload)
                .end(function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(response);
                }
            });
        });
    };
    CloudClient.prototype.tokStop = function (type, key, sessionId, archiveId) {
        var _this = this;
        if (type !== 'video' && type !== 'audio') {
            throw new Error('Type must be one of video or audio.');
        }
        var payload = {
            apikey: key,
            session_id: sessionId,
            archive_id: archiveId,
        };
        return new Promise(function (resolve, reject) {
            return requestWithSource('post', _this.cloudApiUrl + "/recording/" + type + "/stop")
                .send(payload)
                .end(function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(response);
                }
            });
        });
    };
    return CloudClient;
}());

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

// -----------------------------------------------------------------------------
// Init

var initializeGlobalNamespace = function initializeGlobalNamespace() {
  var namespace = void 0;
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    namespace = window.filestackInternals;
    if (!namespace) {
      namespace = {};
      window.filestackInternals = namespace;
    }
    if (!namespace.loader) {
      namespace.loader = {
        modules: {}
      };
    }
  }
  return namespace;
};

var filestackInternals = initializeGlobalNamespace();

// -----------------------------------------------------------------------------
// Modules loading

// All modules share global "register", so different instances of loader can
// communicate which modules were already loaded and which not.
var modules = filestackInternals && filestackInternals.loader.modules;

var loadModule = function loadModule(url, moduleId) {
  var moduleDefinition = modules[url];
  if (!moduleDefinition) {
    modules[url] = {};
    moduleDefinition = modules[url];
  }

  if (moduleDefinition.instance) {
    return Promise.resolve(moduleDefinition.instance);
  }

  if (moduleDefinition.promise) {
    return moduleDefinition.promise;
  }

  var promise = new Promise(function (resolve, reject) {
    var embedScript = function embedScript() {
      moduleDefinition.resolvePromise = resolve;
      var script = document.createElement('script');
      script.src = url;
      script.onerror = reject;
      if (moduleId) script.id = moduleId;
      document.body.appendChild(script);
    };

    var checkIfDomReady = function checkIfDomReady() {
      if (document.readyState === 'complete') {
        embedScript();
      } else {
        setTimeout(checkIfDomReady, 50);
      }
    };

    checkIfDomReady();
  });

  moduleDefinition.promise = promise;

  return promise;
};

var knownModuleIds = {
  picker: '__filestack-picker-module'
};

/*
 * Copyright (c) 2018 by Filestack
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var RotateDirection;
(function (RotateDirection) {
    RotateDirection["cw"] = "CW";
    RotateDirection["ccw"] = "CCW";
})(RotateDirection || (RotateDirection = {}));
var PickerDisplayMode;
(function (PickerDisplayMode) {
    PickerDisplayMode["inline"] = "inline";
    PickerDisplayMode["overlay"] = "overlay";
    PickerDisplayMode["dropPane"] = "dropPane";
})(PickerDisplayMode || (PickerDisplayMode = {}));
/**
 * @private
 * A synchronous-looking wrapper for loading the picker and calling its methods.
 * This is currently needed because the picker module is loaded asynchronously.
 * Eventually we should offer a bundle with the picker module included.
 */
var PickerLoader = /** @class */ (function () {
    function PickerLoader(client, options) {
        this._initialized = this.loadModule(client, options);
    }
    PickerLoader.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._initialized];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.open()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PickerLoader.prototype.crop = function (files) {
        return __awaiter(this, void 0, void 0, function () {
            var picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._initialized];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.crop(files)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PickerLoader.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            var picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._initialized];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.close()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PickerLoader.prototype.cancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._initialized];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.cancel()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PickerLoader.prototype.loadModule = function (client, options) {
        return __awaiter(this, void 0, void 0, function () {
            var url, Picker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = client.session.urls.pickerUrl;
                        return [4 /*yield*/, loadModule(options.pickerUrl || url, knownModuleIds.picker)];
                    case 1:
                        Picker = _a.sent();
                        return [2 /*return*/, new Picker(client, options)];
                }
            });
        });
    };
    return PickerLoader;
}());
/**
 * Loads and creates picker instance
 *
 * @private
 * @param client
 * @param options
 */
var picker = function (client, options) {
    return new PickerLoader(client, options);
};

/*
 * Copyright (c) 2018 by Filestack
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The Filestack client, the entry point for all public methods. Encapsulates session information.
 *
 * ### Example
 * ```js
 * // ES module
 * import * as filestack from 'filestack-js';
 * const client = filestack.init('apikey');
 * ```
 *
 * ```js
 * // UMD module in browser
 * <script src="https://static.filestackapi.com/filestack-js/1.x.x/filestack.min.js"></script>
 * const client = filestack.init('apikey');
 * ```
 */
var Client = /** @class */ (function () {
    function Client(apikey, options) {
        var _this = this;
        if (!apikey || typeof apikey !== 'string' || apikey.length === 0) {
            throw new Error('An apikey is required to initialize the Filestack client');
        }
        var urls = config.urls;
        this.session = { apikey: apikey, urls: urls };
        if (options) {
            var cname_1 = options.cname, security = options.security;
            if (security && !(security.policy && security.signature)) {
                throw new Error('Both policy and signature are required for client security');
            }
            if (security && security.policy && security.signature) {
                this.session.policy = security.policy;
                this.session.signature = security.signature;
            }
            if (cname_1) {
                var hosts_1 = /filestackapi.com|filestackcontent.com/i;
                this.session.cname = cname_1;
                Object.keys(urls).forEach(function (key) {
                    _this.session.urls[key] = urls[key].replace(hosts_1, cname_1);
                });
            }
        }
        this.cloud = new CloudClient(this.session, options);
    }
    /**
     * Clear all current cloud sessions in the picker.
     * Optionally pass a cloud source name to only log out of that cloud source.
     * This essentially clears the OAuth authorization codes from the Filestack session.
     * @param name Optional cloud source name.
     */
    Client.prototype.logout = function (name) {
        return this.cloud.logout(name);
    };
    /**
     * Retrieve detailed data of stored files.
     *
     * ### Example
     *
     * ```js
     * client
     *   .metadata('DCL5K46FS3OIxb5iuKby')
     *   .then((res) => {
     *     console.log(res);
     *   })
     *   .catch((err) => {
     *     console.log(err);
     *   }));
     * ```
     * @see [File API - Metadata](https://www.filestack.com/docs/api/file#metadata).
     * @param handle Valid Filestack handle.
     * @param options Metadata fields to enable on response.
     * @param security Optional security override.
     */
    Client.prototype.metadata = function (handle, options, security) {
        /* istanbul ignore next */
        return metadata(this.session, handle, options, security);
    };
    /**
     * Construct a new picker instance.
     */
    Client.prototype.picker = function (options) {
        /* istanbul ignore next */
        return picker(this, options);
    };
    /**
     * Used for viewing files via Filestack handles or storage aliases, __requires Document Viewer addon to your Filestack application__.
     * Opens document viewer in new window if id option is not provided.
     *
     * ### Example
     *
     * ```js
     * // <div id="preview"></div>
     *
     * client.preview('DCL5K46FS3OIxb5iuKby', { id: 'preview' });
     * ```
     * @param handle Valid Filestack handle.
     * @param options Preview options
     */
    Client.prototype.preview = function (handle, options) {
        /* istanbul ignore next */
        return preview(this.session, handle, options);
    };
    /**
     * Remove a file from storage and the Filestack system.
     *
     * __Requires a valid security policy and signature__. The policy and signature will be pulled from the client session, or it can be overridden with the security parameter.
     *
     * ### Example
     *
     * ```js
     * client
     *   .remove('DCL5K46FS3OIxb5iuKby')
     *   .then((res) => {
     *     console.log(res);
     *   })
     *   .catch((err) => {
     *     console.log(err);
     *   }));
     * ```
     * @see [File API - Delete](https://www.filestack.com/docs/api/file#delete)
     * @param handle Valid Filestack handle.
     * @param security Optional security override.
     */
    Client.prototype.remove = function (handle, security) {
        /* istanbul ignore next */
        return remove(this.session, handle, false, security);
    };
    /**
     * Remove a file **only** from the Filestack system. The file remains in storage.
     *
     * __Requires a valid security policy and signature__. The policy and signature will be pulled from the client session, or it can be overridden with the security parameter.
     *
     * ### Example
     *
     * ```js
     * client
     *   .removeMetadata('DCL5K46FS3OIxb5iuKby')
     *   .then((res) => {
     *     console.log(res);
     *   })
     *   .catch((err) => {
     *     console.log(err);
     *   }));
     * ```
     * @see [File API - Delete](https://www.filestack.com/docs/api/file#delete)
     * @param handle Valid Filestack handle.
     * @param security Optional security override.
     */
    Client.prototype.removeMetadata = function (handle, security) {
        /* istanbul ignore next */
        return remove(this.session, handle, true, security);
    };
    /**
     * Store a file from its URL.
     *
     * ### Example
     *
     * ```js
     * client
     *   .storeURL('https://d1wtqaffaaj63z.cloudfront.net/images/NY_199_E_of_Hammertown_2014.jpg')
     *   .then(res => console.log(res));
     * ```
     * @see [File API - Store](https://www.filestack.com/docs/api/file#store)
     * @param url       Valid URL to a file.
     * @param options   Configure file storage.
     * @param token     Optional control token to call .cancel()
     * @param security  Optional security override.
     */
    Client.prototype.storeURL = function (url, options, token, security) {
        /* istanbul ignore next */
        return storeURL(this.session, url, options, token, security);
    };
    /**
     * Access files via their Filestack handles.
     *
     * If head option is provided - request headers are returned in promise
     * If metadata option is provided - metadata object is returned in promise
     * Otherwise file blob is returned
     * Metadata and head options cannot be mixed
     *
     * ### Example
     *
     * ```js
     * client.retrieve('fileHandle', {
     *  metadata: true,
     * }).then((response) => {
     *  console.log(response);
     * }).catch((err) => {
     *  console.error(err);
     * })
     * ```
     *
     * @see [File API - Download](https://www.filestack.com/docs/api/file#download)
     * @param handle    Valid file handle
     * @param options   RetrieveOptions
     * @param security  Optional security override.
     * @throws          Error
     */
    Client.prototype.retrieve = function (handle, options, security) {
        /* istanbul ignore next */
        return retrieve(this.session, handle, options, security);
    };
    /**
     * Interface to the Filestack [Processing API](https://www.filestack.com/docs/api/processing).
     * Convert a URL, handle, or storage alias to another URL which links to the transformed file.
     * You can optionally store the returned URL with client.storeURL.
     *
     * Transform params can be provided in camelCase or snakeCase style ie: partial_pixelate or partialPixelate
     *
     * ### Example
     *
     * ```js
     * const transformedUrl = client.transform(url, {
     *   crop: {
     *     dim: [x, y, width, height],
     *   },
     *   vignette: {
     *     blurmode: 'gaussian',
     *     amount: 50,
     *   },
     *   flip: true,
     *   partial_pixelate: {
     *     objects: [[10, 20, 200, 250], [275, 91, 500, 557]],
     *   },
     * };
     *
     * // optionally store the new URL
     * client.storeURL(transformedUrl).then(res => console.log(res));
     * ```
     * @see [Filestack Processing API](https://www.filestack.com/docs/api/processing)
     * @param url     Valid URL (http(s)://), file handle, or storage alias (src://) to an image.
     * @param options Transformations are applied in the order specified by this object.
     * @returns       A new URL that points to the transformed resource.
     */
    Client.prototype.transform = function (url, options) {
        /* istanbul ignore next */
        return transform(this.session, url, options);
    };
    /**
     * Initiates a multi-part upload flow. Use this for Filestack CIN and FII uploads.
     *
     * In Node runtimes the file argument is treated as a file path.
     * Uploading from a Node buffer is not yet implemented.
     *
     * ### Example
     *
     * ```js
     * const token = {};
     * const onRetry = (obj) => {
     *   console.log(`Retrying ${obj.location} for ${obj.filename}. Attempt ${obj.attempt} of 10.`);
     * };
     *
     * client.upload(file, { onRetry }, { filename: 'foobar.jpg' }, token)
     *   .then(res => console.log(res));
     *
     * token.pause();  // Pause flow
     * token.resume(); // Resume flow
     * token.cancel(); // Cancel flow (rejects)
     * ```
     * @param file           Must be a valid [File](https://developer.mozilla.org/en-US/docs/Web/API/File), Blob, base64 encoded string, or file path in Node.
     * @param uploadOptions  Uploader options.
     * @param storeOptions   Storage options.
     * @param token          A control token that can be used to call cancel(), pause(), and resume().
     * @param security       Optional security policy and signature override.
     *
     * @returns {Promise}
     */
    Client.prototype.upload = function (file, options, storeOptions, token, security) {
        /* istanbul ignore next */
        return upload(this.session, file, options, storeOptions, token, security);
    };
    return Client;
}());

/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Initialize client with given config
 *
 * @param apikey
 * @param options
 */
var init = function (apikey, options) {
    return new Client(apikey, options);
};
/**
 * filestack-js version. Interpolated at build time.
 */
var version = '1.6.1';

exports.init = init;
exports.version = version;
exports.getSecurity = getSecurity;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=index.umd.js.map
