var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// ../../node_modules/inversify/lib/constants/metadata_keys.js
var require_metadata_keys = __commonJS({
  "../../node_modules/inversify/lib/constants/metadata_keys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NON_CUSTOM_TAG_KEYS = exports.PRE_DESTROY = exports.POST_CONSTRUCT = exports.DESIGN_PARAM_TYPES = exports.PARAM_TYPES = exports.TAGGED_PROP = exports.TAGGED = exports.MULTI_INJECT_TAG = exports.INJECT_TAG = exports.OPTIONAL_TAG = exports.UNMANAGED_TAG = exports.NAME_TAG = exports.NAMED_TAG = void 0;
    exports.NAMED_TAG = "named";
    exports.NAME_TAG = "name";
    exports.UNMANAGED_TAG = "unmanaged";
    exports.OPTIONAL_TAG = "optional";
    exports.INJECT_TAG = "inject";
    exports.MULTI_INJECT_TAG = "multi_inject";
    exports.TAGGED = "inversify:tagged";
    exports.TAGGED_PROP = "inversify:tagged_props";
    exports.PARAM_TYPES = "inversify:paramtypes";
    exports.DESIGN_PARAM_TYPES = "design:paramtypes";
    exports.POST_CONSTRUCT = "post_construct";
    exports.PRE_DESTROY = "pre_destroy";
    function getNonCustomTagKeys() {
      return [
        exports.INJECT_TAG,
        exports.MULTI_INJECT_TAG,
        exports.NAME_TAG,
        exports.UNMANAGED_TAG,
        exports.NAMED_TAG,
        exports.OPTIONAL_TAG
      ];
    }
    exports.NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();
  }
});

// ../../node_modules/inversify/lib/constants/literal_types.js
var require_literal_types = __commonJS({
  "../../node_modules/inversify/lib/constants/literal_types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TargetTypeEnum = exports.BindingTypeEnum = exports.BindingScopeEnum = void 0;
    var BindingScopeEnum = {
      Request: "Request",
      Singleton: "Singleton",
      Transient: "Transient"
    };
    exports.BindingScopeEnum = BindingScopeEnum;
    var BindingTypeEnum = {
      ConstantValue: "ConstantValue",
      Constructor: "Constructor",
      DynamicValue: "DynamicValue",
      Factory: "Factory",
      Function: "Function",
      Instance: "Instance",
      Invalid: "Invalid",
      Provider: "Provider"
    };
    exports.BindingTypeEnum = BindingTypeEnum;
    var TargetTypeEnum = {
      ClassProperty: "ClassProperty",
      ConstructorArgument: "ConstructorArgument",
      Variable: "Variable"
    };
    exports.TargetTypeEnum = TargetTypeEnum;
  }
});

// ../../node_modules/inversify/lib/utils/id.js
var require_id = __commonJS({
  "../../node_modules/inversify/lib/utils/id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.id = void 0;
    var idCounter = 0;
    function id() {
      return idCounter++;
    }
    exports.id = id;
  }
});

// ../../node_modules/inversify/lib/bindings/binding.js
var require_binding = __commonJS({
  "../../node_modules/inversify/lib/bindings/binding.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Binding = void 0;
    var literal_types_1 = require_literal_types();
    var id_1 = require_id();
    var Binding = function() {
      function Binding2(serviceIdentifier, scope) {
        this.id = (0, id_1.id)();
        this.activated = false;
        this.serviceIdentifier = serviceIdentifier;
        this.scope = scope;
        this.type = literal_types_1.BindingTypeEnum.Invalid;
        this.constraint = function(request) {
          return true;
        };
        this.implementationType = null;
        this.cache = null;
        this.factory = null;
        this.provider = null;
        this.onActivation = null;
        this.onDeactivation = null;
        this.dynamicValue = null;
      }
      Binding2.prototype.clone = function() {
        var clone = new Binding2(this.serviceIdentifier, this.scope);
        clone.activated = clone.scope === literal_types_1.BindingScopeEnum.Singleton ? this.activated : false;
        clone.implementationType = this.implementationType;
        clone.dynamicValue = this.dynamicValue;
        clone.scope = this.scope;
        clone.type = this.type;
        clone.factory = this.factory;
        clone.provider = this.provider;
        clone.constraint = this.constraint;
        clone.onActivation = this.onActivation;
        clone.onDeactivation = this.onDeactivation;
        clone.cache = this.cache;
        return clone;
      };
      return Binding2;
    }();
    exports.Binding = Binding;
  }
});

// ../../node_modules/inversify/lib/constants/error_msgs.js
var require_error_msgs = __commonJS({
  "../../node_modules/inversify/lib/constants/error_msgs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STACK_OVERFLOW = exports.CIRCULAR_DEPENDENCY_IN_FACTORY = exports.ON_DEACTIVATION_ERROR = exports.PRE_DESTROY_ERROR = exports.POST_CONSTRUCT_ERROR = exports.ASYNC_UNBIND_REQUIRED = exports.MULTIPLE_POST_CONSTRUCT_METHODS = exports.MULTIPLE_PRE_DESTROY_METHODS = exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = exports.ARGUMENTS_LENGTH_MISMATCH = exports.INVALID_DECORATOR_OPERATION = exports.INVALID_TO_SELF_VALUE = exports.LAZY_IN_SYNC = exports.INVALID_FUNCTION_BINDING = exports.INVALID_MIDDLEWARE_RETURN = exports.NO_MORE_SNAPSHOTS_AVAILABLE = exports.INVALID_BINDING_TYPE = exports.NOT_IMPLEMENTED = exports.CIRCULAR_DEPENDENCY = exports.UNDEFINED_INJECT_ANNOTATION = exports.MISSING_INJECT_ANNOTATION = exports.MISSING_INJECTABLE_ANNOTATION = exports.NOT_REGISTERED = exports.CANNOT_UNBIND = exports.AMBIGUOUS_MATCH = exports.KEY_NOT_FOUND = exports.NULL_ARGUMENT = exports.DUPLICATED_METADATA = exports.DUPLICATED_INJECTABLE_DECORATOR = void 0;
    exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
    exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
    exports.NULL_ARGUMENT = "NULL argument";
    exports.KEY_NOT_FOUND = "Key Not Found";
    exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
    exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
    exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
    exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
    exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
    var UNDEFINED_INJECT_ANNOTATION = function(name) {
      return "@inject called with undefined this could mean that the class " + name + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation.";
    };
    exports.UNDEFINED_INJECT_ANNOTATION = UNDEFINED_INJECT_ANNOTATION;
    exports.CIRCULAR_DEPENDENCY = "Circular dependency found:";
    exports.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
    exports.INVALID_BINDING_TYPE = "Invalid binding type:";
    exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
    exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
    exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
    var LAZY_IN_SYNC = function(key) {
      return "You are attempting to construct '" + key + "' in a synchronous way\n but it has asynchronous dependencies.";
    };
    exports.LAZY_IN_SYNC = LAZY_IN_SYNC;
    exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier";
    exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
    var ARGUMENTS_LENGTH_MISMATCH = function() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
    };
    exports.ARGUMENTS_LENGTH_MISMATCH = ARGUMENTS_LENGTH_MISMATCH;
    exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.";
    exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').";
    exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean";
    exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean";
    exports.MULTIPLE_PRE_DESTROY_METHODS = "Cannot apply @preDestroy decorator multiple times in the same class";
    exports.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
    exports.ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";
    var POST_CONSTRUCT_ERROR = function(clazz, errorMessage) {
      return "@postConstruct error in class " + clazz + ": " + errorMessage;
    };
    exports.POST_CONSTRUCT_ERROR = POST_CONSTRUCT_ERROR;
    var PRE_DESTROY_ERROR = function(clazz, errorMessage) {
      return "@preDestroy error in class " + clazz + ": " + errorMessage;
    };
    exports.PRE_DESTROY_ERROR = PRE_DESTROY_ERROR;
    var ON_DEACTIVATION_ERROR = function(clazz, errorMessage) {
      return "onDeactivation() error in class " + clazz + ": " + errorMessage;
    };
    exports.ON_DEACTIVATION_ERROR = ON_DEACTIVATION_ERROR;
    var CIRCULAR_DEPENDENCY_IN_FACTORY = function(factoryType, serviceIdentifier) {
      return "It looks like there is a circular dependency in one of the '" + factoryType + "' bindings. Please investigate bindings with" + ("service identifier '" + serviceIdentifier + "'.");
    };
    exports.CIRCULAR_DEPENDENCY_IN_FACTORY = CIRCULAR_DEPENDENCY_IN_FACTORY;
    exports.STACK_OVERFLOW = "Maximum call stack size exceeded";
  }
});

// ../../node_modules/inversify/lib/planning/metadata_reader.js
var require_metadata_reader = __commonJS({
  "../../node_modules/inversify/lib/planning/metadata_reader.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetadataReader = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var MetadataReader = function() {
      function MetadataReader2() {
      }
      MetadataReader2.prototype.getConstructorMetadata = function(constructorFunc) {
        var compilerGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, constructorFunc);
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED, constructorFunc);
        return {
          compilerGeneratedMetadata,
          userGeneratedMetadata: userGeneratedMetadata || {}
        };
      };
      MetadataReader2.prototype.getPropertiesMetadata = function(constructorFunc) {
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, constructorFunc) || [];
        return userGeneratedMetadata;
      };
      return MetadataReader2;
    }();
    exports.MetadataReader = MetadataReader;
  }
});

// ../../node_modules/inversify/lib/bindings/binding_count.js
var require_binding_count = __commonJS({
  "../../node_modules/inversify/lib/bindings/binding_count.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingCount = void 0;
    var BindingCount = {
      MultipleBindingsAvailable: 2,
      NoBindingsAvailable: 0,
      OnlyOneBindingAvailable: 1
    };
    exports.BindingCount = BindingCount;
  }
});

// ../../node_modules/inversify/lib/utils/exceptions.js
var require_exceptions = __commonJS({
  "../../node_modules/inversify/lib/utils/exceptions.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tryAndThrowErrorIfStackOverflow = exports.isStackOverflowExeption = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    function isStackOverflowExeption(error) {
      return error instanceof RangeError || error.message === ERROR_MSGS.STACK_OVERFLOW;
    }
    exports.isStackOverflowExeption = isStackOverflowExeption;
    var tryAndThrowErrorIfStackOverflow = function(fn, errorCallback) {
      try {
        return fn();
      } catch (error) {
        if (isStackOverflowExeption(error)) {
          error = errorCallback();
        }
        throw error;
      }
    };
    exports.tryAndThrowErrorIfStackOverflow = tryAndThrowErrorIfStackOverflow;
  }
});

// ../../node_modules/inversify/lib/utils/serialization.js
var require_serialization = __commonJS({
  "../../node_modules/inversify/lib/utils/serialization.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSymbolDescription = exports.circularDependencyToException = exports.listMetadataForTarget = exports.listRegisteredBindingsForServiceIdentifier = exports.getServiceIdentifierAsString = exports.getFunctionName = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    function getServiceIdentifierAsString(serviceIdentifier) {
      if (typeof serviceIdentifier === "function") {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier.name;
      } else if (typeof serviceIdentifier === "symbol") {
        return serviceIdentifier.toString();
      } else {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier;
      }
    }
    exports.getServiceIdentifierAsString = getServiceIdentifierAsString;
    function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
      var registeredBindingsList = "";
      var registeredBindings = getBindings(container, serviceIdentifier);
      if (registeredBindings.length !== 0) {
        registeredBindingsList = "\nRegistered bindings:";
        registeredBindings.forEach(function(binding) {
          var name = "Object";
          if (binding.implementationType !== null) {
            name = getFunctionName(binding.implementationType);
          }
          registeredBindingsList = registeredBindingsList + "\n " + name;
          if (binding.constraint.metaData) {
            registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
          }
        });
      }
      return registeredBindingsList;
    }
    exports.listRegisteredBindingsForServiceIdentifier = listRegisteredBindingsForServiceIdentifier;
    function alreadyDependencyChain(request, serviceIdentifier) {
      if (request.parentRequest === null) {
        return false;
      } else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
        return true;
      } else {
        return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
      }
    }
    function dependencyChainToString(request) {
      function _createStringArr(req, result) {
        if (result === void 0) {
          result = [];
        }
        var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
        result.push(serviceIdentifier);
        if (req.parentRequest !== null) {
          return _createStringArr(req.parentRequest, result);
        }
        return result;
      }
      var stringArr = _createStringArr(request);
      return stringArr.reverse().join(" --> ");
    }
    function circularDependencyToException(request) {
      request.childRequests.forEach(function(childRequest) {
        if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
          var services = dependencyChainToString(childRequest);
          throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY + " " + services);
        } else {
          circularDependencyToException(childRequest);
        }
      });
    }
    exports.circularDependencyToException = circularDependencyToException;
    function listMetadataForTarget(serviceIdentifierString, target) {
      if (target.isTagged() || target.isNamed()) {
        var m_1 = "";
        var namedTag = target.getNamedTag();
        var otherTags = target.getCustomTags();
        if (namedTag !== null) {
          m_1 += namedTag.toString() + "\n";
        }
        if (otherTags !== null) {
          otherTags.forEach(function(tag) {
            m_1 += tag.toString() + "\n";
          });
        }
        return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
      } else {
        return " " + serviceIdentifierString;
      }
    }
    exports.listMetadataForTarget = listMetadataForTarget;
    function getFunctionName(func) {
      if (func.name) {
        return func.name;
      } else {
        var name_1 = func.toString();
        var match = name_1.match(/^function\s*([^\s(]+)/);
        return match ? match[1] : "Anonymous function: " + name_1;
      }
    }
    exports.getFunctionName = getFunctionName;
    function getSymbolDescription(symbol) {
      return symbol.toString().slice(7, -1);
    }
    exports.getSymbolDescription = getSymbolDescription;
  }
});

// ../../node_modules/inversify/lib/planning/context.js
var require_context = __commonJS({
  "../../node_modules/inversify/lib/planning/context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Context = void 0;
    var id_1 = require_id();
    var Context = function() {
      function Context2(container) {
        this.id = (0, id_1.id)();
        this.container = container;
      }
      Context2.prototype.addPlan = function(plan) {
        this.plan = plan;
      };
      Context2.prototype.setCurrentRequest = function(currentRequest) {
        this.currentRequest = currentRequest;
      };
      return Context2;
    }();
    exports.Context = Context;
  }
});

// ../../node_modules/inversify/lib/planning/metadata.js
var require_metadata = __commonJS({
  "../../node_modules/inversify/lib/planning/metadata.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Metadata = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var Metadata = function() {
      function Metadata2(key, value) {
        this.key = key;
        this.value = value;
      }
      Metadata2.prototype.toString = function() {
        if (this.key === METADATA_KEY.NAMED_TAG) {
          return "named: " + String(this.value).toString() + " ";
        } else {
          return "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }";
        }
      };
      return Metadata2;
    }();
    exports.Metadata = Metadata;
  }
});

// ../../node_modules/inversify/lib/planning/plan.js
var require_plan = __commonJS({
  "../../node_modules/inversify/lib/planning/plan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Plan = void 0;
    var Plan = function() {
      function Plan2(parentContext, rootRequest) {
        this.parentContext = parentContext;
        this.rootRequest = rootRequest;
      }
      return Plan2;
    }();
    exports.Plan = Plan;
  }
});

// ../../node_modules/inversify/lib/annotation/lazy_service_identifier.js
var require_lazy_service_identifier = __commonJS({
  "../../node_modules/inversify/lib/annotation/lazy_service_identifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LazyServiceIdentifer = void 0;
    var LazyServiceIdentifer = function() {
      function LazyServiceIdentifer2(cb) {
        this._cb = cb;
      }
      LazyServiceIdentifer2.prototype.unwrap = function() {
        return this._cb();
      };
      return LazyServiceIdentifer2;
    }();
    exports.LazyServiceIdentifer = LazyServiceIdentifer;
  }
});

// ../../node_modules/inversify/lib/planning/queryable_string.js
var require_queryable_string = __commonJS({
  "../../node_modules/inversify/lib/planning/queryable_string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueryableString = void 0;
    var QueryableString = function() {
      function QueryableString2(str) {
        this.str = str;
      }
      QueryableString2.prototype.startsWith = function(searchString) {
        return this.str.indexOf(searchString) === 0;
      };
      QueryableString2.prototype.endsWith = function(searchString) {
        var reverseString = "";
        var reverseSearchString = searchString.split("").reverse().join("");
        reverseString = this.str.split("").reverse().join("");
        return this.startsWith.call({ str: reverseString }, reverseSearchString);
      };
      QueryableString2.prototype.contains = function(searchString) {
        return this.str.indexOf(searchString) !== -1;
      };
      QueryableString2.prototype.equals = function(compareString) {
        return this.str === compareString;
      };
      QueryableString2.prototype.value = function() {
        return this.str;
      };
      return QueryableString2;
    }();
    exports.QueryableString = QueryableString;
  }
});

// ../../node_modules/inversify/lib/planning/target.js
var require_target = __commonJS({
  "../../node_modules/inversify/lib/planning/target.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Target = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var id_1 = require_id();
    var serialization_1 = require_serialization();
    var metadata_1 = require_metadata();
    var queryable_string_1 = require_queryable_string();
    var Target = function() {
      function Target2(type, identifier, serviceIdentifier, namedOrTagged) {
        this.id = (0, id_1.id)();
        this.type = type;
        this.serviceIdentifier = serviceIdentifier;
        var queryableName = typeof identifier === "symbol" ? (0, serialization_1.getSymbolDescription)(identifier) : identifier;
        this.name = new queryable_string_1.QueryableString(queryableName || "");
        this.identifier = identifier;
        this.metadata = new Array();
        var metadataItem = null;
        if (typeof namedOrTagged === "string") {
          metadataItem = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, namedOrTagged);
        } else if (namedOrTagged instanceof metadata_1.Metadata) {
          metadataItem = namedOrTagged;
        }
        if (metadataItem !== null) {
          this.metadata.push(metadataItem);
        }
      }
      Target2.prototype.hasTag = function(key) {
        for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
          var m = _a[_i];
          if (m.key === key) {
            return true;
          }
        }
        return false;
      };
      Target2.prototype.isArray = function() {
        return this.hasTag(METADATA_KEY.MULTI_INJECT_TAG);
      };
      Target2.prototype.matchesArray = function(name) {
        return this.matchesTag(METADATA_KEY.MULTI_INJECT_TAG)(name);
      };
      Target2.prototype.isNamed = function() {
        return this.hasTag(METADATA_KEY.NAMED_TAG);
      };
      Target2.prototype.isTagged = function() {
        return this.metadata.some(function(metadata) {
          return METADATA_KEY.NON_CUSTOM_TAG_KEYS.every(function(key) {
            return metadata.key !== key;
          });
        });
      };
      Target2.prototype.isOptional = function() {
        return this.matchesTag(METADATA_KEY.OPTIONAL_TAG)(true);
      };
      Target2.prototype.getNamedTag = function() {
        if (this.isNamed()) {
          return this.metadata.filter(function(m) {
            return m.key === METADATA_KEY.NAMED_TAG;
          })[0];
        }
        return null;
      };
      Target2.prototype.getCustomTags = function() {
        if (this.isTagged()) {
          return this.metadata.filter(function(metadata) {
            return METADATA_KEY.NON_CUSTOM_TAG_KEYS.every(function(key) {
              return metadata.key !== key;
            });
          });
        } else {
          return null;
        }
      };
      Target2.prototype.matchesNamedTag = function(name) {
        return this.matchesTag(METADATA_KEY.NAMED_TAG)(name);
      };
      Target2.prototype.matchesTag = function(key) {
        var _this = this;
        return function(value) {
          for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.key === key && m.value === value) {
              return true;
            }
          }
          return false;
        };
      };
      return Target2;
    }();
    exports.Target = Target;
  }
});

// ../../node_modules/inversify/lib/planning/reflection_utils.js
var require_reflection_utils = __commonJS({
  "../../node_modules/inversify/lib/planning/reflection_utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFunctionName = exports.getBaseClassDependencyCount = exports.getDependencies = void 0;
    var lazy_service_identifier_1 = require_lazy_service_identifier();
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var METADATA_KEY = __importStar(require_metadata_keys());
    var serialization_1 = require_serialization();
    Object.defineProperty(exports, "getFunctionName", { enumerable: true, get: function() {
      return serialization_1.getFunctionName;
    } });
    var target_1 = require_target();
    function getDependencies(metadataReader, func) {
      var constructorName = (0, serialization_1.getFunctionName)(func);
      return getTargets(metadataReader, constructorName, func, false);
    }
    exports.getDependencies = getDependencies;
    function getTargets(metadataReader, constructorName, func, isBaseClass) {
      var metadata = metadataReader.getConstructorMetadata(func);
      var serviceIdentifiers = metadata.compilerGeneratedMetadata;
      if (serviceIdentifiers === void 0) {
        var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
        throw new Error(msg);
      }
      var constructorArgsMetadata = metadata.userGeneratedMetadata;
      var keys = Object.keys(constructorArgsMetadata);
      var hasUserDeclaredUnknownInjections = func.length === 0 && keys.length > 0;
      var hasOptionalParameters = keys.length > func.length;
      var iterations = hasUserDeclaredUnknownInjections || hasOptionalParameters ? keys.length : func.length;
      var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
      var propertyTargets = getClassPropsAsTargets(metadataReader, func, constructorName);
      var targets = __spreadArray(__spreadArray([], constructorTargets, true), propertyTargets, true);
      return targets;
    }
    function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
      var targetMetadata = constructorArgsMetadata[index.toString()] || [];
      var metadata = formatTargetMetadata(targetMetadata);
      var isManaged = metadata.unmanaged !== true;
      var serviceIdentifier = serviceIdentifiers[index];
      var injectIdentifier = metadata.inject || metadata.multiInject;
      serviceIdentifier = injectIdentifier ? injectIdentifier : serviceIdentifier;
      if (serviceIdentifier instanceof lazy_service_identifier_1.LazyServiceIdentifer) {
        serviceIdentifier = serviceIdentifier.unwrap();
      }
      if (isManaged) {
        var isObject = serviceIdentifier === Object;
        var isFunction = serviceIdentifier === Function;
        var isUndefined = serviceIdentifier === void 0;
        var isUnknownType = isObject || isFunction || isUndefined;
        if (!isBaseClass && isUnknownType) {
          var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
          throw new Error(msg);
        }
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        return target;
      }
      return null;
    }
    function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
      var targets = [];
      for (var i = 0; i < iterations; i++) {
        var index = i;
        var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
        if (target !== null) {
          targets.push(target);
        }
      }
      return targets;
    }
    function _getServiceIdentifierForProperty(inject2, multiInject, propertyName, className) {
      var serviceIdentifier = inject2 || multiInject;
      if (serviceIdentifier === void 0) {
        var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " for property " + String(propertyName) + " in class " + className + ".";
        throw new Error(msg);
      }
      return serviceIdentifier;
    }
    function getClassPropsAsTargets(metadataReader, constructorFunc, constructorName) {
      var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
      var targets = [];
      var symbolKeys = Object.getOwnPropertySymbols(classPropsMetadata);
      var stringKeys = Object.keys(classPropsMetadata);
      var keys = stringKeys.concat(symbolKeys);
      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var targetMetadata = classPropsMetadata[key];
        var metadata = formatTargetMetadata(targetMetadata);
        var identifier = metadata.targetName || key;
        var serviceIdentifier = _getServiceIdentifierForProperty(metadata.inject, metadata.multiInject, key, constructorName);
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, identifier, serviceIdentifier);
        target.metadata = targetMetadata;
        targets.push(target);
      }
      var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
      if (baseConstructor !== Object) {
        var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor, constructorName);
        targets = __spreadArray(__spreadArray([], targets, true), baseTargets, true);
      }
      return targets;
    }
    function getBaseClassDependencyCount(metadataReader, func) {
      var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
      if (baseConstructor !== Object) {
        var baseConstructorName = (0, serialization_1.getFunctionName)(baseConstructor);
        var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
        var metadata = targets.map(function(t) {
          return t.metadata.filter(function(m) {
            return m.key === METADATA_KEY.UNMANAGED_TAG;
          });
        });
        var unmanagedCount = [].concat.apply([], metadata).length;
        var dependencyCount = targets.length - unmanagedCount;
        if (dependencyCount > 0) {
          return dependencyCount;
        } else {
          return getBaseClassDependencyCount(metadataReader, baseConstructor);
        }
      } else {
        return 0;
      }
    }
    exports.getBaseClassDependencyCount = getBaseClassDependencyCount;
    function formatTargetMetadata(targetMetadata) {
      var targetMetadataMap = {};
      targetMetadata.forEach(function(m) {
        targetMetadataMap[m.key.toString()] = m.value;
      });
      return {
        inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
        multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
        targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
        unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
      };
    }
  }
});

// ../../node_modules/inversify/lib/planning/request.js
var require_request = __commonJS({
  "../../node_modules/inversify/lib/planning/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Request = void 0;
    var id_1 = require_id();
    var Request = function() {
      function Request2(serviceIdentifier, parentContext, parentRequest, bindings, target) {
        this.id = (0, id_1.id)();
        this.serviceIdentifier = serviceIdentifier;
        this.parentContext = parentContext;
        this.parentRequest = parentRequest;
        this.target = target;
        this.childRequests = [];
        this.bindings = Array.isArray(bindings) ? bindings : [bindings];
        this.requestScope = parentRequest === null ? /* @__PURE__ */ new Map() : null;
      }
      Request2.prototype.addChildRequest = function(serviceIdentifier, bindings, target) {
        var child = new Request2(serviceIdentifier, this.parentContext, this, bindings, target);
        this.childRequests.push(child);
        return child;
      };
      return Request2;
    }();
    exports.Request = Request;
  }
});

// ../../node_modules/inversify/lib/planning/planner.js
var require_planner = __commonJS({
  "../../node_modules/inversify/lib/planning/planner.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getBindingDictionary = exports.createMockRequest = exports.plan = void 0;
    var binding_count_1 = require_binding_count();
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var METADATA_KEY = __importStar(require_metadata_keys());
    var exceptions_1 = require_exceptions();
    var serialization_1 = require_serialization();
    var context_1 = require_context();
    var metadata_1 = require_metadata();
    var plan_1 = require_plan();
    var reflection_utils_1 = require_reflection_utils();
    var request_1 = require_request();
    var target_1 = require_target();
    function getBindingDictionary(cntnr) {
      return cntnr._bindingDictionary;
    }
    exports.getBindingDictionary = getBindingDictionary;
    function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
      var metadataKey = isMultiInject ? METADATA_KEY.MULTI_INJECT_TAG : METADATA_KEY.INJECT_TAG;
      var injectMetadata = new metadata_1.Metadata(metadataKey, serviceIdentifier);
      var target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
      if (key !== void 0) {
        var tagMetadata = new metadata_1.Metadata(key, value);
        target.metadata.push(tagMetadata);
      }
      return target;
    }
    function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
      var bindings = getBindings(context.container, target.serviceIdentifier);
      var activeBindings = [];
      if (bindings.length === binding_count_1.BindingCount.NoBindingsAvailable && context.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
        context.container.bind(target.serviceIdentifier).toSelf();
        bindings = getBindings(context.container, target.serviceIdentifier);
      }
      if (!avoidConstraints) {
        activeBindings = bindings.filter(function(binding) {
          var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
          return binding.constraint(request);
        });
      } else {
        activeBindings = bindings;
      }
      _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
      return activeBindings;
    }
    function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
      switch (bindings.length) {
        case binding_count_1.BindingCount.NoBindingsAvailable:
          if (target.isOptional()) {
            return bindings;
          } else {
            var serviceIdentifierString = (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier);
            var msg = ERROR_MSGS.NOT_REGISTERED;
            msg += (0, serialization_1.listMetadataForTarget)(serviceIdentifierString, target);
            msg += (0, serialization_1.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
            throw new Error(msg);
          }
        case binding_count_1.BindingCount.OnlyOneBindingAvailable:
          return bindings;
        case binding_count_1.BindingCount.MultipleBindingsAvailable:
        default:
          if (!target.isArray()) {
            var serviceIdentifierString = (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier);
            var msg = ERROR_MSGS.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
            msg += (0, serialization_1.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
            throw new Error(msg);
          } else {
            return bindings;
          }
      }
    }
    function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
      var activeBindings;
      var childRequest;
      if (parentRequest === null) {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
        childRequest = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
        var thePlan = new plan_1.Plan(context, childRequest);
        context.addPlan(thePlan);
      } else {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
        childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
      }
      activeBindings.forEach(function(binding) {
        var subChildRequest = null;
        if (target.isArray()) {
          subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
        } else {
          if (binding.cache) {
            return;
          }
          subChildRequest = childRequest;
        }
        if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
          var dependencies = (0, reflection_utils_1.getDependencies)(metadataReader, binding.implementationType);
          if (!context.container.options.skipBaseClassChecks) {
            var baseClassDependencyCount = (0, reflection_utils_1.getBaseClassDependencyCount)(metadataReader, binding.implementationType);
            if (dependencies.length < baseClassDependencyCount) {
              var error = ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH((0, reflection_utils_1.getFunctionName)(binding.implementationType));
              throw new Error(error);
            }
          }
          dependencies.forEach(function(dependency) {
            _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
          });
        }
      });
    }
    function getBindings(container, serviceIdentifier) {
      var bindings = [];
      var bindingDictionary = getBindingDictionary(container);
      if (bindingDictionary.hasKey(serviceIdentifier)) {
        bindings = bindingDictionary.get(serviceIdentifier);
      } else if (container.parent !== null) {
        bindings = getBindings(container.parent, serviceIdentifier);
      }
      return bindings;
    }
    function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
      if (avoidConstraints === void 0) {
        avoidConstraints = false;
      }
      var context = new context_1.Context(container);
      var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
      try {
        _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
        return context;
      } catch (error) {
        if ((0, exceptions_1.isStackOverflowExeption)(error)) {
          (0, serialization_1.circularDependencyToException)(context.plan.rootRequest);
        }
        throw error;
      }
    }
    exports.plan = plan;
    function createMockRequest(container, serviceIdentifier, key, value) {
      var target = new target_1.Target(literal_types_1.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1.Metadata(key, value));
      var context = new context_1.Context(container);
      var request = new request_1.Request(serviceIdentifier, context, null, [], target);
      return request;
    }
    exports.createMockRequest = createMockRequest;
  }
});

// ../../node_modules/inversify/lib/utils/async.js
var require_async = __commonJS({
  "../../node_modules/inversify/lib/utils/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPromiseOrContainsPromise = exports.isPromise = void 0;
    function isPromise(object) {
      var isObjectOrFunction = typeof object === "object" && object !== null || typeof object === "function";
      return isObjectOrFunction && typeof object.then === "function";
    }
    exports.isPromise = isPromise;
    function isPromiseOrContainsPromise(object) {
      if (isPromise(object)) {
        return true;
      }
      return Array.isArray(object) && object.some(isPromise);
    }
    exports.isPromiseOrContainsPromise = isPromiseOrContainsPromise;
  }
});

// ../../node_modules/inversify/lib/scope/scope.js
var require_scope = __commonJS({
  "../../node_modules/inversify/lib/scope/scope.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.saveToScope = exports.tryGetFromScope = void 0;
    var inversify_1 = require_inversify();
    var async_1 = require_async();
    var tryGetFromScope = function(requestScope, binding) {
      if (binding.scope === inversify_1.BindingScopeEnum.Singleton && binding.activated) {
        return binding.cache;
      }
      if (binding.scope === inversify_1.BindingScopeEnum.Request && requestScope.has(binding.id)) {
        return requestScope.get(binding.id);
      }
      return null;
    };
    exports.tryGetFromScope = tryGetFromScope;
    var saveToScope = function(requestScope, binding, result) {
      if (binding.scope === inversify_1.BindingScopeEnum.Singleton) {
        _saveToSingletonScope(binding, result);
      }
      if (binding.scope === inversify_1.BindingScopeEnum.Request) {
        _saveToRequestScope(requestScope, binding, result);
      }
    };
    exports.saveToScope = saveToScope;
    var _saveToRequestScope = function(requestScope, binding, result) {
      if (!requestScope.has(binding.id)) {
        requestScope.set(binding.id, result);
      }
    };
    var _saveToSingletonScope = function(binding, result) {
      binding.cache = result;
      binding.activated = true;
      if ((0, async_1.isPromise)(result)) {
        void _saveAsyncResultToSingletonScope(binding, result);
      }
    };
    var _saveAsyncResultToSingletonScope = function(binding, asyncResult) {
      return __awaiter(void 0, void 0, void 0, function() {
        var result, ex_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4, asyncResult];
            case 1:
              result = _a.sent();
              binding.cache = result;
              return [3, 3];
            case 2:
              ex_1 = _a.sent();
              binding.cache = null;
              binding.activated = false;
              throw ex_1;
            case 3:
              return [2];
          }
        });
      });
    };
  }
});

// ../../node_modules/inversify/lib/utils/factory_type.js
var require_factory_type = __commonJS({
  "../../node_modules/inversify/lib/utils/factory_type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FactoryType = void 0;
    var FactoryType;
    (function(FactoryType2) {
      FactoryType2["DynamicValue"] = "toDynamicValue";
      FactoryType2["Factory"] = "toFactory";
      FactoryType2["Provider"] = "toProvider";
    })(FactoryType = exports.FactoryType || (exports.FactoryType = {}));
  }
});

// ../../node_modules/inversify/lib/utils/binding_utils.js
var require_binding_utils = __commonJS({
  "../../node_modules/inversify/lib/utils/binding_utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFactoryDetails = exports.ensureFullyBound = exports.multiBindToService = void 0;
    var inversify_1 = require_inversify();
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var factory_type_1 = require_factory_type();
    var multiBindToService = function(container) {
      return function(service) {
        return function() {
          var types = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            types[_i] = arguments[_i];
          }
          return types.forEach(function(t) {
            return container.bind(t).toService(service);
          });
        };
      };
    };
    exports.multiBindToService = multiBindToService;
    var ensureFullyBound = function(binding) {
      var boundValue = null;
      switch (binding.type) {
        case literal_types_1.BindingTypeEnum.ConstantValue:
        case literal_types_1.BindingTypeEnum.Function:
          boundValue = binding.cache;
          break;
        case literal_types_1.BindingTypeEnum.Constructor:
        case literal_types_1.BindingTypeEnum.Instance:
          boundValue = binding.implementationType;
          break;
        case literal_types_1.BindingTypeEnum.DynamicValue:
          boundValue = binding.dynamicValue;
          break;
        case literal_types_1.BindingTypeEnum.Provider:
          boundValue = binding.provider;
          break;
        case literal_types_1.BindingTypeEnum.Factory:
          boundValue = binding.factory;
          break;
      }
      if (boundValue === null) {
        var serviceIdentifierAsString = (0, inversify_1.getServiceIdentifierAsString)(binding.serviceIdentifier);
        throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifierAsString);
      }
    };
    exports.ensureFullyBound = ensureFullyBound;
    var getFactoryDetails = function(binding) {
      switch (binding.type) {
        case literal_types_1.BindingTypeEnum.Factory:
          return { factory: binding.factory, factoryType: factory_type_1.FactoryType.Factory };
        case literal_types_1.BindingTypeEnum.Provider:
          return { factory: binding.provider, factoryType: factory_type_1.FactoryType.Provider };
        case literal_types_1.BindingTypeEnum.DynamicValue:
          return { factory: binding.dynamicValue, factoryType: factory_type_1.FactoryType.DynamicValue };
        default:
          throw new Error("Unexpected factory type " + binding.type);
      }
    };
    exports.getFactoryDetails = getFactoryDetails;
  }
});

// ../../node_modules/inversify/lib/resolution/instantiation.js
var require_instantiation = __commonJS({
  "../../node_modules/inversify/lib/resolution/instantiation.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveInstance = void 0;
    var error_msgs_1 = require_error_msgs();
    var literal_types_1 = require_literal_types();
    var METADATA_KEY = __importStar(require_metadata_keys());
    var async_1 = require_async();
    function _resolveRequests(childRequests, resolveRequest) {
      return childRequests.reduce(function(resolvedRequests, childRequest) {
        var injection = resolveRequest(childRequest);
        var targetType = childRequest.target.type;
        if (targetType === literal_types_1.TargetTypeEnum.ConstructorArgument) {
          resolvedRequests.constructorInjections.push(injection);
        } else {
          resolvedRequests.propertyRequests.push(childRequest);
          resolvedRequests.propertyInjections.push(injection);
        }
        if (!resolvedRequests.isAsync) {
          resolvedRequests.isAsync = (0, async_1.isPromiseOrContainsPromise)(injection);
        }
        return resolvedRequests;
      }, { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false });
    }
    function _createInstance(constr, childRequests, resolveRequest) {
      var result;
      if (childRequests.length > 0) {
        var resolved = _resolveRequests(childRequests, resolveRequest);
        var createInstanceWithInjectionsArg = __assign(__assign({}, resolved), { constr });
        if (resolved.isAsync) {
          result = createInstanceWithInjectionsAsync(createInstanceWithInjectionsArg);
        } else {
          result = createInstanceWithInjections(createInstanceWithInjectionsArg);
        }
      } else {
        result = new constr();
      }
      return result;
    }
    function createInstanceWithInjections(args) {
      var _a;
      var instance = new ((_a = args.constr).bind.apply(_a, __spreadArray([void 0], args.constructorInjections, false)))();
      args.propertyRequests.forEach(function(r, index) {
        var property = r.target.identifier;
        var injection = args.propertyInjections[index];
        instance[property] = injection;
      });
      return instance;
    }
    function createInstanceWithInjectionsAsync(args) {
      return __awaiter(this, void 0, void 0, function() {
        var constructorInjections, propertyInjections;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, possiblyWaitInjections(args.constructorInjections)];
            case 1:
              constructorInjections = _a.sent();
              return [4, possiblyWaitInjections(args.propertyInjections)];
            case 2:
              propertyInjections = _a.sent();
              return [2, createInstanceWithInjections(__assign(__assign({}, args), { constructorInjections, propertyInjections }))];
          }
        });
      });
    }
    function possiblyWaitInjections(possiblePromiseinjections) {
      return __awaiter(this, void 0, void 0, function() {
        var injections, _i, possiblePromiseinjections_1, injection;
        return __generator(this, function(_a) {
          injections = [];
          for (_i = 0, possiblePromiseinjections_1 = possiblePromiseinjections; _i < possiblePromiseinjections_1.length; _i++) {
            injection = possiblePromiseinjections_1[_i];
            if (Array.isArray(injection)) {
              injections.push(Promise.all(injection));
            } else {
              injections.push(injection);
            }
          }
          return [2, Promise.all(injections)];
        });
      });
    }
    function _getInstanceAfterPostConstruct(constr, result) {
      var postConstructResult = _postConstruct(constr, result);
      if ((0, async_1.isPromise)(postConstructResult)) {
        return postConstructResult.then(function() {
          return result;
        });
      } else {
        return result;
      }
    }
    function _postConstruct(constr, instance) {
      var _a, _b;
      if (Reflect.hasMetadata(METADATA_KEY.POST_CONSTRUCT, constr)) {
        var data = Reflect.getMetadata(METADATA_KEY.POST_CONSTRUCT, constr);
        try {
          return (_b = (_a = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a);
        } catch (e) {
          throw new Error((0, error_msgs_1.POST_CONSTRUCT_ERROR)(constr.name, e.message));
        }
      }
    }
    function _validateInstanceResolution(binding, constr) {
      if (binding.scope !== literal_types_1.BindingScopeEnum.Singleton) {
        _throwIfHandlingDeactivation(binding, constr);
      }
    }
    function _throwIfHandlingDeactivation(binding, constr) {
      var scopeErrorMessage = "Class cannot be instantiated in " + (binding.scope === literal_types_1.BindingScopeEnum.Request ? "request" : "transient") + " scope.";
      if (typeof binding.onDeactivation === "function") {
        throw new Error((0, error_msgs_1.ON_DEACTIVATION_ERROR)(constr.name, scopeErrorMessage));
      }
      if (Reflect.hasMetadata(METADATA_KEY.PRE_DESTROY, constr)) {
        throw new Error((0, error_msgs_1.PRE_DESTROY_ERROR)(constr.name, scopeErrorMessage));
      }
    }
    function resolveInstance(binding, constr, childRequests, resolveRequest) {
      _validateInstanceResolution(binding, constr);
      var result = _createInstance(constr, childRequests, resolveRequest);
      if ((0, async_1.isPromise)(result)) {
        return result.then(function(resolvedResult) {
          return _getInstanceAfterPostConstruct(constr, resolvedResult);
        });
      } else {
        return _getInstanceAfterPostConstruct(constr, result);
      }
    }
    exports.resolveInstance = resolveInstance;
  }
});

// ../../node_modules/inversify/lib/resolution/resolver.js
var require_resolver = __commonJS({
  "../../node_modules/inversify/lib/resolution/resolver.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolve = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var planner_1 = require_planner();
    var scope_1 = require_scope();
    var async_1 = require_async();
    var binding_utils_1 = require_binding_utils();
    var exceptions_1 = require_exceptions();
    var instantiation_1 = require_instantiation();
    var _resolveRequest = function(requestScope) {
      return function(request) {
        request.parentContext.setCurrentRequest(request);
        var bindings = request.bindings;
        var childRequests = request.childRequests;
        var targetIsAnArray = request.target && request.target.isArray();
        var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
        if (targetIsAnArray && targetParentIsNotAnArray) {
          return childRequests.map(function(childRequest) {
            var _f = _resolveRequest(requestScope);
            return _f(childRequest);
          });
        } else {
          if (request.target.isOptional() && bindings.length === 0) {
            return void 0;
          }
          var binding = bindings[0];
          return _resolveBinding(requestScope, request, binding);
        }
      };
    };
    var _resolveFactoryFromBinding = function(binding, context) {
      var factoryDetails = (0, binding_utils_1.getFactoryDetails)(binding);
      return (0, exceptions_1.tryAndThrowErrorIfStackOverflow)(function() {
        return factoryDetails.factory.bind(binding)(context);
      }, function() {
        return new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryDetails.factoryType, context.currentRequest.serviceIdentifier.toString()));
      });
    };
    var _getResolvedFromBinding = function(requestScope, request, binding) {
      var result;
      var childRequests = request.childRequests;
      (0, binding_utils_1.ensureFullyBound)(binding);
      switch (binding.type) {
        case literal_types_1.BindingTypeEnum.ConstantValue:
        case literal_types_1.BindingTypeEnum.Function:
          result = binding.cache;
          break;
        case literal_types_1.BindingTypeEnum.Constructor:
          result = binding.implementationType;
          break;
        case literal_types_1.BindingTypeEnum.Instance:
          result = (0, instantiation_1.resolveInstance)(binding, binding.implementationType, childRequests, _resolveRequest(requestScope));
          break;
        default:
          result = _resolveFactoryFromBinding(binding, request.parentContext);
      }
      return result;
    };
    var _resolveInScope = function(requestScope, binding, resolveFromBinding) {
      var result = (0, scope_1.tryGetFromScope)(requestScope, binding);
      if (result !== null) {
        return result;
      }
      result = resolveFromBinding();
      (0, scope_1.saveToScope)(requestScope, binding, result);
      return result;
    };
    var _resolveBinding = function(requestScope, request, binding) {
      return _resolveInScope(requestScope, binding, function() {
        var result = _getResolvedFromBinding(requestScope, request, binding);
        if ((0, async_1.isPromise)(result)) {
          result = result.then(function(resolved) {
            return _onActivation(request, binding, resolved);
          });
        } else {
          result = _onActivation(request, binding, result);
        }
        return result;
      });
    };
    function _onActivation(request, binding, resolved) {
      var result = _bindingActivation(request.parentContext, binding, resolved);
      var containersIterator = _getContainersIterator(request.parentContext.container);
      var container;
      var containersIteratorResult = containersIterator.next();
      do {
        container = containersIteratorResult.value;
        var context_1 = request.parentContext;
        var serviceIdentifier = request.serviceIdentifier;
        var activationsIterator = _getContainerActivationsForService(container, serviceIdentifier);
        if ((0, async_1.isPromise)(result)) {
          result = _activateContainerAsync(activationsIterator, context_1, result);
        } else {
          result = _activateContainer(activationsIterator, context_1, result);
        }
        containersIteratorResult = containersIterator.next();
      } while (containersIteratorResult.done !== true && !(0, planner_1.getBindingDictionary)(container).hasKey(request.serviceIdentifier));
      return result;
    }
    var _bindingActivation = function(context, binding, previousResult) {
      var result;
      if (typeof binding.onActivation === "function") {
        result = binding.onActivation(context, previousResult);
      } else {
        result = previousResult;
      }
      return result;
    };
    var _activateContainer = function(activationsIterator, context, result) {
      var activation = activationsIterator.next();
      while (!activation.done) {
        result = activation.value(context, result);
        if ((0, async_1.isPromise)(result)) {
          return _activateContainerAsync(activationsIterator, context, result);
        }
        activation = activationsIterator.next();
      }
      return result;
    };
    var _activateContainerAsync = function(activationsIterator, context, resultPromise) {
      return __awaiter(void 0, void 0, void 0, function() {
        var result, activation;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, resultPromise];
            case 1:
              result = _a.sent();
              activation = activationsIterator.next();
              _a.label = 2;
            case 2:
              if (!!activation.done)
                return [3, 4];
              return [4, activation.value(context, result)];
            case 3:
              result = _a.sent();
              activation = activationsIterator.next();
              return [3, 2];
            case 4:
              return [2, result];
          }
        });
      });
    };
    var _getContainerActivationsForService = function(container, serviceIdentifier) {
      var activations = container._activations;
      return activations.hasKey(serviceIdentifier) ? activations.get(serviceIdentifier).values() : [].values();
    };
    var _getContainersIterator = function(container) {
      var containersStack = [container];
      var parent = container.parent;
      while (parent !== null) {
        containersStack.push(parent);
        parent = parent.parent;
      }
      var getNextContainer = function() {
        var nextContainer = containersStack.pop();
        if (nextContainer !== void 0) {
          return { done: false, value: nextContainer };
        } else {
          return { done: true, value: void 0 };
        }
      };
      var containersIterator = {
        next: getNextContainer
      };
      return containersIterator;
    };
    function resolve(context) {
      var _f = _resolveRequest(context.plan.rootRequest.requestScope);
      return _f(context.plan.rootRequest);
    }
    exports.resolve = resolve;
  }
});

// ../../node_modules/inversify/lib/syntax/constraint_helpers.js
var require_constraint_helpers = __commonJS({
  "../../node_modules/inversify/lib/syntax/constraint_helpers.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.typeConstraint = exports.namedConstraint = exports.taggedConstraint = exports.traverseAncerstors = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var traverseAncerstors = function(request, constraint) {
      var parent = request.parentRequest;
      if (parent !== null) {
        return constraint(parent) ? true : traverseAncerstors(parent, constraint);
      } else {
        return false;
      }
    };
    exports.traverseAncerstors = traverseAncerstors;
    var taggedConstraint = function(key) {
      return function(value) {
        var constraint = function(request) {
          return request !== null && request.target !== null && request.target.matchesTag(key)(value);
        };
        constraint.metaData = new metadata_1.Metadata(key, value);
        return constraint;
      };
    };
    exports.taggedConstraint = taggedConstraint;
    var namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
    exports.namedConstraint = namedConstraint;
    var typeConstraint = function(type) {
      return function(request) {
        var binding = null;
        if (request !== null) {
          binding = request.bindings[0];
          if (typeof type === "string") {
            var serviceIdentifier = binding.serviceIdentifier;
            return serviceIdentifier === type;
          } else {
            var constructor = request.bindings[0].implementationType;
            return type === constructor;
          }
        }
        return false;
      };
    };
    exports.typeConstraint = typeConstraint;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_when_syntax.js
var require_binding_when_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_when_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingWhenSyntax = void 0;
    var binding_on_syntax_1 = require_binding_on_syntax();
    var constraint_helpers_1 = require_constraint_helpers();
    var BindingWhenSyntax = function() {
      function BindingWhenSyntax2(binding) {
        this._binding = binding;
      }
      BindingWhenSyntax2.prototype.when = function(constraint) {
        this._binding.constraint = constraint;
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenTargetNamed = function(name) {
        this._binding.constraint = (0, constraint_helpers_1.namedConstraint)(name);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenTargetIsDefault = function() {
        this._binding.constraint = function(request) {
          if (request === null) {
            return false;
          }
          var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
          return targetIsDefault;
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenTargetTagged = function(tag, value) {
        this._binding.constraint = (0, constraint_helpers_1.taggedConstraint)(tag)(value);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenInjectedInto = function(parent) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.typeConstraint)(parent)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenParentNamed = function(name) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.namedConstraint)(name)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenParentTagged = function(tag, value) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.taggedConstraint)(tag)(value)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.typeConstraint)(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
        this._binding.constraint = function(request) {
          return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.typeConstraint)(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenAnyAncestorNamed = function(name) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.namedConstraint)(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenNoAncestorNamed = function(name) {
        this._binding.constraint = function(request) {
          return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.namedConstraint)(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.taggedConstraint)(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
        this._binding.constraint = function(request) {
          return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.taggedConstraint)(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
        this._binding.constraint = function(request) {
          return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      return BindingWhenSyntax2;
    }();
    exports.BindingWhenSyntax = BindingWhenSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_on_syntax.js
var require_binding_on_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_on_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingOnSyntax = void 0;
    var binding_when_syntax_1 = require_binding_when_syntax();
    var BindingOnSyntax = function() {
      function BindingOnSyntax2(binding) {
        this._binding = binding;
      }
      BindingOnSyntax2.prototype.onActivation = function(handler) {
        this._binding.onActivation = handler;
        return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
      };
      BindingOnSyntax2.prototype.onDeactivation = function(handler) {
        this._binding.onDeactivation = handler;
        return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
      };
      return BindingOnSyntax2;
    }();
    exports.BindingOnSyntax = BindingOnSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_when_on_syntax.js
var require_binding_when_on_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_when_on_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingWhenOnSyntax = void 0;
    var binding_on_syntax_1 = require_binding_on_syntax();
    var binding_when_syntax_1 = require_binding_when_syntax();
    var BindingWhenOnSyntax = function() {
      function BindingWhenOnSyntax2(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
      }
      BindingWhenOnSyntax2.prototype.when = function(constraint) {
        return this._bindingWhenSyntax.when(constraint);
      };
      BindingWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
      };
      BindingWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
        return this._bindingWhenSyntax.whenTargetIsDefault();
      };
      BindingWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
      };
      BindingWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
      };
      BindingWhenOnSyntax2.prototype.whenParentNamed = function(name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
      };
      BindingWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
      };
      BindingWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
      };
      BindingWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
      };
      BindingWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
      };
      BindingWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
      };
      BindingWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
      };
      BindingWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
      };
      BindingWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
      };
      BindingWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
      };
      BindingWhenOnSyntax2.prototype.onActivation = function(handler) {
        return this._bindingOnSyntax.onActivation(handler);
      };
      BindingWhenOnSyntax2.prototype.onDeactivation = function(handler) {
        return this._bindingOnSyntax.onDeactivation(handler);
      };
      return BindingWhenOnSyntax2;
    }();
    exports.BindingWhenOnSyntax = BindingWhenOnSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_in_syntax.js
var require_binding_in_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_in_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingInSyntax = void 0;
    var literal_types_1 = require_literal_types();
    var binding_when_on_syntax_1 = require_binding_when_on_syntax();
    var BindingInSyntax = function() {
      function BindingInSyntax2(binding) {
        this._binding = binding;
      }
      BindingInSyntax2.prototype.inRequestScope = function() {
        this._binding.scope = literal_types_1.BindingScopeEnum.Request;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingInSyntax2.prototype.inSingletonScope = function() {
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingInSyntax2.prototype.inTransientScope = function() {
        this._binding.scope = literal_types_1.BindingScopeEnum.Transient;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      return BindingInSyntax2;
    }();
    exports.BindingInSyntax = BindingInSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js
var require_binding_in_when_on_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingInWhenOnSyntax = void 0;
    var binding_in_syntax_1 = require_binding_in_syntax();
    var binding_on_syntax_1 = require_binding_on_syntax();
    var binding_when_syntax_1 = require_binding_when_syntax();
    var BindingInWhenOnSyntax = function() {
      function BindingInWhenOnSyntax2(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
        this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
      }
      BindingInWhenOnSyntax2.prototype.inRequestScope = function() {
        return this._bindingInSyntax.inRequestScope();
      };
      BindingInWhenOnSyntax2.prototype.inSingletonScope = function() {
        return this._bindingInSyntax.inSingletonScope();
      };
      BindingInWhenOnSyntax2.prototype.inTransientScope = function() {
        return this._bindingInSyntax.inTransientScope();
      };
      BindingInWhenOnSyntax2.prototype.when = function(constraint) {
        return this._bindingWhenSyntax.when(constraint);
      };
      BindingInWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
      };
      BindingInWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
        return this._bindingWhenSyntax.whenTargetIsDefault();
      };
      BindingInWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
      };
      BindingInWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
      };
      BindingInWhenOnSyntax2.prototype.whenParentNamed = function(name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
      };
      BindingInWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
      };
      BindingInWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
      };
      BindingInWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
      };
      BindingInWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
      };
      BindingInWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
      };
      BindingInWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
      };
      BindingInWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
      };
      BindingInWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
      };
      BindingInWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
      };
      BindingInWhenOnSyntax2.prototype.onActivation = function(handler) {
        return this._bindingOnSyntax.onActivation(handler);
      };
      BindingInWhenOnSyntax2.prototype.onDeactivation = function(handler) {
        return this._bindingOnSyntax.onDeactivation(handler);
      };
      return BindingInWhenOnSyntax2;
    }();
    exports.BindingInWhenOnSyntax = BindingInWhenOnSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_to_syntax.js
var require_binding_to_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_to_syntax.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingToSyntax = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var binding_in_when_on_syntax_1 = require_binding_in_when_on_syntax();
    var binding_when_on_syntax_1 = require_binding_when_on_syntax();
    var BindingToSyntax = function() {
      function BindingToSyntax2(binding) {
        this._binding = binding;
      }
      BindingToSyntax2.prototype.to = function(constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Instance;
        this._binding.implementationType = constructor;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toSelf = function() {
        if (typeof this._binding.serviceIdentifier !== "function") {
          throw new Error("" + ERROR_MSGS.INVALID_TO_SELF_VALUE);
        }
        var self2 = this._binding.serviceIdentifier;
        return this.to(self2);
      };
      BindingToSyntax2.prototype.toConstantValue = function(value) {
        this._binding.type = literal_types_1.BindingTypeEnum.ConstantValue;
        this._binding.cache = value;
        this._binding.dynamicValue = null;
        this._binding.implementationType = null;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toDynamicValue = function(func) {
        this._binding.type = literal_types_1.BindingTypeEnum.DynamicValue;
        this._binding.cache = null;
        this._binding.dynamicValue = func;
        this._binding.implementationType = null;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toConstructor = function(constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Constructor;
        this._binding.implementationType = constructor;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toFactory = function(factory) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = factory;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toFunction = function(func) {
        if (typeof func !== "function") {
          throw new Error(ERROR_MSGS.INVALID_FUNCTION_BINDING);
        }
        var bindingWhenOnSyntax = this.toConstantValue(func);
        this._binding.type = literal_types_1.BindingTypeEnum.Function;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return bindingWhenOnSyntax;
      };
      BindingToSyntax2.prototype.toAutoFactory = function(serviceIdentifier) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = function(context) {
          var autofactory = function() {
            return context.container.get(serviceIdentifier);
          };
          return autofactory;
        };
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toAutoNamedFactory = function(serviceIdentifier) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = function(context) {
          return function(named) {
            return context.container.getNamed(serviceIdentifier, named);
          };
        };
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toProvider = function(provider) {
        this._binding.type = literal_types_1.BindingTypeEnum.Provider;
        this._binding.provider = provider;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toService = function(service) {
        this.toDynamicValue(function(context) {
          return context.container.get(service);
        });
      };
      return BindingToSyntax2;
    }();
    exports.BindingToSyntax = BindingToSyntax;
  }
});

// ../../node_modules/inversify/lib/container/container_snapshot.js
var require_container_snapshot = __commonJS({
  "../../node_modules/inversify/lib/container/container_snapshot.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContainerSnapshot = void 0;
    var ContainerSnapshot = function() {
      function ContainerSnapshot2() {
      }
      ContainerSnapshot2.of = function(bindings, middleware, activations, deactivations, moduleActivationStore) {
        var snapshot = new ContainerSnapshot2();
        snapshot.bindings = bindings;
        snapshot.middleware = middleware;
        snapshot.deactivations = deactivations;
        snapshot.activations = activations;
        snapshot.moduleActivationStore = moduleActivationStore;
        return snapshot;
      };
      return ContainerSnapshot2;
    }();
    exports.ContainerSnapshot = ContainerSnapshot;
  }
});

// ../../node_modules/inversify/lib/utils/clonable.js
var require_clonable = __commonJS({
  "../../node_modules/inversify/lib/utils/clonable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isClonable = void 0;
    function isClonable(obj) {
      return typeof obj === "object" && obj !== null && "clone" in obj && typeof obj.clone === "function";
    }
    exports.isClonable = isClonable;
  }
});

// ../../node_modules/inversify/lib/container/lookup.js
var require_lookup = __commonJS({
  "../../node_modules/inversify/lib/container/lookup.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Lookup = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    var clonable_1 = require_clonable();
    var Lookup = function() {
      function Lookup2() {
        this._map = /* @__PURE__ */ new Map();
      }
      Lookup2.prototype.getMap = function() {
        return this._map;
      };
      Lookup2.prototype.add = function(serviceIdentifier, value) {
        if (serviceIdentifier === null || serviceIdentifier === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (value === null || value === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== void 0) {
          entry.push(value);
        } else {
          this._map.set(serviceIdentifier, [value]);
        }
      };
      Lookup2.prototype.get = function(serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== void 0) {
          return entry;
        } else {
          throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
      };
      Lookup2.prototype.remove = function(serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (!this._map.delete(serviceIdentifier)) {
          throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
      };
      Lookup2.prototype.removeIntersection = function(lookup) {
        var _this = this;
        this.traverse(function(serviceIdentifier, value) {
          var lookupActivations = lookup.hasKey(serviceIdentifier) ? lookup.get(serviceIdentifier) : void 0;
          if (lookupActivations !== void 0) {
            var filteredValues = value.filter(function(lookupValue) {
              return !lookupActivations.some(function(moduleActivation) {
                return lookupValue === moduleActivation;
              });
            });
            _this._setValue(serviceIdentifier, filteredValues);
          }
        });
      };
      Lookup2.prototype.removeByCondition = function(condition) {
        var _this = this;
        var removals = [];
        this._map.forEach(function(entries, key) {
          var updatedEntries = [];
          for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            var remove = condition(entry);
            if (remove) {
              removals.push(entry);
            } else {
              updatedEntries.push(entry);
            }
          }
          _this._setValue(key, updatedEntries);
        });
        return removals;
      };
      Lookup2.prototype.hasKey = function(serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        return this._map.has(serviceIdentifier);
      };
      Lookup2.prototype.clone = function() {
        var copy = new Lookup2();
        this._map.forEach(function(value, key) {
          value.forEach(function(b) {
            return copy.add(key, (0, clonable_1.isClonable)(b) ? b.clone() : b);
          });
        });
        return copy;
      };
      Lookup2.prototype.traverse = function(func) {
        this._map.forEach(function(value, key) {
          func(key, value);
        });
      };
      Lookup2.prototype._setValue = function(serviceIdentifier, value) {
        if (value.length > 0) {
          this._map.set(serviceIdentifier, value);
        } else {
          this._map.delete(serviceIdentifier);
        }
      };
      return Lookup2;
    }();
    exports.Lookup = Lookup;
  }
});

// ../../node_modules/inversify/lib/container/module_activation_store.js
var require_module_activation_store = __commonJS({
  "../../node_modules/inversify/lib/container/module_activation_store.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModuleActivationStore = void 0;
    var lookup_1 = require_lookup();
    var ModuleActivationStore = function() {
      function ModuleActivationStore2() {
        this._map = /* @__PURE__ */ new Map();
      }
      ModuleActivationStore2.prototype.remove = function(moduleId) {
        if (this._map.has(moduleId)) {
          var handlers = this._map.get(moduleId);
          this._map.delete(moduleId);
          return handlers;
        }
        return this._getEmptyHandlersStore();
      };
      ModuleActivationStore2.prototype.addDeactivation = function(moduleId, serviceIdentifier, onDeactivation) {
        this._getModuleActivationHandlers(moduleId).onDeactivations.add(serviceIdentifier, onDeactivation);
      };
      ModuleActivationStore2.prototype.addActivation = function(moduleId, serviceIdentifier, onActivation) {
        this._getModuleActivationHandlers(moduleId).onActivations.add(serviceIdentifier, onActivation);
      };
      ModuleActivationStore2.prototype.clone = function() {
        var clone = new ModuleActivationStore2();
        this._map.forEach(function(handlersStore, moduleId) {
          clone._map.set(moduleId, {
            onActivations: handlersStore.onActivations.clone(),
            onDeactivations: handlersStore.onDeactivations.clone()
          });
        });
        return clone;
      };
      ModuleActivationStore2.prototype._getModuleActivationHandlers = function(moduleId) {
        var moduleActivationHandlers = this._map.get(moduleId);
        if (moduleActivationHandlers === void 0) {
          moduleActivationHandlers = this._getEmptyHandlersStore();
          this._map.set(moduleId, moduleActivationHandlers);
        }
        return moduleActivationHandlers;
      };
      ModuleActivationStore2.prototype._getEmptyHandlersStore = function() {
        var handlersStore = {
          onActivations: new lookup_1.Lookup(),
          onDeactivations: new lookup_1.Lookup()
        };
        return handlersStore;
      };
      return ModuleActivationStore2;
    }();
    exports.ModuleActivationStore = ModuleActivationStore;
  }
});

// ../../node_modules/inversify/lib/container/container.js
var require_container = __commonJS({
  "../../node_modules/inversify/lib/container/container.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Container = void 0;
    var binding_1 = require_binding();
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_reader_1 = require_metadata_reader();
    var planner_1 = require_planner();
    var resolver_1 = require_resolver();
    var binding_to_syntax_1 = require_binding_to_syntax();
    var async_1 = require_async();
    var id_1 = require_id();
    var serialization_1 = require_serialization();
    var container_snapshot_1 = require_container_snapshot();
    var lookup_1 = require_lookup();
    var module_activation_store_1 = require_module_activation_store();
    var Container = function() {
      function Container2(containerOptions) {
        var options = containerOptions || {};
        if (typeof options !== "object") {
          throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
        }
        if (options.defaultScope === void 0) {
          options.defaultScope = literal_types_1.BindingScopeEnum.Transient;
        } else if (options.defaultScope !== literal_types_1.BindingScopeEnum.Singleton && options.defaultScope !== literal_types_1.BindingScopeEnum.Transient && options.defaultScope !== literal_types_1.BindingScopeEnum.Request) {
          throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
        }
        if (options.autoBindInjectable === void 0) {
          options.autoBindInjectable = false;
        } else if (typeof options.autoBindInjectable !== "boolean") {
          throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
        }
        if (options.skipBaseClassChecks === void 0) {
          options.skipBaseClassChecks = false;
        } else if (typeof options.skipBaseClassChecks !== "boolean") {
          throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
        }
        this.options = {
          autoBindInjectable: options.autoBindInjectable,
          defaultScope: options.defaultScope,
          skipBaseClassChecks: options.skipBaseClassChecks
        };
        this.id = (0, id_1.id)();
        this._bindingDictionary = new lookup_1.Lookup();
        this._snapshots = [];
        this._middleware = null;
        this._activations = new lookup_1.Lookup();
        this._deactivations = new lookup_1.Lookup();
        this.parent = null;
        this._metadataReader = new metadata_reader_1.MetadataReader();
        this._moduleActivationStore = new module_activation_store_1.ModuleActivationStore();
      }
      Container2.merge = function(container1, container2) {
        var containers = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          containers[_i - 2] = arguments[_i];
        }
        var container = new Container2();
        var targetContainers = __spreadArray([container1, container2], containers, true).map(function(targetContainer) {
          return (0, planner_1.getBindingDictionary)(targetContainer);
        });
        var bindingDictionary = (0, planner_1.getBindingDictionary)(container);
        function copyDictionary(origin, destination) {
          origin.traverse(function(_key, value) {
            value.forEach(function(binding) {
              destination.add(binding.serviceIdentifier, binding.clone());
            });
          });
        }
        targetContainers.forEach(function(targetBindingDictionary) {
          copyDictionary(targetBindingDictionary, bindingDictionary);
        });
        return container;
      };
      Container2.prototype.load = function() {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          modules[_i] = arguments[_i];
        }
        var getHelpers = this._getContainerModuleHelpersFactory();
        for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
          var currentModule = modules_1[_a];
          var containerModuleHelpers = getHelpers(currentModule.id);
          currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction);
        }
      };
      Container2.prototype.loadAsync = function() {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          modules[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function() {
          var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                getHelpers = this._getContainerModuleHelpersFactory();
                _a = 0, modules_2 = modules;
                _b.label = 1;
              case 1:
                if (!(_a < modules_2.length))
                  return [3, 4];
                currentModule = modules_2[_a];
                containerModuleHelpers = getHelpers(currentModule.id);
                return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction)];
              case 2:
                _b.sent();
                _b.label = 3;
              case 3:
                _a++;
                return [3, 1];
              case 4:
                return [2];
            }
          });
        });
      };
      Container2.prototype.unload = function() {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          modules[_i] = arguments[_i];
        }
        modules.forEach(function(module3) {
          var deactivations = _this._removeModuleBindings(module3.id);
          _this._deactivateSingletons(deactivations);
          _this._removeModuleHandlers(module3.id);
        });
      };
      Container2.prototype.unloadAsync = function() {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          modules[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function() {
          var _a, modules_3, module_1, deactivations;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                _a = 0, modules_3 = modules;
                _b.label = 1;
              case 1:
                if (!(_a < modules_3.length))
                  return [3, 4];
                module_1 = modules_3[_a];
                deactivations = this._removeModuleBindings(module_1.id);
                return [4, this._deactivateSingletonsAsync(deactivations)];
              case 2:
                _b.sent();
                this._removeModuleHandlers(module_1.id);
                _b.label = 3;
              case 3:
                _a++;
                return [3, 1];
              case 4:
                return [2];
            }
          });
        });
      };
      Container2.prototype.bind = function(serviceIdentifier) {
        var scope = this.options.defaultScope || literal_types_1.BindingScopeEnum.Transient;
        var binding = new binding_1.Binding(serviceIdentifier, scope);
        this._bindingDictionary.add(serviceIdentifier, binding);
        return new binding_to_syntax_1.BindingToSyntax(binding);
      };
      Container2.prototype.rebind = function(serviceIdentifier) {
        this.unbind(serviceIdentifier);
        return this.bind(serviceIdentifier);
      };
      Container2.prototype.rebindAsync = function(serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, this.unbindAsync(serviceIdentifier)];
              case 1:
                _a.sent();
                return [2, this.bind(serviceIdentifier)];
            }
          });
        });
      };
      Container2.prototype.unbind = function(serviceIdentifier) {
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
          var bindings = this._bindingDictionary.get(serviceIdentifier);
          this._deactivateSingletons(bindings);
        }
        this._removeServiceFromDictionary(serviceIdentifier);
      };
      Container2.prototype.unbindAsync = function(serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function() {
          var bindings;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!this._bindingDictionary.hasKey(serviceIdentifier))
                  return [3, 2];
                bindings = this._bindingDictionary.get(serviceIdentifier);
                return [4, this._deactivateSingletonsAsync(bindings)];
              case 1:
                _a.sent();
                _a.label = 2;
              case 2:
                this._removeServiceFromDictionary(serviceIdentifier);
                return [2];
            }
          });
        });
      };
      Container2.prototype.unbindAll = function() {
        var _this = this;
        this._bindingDictionary.traverse(function(_key, value) {
          _this._deactivateSingletons(value);
        });
        this._bindingDictionary = new lookup_1.Lookup();
      };
      Container2.prototype.unbindAllAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
          var promises;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                promises = [];
                this._bindingDictionary.traverse(function(_key, value) {
                  promises.push(_this._deactivateSingletonsAsync(value));
                });
                return [4, Promise.all(promises)];
              case 1:
                _a.sent();
                this._bindingDictionary = new lookup_1.Lookup();
                return [2];
            }
          });
        });
      };
      Container2.prototype.onActivation = function(serviceIdentifier, onActivation) {
        this._activations.add(serviceIdentifier, onActivation);
      };
      Container2.prototype.onDeactivation = function(serviceIdentifier, onDeactivation) {
        this._deactivations.add(serviceIdentifier, onDeactivation);
      };
      Container2.prototype.isBound = function(serviceIdentifier) {
        var bound = this._bindingDictionary.hasKey(serviceIdentifier);
        if (!bound && this.parent) {
          bound = this.parent.isBound(serviceIdentifier);
        }
        return bound;
      };
      Container2.prototype.isCurrentBound = function(serviceIdentifier) {
        return this._bindingDictionary.hasKey(serviceIdentifier);
      };
      Container2.prototype.isBoundNamed = function(serviceIdentifier, named) {
        return this.isBoundTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.isBoundTagged = function(serviceIdentifier, key, value) {
        var bound = false;
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
          var bindings = this._bindingDictionary.get(serviceIdentifier);
          var request_1 = (0, planner_1.createMockRequest)(this, serviceIdentifier, key, value);
          bound = bindings.some(function(b) {
            return b.constraint(request_1);
          });
        }
        if (!bound && this.parent) {
          bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
        }
        return bound;
      };
      Container2.prototype.snapshot = function() {
        this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
      };
      Container2.prototype.restore = function() {
        var snapshot = this._snapshots.pop();
        if (snapshot === void 0) {
          throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
        }
        this._bindingDictionary = snapshot.bindings;
        this._activations = snapshot.activations;
        this._deactivations = snapshot.deactivations;
        this._middleware = snapshot.middleware;
        this._moduleActivationStore = snapshot.moduleActivationStore;
      };
      Container2.prototype.createChild = function(containerOptions) {
        var child = new Container2(containerOptions || this.options);
        child.parent = this;
        return child;
      };
      Container2.prototype.applyMiddleware = function() {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          middlewares[_i] = arguments[_i];
        }
        var initial = this._middleware ? this._middleware : this._planAndResolve();
        this._middleware = middlewares.reduce(function(prev, curr) {
          return curr(prev);
        }, initial);
      };
      Container2.prototype.applyCustomMetadataReader = function(metadataReader) {
        this._metadataReader = metadataReader;
      };
      Container2.prototype.get = function(serviceIdentifier) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, false);
        return this._getButThrowIfAsync(getArgs);
      };
      Container2.prototype.getAsync = function(serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function() {
          var getArgs;
          return __generator(this, function(_a) {
            getArgs = this._getNotAllArgs(serviceIdentifier, false);
            return [2, this._get(getArgs)];
          });
        });
      };
      Container2.prototype.getTagged = function(serviceIdentifier, key, value) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
        return this._getButThrowIfAsync(getArgs);
      };
      Container2.prototype.getTaggedAsync = function(serviceIdentifier, key, value) {
        return __awaiter(this, void 0, void 0, function() {
          var getArgs;
          return __generator(this, function(_a) {
            getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
            return [2, this._get(getArgs)];
          });
        });
      };
      Container2.prototype.getNamed = function(serviceIdentifier, named) {
        return this.getTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.getNamedAsync = function(serviceIdentifier, named) {
        return this.getTaggedAsync(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.getAll = function(serviceIdentifier) {
        var getArgs = this._getAllArgs(serviceIdentifier);
        return this._getButThrowIfAsync(getArgs);
      };
      Container2.prototype.getAllAsync = function(serviceIdentifier) {
        var getArgs = this._getAllArgs(serviceIdentifier);
        return this._getAll(getArgs);
      };
      Container2.prototype.getAllTagged = function(serviceIdentifier, key, value) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
        return this._getButThrowIfAsync(getArgs);
      };
      Container2.prototype.getAllTaggedAsync = function(serviceIdentifier, key, value) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
        return this._getAll(getArgs);
      };
      Container2.prototype.getAllNamed = function(serviceIdentifier, named) {
        return this.getAllTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.getAllNamedAsync = function(serviceIdentifier, named) {
        return this.getAllTaggedAsync(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.resolve = function(constructorFunction) {
        var isBound = this.isBound(constructorFunction);
        if (!isBound) {
          this.bind(constructorFunction).toSelf();
        }
        var resolved = this.get(constructorFunction);
        if (!isBound) {
          this.unbind(constructorFunction);
        }
        return resolved;
      };
      Container2.prototype._preDestroy = function(constructor, instance) {
        if (Reflect.hasMetadata(METADATA_KEY.PRE_DESTROY, constructor)) {
          var data = Reflect.getMetadata(METADATA_KEY.PRE_DESTROY, constructor);
          return instance[data.value]();
        }
      };
      Container2.prototype._removeModuleHandlers = function(moduleId) {
        var moduleActivationsHandlers = this._moduleActivationStore.remove(moduleId);
        this._activations.removeIntersection(moduleActivationsHandlers.onActivations);
        this._deactivations.removeIntersection(moduleActivationsHandlers.onDeactivations);
      };
      Container2.prototype._removeModuleBindings = function(moduleId) {
        return this._bindingDictionary.removeByCondition(function(binding) {
          return binding.moduleId === moduleId;
        });
      };
      Container2.prototype._deactivate = function(binding, instance) {
        var _this = this;
        var constructor = Object.getPrototypeOf(instance).constructor;
        try {
          if (this._deactivations.hasKey(binding.serviceIdentifier)) {
            var result = this._deactivateContainer(instance, this._deactivations.get(binding.serviceIdentifier).values());
            if ((0, async_1.isPromise)(result)) {
              return this._handleDeactivationError(result.then(function() {
                return _this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(binding, instance, constructor);
              }), constructor);
            }
          }
          var propagateDeactivationResult = this._propagateContainerDeactivationThenBindingAndPreDestroy(binding, instance, constructor);
          if ((0, async_1.isPromise)(propagateDeactivationResult)) {
            return this._handleDeactivationError(propagateDeactivationResult, constructor);
          }
        } catch (ex) {
          throw new Error(ERROR_MSGS.ON_DEACTIVATION_ERROR(constructor.name, ex.message));
        }
      };
      Container2.prototype._handleDeactivationError = function(asyncResult, constructor) {
        return __awaiter(this, void 0, void 0, function() {
          var ex_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, asyncResult];
              case 1:
                _a.sent();
                return [3, 3];
              case 2:
                ex_1 = _a.sent();
                throw new Error(ERROR_MSGS.ON_DEACTIVATION_ERROR(constructor.name, ex_1.message));
              case 3:
                return [2];
            }
          });
        });
      };
      Container2.prototype._deactivateContainer = function(instance, deactivationsIterator) {
        var _this = this;
        var deactivation = deactivationsIterator.next();
        while (deactivation.value) {
          var result = deactivation.value(instance);
          if ((0, async_1.isPromise)(result)) {
            return result.then(function() {
              return _this._deactivateContainerAsync(instance, deactivationsIterator);
            });
          }
          deactivation = deactivationsIterator.next();
        }
      };
      Container2.prototype._deactivateContainerAsync = function(instance, deactivationsIterator) {
        return __awaiter(this, void 0, void 0, function() {
          var deactivation;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                deactivation = deactivationsIterator.next();
                _a.label = 1;
              case 1:
                if (!deactivation.value)
                  return [3, 3];
                return [4, deactivation.value(instance)];
              case 2:
                _a.sent();
                deactivation = deactivationsIterator.next();
                return [3, 1];
              case 3:
                return [2];
            }
          });
        });
      };
      Container2.prototype._getContainerModuleHelpersFactory = function() {
        var _this = this;
        var setModuleId = function(bindingToSyntax, moduleId) {
          bindingToSyntax._binding.moduleId = moduleId;
        };
        var getBindFunction = function(moduleId) {
          return function(serviceIdentifier) {
            var bindingToSyntax = _this.bind(serviceIdentifier);
            setModuleId(bindingToSyntax, moduleId);
            return bindingToSyntax;
          };
        };
        var getUnbindFunction = function() {
          return function(serviceIdentifier) {
            return _this.unbind(serviceIdentifier);
          };
        };
        var getUnbindAsyncFunction = function() {
          return function(serviceIdentifier) {
            return _this.unbindAsync(serviceIdentifier);
          };
        };
        var getIsboundFunction = function() {
          return function(serviceIdentifier) {
            return _this.isBound(serviceIdentifier);
          };
        };
        var getRebindFunction = function(moduleId) {
          return function(serviceIdentifier) {
            var bindingToSyntax = _this.rebind(serviceIdentifier);
            setModuleId(bindingToSyntax, moduleId);
            return bindingToSyntax;
          };
        };
        var getOnActivationFunction = function(moduleId) {
          return function(serviceIdentifier, onActivation) {
            _this._moduleActivationStore.addActivation(moduleId, serviceIdentifier, onActivation);
            _this.onActivation(serviceIdentifier, onActivation);
          };
        };
        var getOnDeactivationFunction = function(moduleId) {
          return function(serviceIdentifier, onDeactivation) {
            _this._moduleActivationStore.addDeactivation(moduleId, serviceIdentifier, onDeactivation);
            _this.onDeactivation(serviceIdentifier, onDeactivation);
          };
        };
        return function(mId) {
          return {
            bindFunction: getBindFunction(mId),
            isboundFunction: getIsboundFunction(),
            onActivationFunction: getOnActivationFunction(mId),
            onDeactivationFunction: getOnDeactivationFunction(mId),
            rebindFunction: getRebindFunction(mId),
            unbindFunction: getUnbindFunction(),
            unbindAsyncFunction: getUnbindAsyncFunction()
          };
        };
      };
      Container2.prototype._getAll = function(getArgs) {
        return Promise.all(this._get(getArgs));
      };
      Container2.prototype._get = function(getArgs) {
        var planAndResolveArgs = __assign(__assign({}, getArgs), { contextInterceptor: function(context) {
          return context;
        }, targetType: literal_types_1.TargetTypeEnum.Variable });
        if (this._middleware) {
          var middlewareResult = this._middleware(planAndResolveArgs);
          if (middlewareResult === void 0 || middlewareResult === null) {
            throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
          }
          return middlewareResult;
        }
        return this._planAndResolve()(planAndResolveArgs);
      };
      Container2.prototype._getButThrowIfAsync = function(getArgs) {
        var result = this._get(getArgs);
        if ((0, async_1.isPromiseOrContainsPromise)(result)) {
          throw new Error(ERROR_MSGS.LAZY_IN_SYNC(getArgs.serviceIdentifier));
        }
        return result;
      };
      Container2.prototype._getAllArgs = function(serviceIdentifier) {
        var getAllArgs = {
          avoidConstraints: true,
          isMultiInject: true,
          serviceIdentifier
        };
        return getAllArgs;
      };
      Container2.prototype._getNotAllArgs = function(serviceIdentifier, isMultiInject, key, value) {
        var getNotAllArgs = {
          avoidConstraints: false,
          isMultiInject,
          serviceIdentifier,
          key,
          value
        };
        return getNotAllArgs;
      };
      Container2.prototype._planAndResolve = function() {
        var _this = this;
        return function(args) {
          var context = (0, planner_1.plan)(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
          context = args.contextInterceptor(context);
          var result = (0, resolver_1.resolve)(context);
          return result;
        };
      };
      Container2.prototype._deactivateIfSingleton = function(binding) {
        var _this = this;
        if (!binding.activated) {
          return;
        }
        if ((0, async_1.isPromise)(binding.cache)) {
          return binding.cache.then(function(resolved) {
            return _this._deactivate(binding, resolved);
          });
        }
        return this._deactivate(binding, binding.cache);
      };
      Container2.prototype._deactivateSingletons = function(bindings) {
        for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
          var binding = bindings_1[_i];
          var result = this._deactivateIfSingleton(binding);
          if ((0, async_1.isPromise)(result)) {
            throw new Error(ERROR_MSGS.ASYNC_UNBIND_REQUIRED);
          }
        }
      };
      Container2.prototype._deactivateSingletonsAsync = function(bindings) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, Promise.all(bindings.map(function(b) {
                  return _this._deactivateIfSingleton(b);
                }))];
              case 1:
                _a.sent();
                return [2];
            }
          });
        });
      };
      Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function(binding, instance, constructor) {
        if (this.parent) {
          return this._deactivate.bind(this.parent)(binding, instance);
        } else {
          return this._bindingDeactivationAndPreDestroy(binding, instance, constructor);
        }
      };
      Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function(binding, instance, constructor) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!this.parent)
                  return [3, 2];
                return [4, this._deactivate.bind(this.parent)(binding, instance)];
              case 1:
                _a.sent();
                return [3, 4];
              case 2:
                return [4, this._bindingDeactivationAndPreDestroyAsync(binding, instance, constructor)];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                return [2];
            }
          });
        });
      };
      Container2.prototype._removeServiceFromDictionary = function(serviceIdentifier) {
        try {
          this._bindingDictionary.remove(serviceIdentifier);
        } catch (e) {
          throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier));
        }
      };
      Container2.prototype._bindingDeactivationAndPreDestroy = function(binding, instance, constructor) {
        var _this = this;
        if (typeof binding.onDeactivation === "function") {
          var result = binding.onDeactivation(instance);
          if ((0, async_1.isPromise)(result)) {
            return result.then(function() {
              return _this._preDestroy(constructor, instance);
            });
          }
        }
        return this._preDestroy(constructor, instance);
      };
      Container2.prototype._bindingDeactivationAndPreDestroyAsync = function(binding, instance, constructor) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!(typeof binding.onDeactivation === "function"))
                  return [3, 2];
                return [4, binding.onDeactivation(instance)];
              case 1:
                _a.sent();
                _a.label = 2;
              case 2:
                return [4, this._preDestroy(constructor, instance)];
              case 3:
                _a.sent();
                return [2];
            }
          });
        });
      };
      return Container2;
    }();
    exports.Container = Container;
  }
});

// ../../node_modules/inversify/lib/container/container_module.js
var require_container_module = __commonJS({
  "../../node_modules/inversify/lib/container/container_module.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncContainerModule = exports.ContainerModule = void 0;
    var id_1 = require_id();
    var ContainerModule2 = function() {
      function ContainerModule3(registry) {
        this.id = (0, id_1.id)();
        this.registry = registry;
      }
      return ContainerModule3;
    }();
    exports.ContainerModule = ContainerModule2;
    var AsyncContainerModule = function() {
      function AsyncContainerModule2(registry) {
        this.id = (0, id_1.id)();
        this.registry = registry;
      }
      return AsyncContainerModule2;
    }();
    exports.AsyncContainerModule = AsyncContainerModule;
  }
});

// ../../node_modules/inversify/lib/utils/js.js
var require_js = __commonJS({
  "../../node_modules/inversify/lib/utils/js.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFirstArrayDuplicate = void 0;
    function getFirstArrayDuplicate(array) {
      var seenValues = /* @__PURE__ */ new Set();
      for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var entry = array_1[_i];
        if (seenValues.has(entry)) {
          return entry;
        } else {
          seenValues.add(entry);
        }
      }
      return void 0;
    }
    exports.getFirstArrayDuplicate = getFirstArrayDuplicate;
  }
});

// ../../node_modules/inversify/lib/annotation/decorator_utils.js
var require_decorator_utils = __commonJS({
  "../../node_modules/inversify/lib/annotation/decorator_utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTaggedDecorator = exports.tagProperty = exports.tagParameter = exports.decorate = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    var METADATA_KEY = __importStar(require_metadata_keys());
    var js_1 = require_js();
    function targetIsConstructorFunction(target) {
      return target.prototype !== void 0;
    }
    function _throwIfMethodParameter(parameterName) {
      if (parameterName !== void 0) {
        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
      }
    }
    function tagParameter(annotationTarget, parameterName, parameterIndex, metadata) {
      _throwIfMethodParameter(parameterName);
      _tagParameterOrProperty(METADATA_KEY.TAGGED, annotationTarget, parameterIndex.toString(), metadata);
    }
    exports.tagParameter = tagParameter;
    function tagProperty(annotationTarget, propertyName, metadata) {
      if (targetIsConstructorFunction(annotationTarget)) {
        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
      }
      _tagParameterOrProperty(METADATA_KEY.TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
    }
    exports.tagProperty = tagProperty;
    function _ensureNoMetadataKeyDuplicates(metadata) {
      var metadatas = [];
      if (Array.isArray(metadata)) {
        metadatas = metadata;
        var duplicate = (0, js_1.getFirstArrayDuplicate)(metadatas.map(function(md) {
          return md.key;
        }));
        if (duplicate !== void 0) {
          throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + duplicate.toString());
        }
      } else {
        metadatas = [metadata];
      }
      return metadatas;
    }
    function _tagParameterOrProperty(metadataKey, annotationTarget, key, metadata) {
      var metadatas = _ensureNoMetadataKeyDuplicates(metadata);
      var paramsOrPropertiesMetadata = {};
      if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
        paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
      }
      var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
      if (paramOrPropertyMetadata === void 0) {
        paramOrPropertyMetadata = [];
      } else {
        var _loop_1 = function(m2) {
          if (metadatas.some(function(md) {
            return md.key === m2.key;
          })) {
            throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m2.key.toString());
          }
        };
        for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
          var m = paramOrPropertyMetadata_1[_i];
          _loop_1(m);
        }
      }
      paramOrPropertyMetadata.push.apply(paramOrPropertyMetadata, metadatas);
      paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
      Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
    }
    function createTaggedDecorator(metadata) {
      return function(target, targetKey, indexOrPropertyDescriptor) {
        if (typeof indexOrPropertyDescriptor === "number") {
          tagParameter(target, targetKey, indexOrPropertyDescriptor, metadata);
        } else {
          tagProperty(target, targetKey, metadata);
        }
      };
    }
    exports.createTaggedDecorator = createTaggedDecorator;
    function _decorate(decorators, target) {
      Reflect.decorate(decorators, target);
    }
    function _param(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function decorate(decorator, target, parameterIndexOrProperty) {
      if (typeof parameterIndexOrProperty === "number") {
        _decorate([_param(parameterIndexOrProperty, decorator)], target);
      } else if (typeof parameterIndexOrProperty === "string") {
        Reflect.decorate([decorator], target, parameterIndexOrProperty);
      } else {
        _decorate([decorator], target);
      }
    }
    exports.decorate = decorate;
  }
});

// ../../node_modules/inversify/lib/annotation/injectable.js
var require_injectable = __commonJS({
  "../../node_modules/inversify/lib/annotation/injectable.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.injectable = void 0;
    var ERRORS_MSGS = __importStar(require_error_msgs());
    var METADATA_KEY = __importStar(require_metadata_keys());
    function injectable2() {
      return function(target) {
        if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target)) {
          throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
        }
        var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
        Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);
        return target;
      };
    }
    exports.injectable = injectable2;
  }
});

// ../../node_modules/inversify/lib/annotation/tagged.js
var require_tagged = __commonJS({
  "../../node_modules/inversify/lib/annotation/tagged.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tagged = void 0;
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function tagged(metadataKey, metadataValue) {
      return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(metadataKey, metadataValue));
    }
    exports.tagged = tagged;
  }
});

// ../../node_modules/inversify/lib/annotation/named.js
var require_named = __commonJS({
  "../../node_modules/inversify/lib/annotation/named.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.named = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function named(name) {
      return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name));
    }
    exports.named = named;
  }
});

// ../../node_modules/inversify/lib/annotation/inject_base.js
var require_inject_base = __commonJS({
  "../../node_modules/inversify/lib/annotation/inject_base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.injectBase = void 0;
    var error_msgs_1 = require_error_msgs();
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function injectBase(metadataKey) {
      return function(serviceIdentifier) {
        return function(target, targetKey, indexOrPropertyDescriptor) {
          if (serviceIdentifier === void 0) {
            var className = typeof target === "function" ? target.name : target.constructor.name;
            throw new Error((0, error_msgs_1.UNDEFINED_INJECT_ANNOTATION)(className));
          }
          return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(metadataKey, serviceIdentifier))(target, targetKey, indexOrPropertyDescriptor);
        };
      };
    }
    exports.injectBase = injectBase;
  }
});

// ../../node_modules/inversify/lib/annotation/inject.js
var require_inject = __commonJS({
  "../../node_modules/inversify/lib/annotation/inject.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inject = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var inject_base_1 = require_inject_base();
    var inject2 = (0, inject_base_1.injectBase)(METADATA_KEY.INJECT_TAG);
    exports.inject = inject2;
  }
});

// ../../node_modules/inversify/lib/annotation/optional.js
var require_optional = __commonJS({
  "../../node_modules/inversify/lib/annotation/optional.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.optional = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function optional() {
      return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true));
    }
    exports.optional = optional;
  }
});

// ../../node_modules/inversify/lib/annotation/unmanaged.js
var require_unmanaged = __commonJS({
  "../../node_modules/inversify/lib/annotation/unmanaged.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unmanaged = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function unmanaged() {
      return function(target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, true);
        (0, decorator_utils_1.tagParameter)(target, targetKey, index, metadata);
      };
    }
    exports.unmanaged = unmanaged;
  }
});

// ../../node_modules/inversify/lib/annotation/multi_inject.js
var require_multi_inject = __commonJS({
  "../../node_modules/inversify/lib/annotation/multi_inject.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multiInject = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var inject_base_1 = require_inject_base();
    var multiInject = (0, inject_base_1.injectBase)(METADATA_KEY.MULTI_INJECT_TAG);
    exports.multiInject = multiInject;
  }
});

// ../../node_modules/inversify/lib/annotation/target_name.js
var require_target_name = __commonJS({
  "../../node_modules/inversify/lib/annotation/target_name.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.targetName = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function targetName(name) {
      return function(target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
        (0, decorator_utils_1.tagParameter)(target, targetKey, index, metadata);
      };
    }
    exports.targetName = targetName;
  }
});

// ../../node_modules/inversify/lib/annotation/property_event_decorator.js
var require_property_event_decorator = __commonJS({
  "../../node_modules/inversify/lib/annotation/property_event_decorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.propertyEventDecorator = void 0;
    var metadata_1 = require_metadata();
    function propertyEventDecorator(eventKey, errorMessage) {
      return function() {
        return function(target, propertyKey) {
          var metadata = new metadata_1.Metadata(eventKey, propertyKey);
          if (Reflect.hasOwnMetadata(eventKey, target.constructor)) {
            throw new Error(errorMessage);
          }
          Reflect.defineMetadata(eventKey, metadata, target.constructor);
        };
      };
    }
    exports.propertyEventDecorator = propertyEventDecorator;
  }
});

// ../../node_modules/inversify/lib/annotation/post_construct.js
var require_post_construct = __commonJS({
  "../../node_modules/inversify/lib/annotation/post_construct.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.postConstruct = void 0;
    var ERRORS_MSGS = __importStar(require_error_msgs());
    var METADATA_KEY = __importStar(require_metadata_keys());
    var property_event_decorator_1 = require_property_event_decorator();
    var postConstruct = (0, property_event_decorator_1.propertyEventDecorator)(METADATA_KEY.POST_CONSTRUCT, ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
    exports.postConstruct = postConstruct;
  }
});

// ../../node_modules/inversify/lib/annotation/pre_destroy.js
var require_pre_destroy = __commonJS({
  "../../node_modules/inversify/lib/annotation/pre_destroy.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.preDestroy = void 0;
    var ERRORS_MSGS = __importStar(require_error_msgs());
    var METADATA_KEY = __importStar(require_metadata_keys());
    var property_event_decorator_1 = require_property_event_decorator();
    var preDestroy = (0, property_event_decorator_1.propertyEventDecorator)(METADATA_KEY.PRE_DESTROY, ERRORS_MSGS.MULTIPLE_PRE_DESTROY_METHODS);
    exports.preDestroy = preDestroy;
  }
});

// ../../node_modules/inversify/lib/interfaces/interfaces.js
var require_interfaces = __commonJS({
  "../../node_modules/inversify/lib/interfaces/interfaces.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.interfaces = void 0;
    var interfaces2;
    (function(interfaces3) {
      ;
    })(interfaces2 || (interfaces2 = {}));
    exports.interfaces = interfaces2;
  }
});

// ../../node_modules/inversify/lib/inversify.js
var require_inversify = __commonJS({
  "../../node_modules/inversify/lib/inversify.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multiBindToService = exports.getServiceIdentifierAsString = exports.typeConstraint = exports.namedConstraint = exports.taggedConstraint = exports.traverseAncerstors = exports.decorate = exports.interfaces = exports.id = exports.MetadataReader = exports.preDestroy = exports.postConstruct = exports.targetName = exports.multiInject = exports.unmanaged = exports.optional = exports.LazyServiceIdentifer = exports.inject = exports.named = exports.tagged = exports.injectable = exports.createTaggedDecorator = exports.ContainerModule = exports.AsyncContainerModule = exports.TargetTypeEnum = exports.BindingTypeEnum = exports.BindingScopeEnum = exports.Container = exports.METADATA_KEY = void 0;
    var keys = __importStar(require_metadata_keys());
    exports.METADATA_KEY = keys;
    var container_1 = require_container();
    Object.defineProperty(exports, "Container", { enumerable: true, get: function() {
      return container_1.Container;
    } });
    var literal_types_1 = require_literal_types();
    Object.defineProperty(exports, "BindingScopeEnum", { enumerable: true, get: function() {
      return literal_types_1.BindingScopeEnum;
    } });
    Object.defineProperty(exports, "BindingTypeEnum", { enumerable: true, get: function() {
      return literal_types_1.BindingTypeEnum;
    } });
    Object.defineProperty(exports, "TargetTypeEnum", { enumerable: true, get: function() {
      return literal_types_1.TargetTypeEnum;
    } });
    var container_module_1 = require_container_module();
    Object.defineProperty(exports, "AsyncContainerModule", { enumerable: true, get: function() {
      return container_module_1.AsyncContainerModule;
    } });
    Object.defineProperty(exports, "ContainerModule", { enumerable: true, get: function() {
      return container_module_1.ContainerModule;
    } });
    var decorator_utils_1 = require_decorator_utils();
    Object.defineProperty(exports, "createTaggedDecorator", { enumerable: true, get: function() {
      return decorator_utils_1.createTaggedDecorator;
    } });
    var injectable_1 = require_injectable();
    Object.defineProperty(exports, "injectable", { enumerable: true, get: function() {
      return injectable_1.injectable;
    } });
    var tagged_1 = require_tagged();
    Object.defineProperty(exports, "tagged", { enumerable: true, get: function() {
      return tagged_1.tagged;
    } });
    var named_1 = require_named();
    Object.defineProperty(exports, "named", { enumerable: true, get: function() {
      return named_1.named;
    } });
    var inject_1 = require_inject();
    Object.defineProperty(exports, "inject", { enumerable: true, get: function() {
      return inject_1.inject;
    } });
    var lazy_service_identifier_1 = require_lazy_service_identifier();
    Object.defineProperty(exports, "LazyServiceIdentifer", { enumerable: true, get: function() {
      return lazy_service_identifier_1.LazyServiceIdentifer;
    } });
    var optional_1 = require_optional();
    Object.defineProperty(exports, "optional", { enumerable: true, get: function() {
      return optional_1.optional;
    } });
    var unmanaged_1 = require_unmanaged();
    Object.defineProperty(exports, "unmanaged", { enumerable: true, get: function() {
      return unmanaged_1.unmanaged;
    } });
    var multi_inject_1 = require_multi_inject();
    Object.defineProperty(exports, "multiInject", { enumerable: true, get: function() {
      return multi_inject_1.multiInject;
    } });
    var target_name_1 = require_target_name();
    Object.defineProperty(exports, "targetName", { enumerable: true, get: function() {
      return target_name_1.targetName;
    } });
    var post_construct_1 = require_post_construct();
    Object.defineProperty(exports, "postConstruct", { enumerable: true, get: function() {
      return post_construct_1.postConstruct;
    } });
    var pre_destroy_1 = require_pre_destroy();
    Object.defineProperty(exports, "preDestroy", { enumerable: true, get: function() {
      return pre_destroy_1.preDestroy;
    } });
    var metadata_reader_1 = require_metadata_reader();
    Object.defineProperty(exports, "MetadataReader", { enumerable: true, get: function() {
      return metadata_reader_1.MetadataReader;
    } });
    var id_1 = require_id();
    Object.defineProperty(exports, "id", { enumerable: true, get: function() {
      return id_1.id;
    } });
    var interfaces_1 = require_interfaces();
    Object.defineProperty(exports, "interfaces", { enumerable: true, get: function() {
      return interfaces_1.interfaces;
    } });
    var decorator_utils_2 = require_decorator_utils();
    Object.defineProperty(exports, "decorate", { enumerable: true, get: function() {
      return decorator_utils_2.decorate;
    } });
    var constraint_helpers_1 = require_constraint_helpers();
    Object.defineProperty(exports, "traverseAncerstors", { enumerable: true, get: function() {
      return constraint_helpers_1.traverseAncerstors;
    } });
    Object.defineProperty(exports, "taggedConstraint", { enumerable: true, get: function() {
      return constraint_helpers_1.taggedConstraint;
    } });
    Object.defineProperty(exports, "namedConstraint", { enumerable: true, get: function() {
      return constraint_helpers_1.namedConstraint;
    } });
    Object.defineProperty(exports, "typeConstraint", { enumerable: true, get: function() {
      return constraint_helpers_1.typeConstraint;
    } });
    var serialization_1 = require_serialization();
    Object.defineProperty(exports, "getServiceIdentifierAsString", { enumerable: true, get: function() {
      return serialization_1.getServiceIdentifierAsString;
    } });
    var binding_utils_1 = require_binding_utils();
    Object.defineProperty(exports, "multiBindToService", { enumerable: true, get: function() {
      return binding_utils_1.multiBindToService;
    } });
  }
});

// ../../node_modules/file-saver/dist/FileSaver.min.js
var require_FileSaver_min = __commonJS({
  "../../node_modules/file-saver/dist/FileSaver.min.js"(exports, module2) {
    (function(a, b) {
      if ("function" == typeof define && define.amd)
        define([], b);
      else if ("undefined" != typeof exports)
        b();
      else {
        b(), a.FileSaver = { exports: {} }.exports;
      }
    })(exports, function() {
      "use strict";
      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
        if (g2 = g2 || f2.name || "download", "string" != typeof f2)
          navigator.msSaveOrOpenBlob(b(f2, h), g2);
        else if (d(f2))
          c(f2, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2)
          return c(b2, d2, e2);
        var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, "undefined" != typeof module2 && (module2.exports = g);
    });
  }
});

// ../../node_modules/localforage/dist/localforage.js
var require_localforage = __commonJS({
  "../../node_modules/localforage/dist/localforage.js"(exports, module2) {
    (function(f) {
      if (typeof exports === "object" && typeof module2 !== "undefined") {
        module2.exports = f();
      } else if (typeof define === "function" && define.amd) {
        define([], f);
      } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          g = this;
        }
        g.localforage = f();
      }
    })(function() {
      var define2, module3, exports2;
      return function e(t, n, r) {
        function s(o2, u) {
          if (!n[o2]) {
            if (!t[o2]) {
              var a = typeof require == "function" && require;
              if (!u && a)
                return a(o2, true);
              if (i)
                return i(o2, true);
              var f = new Error("Cannot find module '" + o2 + "'");
              throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o2] = { exports: {} };
            t[o2][0].call(l.exports, function(e2) {
              var n2 = t[o2][1][e2];
              return s(n2 ? n2 : e2);
            }, l, l.exports, e, t, n, r);
          }
          return n[o2].exports;
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++)
          s(r[o]);
        return s;
      }({ 1: [function(_dereq_, module4, exports3) {
        (function(global2) {
          "use strict";
          var Mutation = global2.MutationObserver || global2.WebKitMutationObserver;
          var scheduleDrain;
          {
            if (Mutation) {
              var called = 0;
              var observer = new Mutation(nextTick);
              var element = global2.document.createTextNode("");
              observer.observe(element, {
                characterData: true
              });
              scheduleDrain = function() {
                element.data = called = ++called % 2;
              };
            } else if (!global2.setImmediate && typeof global2.MessageChannel !== "undefined") {
              var channel = new global2.MessageChannel();
              channel.port1.onmessage = nextTick;
              scheduleDrain = function() {
                channel.port2.postMessage(0);
              };
            } else if ("document" in global2 && "onreadystatechange" in global2.document.createElement("script")) {
              scheduleDrain = function() {
                var scriptEl = global2.document.createElement("script");
                scriptEl.onreadystatechange = function() {
                  nextTick();
                  scriptEl.onreadystatechange = null;
                  scriptEl.parentNode.removeChild(scriptEl);
                  scriptEl = null;
                };
                global2.document.documentElement.appendChild(scriptEl);
              };
            } else {
              scheduleDrain = function() {
                setTimeout(nextTick, 0);
              };
            }
          }
          var draining;
          var queue = [];
          function nextTick() {
            draining = true;
            var i, oldQueue;
            var len = queue.length;
            while (len) {
              oldQueue = queue;
              queue = [];
              i = -1;
              while (++i < len) {
                oldQueue[i]();
              }
              len = queue.length;
            }
            draining = false;
          }
          module4.exports = immediate;
          function immediate(task) {
            if (queue.push(task) === 1 && !draining) {
              scheduleDrain();
            }
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}], 2: [function(_dereq_, module4, exports3) {
        "use strict";
        var immediate = _dereq_(1);
        function INTERNAL() {
        }
        var handlers = {};
        var REJECTED = ["REJECTED"];
        var FULFILLED = ["FULFILLED"];
        var PENDING = ["PENDING"];
        module4.exports = Promise2;
        function Promise2(resolver) {
          if (typeof resolver !== "function") {
            throw new TypeError("resolver must be a function");
          }
          this.state = PENDING;
          this.queue = [];
          this.outcome = void 0;
          if (resolver !== INTERNAL) {
            safelyResolveThenable(this, resolver);
          }
        }
        Promise2.prototype["catch"] = function(onRejected) {
          return this.then(null, onRejected);
        };
        Promise2.prototype.then = function(onFulfilled, onRejected) {
          if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
            return this;
          }
          var promise = new this.constructor(INTERNAL);
          if (this.state !== PENDING) {
            var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
            unwrap(promise, resolver, this.outcome);
          } else {
            this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
          }
          return promise;
        };
        function QueueItem(promise, onFulfilled, onRejected) {
          this.promise = promise;
          if (typeof onFulfilled === "function") {
            this.onFulfilled = onFulfilled;
            this.callFulfilled = this.otherCallFulfilled;
          }
          if (typeof onRejected === "function") {
            this.onRejected = onRejected;
            this.callRejected = this.otherCallRejected;
          }
        }
        QueueItem.prototype.callFulfilled = function(value) {
          handlers.resolve(this.promise, value);
        };
        QueueItem.prototype.otherCallFulfilled = function(value) {
          unwrap(this.promise, this.onFulfilled, value);
        };
        QueueItem.prototype.callRejected = function(value) {
          handlers.reject(this.promise, value);
        };
        QueueItem.prototype.otherCallRejected = function(value) {
          unwrap(this.promise, this.onRejected, value);
        };
        function unwrap(promise, func, value) {
          immediate(function() {
            var returnValue;
            try {
              returnValue = func(value);
            } catch (e) {
              return handlers.reject(promise, e);
            }
            if (returnValue === promise) {
              handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
            } else {
              handlers.resolve(promise, returnValue);
            }
          });
        }
        handlers.resolve = function(self2, value) {
          var result = tryCatch(getThen, value);
          if (result.status === "error") {
            return handlers.reject(self2, result.value);
          }
          var thenable = result.value;
          if (thenable) {
            safelyResolveThenable(self2, thenable);
          } else {
            self2.state = FULFILLED;
            self2.outcome = value;
            var i = -1;
            var len = self2.queue.length;
            while (++i < len) {
              self2.queue[i].callFulfilled(value);
            }
          }
          return self2;
        };
        handlers.reject = function(self2, error) {
          self2.state = REJECTED;
          self2.outcome = error;
          var i = -1;
          var len = self2.queue.length;
          while (++i < len) {
            self2.queue[i].callRejected(error);
          }
          return self2;
        };
        function getThen(obj) {
          var then = obj && obj.then;
          if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
            return function appyThen() {
              then.apply(obj, arguments);
            };
          }
        }
        function safelyResolveThenable(self2, thenable) {
          var called = false;
          function onError(value) {
            if (called) {
              return;
            }
            called = true;
            handlers.reject(self2, value);
          }
          function onSuccess(value) {
            if (called) {
              return;
            }
            called = true;
            handlers.resolve(self2, value);
          }
          function tryToUnwrap() {
            thenable(onSuccess, onError);
          }
          var result = tryCatch(tryToUnwrap);
          if (result.status === "error") {
            onError(result.value);
          }
        }
        function tryCatch(func, value) {
          var out = {};
          try {
            out.value = func(value);
            out.status = "success";
          } catch (e) {
            out.status = "error";
            out.value = e;
          }
          return out;
        }
        Promise2.resolve = resolve;
        function resolve(value) {
          if (value instanceof this) {
            return value;
          }
          return handlers.resolve(new this(INTERNAL), value);
        }
        Promise2.reject = reject;
        function reject(reason) {
          var promise = new this(INTERNAL);
          return handlers.reject(promise, reason);
        }
        Promise2.all = all;
        function all(iterable) {
          var self2 = this;
          if (Object.prototype.toString.call(iterable) !== "[object Array]") {
            return this.reject(new TypeError("must be an array"));
          }
          var len = iterable.length;
          var called = false;
          if (!len) {
            return this.resolve([]);
          }
          var values = new Array(len);
          var resolved = 0;
          var i = -1;
          var promise = new this(INTERNAL);
          while (++i < len) {
            allResolver(iterable[i], i);
          }
          return promise;
          function allResolver(value, i2) {
            self2.resolve(value).then(resolveFromAll, function(error) {
              if (!called) {
                called = true;
                handlers.reject(promise, error);
              }
            });
            function resolveFromAll(outValue) {
              values[i2] = outValue;
              if (++resolved === len && !called) {
                called = true;
                handlers.resolve(promise, values);
              }
            }
          }
        }
        Promise2.race = race;
        function race(iterable) {
          var self2 = this;
          if (Object.prototype.toString.call(iterable) !== "[object Array]") {
            return this.reject(new TypeError("must be an array"));
          }
          var len = iterable.length;
          var called = false;
          if (!len) {
            return this.resolve([]);
          }
          var i = -1;
          var promise = new this(INTERNAL);
          while (++i < len) {
            resolver(iterable[i]);
          }
          return promise;
          function resolver(value) {
            self2.resolve(value).then(function(response) {
              if (!called) {
                called = true;
                handlers.resolve(promise, response);
              }
            }, function(error) {
              if (!called) {
                called = true;
                handlers.reject(promise, error);
              }
            });
          }
        }
      }, { "1": 1 }], 3: [function(_dereq_, module4, exports3) {
        (function(global2) {
          "use strict";
          if (typeof global2.Promise !== "function") {
            global2.Promise = _dereq_(2);
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, { "2": 2 }], 4: [function(_dereq_, module4, exports3) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function getIDB() {
          try {
            if (typeof indexedDB !== "undefined") {
              return indexedDB;
            }
            if (typeof webkitIndexedDB !== "undefined") {
              return webkitIndexedDB;
            }
            if (typeof mozIndexedDB !== "undefined") {
              return mozIndexedDB;
            }
            if (typeof OIndexedDB !== "undefined") {
              return OIndexedDB;
            }
            if (typeof msIndexedDB !== "undefined") {
              return msIndexedDB;
            }
          } catch (e) {
            return;
          }
        }
        var idb = getIDB();
        function isIndexedDBValid() {
          try {
            if (!idb || !idb.open) {
              return false;
            }
            var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
            var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && typeof IDBKeyRange !== "undefined";
          } catch (e) {
            return false;
          }
        }
        function createBlob(parts, properties) {
          parts = parts || [];
          properties = properties || {};
          try {
            return new Blob(parts, properties);
          } catch (e) {
            if (e.name !== "TypeError") {
              throw e;
            }
            var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
            var builder = new Builder();
            for (var i = 0; i < parts.length; i += 1) {
              builder.append(parts[i]);
            }
            return builder.getBlob(properties.type);
          }
        }
        if (typeof Promise === "undefined") {
          _dereq_(3);
        }
        var Promise$1 = Promise;
        function executeCallback(promise, callback) {
          if (callback) {
            promise.then(function(result) {
              callback(null, result);
            }, function(error) {
              callback(error);
            });
          }
        }
        function executeTwoCallbacks(promise, callback, errorCallback) {
          if (typeof callback === "function") {
            promise.then(callback);
          }
          if (typeof errorCallback === "function") {
            promise["catch"](errorCallback);
          }
        }
        function normalizeKey(key2) {
          if (typeof key2 !== "string") {
            console.warn(key2 + " used as a key, but it is not a string.");
            key2 = String(key2);
          }
          return key2;
        }
        function getCallback() {
          if (arguments.length && typeof arguments[arguments.length - 1] === "function") {
            return arguments[arguments.length - 1];
          }
        }
        var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
        var supportsBlobs = void 0;
        var dbContexts = {};
        var toString = Object.prototype.toString;
        var READ_ONLY = "readonly";
        var READ_WRITE = "readwrite";
        function _binStringToArrayBuffer(bin) {
          var length2 = bin.length;
          var buf = new ArrayBuffer(length2);
          var arr = new Uint8Array(buf);
          for (var i = 0; i < length2; i++) {
            arr[i] = bin.charCodeAt(i);
          }
          return buf;
        }
        function _checkBlobSupportWithoutCaching(idb2) {
          return new Promise$1(function(resolve) {
            var txn = idb2.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
            var blob = createBlob([""]);
            txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
            txn.onabort = function(e) {
              e.preventDefault();
              e.stopPropagation();
              resolve(false);
            };
            txn.oncomplete = function() {
              var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
              var matchedEdge = navigator.userAgent.match(/Edge\//);
              resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
            };
          })["catch"](function() {
            return false;
          });
        }
        function _checkBlobSupport(idb2) {
          if (typeof supportsBlobs === "boolean") {
            return Promise$1.resolve(supportsBlobs);
          }
          return _checkBlobSupportWithoutCaching(idb2).then(function(value) {
            supportsBlobs = value;
            return supportsBlobs;
          });
        }
        function _deferReadiness(dbInfo) {
          var dbContext = dbContexts[dbInfo.name];
          var deferredOperation = {};
          deferredOperation.promise = new Promise$1(function(resolve, reject) {
            deferredOperation.resolve = resolve;
            deferredOperation.reject = reject;
          });
          dbContext.deferredOperations.push(deferredOperation);
          if (!dbContext.dbReady) {
            dbContext.dbReady = deferredOperation.promise;
          } else {
            dbContext.dbReady = dbContext.dbReady.then(function() {
              return deferredOperation.promise;
            });
          }
        }
        function _advanceReadiness(dbInfo) {
          var dbContext = dbContexts[dbInfo.name];
          var deferredOperation = dbContext.deferredOperations.pop();
          if (deferredOperation) {
            deferredOperation.resolve();
            return deferredOperation.promise;
          }
        }
        function _rejectReadiness(dbInfo, err) {
          var dbContext = dbContexts[dbInfo.name];
          var deferredOperation = dbContext.deferredOperations.pop();
          if (deferredOperation) {
            deferredOperation.reject(err);
            return deferredOperation.promise;
          }
        }
        function _getConnection(dbInfo, upgradeNeeded) {
          return new Promise$1(function(resolve, reject) {
            dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
            if (dbInfo.db) {
              if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
              } else {
                return resolve(dbInfo.db);
              }
            }
            var dbArgs = [dbInfo.name];
            if (upgradeNeeded) {
              dbArgs.push(dbInfo.version);
            }
            var openreq = idb.open.apply(idb, dbArgs);
            if (upgradeNeeded) {
              openreq.onupgradeneeded = function(e) {
                var db = openreq.result;
                try {
                  db.createObjectStore(dbInfo.storeName);
                  if (e.oldVersion <= 1) {
                    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                  }
                } catch (ex) {
                  if (ex.name === "ConstraintError") {
                    console.warn('The database "' + dbInfo.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                  } else {
                    throw ex;
                  }
                }
              };
            }
            openreq.onerror = function(e) {
              e.preventDefault();
              reject(openreq.error);
            };
            openreq.onsuccess = function() {
              var db = openreq.result;
              db.onversionchange = function(e) {
                e.target.close();
              };
              resolve(db);
              _advanceReadiness(dbInfo);
            };
          });
        }
        function _getOriginalConnection(dbInfo) {
          return _getConnection(dbInfo, false);
        }
        function _getUpgradedConnection(dbInfo) {
          return _getConnection(dbInfo, true);
        }
        function _isUpgradeNeeded(dbInfo, defaultVersion) {
          if (!dbInfo.db) {
            return true;
          }
          var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
          var isDowngrade = dbInfo.version < dbInfo.db.version;
          var isUpgrade = dbInfo.version > dbInfo.db.version;
          if (isDowngrade) {
            if (dbInfo.version !== defaultVersion) {
              console.warn('The database "' + dbInfo.name + `" can't be downgraded from version ` + dbInfo.db.version + " to version " + dbInfo.version + ".");
            }
            dbInfo.version = dbInfo.db.version;
          }
          if (isUpgrade || isNewStore) {
            if (isNewStore) {
              var incVersion = dbInfo.db.version + 1;
              if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
              }
            }
            return true;
          }
          return false;
        }
        function _encodeBlob(blob) {
          return new Promise$1(function(resolve, reject) {
            var reader = new FileReader();
            reader.onerror = reject;
            reader.onloadend = function(e) {
              var base64 = btoa(e.target.result || "");
              resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
              });
            };
            reader.readAsBinaryString(blob);
          });
        }
        function _decodeBlob(encodedBlob) {
          var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
          return createBlob([arrayBuff], { type: encodedBlob.type });
        }
        function _isEncodedBlob(value) {
          return value && value.__local_forage_encoded_blob;
        }
        function _fullyReady(callback) {
          var self2 = this;
          var promise = self2._initReady().then(function() {
            var dbContext = dbContexts[self2._dbInfo.name];
            if (dbContext && dbContext.dbReady) {
              return dbContext.dbReady;
            }
          });
          executeTwoCallbacks(promise, callback, callback);
          return promise;
        }
        function _tryReconnect(dbInfo) {
          _deferReadiness(dbInfo);
          var dbContext = dbContexts[dbInfo.name];
          var forages = dbContext.forages;
          for (var i = 0; i < forages.length; i++) {
            var forage = forages[i];
            if (forage._dbInfo.db) {
              forage._dbInfo.db.close();
              forage._dbInfo.db = null;
            }
          }
          dbInfo.db = null;
          return _getOriginalConnection(dbInfo).then(function(db) {
            dbInfo.db = db;
            if (_isUpgradeNeeded(dbInfo)) {
              return _getUpgradedConnection(dbInfo);
            }
            return db;
          }).then(function(db) {
            dbInfo.db = dbContext.db = db;
            for (var i2 = 0; i2 < forages.length; i2++) {
              forages[i2]._dbInfo.db = db;
            }
          })["catch"](function(err) {
            _rejectReadiness(dbInfo, err);
            throw err;
          });
        }
        function createTransaction(dbInfo, mode, callback, retries) {
          if (retries === void 0) {
            retries = 1;
          }
          try {
            var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
            callback(null, tx);
          } catch (err) {
            if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) {
              return Promise$1.resolve().then(function() {
                if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                  if (dbInfo.db) {
                    dbInfo.version = dbInfo.db.version + 1;
                  }
                  return _getUpgradedConnection(dbInfo);
                }
              }).then(function() {
                return _tryReconnect(dbInfo).then(function() {
                  createTransaction(dbInfo, mode, callback, retries - 1);
                });
              })["catch"](callback);
            }
            callback(err);
          }
        }
        function createDbContext() {
          return {
            forages: [],
            db: null,
            dbReady: null,
            deferredOperations: []
          };
        }
        function _initStorage(options) {
          var self2 = this;
          var dbInfo = {
            db: null
          };
          if (options) {
            for (var i in options) {
              dbInfo[i] = options[i];
            }
          }
          var dbContext = dbContexts[dbInfo.name];
          if (!dbContext) {
            dbContext = createDbContext();
            dbContexts[dbInfo.name] = dbContext;
          }
          dbContext.forages.push(self2);
          if (!self2._initReady) {
            self2._initReady = self2.ready;
            self2.ready = _fullyReady;
          }
          var initPromises = [];
          function ignoreErrors() {
            return Promise$1.resolve();
          }
          for (var j = 0; j < dbContext.forages.length; j++) {
            var forage = dbContext.forages[j];
            if (forage !== self2) {
              initPromises.push(forage._initReady()["catch"](ignoreErrors));
            }
          }
          var forages = dbContext.forages.slice(0);
          return Promise$1.all(initPromises).then(function() {
            dbInfo.db = dbContext.db;
            return _getOriginalConnection(dbInfo);
          }).then(function(db) {
            dbInfo.db = db;
            if (_isUpgradeNeeded(dbInfo, self2._defaultConfig.version)) {
              return _getUpgradedConnection(dbInfo);
            }
            return db;
          }).then(function(db) {
            dbInfo.db = dbContext.db = db;
            self2._dbInfo = dbInfo;
            for (var k = 0; k < forages.length; k++) {
              var forage2 = forages[k];
              if (forage2 !== self2) {
                forage2._dbInfo.db = dbInfo.db;
                forage2._dbInfo.version = dbInfo.version;
              }
            }
          });
        }
        function getItem(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.get(key2);
                  req.onsuccess = function() {
                    var value = req.result;
                    if (value === void 0) {
                      value = null;
                    }
                    if (_isEncodedBlob(value)) {
                      value = _decodeBlob(value);
                    }
                    resolve(value);
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function iterate(iterator, callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.openCursor();
                  var iterationNumber = 1;
                  req.onsuccess = function() {
                    var cursor = req.result;
                    if (cursor) {
                      var value = cursor.value;
                      if (_isEncodedBlob(value)) {
                        value = _decodeBlob(value);
                      }
                      var result = iterator(value, cursor.key, iterationNumber++);
                      if (result !== void 0) {
                        resolve(result);
                      } else {
                        cursor["continue"]();
                      }
                    } else {
                      resolve();
                    }
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function setItem(key2, value, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            var dbInfo;
            self2.ready().then(function() {
              dbInfo = self2._dbInfo;
              if (toString.call(value) === "[object Blob]") {
                return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                  if (blobSupport) {
                    return value;
                  }
                  return _encodeBlob(value);
                });
              }
              return value;
            }).then(function(value2) {
              createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  if (value2 === null) {
                    value2 = void 0;
                  }
                  var req = store.put(value2, key2);
                  transaction.oncomplete = function() {
                    if (value2 === void 0) {
                      value2 = null;
                    }
                    resolve(value2);
                  };
                  transaction.onabort = transaction.onerror = function() {
                    var err2 = req.error ? req.error : req.transaction.error;
                    reject(err2);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function removeItem(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store["delete"](key2);
                  transaction.oncomplete = function() {
                    resolve();
                  };
                  transaction.onerror = function() {
                    reject(req.error);
                  };
                  transaction.onabort = function() {
                    var err2 = req.error ? req.error : req.transaction.error;
                    reject(err2);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function clear(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.clear();
                  transaction.oncomplete = function() {
                    resolve();
                  };
                  transaction.onabort = transaction.onerror = function() {
                    var err2 = req.error ? req.error : req.transaction.error;
                    reject(err2);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function length(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.count();
                  req.onsuccess = function() {
                    resolve(req.result);
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function key(n, callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            if (n < 0) {
              resolve(null);
              return;
            }
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var advanced = false;
                  var req = store.openKeyCursor();
                  req.onsuccess = function() {
                    var cursor = req.result;
                    if (!cursor) {
                      resolve(null);
                      return;
                    }
                    if (n === 0) {
                      resolve(cursor.key);
                    } else {
                      if (!advanced) {
                        advanced = true;
                        cursor.advance(n);
                      } else {
                        resolve(cursor.key);
                      }
                    }
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function keys(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.openKeyCursor();
                  var keys2 = [];
                  req.onsuccess = function() {
                    var cursor = req.result;
                    if (!cursor) {
                      resolve(keys2);
                      return;
                    }
                    keys2.push(cursor.key);
                    cursor["continue"]();
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function dropInstance(options, callback) {
          callback = getCallback.apply(this, arguments);
          var currentConfig = this.config();
          options = typeof options !== "function" && options || {};
          if (!options.name) {
            options.name = options.name || currentConfig.name;
            options.storeName = options.storeName || currentConfig.storeName;
          }
          var self2 = this;
          var promise;
          if (!options.name) {
            promise = Promise$1.reject("Invalid arguments");
          } else {
            var isCurrentDb = options.name === currentConfig.name && self2._dbInfo.db;
            var dbPromise = isCurrentDb ? Promise$1.resolve(self2._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              dbContext.db = db;
              for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
              }
              return db;
            });
            if (!options.storeName) {
              promise = dbPromise.then(function(db) {
                _deferReadiness(options);
                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;
                db.close();
                for (var i = 0; i < forages.length; i++) {
                  var forage = forages[i];
                  forage._dbInfo.db = null;
                }
                var dropDBPromise = new Promise$1(function(resolve, reject) {
                  var req = idb.deleteDatabase(options.name);
                  req.onerror = function() {
                    var db2 = req.result;
                    if (db2) {
                      db2.close();
                    }
                    reject(req.error);
                  };
                  req.onblocked = function() {
                    console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                  };
                  req.onsuccess = function() {
                    var db2 = req.result;
                    if (db2) {
                      db2.close();
                    }
                    resolve(db2);
                  };
                });
                return dropDBPromise.then(function(db2) {
                  dbContext.db = db2;
                  for (var i2 = 0; i2 < forages.length; i2++) {
                    var _forage = forages[i2];
                    _advanceReadiness(_forage._dbInfo);
                  }
                })["catch"](function(err) {
                  (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                  });
                  throw err;
                });
              });
            } else {
              promise = dbPromise.then(function(db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                  return;
                }
                var newVersion = db.version + 1;
                _deferReadiness(options);
                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;
                db.close();
                for (var i = 0; i < forages.length; i++) {
                  var forage = forages[i];
                  forage._dbInfo.db = null;
                  forage._dbInfo.version = newVersion;
                }
                var dropObjectPromise = new Promise$1(function(resolve, reject) {
                  var req = idb.open(options.name, newVersion);
                  req.onerror = function(err) {
                    var db2 = req.result;
                    db2.close();
                    reject(err);
                  };
                  req.onupgradeneeded = function() {
                    var db2 = req.result;
                    db2.deleteObjectStore(options.storeName);
                  };
                  req.onsuccess = function() {
                    var db2 = req.result;
                    db2.close();
                    resolve(db2);
                  };
                });
                return dropObjectPromise.then(function(db2) {
                  dbContext.db = db2;
                  for (var j = 0; j < forages.length; j++) {
                    var _forage2 = forages[j];
                    _forage2._dbInfo.db = db2;
                    _advanceReadiness(_forage2._dbInfo);
                  }
                })["catch"](function(err) {
                  (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                  });
                  throw err;
                });
              });
            }
          }
          executeCallback(promise, callback);
          return promise;
        }
        var asyncStorage = {
          _driver: "asyncStorage",
          _initStorage,
          _support: isIndexedDBValid(),
          iterate,
          getItem,
          setItem,
          removeItem,
          clear,
          length,
          key,
          keys,
          dropInstance
        };
        function isWebSQLValid() {
          return typeof openDatabase === "function";
        }
        var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var BLOB_TYPE_PREFIX = "~~local_forage_type~";
        var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
        var SERIALIZED_MARKER = "__lfsc__:";
        var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
        var TYPE_ARRAYBUFFER = "arbf";
        var TYPE_BLOB = "blob";
        var TYPE_INT8ARRAY = "si08";
        var TYPE_UINT8ARRAY = "ui08";
        var TYPE_UINT8CLAMPEDARRAY = "uic8";
        var TYPE_INT16ARRAY = "si16";
        var TYPE_INT32ARRAY = "si32";
        var TYPE_UINT16ARRAY = "ur16";
        var TYPE_UINT32ARRAY = "ui32";
        var TYPE_FLOAT32ARRAY = "fl32";
        var TYPE_FLOAT64ARRAY = "fl64";
        var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
        var toString$1 = Object.prototype.toString;
        function stringToBuffer(serializedString) {
          var bufferLength = serializedString.length * 0.75;
          var len = serializedString.length;
          var i;
          var p = 0;
          var encoded1, encoded2, encoded3, encoded4;
          if (serializedString[serializedString.length - 1] === "=") {
            bufferLength--;
            if (serializedString[serializedString.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = new ArrayBuffer(bufferLength);
          var bytes = new Uint8Array(buffer);
          for (i = 0; i < len; i += 4) {
            encoded1 = BASE_CHARS.indexOf(serializedString[i]);
            encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
            encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
            encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        }
        function bufferToString(buffer) {
          var bytes = new Uint8Array(buffer);
          var base64String = "";
          var i;
          for (i = 0; i < bytes.length; i += 3) {
            base64String += BASE_CHARS[bytes[i] >> 2];
            base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
            base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
            base64String += BASE_CHARS[bytes[i + 2] & 63];
          }
          if (bytes.length % 3 === 2) {
            base64String = base64String.substring(0, base64String.length - 1) + "=";
          } else if (bytes.length % 3 === 1) {
            base64String = base64String.substring(0, base64String.length - 2) + "==";
          }
          return base64String;
        }
        function serialize(value, callback) {
          var valueType = "";
          if (value) {
            valueType = toString$1.call(value);
          }
          if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
            var buffer;
            var marker = SERIALIZED_MARKER;
            if (value instanceof ArrayBuffer) {
              buffer = value;
              marker += TYPE_ARRAYBUFFER;
            } else {
              buffer = value.buffer;
              if (valueType === "[object Int8Array]") {
                marker += TYPE_INT8ARRAY;
              } else if (valueType === "[object Uint8Array]") {
                marker += TYPE_UINT8ARRAY;
              } else if (valueType === "[object Uint8ClampedArray]") {
                marker += TYPE_UINT8CLAMPEDARRAY;
              } else if (valueType === "[object Int16Array]") {
                marker += TYPE_INT16ARRAY;
              } else if (valueType === "[object Uint16Array]") {
                marker += TYPE_UINT16ARRAY;
              } else if (valueType === "[object Int32Array]") {
                marker += TYPE_INT32ARRAY;
              } else if (valueType === "[object Uint32Array]") {
                marker += TYPE_UINT32ARRAY;
              } else if (valueType === "[object Float32Array]") {
                marker += TYPE_FLOAT32ARRAY;
              } else if (valueType === "[object Float64Array]") {
                marker += TYPE_FLOAT64ARRAY;
              } else {
                callback(new Error("Failed to get type for BinaryArray"));
              }
            }
            callback(marker + bufferToString(buffer));
          } else if (valueType === "[object Blob]") {
            var fileReader = new FileReader();
            fileReader.onload = function() {
              var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
              callback(SERIALIZED_MARKER + TYPE_BLOB + str);
            };
            fileReader.readAsArrayBuffer(value);
          } else {
            try {
              callback(JSON.stringify(value));
            } catch (e) {
              console.error("Couldn't convert value into a JSON string: ", value);
              callback(null, e);
            }
          }
        }
        function deserialize(value) {
          if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
            return JSON.parse(value);
          }
          var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
          var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
          var blobType;
          if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
            var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
            blobType = matcher[1];
            serializedString = serializedString.substring(matcher[0].length);
          }
          var buffer = stringToBuffer(serializedString);
          switch (type) {
            case TYPE_ARRAYBUFFER:
              return buffer;
            case TYPE_BLOB:
              return createBlob([buffer], { type: blobType });
            case TYPE_INT8ARRAY:
              return new Int8Array(buffer);
            case TYPE_UINT8ARRAY:
              return new Uint8Array(buffer);
            case TYPE_UINT8CLAMPEDARRAY:
              return new Uint8ClampedArray(buffer);
            case TYPE_INT16ARRAY:
              return new Int16Array(buffer);
            case TYPE_UINT16ARRAY:
              return new Uint16Array(buffer);
            case TYPE_INT32ARRAY:
              return new Int32Array(buffer);
            case TYPE_UINT32ARRAY:
              return new Uint32Array(buffer);
            case TYPE_FLOAT32ARRAY:
              return new Float32Array(buffer);
            case TYPE_FLOAT64ARRAY:
              return new Float64Array(buffer);
            default:
              throw new Error("Unkown type: " + type);
          }
        }
        var localforageSerializer = {
          serialize,
          deserialize,
          stringToBuffer,
          bufferToString
        };
        function createDbTable(t, dbInfo, callback, errorCallback) {
          t.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
        }
        function _initStorage$1(options) {
          var self2 = this;
          var dbInfo = {
            db: null
          };
          if (options) {
            for (var i in options) {
              dbInfo[i] = typeof options[i] !== "string" ? options[i].toString() : options[i];
            }
          }
          var dbInfoPromise = new Promise$1(function(resolve, reject) {
            try {
              dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
            } catch (e) {
              return reject(e);
            }
            dbInfo.db.transaction(function(t) {
              createDbTable(t, dbInfo, function() {
                self2._dbInfo = dbInfo;
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            }, reject);
          });
          dbInfo.serializer = localforageSerializer;
          return dbInfoPromise;
        }
        function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
          t.executeSql(sqlStatement, args, callback, function(t2, error) {
            if (error.code === error.SYNTAX_ERR) {
              t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [dbInfo.storeName], function(t3, results) {
                if (!results.rows.length) {
                  createDbTable(t3, dbInfo, function() {
                    t3.executeSql(sqlStatement, args, callback, errorCallback);
                  }, errorCallback);
                } else {
                  errorCallback(t3, error);
                }
              }, errorCallback);
            } else {
              errorCallback(t2, error);
            }
          }, errorCallback);
        }
        function getItem$1(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [key2], function(t2, results) {
                  var result = results.rows.length ? results.rows.item(0).value : null;
                  if (result) {
                    result = dbInfo.serializer.deserialize(result);
                  }
                  resolve(result);
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function iterate$1(iterator, callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t2, results) {
                  var rows = results.rows;
                  var length2 = rows.length;
                  for (var i = 0; i < length2; i++) {
                    var item = rows.item(i);
                    var result = item.value;
                    if (result) {
                      result = dbInfo.serializer.deserialize(result);
                    }
                    result = iterator(result, item.key, i + 1);
                    if (result !== void 0) {
                      resolve(result);
                      return;
                    }
                  }
                  resolve();
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function _setItem(key2, value, callback, retriesLeft) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              if (value === void 0) {
                value = null;
              }
              var originalValue = value;
              var dbInfo = self2._dbInfo;
              dbInfo.serializer.serialize(value, function(value2, error) {
                if (error) {
                  reject(error);
                } else {
                  dbInfo.db.transaction(function(t) {
                    tryExecuteSql(t, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " (key, value) VALUES (?, ?)", [key2, value2], function() {
                      resolve(originalValue);
                    }, function(t2, error2) {
                      reject(error2);
                    });
                  }, function(sqlError) {
                    if (sqlError.code === sqlError.QUOTA_ERR) {
                      if (retriesLeft > 0) {
                        resolve(_setItem.apply(self2, [key2, originalValue, callback, retriesLeft - 1]));
                        return;
                      }
                      reject(sqlError);
                    }
                  });
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function setItem$1(key2, value, callback) {
          return _setItem.apply(this, [key2, value, callback, 1]);
        }
        function removeItem$1(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [key2], function() {
                  resolve();
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function clear$1(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                  resolve();
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function length$1(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t2, results) {
                  var result = results.rows.item(0).c;
                  resolve(result);
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function key$1(n, callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [n + 1], function(t2, results) {
                  var result = results.rows.length ? results.rows.item(0).key : null;
                  resolve(result);
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function keys$1(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t2, results) {
                  var keys2 = [];
                  for (var i = 0; i < results.rows.length; i++) {
                    keys2.push(results.rows.item(i).key);
                  }
                  resolve(keys2);
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function getAllStoreNames(db) {
          return new Promise$1(function(resolve, reject) {
            db.transaction(function(t) {
              t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t2, results) {
                var storeNames = [];
                for (var i = 0; i < results.rows.length; i++) {
                  storeNames.push(results.rows.item(i).name);
                }
                resolve({
                  db,
                  storeNames
                });
              }, function(t2, error) {
                reject(error);
              });
            }, function(sqlError) {
              reject(sqlError);
            });
          });
        }
        function dropInstance$1(options, callback) {
          callback = getCallback.apply(this, arguments);
          var currentConfig = this.config();
          options = typeof options !== "function" && options || {};
          if (!options.name) {
            options.name = options.name || currentConfig.name;
            options.storeName = options.storeName || currentConfig.storeName;
          }
          var self2 = this;
          var promise;
          if (!options.name) {
            promise = Promise$1.reject("Invalid arguments");
          } else {
            promise = new Promise$1(function(resolve) {
              var db;
              if (options.name === currentConfig.name) {
                db = self2._dbInfo.db;
              } else {
                db = openDatabase(options.name, "", "", 0);
              }
              if (!options.storeName) {
                resolve(getAllStoreNames(db));
              } else {
                resolve({
                  db,
                  storeNames: [options.storeName]
                });
              }
            }).then(function(operationInfo) {
              return new Promise$1(function(resolve, reject) {
                operationInfo.db.transaction(function(t) {
                  function dropTable(storeName) {
                    return new Promise$1(function(resolve2, reject2) {
                      t.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                        resolve2();
                      }, function(t2, error) {
                        reject2(error);
                      });
                    });
                  }
                  var operations = [];
                  for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                    operations.push(dropTable(operationInfo.storeNames[i]));
                  }
                  Promise$1.all(operations).then(function() {
                    resolve();
                  })["catch"](function(e) {
                    reject(e);
                  });
                }, function(sqlError) {
                  reject(sqlError);
                });
              });
            });
          }
          executeCallback(promise, callback);
          return promise;
        }
        var webSQLStorage = {
          _driver: "webSQLStorage",
          _initStorage: _initStorage$1,
          _support: isWebSQLValid(),
          iterate: iterate$1,
          getItem: getItem$1,
          setItem: setItem$1,
          removeItem: removeItem$1,
          clear: clear$1,
          length: length$1,
          key: key$1,
          keys: keys$1,
          dropInstance: dropInstance$1
        };
        function isLocalStorageValid() {
          try {
            return typeof localStorage !== "undefined" && "setItem" in localStorage && !!localStorage.setItem;
          } catch (e) {
            return false;
          }
        }
        function _getKeyPrefix(options, defaultConfig) {
          var keyPrefix = options.name + "/";
          if (options.storeName !== defaultConfig.storeName) {
            keyPrefix += options.storeName + "/";
          }
          return keyPrefix;
        }
        function checkIfLocalStorageThrows() {
          var localStorageTestKey = "_localforage_support_test";
          try {
            localStorage.setItem(localStorageTestKey, true);
            localStorage.removeItem(localStorageTestKey);
            return false;
          } catch (e) {
            return true;
          }
        }
        function _isLocalStorageUsable() {
          return !checkIfLocalStorageThrows() || localStorage.length > 0;
        }
        function _initStorage$2(options) {
          var self2 = this;
          var dbInfo = {};
          if (options) {
            for (var i in options) {
              dbInfo[i] = options[i];
            }
          }
          dbInfo.keyPrefix = _getKeyPrefix(options, self2._defaultConfig);
          if (!_isLocalStorageUsable()) {
            return Promise$1.reject();
          }
          self2._dbInfo = dbInfo;
          dbInfo.serializer = localforageSerializer;
          return Promise$1.resolve();
        }
        function clear$2(callback) {
          var self2 = this;
          var promise = self2.ready().then(function() {
            var keyPrefix = self2._dbInfo.keyPrefix;
            for (var i = localStorage.length - 1; i >= 0; i--) {
              var key2 = localStorage.key(i);
              if (key2.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key2);
              }
            }
          });
          executeCallback(promise, callback);
          return promise;
        }
        function getItem$2(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            var result = localStorage.getItem(dbInfo.keyPrefix + key2);
            if (result) {
              result = dbInfo.serializer.deserialize(result);
            }
            return result;
          });
          executeCallback(promise, callback);
          return promise;
        }
        function iterate$2(iterator, callback) {
          var self2 = this;
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            var keyPrefix = dbInfo.keyPrefix;
            var keyPrefixLength = keyPrefix.length;
            var length2 = localStorage.length;
            var iterationNumber = 1;
            for (var i = 0; i < length2; i++) {
              var key2 = localStorage.key(i);
              if (key2.indexOf(keyPrefix) !== 0) {
                continue;
              }
              var value = localStorage.getItem(key2);
              if (value) {
                value = dbInfo.serializer.deserialize(value);
              }
              value = iterator(value, key2.substring(keyPrefixLength), iterationNumber++);
              if (value !== void 0) {
                return value;
              }
            }
          });
          executeCallback(promise, callback);
          return promise;
        }
        function key$2(n, callback) {
          var self2 = this;
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            var result;
            try {
              result = localStorage.key(n);
            } catch (error) {
              result = null;
            }
            if (result) {
              result = result.substring(dbInfo.keyPrefix.length);
            }
            return result;
          });
          executeCallback(promise, callback);
          return promise;
        }
        function keys$2(callback) {
          var self2 = this;
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            var length2 = localStorage.length;
            var keys2 = [];
            for (var i = 0; i < length2; i++) {
              var itemKey = localStorage.key(i);
              if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys2.push(itemKey.substring(dbInfo.keyPrefix.length));
              }
            }
            return keys2;
          });
          executeCallback(promise, callback);
          return promise;
        }
        function length$2(callback) {
          var self2 = this;
          var promise = self2.keys().then(function(keys2) {
            return keys2.length;
          });
          executeCallback(promise, callback);
          return promise;
        }
        function removeItem$2(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            localStorage.removeItem(dbInfo.keyPrefix + key2);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function setItem$2(key2, value, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = self2.ready().then(function() {
            if (value === void 0) {
              value = null;
            }
            var originalValue = value;
            return new Promise$1(function(resolve, reject) {
              var dbInfo = self2._dbInfo;
              dbInfo.serializer.serialize(value, function(value2, error) {
                if (error) {
                  reject(error);
                } else {
                  try {
                    localStorage.setItem(dbInfo.keyPrefix + key2, value2);
                    resolve(originalValue);
                  } catch (e) {
                    if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                      reject(e);
                    }
                    reject(e);
                  }
                }
              });
            });
          });
          executeCallback(promise, callback);
          return promise;
        }
        function dropInstance$2(options, callback) {
          callback = getCallback.apply(this, arguments);
          options = typeof options !== "function" && options || {};
          if (!options.name) {
            var currentConfig = this.config();
            options.name = options.name || currentConfig.name;
            options.storeName = options.storeName || currentConfig.storeName;
          }
          var self2 = this;
          var promise;
          if (!options.name) {
            promise = Promise$1.reject("Invalid arguments");
          } else {
            promise = new Promise$1(function(resolve) {
              if (!options.storeName) {
                resolve(options.name + "/");
              } else {
                resolve(_getKeyPrefix(options, self2._defaultConfig));
              }
            }).then(function(keyPrefix) {
              for (var i = localStorage.length - 1; i >= 0; i--) {
                var key2 = localStorage.key(i);
                if (key2.indexOf(keyPrefix) === 0) {
                  localStorage.removeItem(key2);
                }
              }
            });
          }
          executeCallback(promise, callback);
          return promise;
        }
        var localStorageWrapper = {
          _driver: "localStorageWrapper",
          _initStorage: _initStorage$2,
          _support: isLocalStorageValid(),
          iterate: iterate$2,
          getItem: getItem$2,
          setItem: setItem$2,
          removeItem: removeItem$2,
          clear: clear$2,
          length: length$2,
          key: key$2,
          keys: keys$2,
          dropInstance: dropInstance$2
        };
        var sameValue = function sameValue2(x, y) {
          return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
        };
        var includes = function includes2(array, searchElement) {
          var len = array.length;
          var i = 0;
          while (i < len) {
            if (sameValue(array[i], searchElement)) {
              return true;
            }
            i++;
          }
          return false;
        };
        var isArray = Array.isArray || function(arg) {
          return Object.prototype.toString.call(arg) === "[object Array]";
        };
        var DefinedDrivers = {};
        var DriverSupport = {};
        var DefaultDrivers = {
          INDEXEDDB: asyncStorage,
          WEBSQL: webSQLStorage,
          LOCALSTORAGE: localStorageWrapper
        };
        var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
        var OptionalDriverMethods = ["dropInstance"];
        var LibraryMethods = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(OptionalDriverMethods);
        var DefaultConfig = {
          description: "",
          driver: DefaultDriverOrder.slice(),
          name: "localforage",
          size: 4980736,
          storeName: "keyvaluepairs",
          version: 1
        };
        function callWhenReady(localForageInstance, libraryMethod) {
          localForageInstance[libraryMethod] = function() {
            var _args = arguments;
            return localForageInstance.ready().then(function() {
              return localForageInstance[libraryMethod].apply(localForageInstance, _args);
            });
          };
        }
        function extend() {
          for (var i = 1; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                  if (isArray(arg[_key])) {
                    arguments[0][_key] = arg[_key].slice();
                  } else {
                    arguments[0][_key] = arg[_key];
                  }
                }
              }
            }
          }
          return arguments[0];
        }
        var LocalForage = function() {
          function LocalForage2(options) {
            _classCallCheck(this, LocalForage2);
            for (var driverTypeKey in DefaultDrivers) {
              if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;
                if (!DefinedDrivers[driverName]) {
                  this.defineDriver(driver);
                }
              }
            }
            this._defaultConfig = extend({}, DefaultConfig);
            this._config = extend({}, this._defaultConfig, options);
            this._driverSet = null;
            this._initDriver = null;
            this._ready = false;
            this._dbInfo = null;
            this._wrapLibraryMethodsWithReady();
            this.setDriver(this._config.driver)["catch"](function() {
            });
          }
          LocalForage2.prototype.config = function config(options) {
            if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
              if (this._ready) {
                return new Error("Can't call config() after localforage has been used.");
              }
              for (var i in options) {
                if (i === "storeName") {
                  options[i] = options[i].replace(/\W/g, "_");
                }
                if (i === "version" && typeof options[i] !== "number") {
                  return new Error("Database version must be a number.");
                }
                this._config[i] = options[i];
              }
              if ("driver" in options && options.driver) {
                return this.setDriver(this._config.driver);
              }
              return true;
            } else if (typeof options === "string") {
              return this._config[options];
            } else {
              return this._config;
            }
          };
          LocalForage2.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
            var promise = new Promise$1(function(resolve, reject) {
              try {
                var driverName = driverObject._driver;
                var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!driverObject._driver) {
                  reject(complianceError);
                  return;
                }
                var driverMethods = LibraryMethods.concat("_initStorage");
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                  var driverMethodName = driverMethods[i];
                  var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                  if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                    reject(complianceError);
                    return;
                  }
                }
                var configureMissingMethods = function configureMissingMethods2() {
                  var methodNotImplementedFactory = function methodNotImplementedFactory2(methodName) {
                    return function() {
                      var error = new Error("Method " + methodName + " is not implemented by the current driver");
                      var promise2 = Promise$1.reject(error);
                      executeCallback(promise2, arguments[arguments.length - 1]);
                      return promise2;
                    };
                  };
                  for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                    var optionalDriverMethod = OptionalDriverMethods[_i];
                    if (!driverObject[optionalDriverMethod]) {
                      driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                    }
                  }
                };
                configureMissingMethods();
                var setDriverSupport = function setDriverSupport2(support) {
                  if (DefinedDrivers[driverName]) {
                    console.info("Redefining LocalForage driver: " + driverName);
                  }
                  DefinedDrivers[driverName] = driverObject;
                  DriverSupport[driverName] = support;
                  resolve();
                };
                if ("_support" in driverObject) {
                  if (driverObject._support && typeof driverObject._support === "function") {
                    driverObject._support().then(setDriverSupport, reject);
                  } else {
                    setDriverSupport(!!driverObject._support);
                  }
                } else {
                  setDriverSupport(true);
                }
              } catch (e) {
                reject(e);
              }
            });
            executeTwoCallbacks(promise, callback, errorCallback);
            return promise;
          };
          LocalForage2.prototype.driver = function driver() {
            return this._driver || null;
          };
          LocalForage2.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
            var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
            executeTwoCallbacks(getDriverPromise, callback, errorCallback);
            return getDriverPromise;
          };
          LocalForage2.prototype.getSerializer = function getSerializer(callback) {
            var serializerPromise = Promise$1.resolve(localforageSerializer);
            executeTwoCallbacks(serializerPromise, callback);
            return serializerPromise;
          };
          LocalForage2.prototype.ready = function ready(callback) {
            var self2 = this;
            var promise = self2._driverSet.then(function() {
              if (self2._ready === null) {
                self2._ready = self2._initDriver();
              }
              return self2._ready;
            });
            executeTwoCallbacks(promise, callback, callback);
            return promise;
          };
          LocalForage2.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
            var self2 = this;
            if (!isArray(drivers)) {
              drivers = [drivers];
            }
            var supportedDrivers = this._getSupportedDrivers(drivers);
            function setDriverToConfig() {
              self2._config.driver = self2.driver();
            }
            function extendSelfWithDriver(driver) {
              self2._extend(driver);
              setDriverToConfig();
              self2._ready = self2._initStorage(self2._config);
              return self2._ready;
            }
            function initDriver(supportedDrivers2) {
              return function() {
                var currentDriverIndex = 0;
                function driverPromiseLoop() {
                  while (currentDriverIndex < supportedDrivers2.length) {
                    var driverName = supportedDrivers2[currentDriverIndex];
                    currentDriverIndex++;
                    self2._dbInfo = null;
                    self2._ready = null;
                    return self2.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                  }
                  setDriverToConfig();
                  var error = new Error("No available storage method found.");
                  self2._driverSet = Promise$1.reject(error);
                  return self2._driverSet;
                }
                return driverPromiseLoop();
              };
            }
            var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
              return Promise$1.resolve();
            }) : Promise$1.resolve();
            this._driverSet = oldDriverSetDone.then(function() {
              var driverName = supportedDrivers[0];
              self2._dbInfo = null;
              self2._ready = null;
              return self2.getDriver(driverName).then(function(driver) {
                self2._driver = driver._driver;
                setDriverToConfig();
                self2._wrapLibraryMethodsWithReady();
                self2._initDriver = initDriver(supportedDrivers);
              });
            })["catch"](function() {
              setDriverToConfig();
              var error = new Error("No available storage method found.");
              self2._driverSet = Promise$1.reject(error);
              return self2._driverSet;
            });
            executeTwoCallbacks(this._driverSet, callback, errorCallback);
            return this._driverSet;
          };
          LocalForage2.prototype.supports = function supports(driverName) {
            return !!DriverSupport[driverName];
          };
          LocalForage2.prototype._extend = function _extend(libraryMethodsAndProperties) {
            extend(this, libraryMethodsAndProperties);
          };
          LocalForage2.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
            var supportedDrivers = [];
            for (var i = 0, len = drivers.length; i < len; i++) {
              var driverName = drivers[i];
              if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
              }
            }
            return supportedDrivers;
          };
          LocalForage2.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
            for (var i = 0, len = LibraryMethods.length; i < len; i++) {
              callWhenReady(this, LibraryMethods[i]);
            }
          };
          LocalForage2.prototype.createInstance = function createInstance2(options) {
            return new LocalForage2(options);
          };
          return LocalForage2;
        }();
        var localforage_js = new LocalForage();
        module4.exports = localforage_js;
      }, { "3": 3 }] }, {}, [4])(4);
    });
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ANIMATION_FRAME_LOOP: () => ANIMATION_FRAME_LOOP,
  AxBasicModule: () => AxBasicModule,
  Compound1DInput: () => Compound1DInput,
  Compound2DInput: () => Compound2DInput,
  FrameLoop: () => FrameLoop,
  INTERVAL_SET_1S: () => INTERVAL_SET_1S,
  IdService: () => IdService,
  InputService: () => InputService,
  KeyboardKey: () => KeyboardKey,
  MouseAxis: () => MouseAxis,
  MouseButton: () => MouseButton,
  MouseWheel: () => MouseWheel,
  SaveManager: () => SaveManager,
  SerializerEngine: () => SerializerEngine
});
module.exports = __toCommonJS(src_exports);
var import_inversify2 = __toESM(require_inversify(), 1);

// src/services/IdService.ts
function makeid(length) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
var IdService = class {
  makeid(length) {
    return makeid(length);
  }
};

// src/services/loop/PerfLog.ts
var PerfLog = class {
  monitoringStart = () => {
  };
  monitoringEnd = () => {
  };
  perfLog = {};
  enablePerfLog(activated) {
    if (activated) {
      let start = performance.now();
      let sampleNumber = 0;
      this.monitoringStart = (loopName) => {
        start = performance.now();
      };
      this.monitoringEnd = (loopName) => {
        let time = performance.now() - start;
        if (!this.perfLog[loopName]) {
          this.perfLog[loopName] = { totalTimeMs: 0, sampleNumber: 0, meanTimeMs: 0 };
        }
        if (this.perfLog[loopName].sampleNumber > 1e3) {
          this.perfLog[loopName] = { totalTimeMs: 0, sampleNumber: 0, meanTimeMs: 0 };
        }
        this.perfLog[loopName].totalTimeMs += time;
        this.perfLog[loopName].sampleNumber++;
        this.perfLog[loopName].meanTimeMs = this.perfLog[loopName].totalTimeMs / this.perfLog[loopName].sampleNumber;
      };
    } else {
      this.monitoringStart = () => {
      };
      this.monitoringEnd = () => {
      };
    }
  }
  getPerfLog() {
    return this.perfLog;
  }
};

// src/services/loop/AnimationFrameLoop.ts
var AnimationFrameLoop = class extends PerfLog {
  constructor(type = AnimationFrameLoop.name) {
    super();
    this.type = type;
  }
  getType() {
    return this.type;
  }
  loops = {};
  prevTime = 0;
  start() {
    let type = this.getType();
    const animate = (t) => {
      try {
        this.monitoringStart(type);
        const delta = t - this.prevTime;
        this.prevTime = t;
        requestAnimationFrame(animate);
        for (const callback in this.loops) {
          this.monitoringStart(this.loops[callback].loopName);
          this.loops[callback].iterationCallback(delta);
          this.monitoringEnd(this.loops[callback].loopName);
        }
        this.monitoringEnd(type);
      } catch (e) {
        console.error(e);
      }
    };
    requestAnimationFrame(animate);
  }
  removeLoop(loopName) {
    delete this.loops[loopName];
    this.monitoringStart(loopName);
    this.monitoringEnd(loopName);
  }
  addLoop(loopName, iterationCallback) {
    let instanceName = loopName + "-" + makeid(5);
    this.loops[instanceName] = {
      loopName,
      iterationCallback
    };
    return () => {
      this.removeLoop(loopName);
    };
  }
};

// src/services/loop/SetIntervalLoop.ts
var SetIntervalLoop = class extends PerfLog {
  constructor(intervalMs, type = SetIntervalLoop.name) {
    super();
    this.intervalMs = intervalMs;
    this.type = type;
  }
  loops = {};
  prevTime = 0;
  getType() {
    return this.type;
  }
  start() {
    let loopName = this.getType();
    const animate = (t) => {
      this.monitoringStart(loopName);
      const delta = t - this.prevTime;
      this.prevTime = t;
      for (const callbackKey in this.loops) {
        this.monitoringStart(this.loops[callbackKey].loopName);
        this.loops[callbackKey].iterationCallback(delta);
        this.monitoringEnd(this.loops[callbackKey].loopName);
      }
      this.monitoringEnd(loopName);
    };
    setInterval(animate, this.intervalMs);
  }
  removeLoop(loopName) {
    delete this.loops[loopName];
    this.monitoringStart(loopName);
    this.monitoringEnd(loopName);
  }
  addLoop(loopName, iterationCallback) {
    let instanceName = loopName;
    if (this.loops[instanceName]) {
      instanceName = loopName + "-" + makeid(5);
    }
    this.loops[instanceName] = {
      loopName,
      iterationCallback
    };
    return () => {
      this.removeLoop(loopName);
    };
  }
};

// src/services/loop/FrameLoop.ts
var ANIMATION_FRAME_LOOP = "ANIMATION_FRAME_LOOP";
var INTERVAL_SET_1S = "INTERVAL_SET_1S";
var FrameLoop = class {
  constructor() {
    this.loopType[ANIMATION_FRAME_LOOP] = new AnimationFrameLoop(ANIMATION_FRAME_LOOP);
    this.loopType[INTERVAL_SET_1S] = new SetIntervalLoop(1e3, INTERVAL_SET_1S);
  }
  loopType = {};
  start() {
    for (const loopTypeKey in this.loopType) {
      this.loopType[loopTypeKey].start();
    }
  }
  enablePerfLog(activated) {
    for (const loopTypeKey in this.loopType) {
      this.loopType[loopTypeKey].enablePerfLog(activated);
    }
  }
  getPerfLog() {
    let ret = {};
    for (const loopTypeKey in this.loopType) {
      ret = { ...ret, ...this.loopType[loopTypeKey].getPerfLog() };
    }
    return ret;
  }
  addLoop(loopName, iterationCallback, loopType = ANIMATION_FRAME_LOOP) {
    return this.loopType[loopType].addLoop(loopName, iterationCallback);
  }
  getType() {
    return FrameLoop.name;
  }
};

// src/services/input/InputService.ts
var KeyboardKey = class {
  constructor(keyCode, type = "any") {
    this.keyCode = keyCode;
    this.type = type;
  }
  getType() {
    return "keyboard";
  }
};
var MouseButton = class {
  constructor(btn = "Mouse-0", type = "any") {
    this.btn = btn;
    this.type = type;
  }
  getType() {
    return "mouse_click";
  }
};
var MouseWheel = class {
  constructor(type = "any") {
    this.type = type;
  }
  getType() {
    return "mouse_wheel";
  }
};
var MouseAxis = class {
  constructor(type = "x") {
    this.type = type;
  }
  getType() {
    return "mouse_axis";
  }
};
var Compound1DInput = class {
  constructor(eventXPositive, eventXNegative) {
    this.eventXPositive = eventXPositive;
    this.eventXNegative = eventXNegative;
  }
  getType() {
    return "compound_1d";
  }
};
var Compound2DInput = class {
  constructor(eventX, eventY) {
    this.eventX = eventX;
    this.eventY = eventY;
  }
  getType() {
    return "compound_2d";
  }
};
var MouseManager = class {
  constructor(parent) {
    this.parent = parent;
  }
  setupListeners(el) {
    el.addEventListener("mousedown", (evt) => {
      this.checkMouseEvent(evt, "mousedown");
    });
    el.addEventListener("mouseup", (evt) => {
      this.checkMouseEvent(evt, "mouseup");
    });
    el.addEventListener("mousemove", (evt) => {
      for (const action in this.parent.inputList) {
        for (const keyListElementElement of this.parent.inputList[action]) {
          if (keyListElementElement.getType() === "mouse_axis") {
            let input = keyListElementElement;
            if (input.type === "x") {
              this.parent.notifyScalar(action, {
                sourceEvt: evt,
                actionName: action,
                state: evt.offsetX
              });
            }
            if (input.type === "y") {
              this.parent.notifyScalar(action, {
                sourceEvt: evt,
                actionName: action,
                state: evt.offsetY
              });
            }
          }
        }
      }
    });
    el.addEventListener("wheel", (evt) => {
      for (const action in this.parent.inputList) {
        for (const keyListElementElement of this.parent.inputList[action]) {
          if (keyListElementElement.getType() === "mouse_wheel") {
            let input = keyListElementElement;
            if (input.type === "up") {
              throw new Error("not yet implemented");
            }
            if (input.type === "down") {
              throw new Error("not yet implemented");
            }
            this.parent.notifyScalar(action, {
              sourceEvt: evt,
              actionName: action,
              state: evt.deltaY
            });
          }
        }
      }
    });
  }
  checkMouseEvent(evt, state) {
    let key = "Mouse-" + evt.button;
    for (const action in this.parent.inputList) {
      for (const keyListElementElement of this.parent.inputList[action]) {
        if (keyListElementElement.getType() === "mouse_click") {
          let input = keyListElementElement;
          if (input.btn == key && (state === input.type || input.type === "any")) {
            this.parent.notifyBoolean(action, {
              sourceEvt: evt,
              actionName: action,
              state: state === "mousedown"
            });
            this.parent.notifyScalar(action, {
              sourceEvt: evt,
              actionName: action,
              state: state === "mousedown" ? 1 : 0
            });
          }
        }
      }
    }
  }
};
var KeyboardManager = class {
  constructor(parent) {
    this.parent = parent;
  }
  setupListeners() {
    window.addEventListener("keyup", (evt) => {
      this.checkKeyBoardEvent(evt);
    });
    window.addEventListener("keydown", (evt) => {
      this.checkKeyBoardEvent(evt);
    });
  }
  checkKeyBoardEvent(evt) {
    if (evt.repeat == false) {
      for (const action in this.parent.inputList) {
        for (const keyListElementElement of this.parent.inputList[action]) {
          if (keyListElementElement.getType() === "keyboard") {
            let input = keyListElementElement;
            if (input.keyCode == evt.code && (evt.type === input.type || input.type === "any")) {
              this.parent.notifyBoolean(action, {
                sourceEvt: evt,
                actionName: action,
                state: evt.type === "keydown"
              });
              this.parent.notifyScalar(action, {
                sourceEvt: evt,
                actionName: action,
                state: evt.type === "keydown" ? 1 : 0
              });
            }
          }
        }
      }
    }
  }
};
var CompoundManager = class {
  constructor(parent) {
    this.parent = parent;
  }
  notifyActionOn(id) {
    for (const action in this.parent.inputList) {
      for (const keyListElementElement of this.parent.inputList[action]) {
        if (keyListElementElement.getType() === "compound_1d") {
          let input = keyListElementElement;
          if (input.eventXPositive === id || input.eventXNegative === id) {
            let eventXPos = this.parent.getScalarEvent(input.eventXPositive);
            let eventXNeg = this.parent.getScalarEvent(input.eventXNegative);
            if (eventXPos && eventXNeg) {
              this.parent.notifyScalar(action, {
                sourceEvt: { eventXPos, eventXNeg },
                actionName: action,
                state: eventXPos.state - eventXNeg.state
              });
            }
          }
        }
        if (keyListElementElement.getType() === "compound_2d") {
          let input = keyListElementElement;
          if (input.eventX === id || input.eventY === id) {
            let eventX = this.parent.getScalarEvent(input.eventX);
            let eventY = this.parent.getScalarEvent(input.eventY);
            if (eventX && eventY) {
              this.parent.notify2DScalar(action, {
                sourceEvt: { eventX, eventY },
                actionName: action,
                state: {
                  x: eventX.state,
                  y: eventY.state
                }
              });
            }
          }
        }
      }
    }
  }
};
var InputService = class {
  inputList = {};
  booleanCallbackList = {};
  scalarCallbackList = {};
  scalar2DCallbackList = {};
  booleanState = {};
  scalarState = {};
  scalar2DState = {};
  compoundManager;
  keyboardManager;
  mouseManager;
  constructor() {
    this.keyboardManager = new KeyboardManager(this);
    this.mouseManager = new MouseManager(this);
    this.compoundManager = new CompoundManager(this);
  }
  initializeCaptureElement(el = null) {
    if (!el) {
      el = window.document.body;
    }
    this.keyboardManager.setupListeners();
    this.mouseManager.setupListeners(el);
  }
  notifyScalar(id, event) {
    this.scalarState[id] = event;
    if (this.scalarCallbackList[id]) {
      for (const scalarCallback of this.scalarCallbackList[id]) {
        scalarCallback(event);
      }
    }
    this.compoundManager.notifyActionOn(id);
  }
  notify2DScalar(id, event) {
    this.scalar2DState[id] = event;
    if (this.scalarCallbackList[id]) {
      for (const scalarCallback of this.scalar2DCallbackList[id]) {
        scalarCallback(event);
      }
    }
  }
  notifyBoolean(id, event) {
    this.booleanState[id] = event;
    if (this.booleanCallbackList[id]) {
      for (const boolCallBack of this.booleanCallbackList[id]) {
        boolCallBack(event);
      }
    }
  }
  register(actionName, inputObject) {
    if (!this.inputList[actionName]) {
      this.inputList[actionName] = [];
    }
    this.inputList[actionName].push(inputObject);
  }
  setBooleanValue(actionName, state) {
    this.booleanState[actionName].state;
    this.notifyBoolean(actionName, {
      state,
      actionName,
      sourceEvt: null
    });
  }
  getBooleanValue(actionName) {
    if (this.booleanState[actionName]) {
      return this.booleanState[actionName].state;
    } else {
      return false;
    }
  }
  getScalarValue(actionName) {
    if (this.scalarState[actionName]) {
      return this.scalarState[actionName].state;
    } else {
      return 0;
    }
  }
  getScalar2DValue(actionName) {
    if (this.scalar2DState[actionName]) {
      return this.scalar2DState[actionName].state;
    } else {
      return { x: 0, y: 0 };
    }
  }
  getBooleanEvent(actionName) {
    return this.booleanState[actionName];
  }
  getScalarEvent(actionName) {
    return this.scalarState[actionName];
  }
  getScalar2DEvent(actionName) {
    return this.scalar2DState[actionName];
  }
  register2DScalarEvent(actionName, callback) {
    return this.registerGeneric(this.scalar2DCallbackList, actionName, callback);
  }
  registerScalarEvent(actionName, callback) {
    return this.registerGeneric(this.scalarCallbackList, actionName, callback);
  }
  registerBooleanEvent(actionName, callback) {
    return this.registerGeneric(this.booleanCallbackList, actionName, callback);
  }
  registerGeneric(list, actionName, callback) {
    if (!list[actionName]) {
      list[actionName] = [];
    }
    list[actionName].push(callback);
    return () => {
      list[actionName].filter((value) => {
        return value != callback;
      });
    };
  }
  getType() {
    return InputService.name;
  }
};

// src/services/serializer/DefaultSerializer.ts
var DefaultSerializer = class {
  specialListException = [
    ArrayBuffer,
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    BigInt64Array,
    BigUint64Array
  ];
  deserialize(data, reviver) {
    if (data === void 0)
      return void 0;
    if (data === null)
      return null;
    if (typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
      return data;
    }
    for (const specialListExceptionElement of this.specialListException) {
      if (data instanceof Object && data instanceof specialListExceptionElement) {
        return data;
      }
    }
    if (data["serializeID"]) {
      throw new Error();
    }
    if (data instanceof Array) {
      for (let i = 0; i < data.length; i++) {
        data[i] = reviver(data[i]);
      }
      return data;
    } else if (data instanceof Object) {
      let ret = {};
      for (const dataKey in data) {
        ret[dataKey] = reviver(data[dataKey]);
      }
      return ret;
    } else {
      return data;
    }
  }
  serialize(data, replacer) {
    if (data === void 0)
      return void 0;
    if (data === null)
      return null;
    if (typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
      return data;
    }
    for (const specialListExceptionElement of this.specialListException) {
      if (data instanceof Object && data instanceof specialListExceptionElement) {
        return data;
      }
    }
    if (data["serializeID"]) {
      throw new Error();
    }
    if (data instanceof Array) {
      for (let i = 0; i < data.length; i++) {
        data[i] = replacer(data[i]);
      }
      return data;
    } else if (data instanceof Object) {
      let ret = {};
      for (const dataKey in data) {
        ret[dataKey] = replacer(data[dataKey]);
      }
      return ret;
    } else {
      return JSON.parse(JSON.stringify(data));
    }
  }
  getSerializeID() {
    return null;
  }
};

// src/services/serializer/SerializerEngine.ts
var SerializerEngine = class {
  seriList = {};
  defaultSeri = new DefaultSerializer();
  registerDataType(objSerializer) {
    this.seriList[objSerializer.getSerializeID()] = objSerializer;
  }
  reviver = (subobj) => {
    return this.deserialize(subobj);
  };
  replacer = (subobj) => {
    return this.serialise(subobj);
  };
  serializeToString(obj) {
    return JSON.stringify(this.serialise(obj));
  }
  deserializeFromString(obj) {
    return this.deserialize(JSON.parse(obj));
  }
  serialise(obj) {
    let seri = this.defaultSeri;
    if (obj && (obj.serializeID && this.seriList[obj.serializeID])) {
      seri = this.seriList[obj.serializeID];
    }
    return seri.serialize(obj, this.replacer);
  }
  deserialize(data) {
    let seri = this.defaultSeri;
    if (data && (data.serializeID && this.seriList[data.serializeID])) {
      seri = this.seriList[data.serializeID];
    }
    return seri.deserialize(data, this.reviver);
  }
  getType() {
    return SerializerEngine.name;
  }
};

// src/services/save/SaveManager.ts
var import_file_saver = __toESM(require_FileSaver_min(), 1);

// src/services/save/LocalForageSave.ts
var localforage = __toESM(require_localforage(), 1);
var LocalForageSave = class {
  localforage;
  constructor() {
    this.localforage = localforage.createInstance({
      name: "saves"
    });
  }
  async getItem(key) {
    return this.localforage.getItem(key);
  }
  async setItem(key, value) {
    return this.localforage.setItem(key, value);
  }
  async removeItem(key) {
    return this.localforage.removeItem(key);
  }
  async keys() {
    return this.localforage.keys();
  }
};

// src/services/save/SaveManager.ts
var import_inversify = __toESM(require_inversify(), 1);
var SAVE_PREFIX = "SAVE-";
var LAST_SAVE = "1-LAST-SAVE";
var LATEST_VERSION = "1.0.0";
var SaveManager = class {
  constructor(serializeEngine) {
    this.serializeEngine = serializeEngine;
  }
  dataToSave = [];
  saveApi = new LocalForageSave();
  getType() {
    return SaveManager.name;
  }
  registerSerializable(key, data) {
    if (!data)
      throw new Error();
    this.dataToSave.push({ key, data });
  }
  async isCreateNew() {
    return !await this.saveApi.getItem(LAST_SAVE);
  }
  async saveAsFile(id) {
    const item = await this.saveApi.getItem(SAVE_PREFIX + id);
    const json = JSON.parse(item);
    const blob = new Blob([item], { type: "application/json" });
    (0, import_file_saver.saveAs)(blob, json.name + ".json");
  }
  loadAsFile() {
    throw new Error("unimplemented");
  }
  async load(id) {
    await this.setLastSave(id);
    let item = this.serializeEngine.deserializeFromString(await this.saveApi.getItem(SAVE_PREFIX + id));
    if (item.version !== LATEST_VERSION) {
      throw new Error("Incompatibility between save version: " + item.version + "/" + LATEST_VERSION);
    }
    console.log("loading save : " + item.name + " / " + item.id);
    for (const data of this.dataToSave) {
      let storedData = item.zgame[data.key];
      data.data.load(storedData);
    }
  }
  async save(id = null, name = "New Save") {
    await this.setLastSave(id);
    let save;
    if (!id) {
      id = makeid(10);
      save = {
        version: LATEST_VERSION,
        serializeID: null,
        name,
        id,
        date: new Date().toISOString(),
        zgame: {}
      };
    } else {
      const previous = JSON.parse(await this.saveApi.getItem(SAVE_PREFIX + id));
      save = {
        version: LATEST_VERSION,
        serializeID: null,
        name: previous.name,
        id,
        date: new Date().toISOString(),
        zgame: {}
      };
    }
    for (const data of this.dataToSave) {
      save.zgame[data.key] = data.data.save();
    }
    await this.saveApi.setItem(SAVE_PREFIX + id, this.serializeEngine.serializeToString(save));
    return id;
  }
  async listSaves() {
    let ret = [];
    for (const key of await this.saveApi.keys()) {
      if (key.startsWith(SAVE_PREFIX)) {
        let save = JSON.parse(await this.saveApi.getItem(key));
        ret.push({
          id: save.id,
          name: save.name,
          date: new Date(save.date)
        });
      }
    }
    ret.sort(function(a, b) {
      return b.date - a.date;
    });
    return ret;
  }
  async fetchLastSave() {
    if (!await this.saveApi.getItem(LAST_SAVE)) {
      const saveMetas = await this.listSaves();
      if (saveMetas.length > 0) {
        await this.setLastSave(saveMetas[0].id);
      } else {
        await this.setLastSave(await this.save(null));
      }
    }
  }
  async saveLast() {
    await this.fetchLastSave();
    await this.save(await this.saveApi.getItem(LAST_SAVE));
  }
  async loadLast() {
    await this.fetchLastSave();
    const saveId = await this.saveApi.getItem(LAST_SAVE);
    await this.load(saveId);
  }
  async setLastSave(id) {
    await this.saveApi.setItem(LAST_SAVE, id);
  }
  async delete(id) {
    console.log("delete : " + SAVE_PREFIX + id);
    await this.saveApi.removeItem(SAVE_PREFIX + id);
  }
};
SaveManager = __decorateClass([
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(SerializerEngine.name))
], SaveManager);

// src/Identifier.ts
var IdService2 = Symbol.for("IdService");

// src/index.ts
var AxBasicModule = class {
  getModule() {
    console.log("AxBasicModule installed 2");
    return new import_inversify2.ContainerModule((bind) => {
      bind(IdService.name).toDynamicValue(() => {
        return new IdService();
      }).inSingletonScope();
      bind(FrameLoop.name).toDynamicValue(() => {
        return new FrameLoop();
      }).inSingletonScope();
      bind(InputService.name).toDynamicValue(() => {
        return new InputService();
      }).inSingletonScope();
      bind(SerializerEngine.name).toDynamicValue(() => {
        return new SerializerEngine();
      }).inSingletonScope();
      bind(SaveManager.name).to(SaveManager).inSingletonScope();
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ANIMATION_FRAME_LOOP,
  AxBasicModule,
  Compound1DInput,
  Compound2DInput,
  FrameLoop,
  INTERVAL_SET_1S,
  IdService,
  InputService,
  KeyboardKey,
  MouseAxis,
  MouseButton,
  MouseWheel,
  SaveManager,
  SerializerEngine
});
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
//# sourceMappingURL=index.cjs.map
