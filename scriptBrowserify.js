(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
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
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // Retrieve the text value of an array of DOM nodes
          text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i++]) {
                ret += jQuery.text(node);
              }
            }
            if (nodeType === 1 || nodeType === 11) {
              return elem.textContent;
            }
            if (nodeType === 9) {
              return elem.documentElement.textContent;
            }
            if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery.contains = function(a, b) {
          var bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
          // IE doesn't have `contains` on SVG.
          (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push;
        (function() {
          var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push2.apply(
              arr = slice.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: function(target, els) {
                pushNative.apply(target, slice.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice.call(arguments, 1));
              }
            };
          }
          function find(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          push2.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext != context || !support.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = jQuery.escapeSelector(nid);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document3);
            matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert(function(el) {
              documentElement2.appendChild(el).id = jQuery.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
            });
            support.disconnectedMatch = assert(function(el) {
              return matches.call(el, "*");
            });
            support.scope = assert(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else {
                return context.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return jQuery.contains(context, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                splice.call(results, duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
          };
          Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              CHILD: function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    find.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  find.error(match[0]);
                }
                return match;
              },
              PSEUDO: function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr.CHILD.test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        cache = outerCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf.call(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              not: markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector) {
                return function(elem) {
                  return find(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // https://www.w3.org/TR/selectors/#lang-pseudo
              lang: markFunction(function(lang2) {
                if (!ridentifier.test(lang2 || "")) {
                  find.error("unsupported lang: " + lang2);
                }
                lang2 = lang2.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang2 || elemLang.indexOf(lang2 + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              target: function(elem) {
                var hash = window2.location && window2.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              // Element/input types
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr;
                return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear
                // with elem.type === "text"
                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              // Position-in-collection
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2;
                if (argument < 0) {
                  i2 = argument + length;
                } else if (argument > length) {
                  i2 = length;
                } else {
                  i2 = argument;
                }
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          }
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      if (skip && nodeName(elem, skip)) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        outerCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              find(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                );
                matcher(matcherIn, matcherOut, context, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      push2.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          }
          function select(selector, context, results, seed) {
            var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          }
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          setDocument();
          support.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery.find = find;
          jQuery.expr[":"] = jQuery.expr.pseudos;
          jQuery.unique = jQuery.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.tokenize = tokenize;
          find.escape = jQuery.escapeSelector;
          find.getText = jQuery.text;
          find.isXML = jQuery.isXMLDoc;
          find.selectors = jQuery.expr;
          find.support = jQuery.support;
          find.uniqueSort = jQuery.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery.contains(self[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery)
            );
          }
          return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to jQuery#find
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(
                            e,
                            process.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getErrorHook) {
                        process.error = jQuery.Deferred.getErrorHook();
                      } else if (jQuery.Deferred.getStackHook) {
                        process.error = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, asyncError) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error.message,
              error.stack,
              asyncError
            );
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event.stopPropagation();
                event.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
              event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event.isSimulated = true;
              handle(nativeEvent);
              if (event.target === event.currentTarget) {
                handle(event);
              }
            } else {
              jQuery.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery.event.fix(nativeEvent)
              );
            }
          }
          jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
          jQuery.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "box-sizing:content-box;border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self = jQuery(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self = jQuery(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery.globalEval(text);
              return text;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = (function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        })();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
          }
        });
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // node_modules/pryv/src/lib/buildSearchParams.js
  var require_buildSearchParams = __commonJS({
    "node_modules/pryv/src/lib/buildSearchParams.js"(exports, module) {
      function buildSearchParams(params) {
        const searchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
          if (Array.isArray(value)) {
            if (value.some((item) => item !== null && typeof item === "object")) {
              searchParams.append(key, JSON.stringify(value));
            } else {
              for (const item of value) {
                searchParams.append(key, item);
              }
            }
          } else if (value !== null && typeof value === "object") {
            searchParams.append(key, JSON.stringify(value));
          } else if (value !== void 0 && value !== null) {
            searchParams.append(key, value);
          }
        }
        return searchParams.toString();
      }
      module.exports = buildSearchParams;
    }
  });

  // node_modules/pryv/src/utils.js
  var require_utils = __commonJS({
    "node_modules/pryv/src/utils.js"(exports, module) {
      var regexAPIandToken = /(.+):\/\/(.+)@(.+)/gm;
      var regexSchemaAndPath = /(.+):\/\/(.+)/gm;
      var buildSearchParams = require_buildSearchParams();
      var utils = module.exports = {
        /**
         * Perform a GET request and parse JSON response
         * @param {string} url - URL to fetch
         * @param {Object} [queryParams={}] - Query parameters to append
         * @param {Object} [headers={}] - Additional headers
         * @returns {Promise<{response: Response, body: Object}>} Promise resolving to response and parsed body
         */
        async fetchGet(url, queryParams = {}, headers = {}) {
          let queryStr = "";
          if (queryParams && Object.keys(queryParams).length > 0) {
            queryStr = "?" + buildSearchParams(queryParams);
          }
          const myHeaders = Object.assign({ Accept: "application/json" }, headers);
          const response = await fetch(url + queryStr, { headers: myHeaders });
          const body = await response.json();
          return { response, body };
        },
        /**
         * Perform a GET request and return text response
         * @param {string} url - URL to fetch
         * @param {Object} [headers={}] - Additional headers
         * @returns {Promise<{response: Response, text: string}>} Promise resolving to response and text body
         */
        async fetchGetText(url, headers = {}) {
          const myHeaders = Object.assign({ Accept: "text/html" }, headers);
          const response = await fetch(url, { headers: myHeaders });
          const text = await response.text();
          return { response, text };
        },
        /**
         * Perform a POST request with JSON data
         * @param {string} url - URL to post to
         * @param {Object} [data] - Data to send as JSON
         * @param {Object} [headers={}] - Additional headers
         * @returns {Promise<{response: Response, body: Object}>} Promise resolving to response and parsed body
         */
        async fetchPost(url, data, headers = {}) {
          const myHeaders = Object.assign({
            Accept: "application/json",
            "Content-Type": "application/json"
          }, headers);
          const response = await fetch(url, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data)
          });
          const body = await response.json();
          return { response, body };
        },
        /**
         * Returns true is run in a browser
         * @memberof pryv.utils
         * @returns {boolean}
         */
        isBrowser: function() {
          return typeof window !== "undefined" && typeof document !== "undefined";
        },
        /**
         * From a APIEndpoint URL, return an object (TokenAndAPI) with two properties
         * @memberof pryv.utils
         * @param {APIEndpoint} apiEndpoint
         * @returns {TokenAndEndpoint}
         */
        extractTokenAndAPIEndpoint: function(apiEndpoint) {
          regexAPIandToken.lastIndex = 0;
          const res = regexAPIandToken.exec(apiEndpoint);
          if (res !== null) {
            if (!res[3].endsWith("/")) {
              res[3] += "/";
            }
            return { endpoint: res[1] + "://" + res[3], token: res[2] };
          }
          regexSchemaAndPath.lastIndex = 0;
          const res2 = regexSchemaAndPath.exec(apiEndpoint);
          if (res2 === null) {
            throw new Error("Cannot find endpoint, invalid URL format");
          }
          if (!res2[2].endsWith("/")) {
            res2[2] += "/";
          }
          return { endpoint: res2[1] + "://" + res2[2], token: null };
        },
        /**
         * Get a APIEndpoint URL from a TokenAndAPI object
         * @memberof pryv.utils
         * @param {TokenAndEndpoint} tokenAndAPI
         * @returns {APIEndpoint}
         */
        buildAPIEndpoint: function(tokenAndAPI) {
          if (!tokenAndAPI.token) {
            let res2 = tokenAndAPI.endpoint + "";
            if (!tokenAndAPI.endpoint.endsWith("/")) {
              res2 += "/";
            }
            return res2;
          }
          regexSchemaAndPath.lastIndex = 0;
          const res = regexSchemaAndPath.exec(tokenAndAPI.endpoint);
          if (!res[2].endsWith("/")) {
            res[2] += "/";
          }
          return res[1] + "://" + tokenAndAPI.token + "@" + res[2];
        },
        /**
         * Decompose a Pryv apiEndpoint into `{ token, username, host }` using
         * the platform's `service.info.api` URL template to invert whichever
         * username placement the platform uses (subdomain vs path-style).
         *
         * Pryv apiEndpoints follow one of two URL shapes (the difference is
         * platform-defined, encoded in `service.info.api`):
         *
         *   subdomain  template `https://{username}.<domain>/`
         *              endpoint `https://<token>@<username>.<domain>/`
         *   path-style template `https://<host>/{username}/`
         *              endpoint `https://<token>@<host>/<username>/`
         *
         * Returns the **canonical platform host** (no `<username>.` subdomain
         * prefix in subdomain mode) — the identity cross-account features
         * (e.g. CMC counterparty slugs) key on, regardless of which user the
         * endpoint belongs to.
         *
         * `token` and `username` are null when the endpoint carries no token /
         * when the endpoint shape doesn't match the template; `host` is
         * best-effort in that case.
         *
         * @memberof pryv.utils
         * @param {APIEndpoint} apiEndpoint  e.g. 'https://t0k3n@alice.pryv.me/'
         * @param {string} serviceInfoApi    e.g. 'https://{username}.pryv.me/'
         *                                   from /service/info → field `api`.
         * @returns {DecomposedAPIEndpoint}
         *
         * @example
         *   const conn = new pryv.Connection(apiEndpoint);
         *   const info = await conn.service.info();
         *   const me = pryv.utils.decomposeAPIEndpoint(apiEndpoint, info.api);
         *   // → { token: 't0k3n', username: 'alice', host: 'pryv.me' }
         */
        decomposeAPIEndpoint: function(apiEndpoint, serviceInfoApi) {
          const { token, endpoint } = utils.extractTokenAndAPIEndpoint(apiEndpoint);
          const tplIdx = serviceInfoApi.indexOf("{username}");
          if (tplIdx < 0) {
            let host2 = "";
            try {
              host2 = new URL(endpoint).host;
            } catch (_e) {
            }
            return { token, username: null, host: host2 };
          }
          const tplPrefix = serviceInfoApi.slice(0, tplIdx);
          const tplSuffix = serviceInfoApi.slice(tplIdx + "{username}".length);
          if (!endpoint.startsWith(tplPrefix) || !endpoint.endsWith(tplSuffix)) {
            let host2 = "";
            try {
              host2 = new URL(endpoint).host;
            } catch (_e) {
            }
            return { token, username: null, host: host2 };
          }
          const username = endpoint.slice(tplPrefix.length, endpoint.length - tplSuffix.length);
          const isSubdomainTemplate = /:\/\/$/.test(tplPrefix);
          let host;
          if (isSubdomainTemplate) {
            host = tplSuffix.replace(/^\.+/, "").replace(/\/+$/, "");
          } else {
            try {
              host = new URL(tplPrefix).host;
            } catch (_e) {
              host = "";
            }
          }
          return { token, username, host };
        },
        /**
         * Check if the browser is running on a mobile device or tablet
         * @memberof pryv.utils
         * @param {string|Navigator} [navigator] - Navigator object or user agent string (for testing)
         * @returns {boolean} True if mobile or tablet
         */
        browserIsMobileOrTablet: function(navigator2) {
          if (navigator2 == null) {
            return false;
          }
          let check = false;
          (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
          })(navigator2.userAgent || navigator2.vendor || navigator2.opera);
          return check;
        },
        /**
         * Remove the one-shot Pryv auth-completion query parameters from a URL,
         * keeping any long-lived `pryv*` params intact.
         *
         * Both casings are stripped:
         *   - Modern lowercase: `pryvKey`, `pryvPoll`
         *   - Legacy capital-Y: `prYv<anything>` (anything starting with `prYv`)
         *
         * `pryv*` params that are NOT in the modern allowlist (e.g.
         * `pryvServiceInfoUrl`, `pryvApiEndpoint`) are intentionally preserved —
         * they are not one-shot.
         *
         * @memberof pryv.utils
         * @param {string} url - URL to clean
         * @returns {string} URL without the one-shot auth-completion params
         */
        cleanURLFromPrYvParams: function(url) {
          const LEGACY = /[?#&]+prYv([^=&]+)=([^&]*)/g;
          const MODERN = /[?#&]+(pryvKey|pryvPoll)=([^&]*)/g;
          return url.replace(LEGACY, "").replace(MODERN, "");
        },
        /**
         * Parse a wire-format access reference into `{ base, serial }`
         * (Pryv.io ≥ 2.0.0-pre.X). Accepts both bare cuid (`"abc123"` →
         * `{ base: 'abc123', serial: null }`) and composite (`"abc123:3"` →
         * `{ base: 'abc123', serial: 3 }`). Throws on malformed input.
         * Apply this to `access.id`, `access.createdBy`,
         * `access.modifiedBy`, and `streamIds` entries of the form
         * `access-<base>:<serial>` from audit events.
         * @memberof pryv.utils
         * @param {string} ref - Access reference string
         * @returns {{ base: string, serial: number | null }}
         */
        parseAccessRef: function(ref) {
          if (typeof ref !== "string" || ref.length === 0) {
            throw new Error("parseAccessRef: expected a non-empty string, got " + JSON.stringify(ref));
          }
          const colonIdx = ref.indexOf(":");
          if (colonIdx === -1) return { base: ref, serial: null };
          const base = ref.slice(0, colonIdx);
          const tail = ref.slice(colonIdx + 1);
          if (base.length === 0) {
            throw new Error("parseAccessRef: empty base in " + JSON.stringify(ref));
          }
          const serial = Number(tail);
          if (!Number.isInteger(serial) || serial < 1) {
            throw new Error("parseAccessRef: serial must be a positive integer, got " + JSON.stringify(tail));
          }
          return { base, serial };
        },
        /**
         * Render an `{ base, serial }` pair back to the wire format. Bare
         * cuid when serial is null/undefined; `<base>:<serial>` otherwise.
         * Mostly used to construct the composite id when calling
         * `connection.api()` for `accesses.update` / `accesses.delete`.
         * @memberof pryv.utils
         * @param {{ base: string, serial?: number | null }} ref
         * @returns {string}
         */
        serializeAccessRef: function(ref) {
          if (ref == null || typeof ref.base !== "string" || ref.base.length === 0) {
            throw new Error("serializeAccessRef: ref.base must be a non-empty string");
          }
          if (ref.serial == null) return ref.base;
          if (!Number.isInteger(ref.serial) || ref.serial < 1) {
            throw new Error("serializeAccessRef: serial must be a positive integer, got " + JSON.stringify(ref.serial));
          }
          return ref.base + ":" + ref.serial;
        },
        /**
         * Whether a value is an http(s) URL: the only kind ever navigated to or
         * opened, and loaded from the sign-in button HTML of a service.
         * @memberof pryv.utils
         * @private
         * @param {*} value
         * @param {string} [base] - base URL, for a relative value (default: the page)
         * @returns {boolean}
         */
        isHttpUrl: function(value, base = globalThis.location?.href) {
          if (typeof value !== "string" || value === "") return false;
          try {
            return ["http:", "https:"].includes(new URL(value, base || void 0).protocol);
          } catch (e) {
            return false;
          }
        },
        /**
         * Extract query parameters from a URL
         * @memberof pryv.utils
         * @param {string} url - URL to parse
         * @returns {Object.<string, string>} Object with key-value pairs of query parameters
         */
        getQueryParamsFromURL: function(url) {
          const vars = {};
          const QUERY_REGEXP = /[?#&]+([^=&]+)=([^&]*)/g;
          url.replace(
            QUERY_REGEXP,
            // @ts-ignore - replace callback is used for side effects
            function(m, key, value) {
              try {
                vars[key] = decodeURIComponent(value);
              } catch (e) {
                vars[key] = value;
              }
            }
          );
          return vars;
        }
      };
      utils.extractTokenAndApiEndpoint = utils.extractTokenAndAPIEndpoint;
      utils.buildPryvApiEndpoint = utils.buildAPIEndpoint;
    }
  });

  // node_modules/pryv/src/lib/PryvError.js
  var require_PryvError = __commonJS({
    "node_modules/pryv/src/lib/PryvError.js"(exports, module) {
      var PryvError = class _PryvError extends Error {
        /**
         * @param {string} message - Error message
         * @param {Error|Object} [innerObject] - Underlying error or value
         */
        constructor(message, innerObject) {
          super(message);
          this.name = "PryvError";
          this.innerObject = innerObject;
          this.id = void 0;
          this.status = void 0;
          this.response = void 0;
          Object.defineProperty(this, "innerObject", { enumerable: false });
          Object.defineProperty(this, "response", { enumerable: false });
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, _PryvError);
          }
        }
        /**
         * Build a PryvError from a fetch Response and its parsed JSON body.
         * Pulls `id` and `message` from `body.error` when present (Pryv API shape).
         *
         * @param {Response} response - The fetch Response object
         * @param {Object} [body] - Parsed JSON body
         * @returns {PryvError}
         */
        static fromApiResponse(response, body) {
          const apiErr = body && body.error;
          const message = apiErr && apiErr.message || `Pryv API error (HTTP ${response.status})`;
          const err = new _PryvError(message);
          err.id = apiErr && apiErr.id;
          err.status = response.status;
          err.response = { body, status: response.status };
          return err;
        }
      };
      module.exports = PryvError;
    }
  });

  // node_modules/pryv/src/lib/MfaRequiredError.js
  var require_MfaRequiredError = __commonJS({
    "node_modules/pryv/src/lib/MfaRequiredError.js"(exports, module) {
      var PryvError = require_PryvError();
      var MfaRequiredError = class _MfaRequiredError extends PryvError {
        /**
         * @param {string} mfaToken - The token returned by the API (use with mfa.challenge / mfa.verify)
         * @param {Response} response - The fetch Response object
         * @param {Object} [body] - Parsed JSON body
         */
        constructor(mfaToken, response, body) {
          const apiErr = body && body.error;
          const message = apiErr && apiErr.message || "MFA required";
          super(message);
          this.name = "MfaRequiredError";
          this.mfaToken = mfaToken;
          this.method = body && body.mfaMethod;
          this.id = apiErr && apiErr.id || "mfa-required";
          this.status = response && response.status;
          this.response = { body, status: response && response.status };
          Object.defineProperty(this, "mfaToken", { enumerable: false });
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, _MfaRequiredError);
          }
        }
      };
      module.exports = MfaRequiredError;
    }
  });

  // node_modules/pryv/src/SharedSecrets.js
  var require_SharedSecrets = __commonJS({
    "node_modules/pryv/src/SharedSecrets.js"(exports, module) {
      function parseKey(key) {
        if (typeof key !== "string") return null;
        const parts = key.split(".");
        if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) return null;
        return { id: parts[0], randomPart: parts[1] };
      }
      function base64url(bytes) {
        let binary = "";
        for (const b of new Uint8Array(bytes)) binary += String.fromCharCode(b);
        const b64 = typeof btoa === "function" ? btoa(binary) : Buffer.from(binary, "binary").toString("base64");
        return b64.replace(/=+$/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function toHex(buffer) {
        return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
      }
      function subtle() {
        const c = globalThis.crypto;
        if (c == null || c.subtle == null) {
          throw new Error("Web Crypto is unavailable \u2014 Node 20+ or a secure browser context is required.");
        }
        return c.subtle;
      }
      function randomPart() {
        const bytes = new Uint8Array(24);
        globalThis.crypto.getRandomValues(bytes);
        return base64url(bytes);
      }
      async function sha256Hex(value) {
        const data = new TextEncoder().encode(value);
        return toHex(await subtle().digest("SHA-256", data));
      }
      async function hmacSha256Hex(verifierSecret, message) {
        const enc = new TextEncoder();
        const cryptoKey = await subtle().importKey(
          "raw",
          enc.encode(verifierSecret),
          { name: "HMAC", hash: "SHA-256" },
          false,
          ["sign"]
        );
        return toHex(await subtle().sign("HMAC", cryptoKey, enc.encode(message)));
      }
      async function create(connection, params) {
        const { signature, ...rest } = params || {};
        const body = { ...rest };
        let key = null;
        if (signature != null && signature.type === "hmac-sha256") {
          const random = randomPart();
          body.keyHash = await sha256Hex(random);
          body.signature = {
            type: "hmac-sha256",
            value: await hmacSha256Hex(signature.verifierSecret, random)
          };
          const hmacRes = (
            /** @type {any} */
            await connection.post("shared-secrets", body)
          );
          return { ...hmacRes.sharedSecret, key: hmacRes.sharedSecret.id + "." + random };
        }
        if (signature != null) body.signature = signature;
        const res = (
          /** @type {any} */
          await connection.post("shared-secrets", body)
        );
        key = res.sharedSecret.key;
        return { ...res.sharedSecret, key };
      }
      async function retrieve(apiEndpoint, key, options = {}) {
        const body = { key };
        if (options.passphrase != null) {
          body.signature = { type: "secret", payload: options.passphrase };
        } else if (options.verifierSecret != null) {
          const parsed2 = parseKey(key);
          if (parsed2 == null) throw new Error("Malformed shared-secret key.");
          body.signature = {
            type: "hmac-sha256",
            payload: await hmacSha256Hex(options.verifierSecret, parsed2.randomPart)
          };
        }
        const base = apiEndpoint.endsWith("/") ? apiEndpoint : apiEndpoint + "/";
        const res = await fetch(base + "shared-secrets/retrieve", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        const parsed = await res.json();
        if (!res.ok) {
          const err = (
            /** @type {Error & { id?: string, returnUrl?: string }} */
            new Error(parsed?.error?.message || "Shared secret unavailable.")
          );
          err.id = parsed?.error?.data?.id || parsed?.error?.id;
          err.returnUrl = parsed?.error?.data?.returnUrl;
          throw err;
        }
        return parsed;
      }
      async function status(connection, key) {
        const res = await connection.post("shared-secrets/status", { key });
        return res.sharedSecret;
      }
      module.exports = {
        create,
        retrieve,
        status,
        parseKey,
        hmacSha256Hex,
        sha256Hex
      };
    }
  });

  // node_modules/pryv/src/lib/handoff.js
  var require_handoff = __commonJS({
    "node_modules/pryv/src/lib/handoff.js"(exports, module) {
      var utils = require_utils();
      var SharedSecrets = require_SharedSecrets();
      var PryvError = require_PryvError();
      var TTL_MS = 10 * 60 * 1e3;
      var cache = /* @__PURE__ */ new Map();
      var inflight = /* @__PURE__ */ new Map();
      function cacheGet(key) {
        if (key == null) return null;
        const entry = cache.get(key);
        if (entry == null) return null;
        if (Date.now() > entry.expiresAt) {
          cache.delete(key);
          return null;
        }
        return entry;
      }
      function sweep() {
        const now = Date.now();
        for (const [k, entry] of cache) {
          if (now > entry.expiresAt) cache.delete(k);
        }
      }
      function cacheSet(key, value) {
        if (key == null) return;
        sweep();
        cache.set(key, Object.assign({}, value, { expiresAt: Date.now() + TTL_MS }));
      }
      function cacheClear(key) {
        if (arguments.length === 0) cache.clear();
        else cache.delete(key);
      }
      function isHandoffBody(body) {
        return body != null && body.handoff != null && body.handoff.type === "shared-secret" && typeof body.handoff.key === "string";
      }
      async function resolveHandoff(pollBody, cacheKey) {
        const cached = cacheGet(cacheKey);
        if (cached != null) return cached;
        if (cacheKey != null && inflight.has(cacheKey)) return inflight.get(cacheKey);
        const promise = doResolve(pollBody, cacheKey);
        if (cacheKey == null) return promise;
        inflight.set(cacheKey, promise);
        try {
          return await promise;
        } finally {
          inflight.delete(cacheKey);
        }
      }
      async function doResolve(pollBody, cacheKey) {
        let result;
        try {
          result = await SharedSecrets.retrieve(pollBody.apiEndpoint, pollBody.handoff.key);
        } catch (err) {
          const pe = new PryvError(
            "Credential hand-off could not be retrieved (" + (err && (err.id || err.message)) + "); restart the auth request.",
            err
          );
          pe.id = "credential-handoff-failed";
          throw pe;
        }
        const secret = result && result.secret || {};
        if (typeof secret.token !== "string" || typeof secret.apiEndpoint !== "string") {
          const pe = new PryvError("Credential hand-off returned an incomplete secret.");
          pe.id = "credential-handoff-failed";
          throw pe;
        }
        const { endpoint } = utils.extractTokenAndAPIEndpoint(secret.apiEndpoint);
        const apiEndpoint = utils.buildAPIEndpoint({ endpoint, token: secret.token });
        const entry = { apiEndpoint, username: secret.username, token: secret.token };
        cacheSet(cacheKey, entry);
        return entry;
      }
      module.exports = { resolveHandoff, isHandoffBody, cacheGet, cacheSet, cacheClear };
    }
  });

  // node_modules/pryv/src/lib/pollUrls.js
  var require_pollUrls = __commonJS({
    "node_modules/pryv/src/lib/pollUrls.js"(exports, module) {
      var MAX_ENTRIES = 1e3;
      var TTL_MS = 60 * 60 * 1e3;
      var pollUrls = /* @__PURE__ */ new Map();
      function sweep() {
        const now = Date.now();
        for (const [key, entry] of pollUrls) {
          if (now > entry.expiresAt) pollUrls.delete(key);
        }
      }
      function remember(key, pollUrl) {
        if (typeof key !== "string" || key === "" || typeof pollUrl !== "string" || !/^https?:\/\//.test(pollUrl)) return;
        sweep();
        pollUrls.delete(key);
        pollUrls.set(key, { pollUrl, expiresAt: Date.now() + TTL_MS });
        while (pollUrls.size > MAX_ENTRIES) pollUrls.delete(pollUrls.keys().next().value);
      }
      function lookup(key) {
        const entry = pollUrls.get(key);
        if (entry == null) return null;
        if (Date.now() > entry.expiresAt) {
          pollUrls.delete(key);
          return null;
        }
        return entry.pollUrl;
      }
      function clear() {
        pollUrls.clear();
      }
      module.exports = { remember, lookup, clear, MAX_ENTRIES, TTL_MS };
    }
  });

  // node_modules/pryv/src/ServiceAssets.js
  var require_ServiceAssets = __commonJS({
    "node_modules/pryv/src/ServiceAssets.js"(exports, module) {
      var utils = require_utils();
      var ServiceAssets = class _ServiceAssets {
        /**
         * Private => use ServiceAssets.setup()
         * @param {Object} assets The content of service/info.assets properties.
         * @param {string} assetsURL Url point to assets of the service of a Pryv platform
         */
        constructor(assets, assetsURL) {
          this._assets = assets;
          this._assetsURL = assetsURL;
        }
        /**
         * Load Assets definition from URL
         * @param {string} pryvServiceAssetsSourceUrl - URL to the assets definition JSON
         * @returns {Promise<ServiceAssets>} Promise resolving to ServiceAssets instance
         */
        static async setup(pryvServiceAssetsSourceUrl) {
          const { body } = await utils.fetchGet(pryvServiceAssetsSourceUrl);
          return new _ServiceAssets(body, pryvServiceAssetsSourceUrl);
        }
        /**
         * get a value from path separated by `:`
         * example of key `lib-js:buttonSignIn`
         * @param {string} [keyPath] if null, will return the all assets
         */
        get(keyPath) {
          let result = Object.assign({}, this._assets);
          if (keyPath) {
            keyPath.split(":").forEach((key) => {
              result = result[key];
              if (typeof result === "undefined") return result;
            });
          }
          return result;
        }
        /**
         * get an Url from path separated by `:`
         * identical to doing assets.relativeURL(assets.get(keyPath))
         * example of key `lib-js:buttonSignIn`
         * @param {string} [keyPath] if null, will return the all assets
         */
        getUrl(keyPath) {
          const url = this.get(keyPath);
          if (typeof url !== "string") {
            throw new Error(`Unexpected value for ${keyPath}: ${url}`);
          }
          return this.relativeURL(url);
        }
        /**
         * get relativeUrl
         */
        relativeURL(url) {
          return relPathToAbs(this._assets.baseUrl || this._assetsURL, url);
        }
        // ---------------- Default service resources
        /**
         * Set all defaults Favicon, CSS
         */
        async setAllDefaults() {
          this.setFavicon();
          await this.loadCSS();
        }
        /**
         * Set service Favicon to Web Page
         */
        setFavicon() {
          const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
          link.type = "image/x-icon";
          link.rel = "shortcut icon";
          link.href = this.relativeURL(this._assets.favicon.default.url);
          document.getElementsByTagName("head")[0].appendChild(link);
        }
        /**
         * Set default service CSS
         */
        async loadCSS() {
          loadCSS(this.relativeURL(this._assets.css.default.url));
        }
        // ---- Login
        /**
         * Load CSS for Login button
         */
        async loginButtonLoadCSS() {
          loadCSS(this.relativeURL(this._assets["lib-js"].buttonSignIn.css));
        }
        /**
         * Get HTML for Login Button, as the service sends it: untrusted, never write it
         * with `innerHTML` (the default button rebuilds it from an allow-list)
         * @returns {Promise<string>} Promise resolving to HTML string
         */
        async loginButtonGetHTML() {
          const { text } = await utils.fetchGetText(this.relativeURL(this._assets["lib-js"].buttonSignIn.html));
          return text;
        }
        /**
         * Get Messages strings for Login Button
         * @returns {Promise<Object.<string, string>>} Promise resolving to messages object
         */
        async loginButtonGetMessages() {
          const { body } = await utils.fetchGet(this.relativeURL(this._assets["lib-js"].buttonSignIn.messages));
          return body;
        }
      };
      module.exports = ServiceAssets;
      function loadCSS(url) {
        if (document.getElementById(url) != null) return;
        const head = document.getElementsByTagName("head")[0];
        const link = document.createElement("link");
        link.id = url;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        link.media = "all";
        head.appendChild(link);
      }
      function relPathToAbs(baseUrlString, sRelPath) {
        var baseLocation = location;
        if (baseUrlString) {
          baseLocation = document.createElement("a");
          baseLocation.href = baseUrlString;
        }
        var nUpLn, sDir = "", sPath = baseLocation.pathname.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, "$1"));
        for (var nEnd, nStart = 0; nEnd = sPath.indexOf("/../", nStart), nEnd > -1; nStart = nEnd + nUpLn) {
          nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))[0].length;
          sDir = (sDir + sPath.substring(nStart, nEnd)).replace(
            new RegExp("(?:\\/+[^\\/]*){0," + (nUpLn - 1) / 3 + "}$"),
            "/"
          );
        }
        const portStr = baseLocation.port ? ":" + baseLocation.port : "";
        return baseLocation.protocol + "//" + baseLocation.hostname + portStr + sDir + sPath.substr(nStart);
      }
    }
  });

  // node_modules/pryv/src/lib/json-parser.js
  var require_json_parser = __commonJS({
    "node_modules/pryv/src/lib/json-parser.js"(exports, module) {
      var EVENTMARKERS = ['"events":[', '"eventDeletions":['];
      module.exports = function(foreachEvent, includeDeletions) {
        let eventOrEventDeletions = 0;
        let buffer = "";
        let body = null;
        let depth = 0;
        let inString = false;
        let skipNextOne = false;
        let cursorPos = 0;
        let eventsCount = 0;
        let eventDeletionsCount = 0;
        const states = {
          A_BEFORE_EVENTS: 0,
          B_IN_EVENTS: 1,
          D_AFTER_EVENTS: 2
        };
        let state = states.A_BEFORE_EVENTS;
        function processBuffer() {
          switch (state) {
            case states.A_BEFORE_EVENTS:
              searchStartEvents();
              break;
            case states.B_IN_EVENTS:
              processEvents();
              break;
            default:
              afterEvents();
              break;
          }
        }
        function searchStartEvents() {
          const n = buffer.indexOf(EVENTMARKERS[eventOrEventDeletions]);
          if (n > 0) {
            if (eventOrEventDeletions === 0) {
              body = buffer.substring(0, n);
            }
            buffer = buffer.substr(n + EVENTMARKERS[eventOrEventDeletions].length);
            state = states.B_IN_EVENTS;
            processEvents();
          }
        }
        function processEvents() {
          while (cursorPos < buffer.length && state === states.B_IN_EVENTS) {
            if (skipNextOne) {
              skipNextOne = false;
              cursorPos++;
              continue;
            }
            switch (buffer.charCodeAt(cursorPos)) {
              case 93:
                if (depth === 0) {
                  if (cursorPos !== 0) {
                    throw new Error("Found trailling ] in mid-course");
                  }
                  if (eventOrEventDeletions === 0 && includeDeletions) {
                    state = states.A_BEFORE_EVENTS;
                    eventOrEventDeletions = 1;
                    return;
                  } else {
                    state = states.D_AFTER_EVENTS;
                    let eventsOrDeletionMsg = "";
                    if (eventOrEventDeletions === 1) {
                      eventsOrDeletionMsg = '"eventDeletionsCount":' + eventDeletionsCount + ",";
                    }
                    buffer = eventsOrDeletionMsg + '"eventsCount":' + eventsCount + buffer.substr(1);
                  }
                }
                break;
              case 92:
                skipNextOne = true;
                break;
              case 123:
                if (!inString) depth++;
                break;
              case 34:
                inString = !inString;
                break;
              case 125:
                if (!inString) depth--;
                if (depth === 0) {
                  const ignoreComa = buffer.charCodeAt(0) === 44 ? 1 : 0;
                  const eventStr = buffer.substring(ignoreComa, cursorPos + 1);
                  if (eventOrEventDeletions === 0) {
                    eventsCount++;
                  } else {
                    eventDeletionsCount++;
                  }
                  buffer = buffer.substr(cursorPos + 1);
                  addEvent(eventStr);
                  cursorPos = -1;
                }
                break;
            }
            cursorPos++;
          }
        }
        function afterEvents() {
          body += buffer;
          buffer = "";
        }
        return function(res, fn) {
          res.setEncoding("utf8");
          res.on("data", (chunk) => {
            buffer += chunk;
            processBuffer();
          });
          res.on("end", () => {
            let err;
            let bodyObject;
            try {
              res.text = body + buffer;
              bodyObject = res.text && JSON.parse(res.text);
            } catch (err_) {
              err = err_;
              err.rawResponse = res.text || null;
              err.statusCode = res.statusCode;
            } finally {
              fn(err, bodyObject);
            }
          });
        };
        function addEvent(strEvent) {
          foreachEvent(JSON.parse(strEvent));
        }
      };
    }
  });

  // node_modules/pryv/src/lib/getEventStreamed.js
  var require_getEventStreamed = __commonJS({
    "node_modules/pryv/src/lib/getEventStreamed.js"(exports, module) {
      var buildSearchParams = require_buildSearchParams();
      module.exports = getEventStreamed;
      async function getEventStreamed(conn, queryParam, parser) {
        const parserSettings = {
          ondata: null,
          onend: null,
          encoding: "utf8"
        };
        const fakeRes = {
          setEncoding: function(encoding) {
            parserSettings.encoding = encoding;
          },
          // will receive 'data' and 'end' callbacks
          on: function(key, f) {
            parserSettings["on" + key] = f;
          }
        };
        let errResult;
        let bodyObjectResult;
        parser(fakeRes, function(err, bodyObject) {
          errResult = err;
          bodyObjectResult = bodyObject;
        });
        const url = new URL(conn.endpoint + "events");
        url.search = buildSearchParams(queryParam);
        const fetchParams = { method: "GET", headers: { Accept: "application/json" } };
        if (conn.token) fetchParams.headers.Authorization = conn.token;
        const response = await fetch(url, fetchParams);
        const reader = response.body.getReader();
        while (true) {
          const { done, value } = await reader.read();
          parserSettings.ondata(new TextDecoder(parserSettings.encoding).decode(value));
          if (done) {
            parserSettings.onend();
            break;
          }
        }
        if (errResult) {
          throw new Error(errResult?.message + " " + errResult?.rawResponse);
        }
        const result = {
          text: fakeRes.text,
          // from the parser
          body: bodyObjectResult,
          // from the parser
          statusCode: response.status,
          headers: {}
        };
        for (const pair of response.headers.entries()) {
          result.headers[pair[0]] = pair[1];
        }
        return result;
      }
    }
  });

  // node_modules/pryv/src/lib/StaleAccessIdError.js
  var require_StaleAccessIdError = __commonJS({
    "node_modules/pryv/src/lib/StaleAccessIdError.js"(exports, module) {
      var PryvError = require_PryvError();
      var StaleAccessIdError = class _StaleAccessIdError extends PryvError {
        /**
         * @param {string} message
         * @param {{ provided?: string, currentSerial?: number | null }} data
         */
        constructor(message, data) {
          super(message);
          this.name = "StaleAccessIdError";
          this.data = data || {};
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, _StaleAccessIdError);
          }
        }
      };
      module.exports = StaleAccessIdError;
    }
  });

  // node_modules/pryv/src/lib/resolveDotPath.js
  var require_resolveDotPath = __commonJS({
    "node_modules/pryv/src/lib/resolveDotPath.js"(exports, module) {
      function resolveDotPath(root, path) {
        if (path === "$") return root;
        let current = root;
        for (const segment of path.split(".")) {
          if (current == null || typeof current !== "object" || Array.isArray(current)) return void 0;
          if (!Object.prototype.hasOwnProperty.call(current, segment)) return void 0;
          current = current[segment];
        }
        return current;
      }
      module.exports = resolveDotPath;
    }
  });

  // node-stub:fs
  var require_fs = __commonJS({
    "node-stub:fs"(exports, module) {
      module.exports = {};
    }
  });

  // node-stub:path
  var require_path = __commonJS({
    "node-stub:path"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/pryv/src/Connection.js
  var require_Connection = __commonJS({
    "node_modules/pryv/src/Connection.js"(exports, module) {
      var utils = require_utils();
      var jsonParser = require_json_parser();
      var libGetEventStreamed = require_getEventStreamed();
      var PryvError = require_PryvError();
      var StaleAccessIdError = require_StaleAccessIdError();
      var buildSearchParams = require_buildSearchParams();
      var resolveDotPath = require_resolveDotPath();
      var Connection = class {
        constructor(apiEndpoint, service) {
          const { token, endpoint } = utils.extractTokenAndAPIEndpoint(apiEndpoint);
          this.token = token;
          this.endpoint = endpoint;
          this.options = {};
          this.options.chunkSize = 1e3;
          this._deltaTime = { value: 0, weight: 0 };
          if (service && !(service instanceof Service)) {
            throw new Error("Invalid service param");
          }
          this._service = service;
        }
        /**
         * get pryv.Service object relative to this connection
         * @readonly
         * @property {pryv.Service} service
         */
        get service() {
          if (this._service) return this._service;
          this._service = new Service(this.endpoint + "service/info");
          return this._service;
        }
        /**
         * Get username for this connection.
         * It's async as it's constructed from access info.
         * @returns {Promise<string>} Promise resolving to the username
         * @throws {PryvError} If the server answers access-info with an error, as
         *   `accessInfo()` does (server's error on `innerObject`)
         */
        async username() {
          const accessInfo = await this.accessInfo();
          return accessInfo.user.username;
        }
        /**
         * Get access info for this connection.
         *
         * Memoized per-Connection: the first successful call fetches from the
         * server and caches the result; subsequent calls return the cached copy
         * in O(1). Pass `forceRefresh: true` to invalidate the cache and fetch a
         * fresh copy from the server — used internally by `connection.socket` to
         * react to `accessUpdated` server-push events.
         *
         * Only a successful answer is cached: a failure is never cached, so the
         * next call asks the server again, and a failed refresh leaves any prior
         * cached value intact.
         *
         * @param {boolean} [forceRefresh=false] - bypass + refresh the cache
         * @returns {Promise<AccessInfo>} Promise resolving to the access info
         * @throws {PryvError} If the server answers with an error (for example
         *   `invalid-access-token` for an unknown, expired or deleted token), as
         *   `apiOne()` does: the message names the method and the server's error id
         *   and message, the server's error is on `innerObject`.
         */
        async accessInfo(forceRefresh = false) {
          if (!forceRefresh && this._accessInfoCache != null) return this._accessInfoCache;
          const fresh = await this.get("access-info", null);
          if (fresh.error) throw apiCallError("getAccessInfo", fresh.error);
          this._accessInfoCache = fresh;
          return fresh;
        }
        /**
         * Issue a Batch call https://api.pryv.com/reference/#call-batch .
         * arrayOfAPICalls will be splited in multiple calls if the size is > `conn.options.chunkSize` .
         * Default chunksize is 1000.
         * @param {Array.<MethodCall>} arrayOfAPICalls Array of Method Calls
         * @param {Function} [progress] Return percentage of progress (0 - 100);
         * @returns {Promise<Array>} Promise to Array of results matching each method call in order
         */
        async api(arrayOfAPICalls, progress) {
          function httpHandler(batchCall) {
            return this.post("", batchCall);
          }
          return await this._chunkedBatchCall(
            arrayOfAPICalls,
            progress,
            httpHandler.bind(this)
          );
        }
        /**
         * Make one API call
         * @param {string} method - Method ID (e.g., 'events.get', 'streams.create')
         * @param {Object|Array} [params={}] - The params associated with this method
         * @param {string} [expectedKey] - If given, returns the value of this key or throws an error if not present
         * @returns {Promise<Object>} Promise resolving to the API result or the value of expectedKey
         * @throws {Error} If .error is present in the response or expectedKey is missing.
         *   The message names the method and the server's error id and message; the full
         *   error (or result) is on `innerObject`. The call's params are never in the message:
         *   they can carry passwords and tokens, and error messages end up in logs and on screen.
         */
        async apiOne(method, params = {}, expectedKey) {
          const result = await this.api([{ method, params }]);
          if (result[0] == null || result[0].error || expectedKey != null && result[0][expectedKey] == null) {
            const reason = result[0] == null ? "no result" : `"${expectedKey}" missing in result`;
            throw apiCallError(method, result[0]?.error, result, reason);
          }
          if (expectedKey != null) return result[0][expectedKey];
          return result[0];
        }
        /**
         * Revoke : Delete the accessId
         * - Do not throw error if access is already revoked, just return null;
         * @param {boolean} [throwOnFail=true] - if set to false do not throw Error on failure
         * @param {Connection} [usingConnection] - specify which connection issues the revoke, might be necessary when selfRevoke
         * @returns {Promise<Object|null>} Promise resolving to deletion result or null if already revoked/failed
         */
        async revoke(throwOnFail = true, usingConnection) {
          usingConnection = usingConnection || this;
          let accessInfo = null;
          try {
            accessInfo = await this.accessInfo();
          } catch (e) {
            if (e.innerObject?.id === "invalid-access-token") {
              return null;
            }
            if (throwOnFail) throw e;
            return null;
          }
          try {
            return await usingConnection.apiOne("accesses.delete", {
              id: accessInfo.id
            });
          } catch (e) {
            if (throwOnFail) throw e;
            return null;
          }
        }
        /**
         * @private
         */
        async _chunkedBatchCall(arrayOfAPICalls, progress, callHandler) {
          if (!Array.isArray(arrayOfAPICalls)) {
            throw new Error("Connection.api() takes an array as input");
          }
          const chunkSize = this.options.chunkSize;
          if (!Number.isInteger(chunkSize) || chunkSize < 1) {
            throw new Error("Connection options.chunkSize must be a positive integer, got: " + chunkSize);
          }
          const res = [];
          let percent = 0;
          for (let cursor = 0; cursor < arrayOfAPICalls.length; cursor += chunkSize) {
            const thisBatch = [];
            const cursorMax = Math.min(
              cursor + chunkSize,
              arrayOfAPICalls.length
            );
            for (let i = cursor; i < cursorMax; i++) {
              thisBatch.push({
                method: arrayOfAPICalls[i].method,
                params: arrayOfAPICalls[i].params
              });
            }
            const resRequest = await callHandler(thisBatch);
            if (!resRequest || !Array.isArray(resRequest.results)) {
              throw new PryvError("API call result is not an Array", resRequest);
            }
            if (resRequest.results.length !== thisBatch.length) {
              throw new PryvError("API call result Array does not match request", resRequest);
            }
            for (let i = 0; i < resRequest.results.length; i++) {
              if (arrayOfAPICalls[i + cursor].handleResult) {
                await arrayOfAPICalls[i + cursor].handleResult.call(
                  null,
                  resRequest.results[i],
                  thisBatch[i]
                  // request
                );
              }
            }
            Array.prototype.push.apply(res, resRequest.results);
            percent = Math.round(100 * res.length / arrayOfAPICalls.length);
            if (progress) {
              progress(percent, res);
            }
          }
          return res;
        }
        /**
         * Post to API and return results
         * @param {string} path - API path
         * @param {(Array | Object)} data - Data to post
         * @returns {Promise<Object|Object[]>} Promise to result.body
         */
        async post(path, data) {
          const now = getTimestamp();
          const res = await this._postFetch(path, data);
          this._handleMeta(res.body, now);
          return res.body;
        }
        /**
         * @private
         * Post object as JSON to API
         * @param {string} path - API path
         * @param {Array | Object} data - Data to post as JSON
         * @returns {Promise<{response: Response, body: Object|Object[]}>} Promise to response and body
         */
        async _postFetch(path, data) {
          return this._postFetchRaw(path, JSON.stringify(data), "application/json");
        }
        /**
         * @private
         * Raw Post to API
         * @param {string} path - API path
         * @param {any} data - Raw data to post
         * @param {string} [contentType] - Content-Type header (optional, allows fetch to set it for FormData)
         * @returns {Promise<{response: Response, body: Object|Object[]}>} Promise to response and body
         */
        async _postFetchRaw(path, data, contentType) {
          const headers = {
            ...await this._authHeaders("POST", this.endpoint + path),
            Accept: "application/json"
          };
          if (contentType) {
            headers["Content-Type"] = contentType;
          }
          const response = await fetch(this.endpoint + path, {
            method: "POST",
            headers,
            body: data
          });
          const body = await response.json();
          return { response, body };
        }
        /**
         * @protected
         * Authentication headers for a request. The base Connection sends the
         * bearer token as-is; {@link SignedConnection} overrides this to attach a
         * per-request DPoP (RFC 9449) proof. Async because a proof requires signing.
         * @param {string} method - HTTP method (informs the proof's `htm`)
         * @param {string} url - full request URL WITHOUT query (informs `htu`)
         * @returns {Promise<Object>} header map to merge into the request
         */
        async _authHeaders(method, url) {
          return { Authorization: this.token };
        }
        /**
         * GET from API and return results
         * @param {string} path - API path
         * @param {Object} [queryParams] - Query parameters
         * @returns {Promise<Object|Object[]>} Promise to result.body
         */
        async get(path, queryParams) {
          const now = getTimestamp();
          const res = await this._getFetchRaw(path, queryParams);
          this._handleMeta(res.body, now);
          return res.body;
        }
        /**
         * @private
         * Raw GET from API
         * @param {string} path - API path
         * @param {Object} [queryParams={}] - Query parameters
         * @returns {Promise<{response: Response, body: Object|Object[]}>} Promise to response and body
         */
        async _getFetchRaw(path, queryParams = {}) {
          path = path || "";
          let queryStr = "";
          if (queryParams && Object.keys(queryParams).length > 0) {
            queryStr = "?" + buildSearchParams(queryParams);
          }
          const response = await fetch(this.endpoint + path + queryStr, {
            headers: {
              ...await this._authHeaders("GET", this.endpoint + path),
              Accept: "application/json"
            }
          });
          const body = await response.json();
          return { response, body };
        }
        /**
         * Add data points to an HF (High Frequency) series event (flatJSON format)
         * @param {string} eventId - The HF event ID
         * @param {string[]} fields - Array of field names for the series
         * @param {Array<Array<number|string>>} points - Array of data points, each point is an array of values
         * @returns {Promise<HFSeriesAddResult>} Promise resolving to status response
         * @see https://api.pryv.com/reference/#add-hf-series-data-points
         */
        async addPointsToHFEvent(eventId, fields, points) {
          const res = await this.post("events/" + eventId + "/series", {
            format: "flatJSON",
            fields,
            points
          });
          if (res.status !== "ok") {
            throw new Error("Failed loading serie: " + JSON.stringify(res.status));
          }
          return res;
        }
        /**
         * Streamed get Event.
         * @see https://api.pryv.com/reference/#get-events
         * @param {Object} queryParams See `events.get` parameters
         * @param {Function} forEachEvent Function taking one event as parameter. Will be called for each event.
         *   May be async: the returned promise resolves once every callback's promise has settled, and rejects if one rejects.
         * @returns {Promise<Object>} Promise to result.body transformed with `eventsCount: {count}` replacing `events: [...]`
         */
        async getEventsStreamed(queryParams, forEachEvent) {
          let inFlight = 0;
          let firstError = null;
          let onIdle = null;
          const onEvent = (event) => {
            const result = forEachEvent(event);
            if (result != null && typeof result.then === "function") {
              inFlight++;
              Promise.resolve(result).catch((err) => {
                if (firstError == null) firstError = err;
              }).finally(() => {
                if (--inFlight === 0 && onIdle != null) onIdle();
              });
            }
          };
          const myParser = jsonParser(onEvent, queryParams.includeDeletions);
          const res = await libGetEventStreamed(this, queryParams, myParser);
          const now = getTimestamp();
          if (inFlight > 0) await new Promise((resolve) => {
            onIdle = resolve;
          });
          if (firstError != null) throw firstError;
          this._handleMeta(res.body, now);
          return res.body;
        }
        /**
         * Get the latest event per value for a content path — typical form-prefill
         * lookup ("latest assertion per code"). Queries `events.get` with a
         * `content` condition `{ path, in: values }` (server must support content
         * queries — see `Service.supportsContentQueries()`), pages through the
         * time-descending result and keeps the first (= latest) event per value.
         * Handles paging internally, so the result is correct regardless of the
         * default `events.get` page size.
         * @param {string} path - dot-path into `content` (or `$` for the root value)
         * @param {Array<string|number|boolean>} values - values to look up (one Map entry max per value)
         * @param {Object} [baseQuery] - additional `events.get` params (e.g. `streams`, `types`, `fromTime`); passed through
         * @returns {Promise<Map<string|number|boolean, Object>>} value → latest matching event; values with no match are absent
         */
        async getLatestByContent(path, values, baseQuery = {}) {
          const PAGE_LIMIT = 1e3;
          const lookup = new Set(values);
          const found = /* @__PURE__ */ new Map();
          const condition = { path, in: [...lookup] };
          const content = (baseQuery.content || []).concat([condition]);
          let skip = 0;
          while (found.size < lookup.size) {
            const params = Object.assign({}, baseQuery, {
              content,
              sortAscending: false,
              skip,
              limit: PAGE_LIMIT
            });
            const events = await this.apiOne("events.get", params, "events");
            for (const event of events) {
              const value = resolveDotPath(event.content, path);
              if (lookup.has(value) && !found.has(value)) found.set(value, event);
            }
            if (events.length < PAGE_LIMIT) break;
            skip += events.length;
          }
          return found;
        }
        /**
         * Create an event with attached file
         * NODE.jS ONLY
         * @param {PryvEvent} event
         * @param {string} filePath
         */
        async createEventWithFile(event, filePath) {
          const fs = require_fs();
          const path = require_path();
          if (!fs || !path) {
            throw new Error("createEventWithFile is only available in Node.js. Use createEventWithFormData in browser.");
          }
          const fileName = path.basename(filePath);
          const mimeType = getMimeType(path.extname(filePath));
          const fileBlob = await fs.openAsBlob(filePath, { type: mimeType });
          const formData = new FormData();
          formData.append("event", JSON.stringify(event));
          formData.append("file", fileBlob, fileName);
          return this._postEventFormData(formData);
        }
        /**
         * Create an event from a Buffer
         * @param {Object} event
         * @param {Buffer|Blob} bufferData - Buffer for node, Blob for browser
         * @param {string} filename
         */
        async createEventWithFileFromBuffer(event, bufferData, filename) {
          const mimeType = getMimeType(getExtname(filename));
          const fileBlob = bufferData instanceof Blob ? bufferData : new Blob([bufferData], { type: mimeType });
          const formData = new FormData();
          formData.append("file", fileBlob, filename);
          const body = await this.createEventWithFormData(event, formData);
          return body;
        }
        /**
         * Create an event with attached formData
         * !! BROWSER ONLY
         * @param {PryvEvent} event
         * @param {FormData} formData https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
         */
        async createEventWithFormData(event, formData) {
          formData.append("event", JSON.stringify(event));
          return this._postEventFormData(formData);
        }
        /**
         * @private
         * Post a multipart event creation and refine `deltaTime` from the
         * response's `meta`, like every other API call. Shared by the three
         * attachment upload methods.
         * @param {FormData} formData - carries the `event` field and the file(s)
         * @returns {Promise<Object>} the response body
         */
        async _postEventFormData(formData) {
          const now = getTimestamp();
          const { body } = await this._postFetchRaw("events", formData);
          this._handleMeta(body, now);
          return body;
        }
        /**
         * Difference in seconds between the Pryv.io API and local time
         * deltaTime is refined at each (non-raw) API call
         * @readonly
         * @property {number} deltaTime
         */
        get deltaTime() {
          return this._deltaTime.value;
        }
        /**
         * API endpoint of this connection (includes token if present)
         * @readonly
         * @property {APIEndpoint} apiEndpoint
         */
        get apiEndpoint() {
          return utils.buildAPIEndpoint(this);
        }
        /**
         * Update an access by composite id (Pryv.io ≥ 2.0.0-pre.X). Wraps
         * `accesses.update` and translates the 409 `stale-resource` response
         * into a typed `StaleAccessIdError` so callers can `instanceof`-test
         * and refetch + retry without re-parsing the inner error.
         *
         * Pass `id` as the wire-format reference returned by the server — bare
         * cuid on a never-updated access, composite `<base>:<serial>` otherwise.
         * `changes` is the body of mutable fields (name, deviceName, permissions,
         * expireAfter, expires:null, clientData).
         *
         * @param {string} id
         * @param {Object} changes
         * @returns {Promise<Object>} the updated access (with new composite id)
         * @throws {StaleAccessIdError} if the server reports the id is stale
         */
        async updateAccess(id, changes) {
          try {
            return await this.apiOne("accesses.update", { id, update: changes }, "access");
          } catch (e) {
            if (e && e.innerObject && e.innerObject.id === "stale-resource") {
              throw new StaleAccessIdError(e.message, e.innerObject.data || {});
            }
            throw e;
          }
        }
        /**
         * Fetch an access by composite id including its full version history
         * (oldest first). Server: `accesses.getOne ?includeHistory=true`.
         *
         * Useful for audit views. Pass the composite `<base>:<serial>` to
         * inspect a specific past version (the result's `current` field then
         * points at the live head's composite id).
         *
         * @param {string} id
         * @returns {Promise<{ access: Object, current?: string, history?: Object[] }>}
         */
        async getAccessWithHistory(id) {
          return await this.apiOne("accesses.getOne", { id, includeHistory: true });
        }
        // private method that handle meta data parsing
        _handleMeta(res, requestLocalTimestamp) {
          if (!res.meta) throw new Error("Cannot find .meta in response.");
          if (!res.meta.serverTime) {
            throw new Error("Cannot find .meta.serverTime in response.");
          }
          this._deltaTime.value = (this._deltaTime.value * this._deltaTime.weight + res.meta.serverTime - requestLocalTimestamp) / ++this._deltaTime.weight;
        }
      };
      module.exports = Connection;
      function getTimestamp() {
        return Date.now() / 1e3;
      }
      function apiCallError(method, error, answer, reason) {
        if (error) {
          reason = [error.id, error.message].filter((v) => v != null && v !== "").join(": ") || "error answer";
        }
        return new PryvError(`Error for api method: "${method}" >> ${reason}`, error || answer);
      }
      var MIME_TYPES = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".webp": "image/webp",
        ".svg": "image/svg+xml",
        ".bmp": "image/bmp",
        ".ico": "image/x-icon",
        ".pdf": "application/pdf",
        ".json": "application/json",
        ".xml": "application/xml",
        ".zip": "application/zip",
        ".gz": "application/gzip",
        ".tar": "application/x-tar",
        ".txt": "text/plain",
        ".html": "text/html",
        ".htm": "text/html",
        ".css": "text/css",
        ".js": "application/javascript",
        ".mjs": "application/javascript",
        ".mp3": "audio/mpeg",
        ".wav": "audio/wav",
        ".ogg": "audio/ogg",
        ".mp4": "video/mp4",
        ".webm": "video/webm",
        ".avi": "video/x-msvideo",
        ".mov": "video/quicktime"
      };
      function getMimeType(ext) {
        return MIME_TYPES[ext.toLowerCase()] || "application/octet-stream";
      }
      function getExtname(filename) {
        const lastDot = filename.lastIndexOf(".");
        return lastDot >= 0 ? filename.slice(lastDot) : "";
      }
      var Service = require_Service();
    }
  });

  // node_modules/pryv/src/Service.js
  var require_Service = __commonJS({
    "node_modules/pryv/src/Service.js"(exports, module) {
      var utils = require_utils();
      var PryvError = require_PryvError();
      var MfaRequiredError = require_MfaRequiredError();
      var handoff = require_handoff();
      var pollUrls = require_pollUrls();
      var Assets = require_ServiceAssets();
      var Service = class _Service {
        constructor(serviceInfoUrl, serviceCustomizations) {
          this._serviceInfo = null;
          this._assets = null;
          this._polling = false;
          this._serviceInfoUrl = serviceInfoUrl;
          this._pryvServiceCustomizations = serviceCustomizations;
        }
        /**
         * Return service info parameters info known of fetch it if needed.
         * Example
         *  - name of a platform
         *    `const serviceName = await service.info().name`
         * @see ServiceInfo For details on available properties.
         * @param {boolean} [forceFetch] If true, will force fetching service info.
         * @returns {Promise<ServiceInfo>} Promise to Service info Object
         */
        async info(forceFetch) {
          if (forceFetch || !this._serviceInfo) {
            let baseServiceInfo = {};
            if (this._serviceInfoUrl) {
              const { body } = await utils.fetchGet(this._serviceInfoUrl);
              baseServiceInfo = body;
            }
            Object.assign(baseServiceInfo, this._pryvServiceCustomizations);
            this.setServiceInfo(baseServiceInfo);
          }
          return this._serviceInfo;
        }
        /**
         * Check if a service supports High Frequency Data Sets
         * @returns {Promise<boolean>} Promise resolving to true if HF is supported
         */
        async supportsHF() {
          const infos = await this.info();
          return infos.features == null || infos.features.noHF !== true;
        }
        /**
         * Whether the platform supports `events.get` content/clientData query
         * conditions (`features.contentQueries` in service info). Older platforms
         * reject the parameters with a 400 — use this to pick a fallback path.
         * @returns {Promise<boolean>}
         */
        async supportsContentQueries() {
          const infos = await this.info();
          return infos.features != null && infos.features.contentQueries === true;
        }
        /**
         * Check if a service has username in the hostname or in the path of the API.
         * @returns {Promise<boolean>} Promise resolving to true if the service does not rely on DNS to find a host related to a username
         */
        async isDnsLess() {
          const infos = await this.info();
          const hostname = infos.api.split("/")[2];
          return !hostname.includes("{username}");
        }
        /**
         * @private
         * @param {ServiceInfo} serviceInfo
         */
        setServiceInfo(serviceInfo) {
          if (!serviceInfo.name) {
            throw new Error("Invalid data from service/info");
          }
          ["access", "api", "register"].forEach((key) => {
            if (serviceInfo[key].slice(-1) !== "/") {
              serviceInfo[key] += "/";
            }
          });
          this._serviceInfo = serviceInfo;
        }
        /**
         * Return assets property content
         * @param {boolean} [forceFetch] If true, will force fetching service info.
         * @returns {Promise<ServiceAssets|null>} Promise to ServiceAssets
         */
        async assets(forceFetch) {
          if (!forceFetch && this._assets) {
            return this._assets;
          } else {
            const serviceInfo = await this.info();
            if (!serviceInfo.assets || !serviceInfo.assets.definitions) {
              console.log("Warning: no assets for this service");
              return null;
            }
            this._assets = await Assets.setup(serviceInfo.assets.definitions);
            return this._assets;
          }
        }
        /**
         * Return service info parameters info known or null if not yet loaded
         * @returns {ServiceInfo} Service Info definition
         */
        infoSync() {
          return this._serviceInfo;
        }
        /**
         * Return an API endpoint from a username and token
         * @param {string} username - The username
         * @param {string} [token] - Optional authorization token
         * @returns {Promise<APIEndpoint>} Promise resolving to the API endpoint URL
         */
        async apiEndpointFor(username, token) {
          const serviceInfo = await this.info();
          return _Service.buildAPIEndpoint(serviceInfo, username, token);
        }
        /**
         * Return an API endpoint from a username, token and ServiceInfo.
         * This method is rarely used. See **apiEndpointFor** as an alternative.
         * @param {ServiceInfo} serviceInfo - The service info object containing API URL template
         * @param {string} username - The username
         * @param {string} [token] - Optional authorization token
         * @returns {APIEndpoint} The constructed API endpoint URL
         */
        static buildAPIEndpoint(serviceInfo, username, token) {
          const endpoint = serviceInfo.api.replace("{username}", username);
          return utils.buildAPIEndpoint({ endpoint, token });
        }
        /**
         * Issue a "login call on the Service" return a Connection on success
         * **! Warning**: the token of the connection will be a "Personal" token that expires
         * @see https://api.pryv.com/reference-full/#login-user
         * @param {string} username
         * @param {string} password
         * @param {string} appId
         * @param {string} [originHeader=service-info.register] Only for Node.js. If not set will use the register value of service info. In browsers this will overridden by current page location.
         * @throws {Error} on invalid login
         */
        async login(username, password, appId, originHeader) {
          const apiEndpoint = await this.apiEndpointFor(username);
          const headers = {};
          originHeader = originHeader || (await this.info()).register;
          if (!utils.isBrowser()) {
            headers.Origin = originHeader;
          }
          const { response, body } = await utils.fetchPost(
            apiEndpoint + "auth/login",
            { username, password, appId },
            headers
          );
          if (!response.ok) {
            throw PryvError.fromApiResponse(response, body);
          }
          if (body && body.mfaToken) {
            throw new MfaRequiredError(body.mfaToken, response, body);
          }
          if (!body || !body.token) {
            throw new PryvError("Invalid login response: no token", body);
          }
          return new Connection(
            _Service.buildAPIEndpoint(await this.info(), username, body.token),
            this
            // Pre load Connection with service
          );
        }
        /**
         * Re-trigger an MFA challenge (e.g. resend SMS) during a pending login.
         * Use after `login()` threw `MfaRequiredError` if the user needs another
         * SMS code.
         *
         * @param {string} userId
         * @param {string} mfaToken - From `MfaRequiredError.mfaToken`
         * @returns {Promise<void>}
         * @throws {PryvError} on 4xx/5xx (e.g. invalid/expired mfaToken)
         */
        async mfaChallenge(userId, mfaToken) {
          if (!userId || !mfaToken) {
            throw new PryvError("mfaChallenge requires userId and mfaToken");
          }
          const url = await this.apiEndpointFor(userId) + "mfa/challenge";
          const { response, body } = await utils.fetchPost(url, {}, {
            Authorization: mfaToken
          });
          if (!response.ok) throw PryvError.fromApiResponse(response, body);
        }
        /**
         * Finish an MFA-protected login by submitting the SMS code. Returns a
         * fully-formed `Connection` (parallel to `Service.login`).
         *
         * @param {string} userId
         * @param {string} mfaToken - From `MfaRequiredError.mfaToken`
         * @param {string} code - The SMS verification code
         * @returns {Promise<Connection>}
         * @throws {PryvError} on bad code, expired mfaToken, etc.
         */
        async mfaVerify(userId, mfaToken, code) {
          if (!userId || !mfaToken || code == null) {
            throw new PryvError("mfaVerify requires userId, mfaToken, code");
          }
          const url = await this.apiEndpointFor(userId) + "mfa/verify";
          const { response, body } = await utils.fetchPost(url, { code }, {
            Authorization: mfaToken
          });
          if (!response.ok) throw PryvError.fromApiResponse(response, body);
          if (!body || !body.token) {
            throw new PryvError("mfa.verify did not return a token", body);
          }
          return new Connection(
            _Service.buildAPIEndpoint(await this.info(), userId, body.token),
            this
          );
        }
        /**
         * Check whether a username is registered on this service.
         * One round-trip via `POST <register>/<userId>/server`.
         *
         * @param {string} userId - The username to check
         * @returns {Promise<boolean>} `true` if registered, `false` on 404
         * @throws {PryvError} on network errors or non-404 API errors
         */
        async userExists(userId) {
          const serviceInfo = await this.info();
          const url = serviceInfo.register + encodeURIComponent(userId) + "/server";
          const { response, body } = await utils.fetchPost(url, {});
          if (response.ok) return true;
          if (response.status === 404) return false;
          throw PryvError.fromApiResponse(response, body);
        }
        /**
         * Resolve an email address to a username on this service.
         * One round-trip via `GET <register>/<email>/uid`.
         *
         * On multi-core services where the platform stores identifiers hashed,
         * the queried node may not host the user and answers `307` with the
         * home node's URL in `{ server }`. `fetch` follows the redirect
         * transparently; for HTTP clients that do not auto-follow, this method
         * also follows the `{ server }` hint once explicitly.
         *
         * @param {string} email - The email to look up
         * @returns {Promise<string|null>} The username, or `null` if unknown
         * @throws {PryvError} on network errors or non-404 API errors
         */
        async userIdForEmail(email) {
          const serviceInfo = await this.info();
          const url = serviceInfo.register + encodeURIComponent(email) + "/uid";
          let { response, body } = await utils.fetchGet(url);
          if (response.status === 307 && body && body.server) {
            const home = body.server.endsWith("/") ? body.server : body.server + "/";
            const homeUrl = home + "reg/" + encodeURIComponent(email) + "/uid";
            ({ response, body } = await utils.fetchGet(homeUrl));
          }
          if (response.ok) return body && (body.uid || body.username) || null;
          if (response.status === 404) return null;
          throw PryvError.fromApiResponse(response, body);
        }
        /**
         * Fetch the raw hostings tree advertised by `<register>/hostings`.
         *
         * Returns the nested API shape `{ regions: { <region>: { zones:
         * { <zone>: { hostings: { <key>: { name, description, availableCore,
         * available } } } } } } }`. For a flat list ready to render in a UI,
         * use `flatHostings()`.
         *
         * @returns {Promise<Object>} the raw `/reg/hostings` body
         * @throws {PryvError} on non-2xx
         */
        async availableHostings() {
          const serviceInfo = await this.info();
          const { response, body } = await utils.fetchGet(
            serviceInfo.register + "hostings"
          );
          if (!response.ok) throw PryvError.fromApiResponse(response, body);
          return body;
        }
        /**
         * Flatten `availableHostings()` into a list of `{ key, name, description,
         * region, zone, availableCore, available }` items.
         *
         * @returns {Promise<Array<Object>>}
         * @throws {PryvError} on non-2xx
         */
        async flatHostings() {
          const tree = await this.availableHostings();
          const out = [];
          const regions = tree && tree.regions || {};
          for (const [regionKey, region] of Object.entries(regions)) {
            const zones = region && region.zones || {};
            for (const [zoneKey, zone] of Object.entries(zones)) {
              const hostings = zone && zone.hostings || {};
              for (const [key, h] of Object.entries(hostings)) {
                if (!h) continue;
                out.push({
                  key,
                  name: h.name,
                  description: h.description,
                  region: regionKey,
                  zone: zoneKey,
                  availableCore: h.availableCore,
                  available: h.available === true
                });
              }
            }
          }
          return out;
        }
        /**
         * Register a new user on this service.
         *
         * Hides the v1/v2 register endpoint difference. v2 platforms (service
         * version >= 2.0 or >= 1.6) accept camelCase fields at `<register>users`;
         * older v1 service-register expects mixed-case fields at `<register>user`.
         *
         * Pass `hosting: 'auto'` to use the first hosting flagged `available: true`
         * in `flatHostings()` — useful for tests and single-hosting platforms.
         *
         * @param {Object} opts
         * @param {string} opts.username
         * @param {string} opts.password
         * @param {string} opts.email
         * @param {string} opts.hosting - Hosting key (use `service.flatHostings()` to discover) or `'auto'`
         * @param {string} opts.appId
         * @param {string} [opts.language='en']
         * @param {string} [opts.invitationToken='enjoy']
         * @param {string} [opts.referer]
         * @returns {Promise<{ username: string, apiEndpoint: string }>}
         * @throws {PryvError} on duplicate username, weak password, etc.
         */
        async createUser(opts) {
          if (!opts || !opts.username || !opts.password || !opts.email || !opts.hosting || !opts.appId) {
            throw new PryvError(
              "createUser requires username, password, email, hosting, appId"
            );
          }
          const serviceInfo = await this.info();
          const isModern = supportsCamelCaseRegister(serviceInfo.version);
          const language = opts.language || "en";
          const invitationToken = opts.invitationToken || "enjoy";
          let hosting = opts.hosting;
          if (hosting === "auto") {
            const flat = await this.flatHostings();
            const first = flat.find((h) => h.available);
            if (!first) {
              throw new PryvError(
                'createUser({ hosting: "auto" }): no hosting flagged available'
              );
            }
            hosting = first.key;
          }
          let url, payload;
          if (isModern) {
            url = serviceInfo.register + "users";
            payload = {
              appId: opts.appId,
              username: opts.username,
              password: opts.password,
              email: opts.email,
              hosting,
              language,
              invitationToken,
              ...opts.referer != null && { referer: opts.referer }
            };
          } else {
            url = serviceInfo.register + "user";
            payload = {
              appid: opts.appId,
              username: opts.username,
              password: opts.password,
              email: opts.email,
              hosting,
              languageCode: language,
              invitationtoken: invitationToken,
              ...opts.referer != null && { referer: opts.referer }
            };
          }
          const { response, body } = await utils.fetchPost(url, payload);
          if (!response.ok) throw PryvError.fromApiResponse(response, body);
          const apiEndpoint = await this.apiEndpointFor(opts.username);
          return { username: opts.username, apiEndpoint };
        }
        /**
         * Trigger a password-reset email for the given user.
         * Pre-auth — no token required.
         *
         * @param {string} userId
         * @param {string} appId
         * @returns {Promise<void>}
         * @throws {PryvError} on 4xx/5xx
         */
        async requestPasswordReset(userId, appId) {
          if (!userId || !appId) {
            throw new PryvError("requestPasswordReset requires userId and appId");
          }
          const url = await this.apiEndpointFor(userId) + "account/request-password-reset";
          const { response, body } = await utils.fetchPost(url, {
            appId,
            username: userId
          });
          if (!response.ok) throw PryvError.fromApiResponse(response, body);
        }
        /**
         * Start an access-request flow. Posts to the platform's auth endpoint
         * (`serviceInfo.access`) and returns the envelope the consumer needs to
         * present an approve-link to the user and poll for completion.
         *
         * `Browser.setupAuth` already wraps this for the high-level browser flow.
         * Use this method when you're a non-browser caller (CLI, native app, bot)
         * or building your own UI on top.
         *
         * @param {Object} authRequest - The auth-request body
         * @param {string} authRequest.requestingAppId
         * @param {Array<{ streamId: string, level: string, defaultName: string }>} authRequest.requestedPermissions
         * @param {Object} [authRequest.consent] - Says how the consent screen
         *   should present each requested permission. `mandatory` and `optIn`
         *   name permission ids (a stream permission's `streamId`, a feature
         *   permission's `feature`); an id in neither list is optional and
         *   shown pre-selected. Ignored by cores that predate it, so the flow
         *   falls back to all-or-nothing rather than failing: the returned
         *   `consent` tells you which happened.
         * @param {boolean} [authRequest.consent.allowUserChoice=false] - false
         *   means the user may only accept the whole set or deny.
         * @param {string[]} [authRequest.consent.mandatory] - ids the user
         *   cannot leave out.
         * @param {string[]} [authRequest.consent.optIn] - ids offered NOT
         *   pre-selected, so the user has to choose them.
         * @param {string} [authRequest.languageCode='en']
         * @param {string} [authRequest.returnURL] - URL the auth page returns
         *   to after the decision, sent as is (the 'auto#' / 'self#' shortcuts
         *   are resolved only by the sign-in button, not here).
         * @param {string} [authRequest.referer]
         * @param {Object} [authRequest.clientData]
         * @param {string} [authRequest.deviceName]
         * @param {number} [authRequest.expireAfter]
         * @param {boolean} [authRequest.actAsManagedOnly] - true: the access must
         *   be granted for an account the user manages; requires `actAs: 'allow'`
         *   or a username.
         * @returns {Promise<{ key: string, authUrl: string, poll: string, pollRateMs: number, consent?: Object, cmcInvites?: Array<Object>, actAsManagedOnly?: true }>}
         *   `consent`, `cmcInvites` and `actAsManagedOnly` are echoed back only by
         *   a core that understood them, which is how you detect support.
         * @throws {PryvError} on non-2xx
         */
        async startAccessRequest(authRequest) {
          if (!authRequest || !authRequest.requestingAppId) {
            throw new PryvError(
              "startAccessRequest requires authRequest.requestingAppId"
            );
          }
          const serviceInfo = await this.info();
          const { response, body } = await utils.fetchPost(
            serviceInfo.access,
            authRequest
          );
          if (!response.ok) throw PryvError.fromApiResponse(response, body);
          if (!body || !body.key || !body.poll) {
            throw new PryvError("Invalid access-request response: no key or poll", body);
          }
          const envelope = {
            key: body.key,
            authUrl: body.authUrl || body.url,
            poll: body.poll,
            pollRateMs: body.poll_rate_ms != null ? body.poll_rate_ms : body.pollRateMs
          };
          if (body.consent != null) envelope.consent = body.consent;
          if (body.cmcInvites != null) envelope.cmcInvites = body.cmcInvites;
          if (body.actAsManagedOnly === true) envelope.actAsManagedOnly = true;
          pollUrls.remember(envelope.key, envelope.poll);
          return envelope;
        }
        /**
         * Poll an in-progress access request once. Accepts either:
         *   - a `key` returned by `startAccessRequest` (polls the poll URL the
         *     server issued for it when this process started the request, else
         *     `serviceInfo.access + key`)
         *   - a full poll URL (use as-is — recommended, since the server-issued
         *     URL is canonical and may point at a specific core: on a multi-core
         *     platform `access + key` can reach a core that does not know the
         *     request).
         *
         * Returns the raw body. Inspect `body.status` to drive the flow:
         *   - `'NEED_SIGNIN'` → user has not interacted yet; keep polling.
         *   - `'ACCEPTED'`    → `body.apiEndpoint` + `body.username`, plus either
         *     `body.token` (inline) or a one-time `body.handoff` key (shared-secret
         *     delivery). Prefer `connectFromKey`, which handles both shapes.
         *   - `'REFUSED'`     → user declined.
         *
         * @param {string} keyOrPollUrl
         * @returns {Promise<Object>}
         * @throws {PryvError} on transport errors or non-2xx-and-not-403-REFUSED
         */
        async pollAccessRequest(keyOrPollUrl) {
          if (!keyOrPollUrl) {
            throw new PryvError("pollAccessRequest requires a key or poll URL");
          }
          let pollUrl = keyOrPollUrl;
          if (!/^https?:\/\//.test(keyOrPollUrl)) {
            pollUrl = pollUrls.lookup(keyOrPollUrl);
            if (pollUrl == null) {
              const serviceInfo = await this.info();
              pollUrl = serviceInfo.access + keyOrPollUrl;
            }
          }
          const { response, body } = await utils.fetchGet(pollUrl);
          if (response.status === 403 && body && body.status === "REFUSED") {
            return body;
          }
          if (!response.ok) throw PryvError.fromApiResponse(response, body);
          return body;
        }
        /**
         * Resolve a completed auth-flow polling key into a `Connection`.
         *
         * Pairs with `Service.startAccessRequest` / `Service.pollAccessRequest`
         * and the headless polling pattern: the calling app holds only the
         * `key` returned by the auth-flow (not the underlying token /
         * apiEndpoint), and uses this method to build a working `Connection`.
         *
         * The implementation polls the request once (at the server-issued poll
         * URL when this process started it, else `<access>/<key>`, which may
         * miss the request on a multi-core platform); the call MUST be
         * made while the access request is still readable in the ACCEPTED
         * state. Servers keep a decided request only for a short retention
         * window after it is first polled (default 2 minutes, operator setting
         * `access.terminalRetentionMs`), so call this promptly after the flow
         * completes; afterwards the key is unknown. (`expireAfter` on the
         * access request is the lifetime of the access created, not of the key.)
         *
         * When the request asked for shared-secret delivery the ACCEPTED body
         * carries a one-time `handoff` key instead of the token; this redeems it
         * exactly once and caches the result keyed by `key`, so it is safe to call
         * more than once for the same key (the second call reuses the cache rather
         * than hitting the already-consumed one-time secret). A retrieve that finds
         * the secret gone throws a `PryvError` (id `credential-handoff-failed`);
         * restart the auth request.
         *
         * @param {string} key - polling key from `startAccessRequest`
         * @returns {Promise<Connection>}
         * @throws {PryvError} if the key is not ACCEPTED (NEED_SIGNIN, REFUSED, ERROR)
         *   or the hand-off secret could not be retrieved
         */
        async connectFromKey(key) {
          if (!key) {
            throw new PryvError("connectFromKey requires a key");
          }
          const cached = handoff.cacheGet(key);
          if (cached != null) return new Connection(cached.apiEndpoint, this);
          const body = await this.pollAccessRequest(key);
          if (body.status !== "ACCEPTED") {
            throw new PryvError(
              "connectFromKey: access is not ACCEPTED (status=" + body.status + ")"
            );
          }
          if (handoff.isHandoffBody(body)) {
            const entry = await handoff.resolveHandoff(body, key);
            return new Connection(entry.apiEndpoint, this);
          }
          if (!body.apiEndpoint) {
            throw new PryvError(
              "connectFromKey: ACCEPTED response missing apiEndpoint"
            );
          }
          return new Connection(body.apiEndpoint, this);
        }
        /**
         * Set a new password using a reset token (from the reset email).
         * Pre-auth — no login token required.
         *
         * @param {string} userId
         * @param {string} newPassword
         * @param {string} resetToken
         * @param {string} appId
         * @returns {Promise<void>}
         * @throws {PryvError} on `unknown-or-expired-reset-token`, weak password, etc.
         */
        async resetPassword(userId, newPassword, resetToken, appId) {
          if (!userId || !newPassword || !resetToken || !appId) {
            throw new PryvError(
              "resetPassword requires userId, newPassword, resetToken, appId"
            );
          }
          const url = await this.apiEndpointFor(userId) + "account/reset-password";
          const { response, body } = await utils.fetchPost(url, {
            username: userId,
            newPassword,
            resetToken,
            appId
          });
          if (!response.ok) throw PryvError.fromApiResponse(response, body);
        }
      };
      function supportsCamelCaseRegister(version) {
        if (!version || typeof version !== "string") return true;
        const m = /^(\d+)\.(\d+)/.exec(version);
        if (!m) return true;
        const major = parseInt(m[1], 10);
        const minor = parseInt(m[2], 10);
        if (major >= 2) return true;
        if (major === 1 && minor >= 6) return true;
        return false;
      }
      module.exports = Service;
      var Connection = require_Connection();
    }
  });

  // node_modules/pryv/src/dpopProof.js
  var require_dpopProof = __commonJS({
    "node_modules/pryv/src/dpopProof.js"(exports, module) {
      var subtle = globalThis.crypto.subtle;
      var textEncoder = new TextEncoder();
      function base64url(bytes) {
        let binary = "";
        for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
        return btoa(binary).replace(/=+$/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      async function sha256base64url(str) {
        const digest = await subtle.digest("SHA-256", textEncoder.encode(str));
        return base64url(new Uint8Array(digest));
      }
      function stripQuery(url) {
        const parsed = new URL(url);
        return parsed.origin + parsed.pathname;
      }
      async function createDPoPProof({ keyPair, htm, htu, accessToken }) {
        const jwk = await subtle.exportKey("jwk", keyPair.publicKey);
        const header = {
          typ: "dpop+jwt",
          alg: "ES256",
          jwk: { kty: jwk.kty, crv: jwk.crv, x: jwk.x, y: jwk.y }
        };
        const payload = {
          jti: globalThis.crypto.randomUUID(),
          htm,
          htu: stripQuery(htu),
          iat: Math.floor(Date.now() / 1e3)
        };
        if (accessToken != null) payload.ath = await sha256base64url(accessToken);
        const signingInput = base64url(textEncoder.encode(JSON.stringify(header))) + "." + base64url(textEncoder.encode(JSON.stringify(payload)));
        const signature = await subtle.sign(
          { name: "ECDSA", hash: "SHA-256" },
          keyPair.privateKey,
          textEncoder.encode(signingInput)
        );
        return signingInput + "." + base64url(new Uint8Array(signature));
      }
      module.exports = { createDPoPProof };
    }
  });

  // node_modules/pryv/src/SignedConnection.js
  var require_SignedConnection = __commonJS({
    "node_modules/pryv/src/SignedConnection.js"(exports, module) {
      var Connection = require_Connection();
      var { createDPoPProof } = require_dpopProof();
      var SignedConnection = class extends Connection {
        /**
         * @param {string} apiEndpoint - Pryv API endpoint carrying the DPoP-bound token
         * @param {CryptoKeyPair} keyPair - the ES256 key the token is bound to
         * @param {Service} [service] - optional pre-built Service
         */
        constructor(apiEndpoint, keyPair, service) {
          super(apiEndpoint, service);
          if (keyPair == null || keyPair.privateKey == null || keyPair.publicKey == null) {
            throw new Error("SignedConnection: an ES256 CryptoKeyPair ({ publicKey, privateKey }) is required");
          }
          this._dpopKeyPair = keyPair;
        }
        /**
         * @protected
         * @override
         * Attach a per-request DPoP proof and present the token under the DPoP
         * scheme. `url` is the request URL without query — the proof's `htu`.
         * @param {string} method
         * @param {string} url
         * @returns {Promise<Object>}
         */
        async _authHeaders(method, url) {
          const proof = await createDPoPProof({
            keyPair: this._dpopKeyPair,
            htm: method,
            htu: url,
            accessToken: this.token
          });
          return {
            Authorization: "DPoP " + this.token,
            DPoP: proof
          };
        }
      };
      module.exports = SignedConnection;
    }
  });

  // node_modules/pryv/src/Auth/AuthStates.js
  var require_AuthStates = __commonJS({
    "node_modules/pryv/src/Auth/AuthStates.js"(exports, module) {
      module.exports = {
        ERROR: "ERROR",
        LOADING: "LOADING",
        INITIALIZED: "INITIALIZED",
        NEED_SIGNIN: "NEED_SIGNIN",
        AUTHORIZED: "ACCEPTED",
        SIGNOUT: "SIGNOUT",
        REFUSED: "REFUSED",
        SWITCHING: "SWITCHING"
      };
    }
  });

  // node_modules/pryv/src/Auth/LoginMessages.js
  var require_LoginMessages = __commonJS({
    "node_modules/pryv/src/Auth/LoginMessages.js"(exports, module) {
      module.exports = get;
      var Messages = {
        LOADING: {
          en: "..."
        },
        ERROR: {
          en: "Error",
          fr: "Erreur"
        },
        LOGIN: {
          en: "Signin",
          fr: "Login"
        },
        SIGNOUT_CONFIRM: {
          en: "Logout?",
          fr: "Se d\xE9connecter ?"
        },
        MENU_TITLE: {
          en: "Account",
          fr: "Compte"
        },
        LOGOUT: {
          en: "Log out",
          fr: "Se d\xE9connecter"
        },
        MANAGE_ACCOUNT: {
          en: "Manage my account",
          fr: "G\xE9rer mon compte"
        },
        APP: {
          en: "app",
          fr: "app"
        },
        CLOSE: {
          en: "Close",
          fr: "Fermer"
        },
        CANCEL: {
          en: "Cancel",
          fr: "Annuler"
        },
        LOGOUT_ALL: {
          en: "Log out of all accounts",
          fr: "Se d\xE9connecter de tous les comptes"
        },
        MANAGE_ACCOUNT_OF: {
          en: "Manage {username}'s account",
          fr: "G\xE9rer le compte de {username}"
        },
        USE_FOR: {
          en: "Use this app for",
          fr: "Utiliser cette app pour"
        },
        ME: {
          en: "me",
          fr: "moi"
        },
        VIA: {
          en: "via",
          fr: "via"
        },
        ACTING_AS: {
          en: "acting as",
          fr: "pour le compte"
        },
        SWITCH_BACK: {
          en: "Switch back to {username}",
          fr: "Revenir \xE0 {username}"
        },
        SWITCHING: {
          en: "Switching...",
          fr: "Changement..."
        },
        OTHER_ACCOUNT: {
          en: "Another account...",
          fr: "Un autre compte..."
        },
        UNAVAILABLE: {
          en: "no longer available",
          fr: "plus disponible"
        }
      };
      function get(languageCode, definitions) {
        const myMessages = Object.assign({}, Messages, definitions || {});
        if (definitions?.LOGOUT_CONFIRM && !definitions.SIGNOUT_CONFIRM) myMessages.SIGNOUT_CONFIRM = definitions.LOGOUT_CONFIRM;
        const res = {};
        Object.keys(myMessages).forEach((key) => {
          res[key] = myMessages[key][languageCode] || myMessages[key].en;
        });
        return res;
      }
    }
  });

  // node_modules/pryv/src/Auth/ProfileStore.js
  var require_ProfileStore = __commonJS({
    "node_modules/pryv/src/Auth/ProfileStore.js"(exports, module) {
      module.exports = {
        DEFAULT_LIMIT: 5,
        read,
        write,
        activate,
        remove,
        markUnavailable,
        profileOf,
        fromAccepted,
        carriesToken,
        platformOf,
        normalizedUrl,
        forPlatform
      };
      var utils = require_utils();
      function carriesToken(apiEndpoint) {
        try {
          return Boolean(utils.extractTokenAndAPIEndpoint(apiEndpoint).token);
        } catch (e) {
          return false;
        }
      }
      function platformOf(service) {
        const url = service?._serviceInfoUrl;
        if (url) return normalizedUrl(String(url));
        return "inline:" + (service?.infoSync?.()?.access ?? "");
      }
      function normalizedUrl(url) {
        try {
          const normalized = new URL(url, globalThis.document?.baseURI ?? globalThis.location?.href);
          normalized.hash = "";
          return normalized.href;
        } catch (e) {
          return url;
        }
      }
      function forPlatform(stored, platform, adoptUnbound) {
        if (stored == null || typeof stored !== "object") return null;
        if (stored.platform != null) return stored.platform === platform ? stored : null;
        return adoptUnbound ? stored : null;
      }
      function read(stored) {
        const store = { active: null, profiles: [], authUrl: void 0 };
        if (stored == null || typeof stored !== "object" || stored.deleted === true) return store;
        if (typeof stored.authUrl === "string") store.authUrl = stored.authUrl;
        if (typeof stored.platform === "string") store.platform = stored.platform;
        if (Array.isArray(stored.profiles)) {
          store.profiles = stored.profiles.filter(isProfile).map(profileOf);
        }
        if (isProfile(stored)) {
          const active = profileOf(stored);
          store.profiles = [active].concat(store.profiles.filter((p) => p.username !== active.username));
          store.active = active;
        }
        return store;
      }
      function write(store) {
        if (store.profiles.length === 0) return null;
        const data = {};
        if (store.active != null) {
          data.apiEndpoint = store.active.apiEndpoint;
          data.username = store.active.username;
          if (store.active.actingAs != null) data.actingAs = store.active.actingAs;
          if (store.active.permissionsFingerprint != null) data.permissionsFingerprint = store.active.permissionsFingerprint;
        }
        if (store.authUrl != null) data.authUrl = store.authUrl;
        if (store.platform != null) data.platform = store.platform;
        data.profiles = store.profiles.map(profileOf);
        return data;
      }
      function activate(store, profile, limit) {
        const max = Math.max(1, limit || module.exports.DEFAULT_LIMIT);
        const active = profileOf(profile);
        const profiles = [active].concat(store.profiles.filter((p) => p.username !== active.username));
        return Object.assign({}, store, { active, profiles: profiles.slice(0, max) });
      }
      function remove(store, username) {
        const profiles = store.profiles.filter((p) => p.username !== username);
        const active = store.active != null && store.active.username !== username ? store.active : null;
        return Object.assign({}, store, { active, profiles });
      }
      function markUnavailable(store, username) {
        const mark = (p) => p.username === username ? Object.assign(profileOf(p), { unavailable: true }) : p;
        const profiles = store.profiles.map(mark);
        const active = store.active != null && store.active.username === username ? null : store.active;
        return Object.assign({}, store, { active, profiles });
      }
      function profileOf(p) {
        const profile = { username: p.username, apiEndpoint: p.apiEndpoint };
        if (p.actingAs != null && typeof p.actingAs.delegate === "string") {
          profile.actingAs = { username: p.username, delegate: p.actingAs.delegate };
        }
        if (p.unavailable === true) profile.unavailable = true;
        if (typeof p.permissionsFingerprint === "string") profile.permissionsFingerprint = p.permissionsFingerprint;
        return profile;
      }
      function isProfile(p) {
        return p != null && typeof p.username === "string" && typeof p.apiEndpoint === "string";
      }
      function fromAccepted(body, permissionsFingerprint) {
        const profile = { username: body.username, apiEndpoint: body.apiEndpoint };
        if (typeof permissionsFingerprint === "string") profile.permissionsFingerprint = permissionsFingerprint;
        const d = body.delegation;
        if (d != null && d.isDelegatedAccess === true && d.controlledUsername === body.username && typeof d.delegate?.username === "string") {
          profile.actingAs = { username: body.username, delegate: d.delegate.username };
        }
        return profile;
      }
    }
  });

  // node_modules/pryv/src/Auth/pollOutcome.js
  var require_pollOutcome = __commonJS({
    "node_modules/pryv/src/Auth/pollOutcome.js"(exports, module) {
      var AuthStates = require_AuthStates();
      module.exports = {
        invalidAuthUrlError,
        invalidAuthUrlState,
        refusedState,
        unreadableAnswerState
      };
      function refusedState(body, serviceInfo) {
        return { status: AuthStates.REFUSED, reasonId: body?.reasonId, message: body?.message, serviceInfo };
      }
      function unreadableAnswerState(body) {
        return { status: AuthStates.ERROR, message: "Cannot fetch result", error: body?.error ?? body };
      }
      function invalidAuthUrlError() {
        return Object.assign(new Error("Invalid auth URL"), { id: "invalid-auth-url" });
      }
      function invalidAuthUrlState() {
        const error = invalidAuthUrlError();
        return { status: AuthStates.ERROR, message: error.message, error };
      }
    }
  });

  // node_modules/pryv/src/Auth/permissionsCoverage.js
  var require_permissionsCoverage = __commonJS({
    "node_modules/pryv/src/Auth/permissionsCoverage.js"(exports, module) {
      module.exports = {
        missingPermissions,
        permissionsFingerprint
      };
      var COVERED_BY = {
        read: ["read", "contribute", "manage"],
        "create-only": ["create-only", "contribute", "manage"],
        contribute: ["contribute", "manage"],
        manage: ["manage"]
      };
      function missingPermissions(requestedPermissions, accessInfo) {
        const requested = streamPermissions(requestedPermissions).filter((p) => p.level !== "none");
        if (accessInfo?.type === "personal") return [];
        const granted = streamPermissions(accessInfo?.permissions);
        return requested.filter((r) => {
          const id = withoutLocalPrefix(r.streamId);
          return !granted.some((g) => {
            const grantedId = withoutLocalPrefix(g.streamId);
            return (grantedId === id || grantedId === "*") && covers(g.level, r.level);
          });
        }).map((r) => Object.assign({}, r));
      }
      function permissionsFingerprint(requestedPermissions) {
        const entries = streamPermissions(requestedPermissions).map((p) => JSON.stringify([p.streamId, p.level])).sort();
        return fnv1a(entries.join(","));
      }
      function withoutLocalPrefix(streamId) {
        const PREFIX = ":local:";
        let id = streamId;
        for (let i = 0; i < 8 && id.startsWith(PREFIX); i++) {
          id = id.slice(PREFIX.length);
          if (id === "") return "*";
        }
        return id;
      }
      function covers(grantedLevel, requestedLevel) {
        const coveredBy = COVERED_BY[requestedLevel] ?? [requestedLevel];
        return coveredBy.includes(grantedLevel);
      }
      function streamPermissions(permissions) {
        if (!Array.isArray(permissions)) return [];
        return permissions.filter((p) => p != null && typeof p === "object" && p.feature == null && typeof p.streamId === "string");
      }
      function fnv1a(str) {
        let hash = 2166136261;
        for (let i = 0; i < str.length; i++) {
          hash ^= str.charCodeAt(i);
          hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0).toString(16).padStart(8, "0");
      }
    }
  });

  // node_modules/pryv/src/Auth/AuthController.js
  var require_AuthController = __commonJS({
    "node_modules/pryv/src/Auth/AuthController.js"(exports, module) {
      var utils = require_utils();
      var AuthStates = require_AuthStates();
      var Messages = require_LoginMessages();
      var ProfileStore = require_ProfileStore();
      var handoff = require_handoff();
      var pollUrls = require_pollUrls();
      var PryvError = require_PryvError();
      var { invalidAuthUrlError, refusedState, unreadableAnswerState } = require_pollOutcome();
      var { missingPermissions, permissionsFingerprint } = require_permissionsCoverage();
      var AuthController = class {
        /**
         * Create an AuthController
         * @param {AuthSettings} settings - Authentication settings
         * @param {Service} service - Pryv service instance
         * @param {CustomLoginButton} loginButton - Login button implementation
         */
        constructor(settings, service, loginButton) {
          this.settings = settings;
          validateSettings.call(this, settings);
          this.stateChangeListeners = [];
          if (this.settings.onStateChange) {
            const externalListener = this.settings.onStateChange;
            this.stateChangeListeners.push(function(state) {
              externalListener(filterForExternalListener(state));
            });
          }
          this.service = service;
          this.platform = ProfileStore.platformOf(service);
          this._adoptUnbound = !pageNamesAPlatform();
          this.languageCode = this.settings.authRequest.languageCode || "en";
          this.messages = Messages(this.languageCode);
          this.loginButton = loginButton;
          this._authFlowId = 0;
          this._switchPrevious = null;
          function validateSettings(settings2) {
            if (!settings2) {
              throw new Error("settings cannot be null");
            }
            if (!settings2.authRequest) {
              throw new Error("Missing settings.authRequest");
            }
            settings2.authRequest.returnURL = this.getReturnURL(settings2.authRequest.returnURL);
            if (!settings2.authRequest.requestingAppId) {
              throw new Error("Missing settings.authRequest.requestingAppId");
            }
            if (!settings2.authRequest.requestedPermissions) {
              throw new Error("Missing settings.authRequest.requestedPermissions");
            }
            if (settings2.authRequest.credentialHandoff === "inline") {
              delete settings2.authRequest.credentialHandoff;
            } else if (settings2.authRequest.credentialHandoff == null) {
              settings2.authRequest.credentialHandoff = "shared-secret";
            }
          }
        }
        /**
         * Initialize the auth controller. Call this right after instantiation.
         * @returns {Promise<Service>} Promise resolving to the Service instance
         */
        async init() {
          cancelAuthFlow(this);
          const flowId = this._authFlowId;
          this.serviceInfo = this.service.infoSync();
          this.state = { status: AuthStates.LOADING };
          this.assets = await loadAssets(this);
          const loginButton = this.loginButton;
          let notSignedIn = null;
          if (loginButton != null) {
            if (!this._loginButtonListenerRegistered) {
              this.stateChangeListeners.push(loginButton.onStateChange.bind(loginButton));
              this._loginButtonListenerRegistered = true;
            }
            notSignedIn = await checkAutoLogin(this);
            if (this._authFlowId !== flowId) return this.service;
          }
          if (this.state.status !== AuthStates.AUTHORIZED) {
            this.state = Object.assign({ status: AuthStates.INITIALIZED, serviceInfo: this.serviceInfo }, notSignedIn);
          }
          if (loginButton != null && loginButton.finishAuthProcessAfterRedirection != null) {
            await loginButton.finishAuthProcessAfterRedirection(this);
          }
          return this.service;
        }
        /**
         * Stops poll for auth request
         */
        stopAuthRequest(msg) {
          cancelAuthFlow(this);
          this.state = { status: AuthStates.ERROR, message: msg };
        }
        /**
         * Handle button click - triggers appropriate action based on current state
         * @returns {Promise<void>}
         */
        async handleClick() {
          if (isAuthorized.call(this)) {
            const loginButton = this.loginButton;
            if (loginButton != null && typeof loginButton.showMenu === "function" && loginButton.showMenu() !== false) {
              return;
            }
            this.state = { status: AuthStates.SIGNOUT };
          } else if (isInitialized.call(this)) {
            const started = this.startAuthRequest();
            const flowId = this._authFlowId;
            started.catch((e) => {
              const status = this.state?.status;
              if (status === AuthStates.NEED_SIGNIN && this._authFlowId === flowId) {
                this.state = { status: AuthStates.ERROR, message: "Error while polling for auth request", error: e };
              } else if (status !== AuthStates.ERROR && status !== AuthStates.AUTHORIZED) {
                console.warn("pryv: sign-in request failed", e);
              }
            });
          } else if (this.state.status === AuthStates.SWITCHING) {
          } else if (this.state.status === AuthStates.ERROR) {
            try {
              await this.init();
            } catch (e) {
              if (this.state.status === AuthStates.LOADING) {
                this.state = { status: AuthStates.ERROR, message: "Initializing", error: e };
              }
              throw e;
            }
          } else if (isNeedSignIn.call(this)) {
            this.state = this._state;
          } else {
            console.log('Unhandled action in "handleClick()" for status:', this.state.status);
          }
          function isAuthorized() {
            return this.state.status === AuthStates.AUTHORIZED;
          }
          function isInitialized() {
            return this.state.status === AuthStates.INITIALIZED || this.state.status === AuthStates.REFUSED;
          }
          function isNeedSignIn() {
            return this.state.status === AuthStates.NEED_SIGNIN;
          }
        }
        /**
         * Log out: emit SIGNOUT once, forget the active account and return to
         * INITIALIZED. The other remembered accounts are kept (`all` forgets them
         * too). This is the confirmed logout (no further confirmation).
         * @param {Object} [options]
         * @param {boolean} [options.all] - forget every remembered account
         * @returns {Promise<void>}
         */
        async signOut(options) {
          const all = options?.all === true;
          cancelAuthFlow(this);
          const store = this._readProfiles();
          const loginButton = this.loginButton;
          const stored = loginButton?.getAuthorizationData?.();
          const current = this.state?.username ?? this.state?.from;
          this._signingOut = true;
          try {
            this.state = { status: AuthStates.SIGNOUT };
          } finally {
            this._signingOut = false;
          }
          if (this._authFlowKey != null) handoff.cacheClear(this._authFlowKey);
          const others = current == null ? store.profiles : ProfileStore.remove(store, current).profiles;
          if (!all && others.length > 0 && loginButton != null && typeof loginButton.saveAuthorizationData === "function") {
            this._saveProfiles(Object.assign({}, store, { active: null, profiles: others }));
          } else if (loginButton != null && typeof loginButton.deleteAuthorizationData === "function") {
            const raw = await stored;
            if (this._isOurs(raw) || current != null && raw.platform == null) await loginButton.deleteAuthorizationData();
          }
          await this.init();
        }
        /**
         * The accounts remembered for this app, most recently used first.
         * @returns {Array<{username: string, actingAs?: {username: string, delegate: string}, active: boolean, available: boolean}>}
         */
        profiles() {
          const current = this.currentProfile();
          return this._readProfiles().profiles.map((p) => {
            const out = { username: p.username, active: current != null && current.username === p.username, available: p.unavailable !== true };
            if (p.actingAs != null) out.actingAs = p.actingAs;
            return out;
          });
        }
        /**
         * The signed-in account, or null.
         * @returns {{username: string, actingAs?: {username: string, delegate: string}}|null}
         */
        currentProfile() {
          if (this.state?.status !== AuthStates.AUTHORIZED || this.state.profile == null) return null;
          const out = { username: this.state.profile.username };
          if (this.state.profile.actingAs != null) out.actingAs = this.state.profile.actingAs;
          return out;
        }
        /**
         * Switch to another account. `username` null means the signed-in person's
         * own account (switch back). A remembered account whose access is still
         * valid is activated without a sign-in; otherwise the auth request runs
         * again, asking for that account (`actAs`). Emits SWITCHING first; ends in
         * AUTHORIZED, or back on the previous account when the sign-in is refused.
         * @param {string|null} username
         * @returns {Promise<void>}
         */
        async switchTo(username) {
          const store = this._readProfiles();
          const current = this.currentProfile();
          let target;
          if (username == null) {
            if (current != null && current.actingAs == null) return;
            const delegate = current?.actingAs?.delegate;
            target = delegate != null ? store.profiles.find((p) => p.username === delegate && p.actingAs == null) : store.profiles.find((p) => p.actingAs == null);
          } else {
            if (current != null && current.username === username) return;
            target = store.profiles.find((p) => p.username === username);
          }
          const toUsername = target?.username ?? username ?? null;
          const previous = restorableState(this.state);
          cancelAuthFlow(this);
          const flowId = this._authFlowId;
          this.state = { status: AuthStates.SWITCHING, from: current?.username ?? null, to: toUsername };
          if (target != null && target.unavailable !== true) {
            let info;
            try {
              info = await this._accessInfo(target.apiEndpoint);
            } catch (e) {
              if (this._authFlowId !== flowId) throw e;
              this.state = previous ?? { status: AuthStates.INITIALIZED, serviceInfo: this.serviceInfo };
              throw e;
            }
            if (this._authFlowId !== flowId) return;
            if (info != null && info.error == null) {
              const profile = profileFromAccessInfo(target, info);
              const state = { status: AuthStates.AUTHORIZED, username: profile.username, apiEndpoint: profile.apiEndpoint, profile };
              const missing = missingPermissions(this.settings.authRequest.requestedPermissions, info);
              if (missing.length > 0) state.missingPermissions = missing;
              this.state = state;
              return;
            }
            if (!ACCESS_GONE_ERRORS.includes(info?.error?.id)) {
              this.state = previous ?? { status: AuthStates.INITIALIZED, serviceInfo: this.serviceInfo };
              throw new PryvError("Cannot check the access of " + target.username + ": " + (info?.error?.id ?? "unexpected answer"), info?.error);
            }
            this._saveProfiles(ProfileStore.markUnavailable(this._readProfiles(), target.username));
          }
          await this.startAuthRequest({ actAs: username == null ? "deny" : username }, previous);
        }
        /**
         * Sign in to one more account (the popup may offer the accounts the person
         * can act for); the remembered accounts are kept.
         * @returns {Promise<void>}
         */
        async addAccount() {
          const current = this.currentProfile();
          const previous = restorableState(this.state);
          this.state = { status: AuthStates.SWITCHING, from: current?.username ?? null, to: null };
          await this.startAuthRequest({ actAs: "allow" }, previous);
        }
        /**
         * The requested stream permissions that an access does not cover (empty
         * when it covers them all): see `pryv.Auth.missingPermissions`.
         * @param {Object} accessInfo - as `connection.accessInfo()` returns it
         * @returns {Array<Object>}
         */
        missingPermissions(accessInfo) {
          return missingPermissions(this.settings.authRequest.requestedPermissions, accessInfo);
        }
        /**
         * @private Fingerprint of this app's requested stream permissions, stored with each
         * sign-in made through the auth request.
         * @returns {string}
         */
        _requestedPermissionsFingerprint() {
          return permissionsFingerprint(this.settings.authRequest.requestedPermissions);
        }
        /**
         * @private The access-info of a stored account (`{ error }` when refused).
         * @param {string} apiEndpoint
         */
        async _accessInfo(apiEndpoint) {
          const Connection = require_Connection();
          try {
            return await new Connection(apiEndpoint).accessInfo(true);
          } catch (e) {
            if (e instanceof PryvError && e.innerObject != null) return { error: e.innerObject };
            throw e;
          }
        }
        /** @internal The remembered accounts of this platform. */
        _readProfiles() {
          const loginButton = this.loginButton;
          if (loginButton == null || typeof loginButton.getAuthorizationData !== "function") return ProfileStore.read(null);
          return ProfileStore.read(this._stored(loginButton.getAuthorizationData()));
        }
        /** @private What the storage holds, when it belongs to this platform (else null). */
        _stored(raw) {
          return ProfileStore.forPlatform(raw, this.platform, this._adoptUnbound);
        }
        /** @private False when the storage holds (`raw`) the sign-in of another platform, or may. */
        _isOurs(raw) {
          if (raw == null || typeof raw !== "object" || raw.deleted === true) return true;
          return this._stored(raw) != null;
        }
        /** @private */
        _saveProfiles(store) {
          const loginButton = this.loginButton;
          if (loginButton == null || typeof loginButton.saveAuthorizationData !== "function") return;
          const data = ProfileStore.write(Object.assign({}, store, { platform: this.platform }));
          if (data == null && typeof loginButton.deleteAuthorizationData === "function") {
            const raw = loginButton.getAuthorizationData();
            if (typeof raw?.then !== "function" && this._isOurs(raw)) loginButton.deleteAuthorizationData();
          } else if (data != null) {
            loginButton.saveAuthorizationData(data);
          }
        }
        /**
         * URL of the account app (profile page) for this platform, or null when
         * it cannot be determined. Resolution order: `settings.accountUrl`, then
         * the service's `account`, then the auth page URL of the last auth
         * request with its trailing `/auth` removed.
         * @returns {string|null}
         */
        accountUrl() {
          let base = this.settings.accountUrl || this.serviceInfo?.account || accountUrlFromAuthUrl(this._authUrl);
          if (!utils.isHttpUrl(base)) return null;
          base = base.replace(/\/+$/, "");
          const serviceInfoUrl = this.service?._serviceInfoUrl;
          return base + "/account/profile" + (serviceInfoUrl ? "?pryvServiceInfoUrl=" + encodeURIComponent(serviceInfoUrl) : "");
        }
        /**
         * Open the account app in a new tab.
         * @returns {string|null} the URL opened, or null when unknown
         */
        openAccountApp() {
          const url = this.accountUrl();
          if (url != null) window.open(url, "_blank", "noopener");
          return url;
        }
        /**
         * Compute the return URL for authentication redirect.
         * Used only in browser environments.
         * @param {string|false} [returnURL] - The return URL setting ('auto#', 'self#', or custom URL)
         * @param {string} [windowLocationForTest] - Mock window.location.href for testing
         * @param {string|Navigator} [navigatorForTests] - Mock navigator for testing (defaults to the browser's own)
         * @returns {string|boolean} The computed return URL, or false if using popup mode
         */
        getReturnURL(returnURL2, windowLocationForTest, navigatorForTests) {
          const RETURN_URL_AUTO = "auto";
          const nav = navigatorForTests ?? globalThis.navigator;
          returnURL2 = returnURL2 || RETURN_URL_AUTO + "#";
          const trailer = returnURL2.slice(-1);
          if ("#&?".indexOf(trailer) < 0) {
            throw new Error('Pryv access: Last character of --returnURL setting-- is not "?", "&" or "#": ' + returnURL2);
          }
          if (returnUrlIsAuto(returnURL2) && !utils.browserIsMobileOrTablet(nav)) {
            return false;
          } else if (returnUrlIsAuto(returnURL2) && utils.browserIsMobileOrTablet(nav) || returnURL2.indexOf("self") === 0) {
            const locationHref = windowLocationForTest || window.location.href;
            returnURL2 = locationHref + returnURL2.substring(4);
          }
          return utils.cleanURLFromPrYvParams(returnURL2);
          function returnUrlIsAuto(returnURL3) {
            return returnURL3.indexOf(RETURN_URL_AUTO) === 0;
          }
        }
        /**
         * Start the authentication request and polling process
         * @param {Object} [overrides] - auth request fields for this request only (e.g. `actAs`)
         * @param {Object} [previous] - AUTHORIZED state to return to when this
         *   request (an account switch) does not end in AUTHORIZED
         * @returns {Promise<void>}
         * @see https://pryv.github.io/reference/#auth-request
         */
        async startAuthRequest(overrides, previous) {
          cancelAuthFlow(this);
          const flowId = this._authFlowId;
          this._switchPrevious = previous ?? null;
          const requested = await postAccess.call(this);
          if (this._authFlowId !== flowId) return;
          this.state = requested;
          this._authFlowKey = this.state?.key;
          pollUrls.remember(this.state?.key, this.state?.poll);
          if (this.state?.authUrl) this._authUrl = this.state.authUrl;
          await doPolling.call(this);
          async function postAccess() {
            try {
              const request = Object.assign({}, this.settings.authRequest, overrides);
              if (request.actAs === "deny") delete request.actAsManagedOnly;
              const { response, body } = await utils.fetchPost(
                // @ts-ignore - this is bound via .call()
                this.serviceInfo.access,
                request
              );
              if (!response.ok) {
                throw PryvError.fromApiResponse(response, body);
              }
              const authUrl = body?.authUrl || body?.url;
              if (authUrl != null && !utils.isHttpUrl(authUrl)) {
                throw invalidAuthUrlError();
              }
              return body;
            } catch (e) {
              if (this._authFlowId !== flowId) throw e;
              const previous2 = this._switchPrevious;
              this._switchPrevious = null;
              this.state = previous2 ?? {
                status: AuthStates.ERROR,
                message: e.id === "invalid-auth-url" ? e.message : "Requesting access",
                error: e
              };
              throw e;
            }
          }
          async function doPolling() {
            if (this._authFlowId !== flowId || this.state?.status !== AuthStates.NEED_SIGNIN) {
              return;
            }
            const pollResponse = await pollAccess(this.state?.poll);
            if (this._authFlowId !== flowId) return;
            if (pollResponse.status === AuthStates.NEED_SIGNIN) {
              setTimeout(() => {
                doPolling.call(this).catch((e) => {
                  if (this._authFlowId !== flowId) return;
                  const previous2 = this._switchPrevious;
                  this._switchPrevious = null;
                  if (previous2 != null) console.warn("pryv: account switch did not complete (polling failed); keeping the previous account");
                  this.state = previous2 ?? { status: AuthStates.ERROR, message: "Error while polling for auth request", error: e };
                });
              }, this.state?.poll_rate_ms);
            } else {
              if (handoff.isHandoffBody(pollResponse)) {
                try {
                  const entry = await handoff.resolveHandoff(pollResponse, this._authFlowKey);
                  pollResponse.apiEndpoint = entry.apiEndpoint;
                  pollResponse.token = entry.token;
                  pollResponse.username = entry.username;
                  delete pollResponse.handoff;
                } catch (e) {
                  if (this._authFlowId !== flowId) return;
                  const previous3 = this._switchPrevious;
                  this._switchPrevious = null;
                  if (previous3 != null) console.warn("pryv: account switch did not complete (credential hand-off failed); keeping the previous account");
                  this.state = previous3 ?? { status: AuthStates.ERROR, message: "Credential hand-off failed", error: e };
                  return;
                }
                if (this._authFlowId !== flowId) return;
              }
              if (this._authFlowKey != null && pollResponse.key == null) {
                pollResponse.key = this._authFlowKey;
              }
              const previous2 = this._switchPrevious;
              this._switchPrevious = null;
              if (pollResponse.status === AuthStates.AUTHORIZED) {
                pollResponse.profile = ProfileStore.fromAccepted(pollResponse, this._requestedPermissionsFingerprint());
              } else if (previous2 != null) {
                console.warn("pryv: account switch did not complete (" + (pollResponse?.error?.id ?? pollResponse?.message ?? pollResponse?.status) + "); keeping the previous account");
                this.state = previous2;
                return;
              } else if (pollResponse.status === AuthStates.REFUSED) {
                this.state = refusedState(pollResponse, this.serviceInfo);
                if (this._authFlowId !== flowId) return;
                this.state = { status: AuthStates.INITIALIZED, serviceInfo: this.serviceInfo };
                return;
              }
              this.state = pollResponse;
            }
            async function pollAccess(pollUrl) {
              try {
                const { body } = await utils.fetchGet(pollUrl);
                if (body?.status == null) return unreadableAnswerState(body);
                return body;
              } catch (e) {
                return { status: AuthStates.ERROR, message: "Error while polling for auth request", error: e };
              }
            }
          }
        }
        // -------------- state listeners ---------------------
        set state(newState) {
          newState.id = newState.status;
          this._state = newState;
          this.stateChangeListeners.forEach((listener) => {
            try {
              listener(newState);
            } catch (e) {
              console.log("Error during set state ()", e);
            }
          });
        }
        get state() {
          return this._state;
        }
      };
      function filterForExternalListener(state) {
        if (state == null || state.status !== AuthStates.AUTHORIZED) {
          return state;
        }
        if (state.key == null) {
          return state;
        }
        const out = { status: state.status, id: state.id, key: state.key };
        if (state.serviceInfo != null) out.serviceInfo = state.serviceInfo;
        if (state.cmcInvites != null) out.cmcInvites = state.cmcInvites;
        if (state.delegation != null) out.delegation = state.delegation;
        return out;
      }
      function accountUrlFromAuthUrl(authUrl) {
        if (typeof authUrl !== "string") return null;
        let url;
        try {
          url = new URL(authUrl);
        } catch (e) {
          return null;
        }
        const path = url.pathname.replace(/\/+$/, "");
        if (!path.endsWith("/auth")) return null;
        return url.origin + path.slice(0, -"/auth".length);
      }
      function pageNamesAPlatform() {
        const href = globalThis.location?.href;
        if (typeof href !== "string") return false;
        const unescaped = href.replace(/%([0-9a-f]{2})/gi, (m, hex) => String.fromCharCode(parseInt(hex, 16)));
        return /pryvServiceInfoUrl/i.test(href) || /pryvServiceInfoUrl/i.test(unescaped);
      }
      async function checkAutoLogin(authController) {
        const loginButton = authController.loginButton;
        if (loginButton == null) {
          return;
        }
        let storedCredentials = authController._stored(await loginButton.getAuthorizationData());
        if (storedCredentials == null) return;
        const stored = ProfileStore.read(storedCredentials);
        const tokenless = stored.profiles.filter((p) => !ProfileStore.carriesToken(p.apiEndpoint));
        if (tokenless.length > 0) {
          authController._saveProfiles(tokenless.reduce((s, p) => ProfileStore.remove(s, p.username), stored));
          storedCredentials = authController._stored(await loginButton.getAuthorizationData());
          if (storedCredentials == null) return;
        }
        if (typeof storedCredentials.authUrl === "string") authController._authUrl = storedCredentials.authUrl;
        if (Array.isArray(storedCredentials.profiles)) {
          const store = ProfileStore.read(storedCredentials);
          if (store.active == null || !ProfileStore.carriesToken(store.active.apiEndpoint)) return;
          const state2 = { status: AuthStates.AUTHORIZED, username: store.active.username, apiEndpoint: store.active.apiEndpoint, profile: store.active };
          if (store.authUrl != null) state2.authUrl = store.authUrl;
          return await signInIfPermitted(authController, state2);
        }
        if (typeof storedCredentials.apiEndpoint === "string" && !ProfileStore.carriesToken(storedCredentials.apiEndpoint)) return;
        const state = Object.assign({}, { status: AuthStates.AUTHORIZED }, storedCredentials);
        if (typeof state.username === "string" && typeof state.apiEndpoint === "string") {
          state.profile = ProfileStore.profileOf(state);
          delete state.permissionsFingerprint;
        }
        delete state.platform;
        return await signInIfPermitted(authController, state);
      }
      async function signInIfPermitted(authController, state) {
        const requested = authController.settings.authRequest.requestedPermissions;
        const asksForStreams = missingPermissions(requested, null).length > 0;
        const loginButton = authController.loginButton;
        const returning = typeof loginButton?.hasAuthReturn === "function" && loginButton.hasAuthReturn() === true;
        if (!asksForStreams || returning || typeof state.apiEndpoint !== "string") {
          authController.state = state;
          return;
        }
        const flowId = authController._authFlowId;
        let info;
        try {
          info = await authController._accessInfo(state.apiEndpoint);
        } catch (e) {
          info = null;
        }
        if (authController._authFlowId !== flowId) return;
        if (info != null && info.error != null) {
          if (ACCESS_GONE_ERRORS.includes(info.error.id)) {
            if (typeof state.username === "string") {
              authController._saveProfiles(ProfileStore.markUnavailable(authController._readProfiles(), state.username));
            }
            return { reasonId: "STORED_ACCESS_REFUSED" };
          }
          info = null;
        }
        if (info != null) {
          const missing = missingPermissions(requested, info);
          if (missing.length > 0) {
            const delegated = info.delegation?.isDelegatedAccess === true;
            const storedFingerprint = state.profile?.permissionsFingerprint ?? state.permissionsFingerprint;
            const askedAlready = storedFingerprint === authController._requestedPermissionsFingerprint();
            if (!delegated && !askedAlready) {
              return { reasonId: "MISSING_PERMISSIONS", missingPermissions: missing };
            }
            state.missingPermissions = missing;
          }
        }
        authController.state = state;
      }
      function profileFromAccessInfo(stored, info) {
        const profile = { username: stored.username, apiEndpoint: stored.apiEndpoint };
        if (stored.permissionsFingerprint != null) profile.permissionsFingerprint = stored.permissionsFingerprint;
        const d = info.delegation;
        if (d != null && d.isDelegatedAccess === true && typeof d.delegate?.username === "string") {
          profile.actingAs = { username: stored.username, delegate: d.delegate.username };
        }
        return profile;
      }
      var ACCESS_GONE_ERRORS = ["invalid-access-token", "forbidden"];
      function restorableState(state) {
        if (state?.status !== AuthStates.AUTHORIZED) return null;
        const restored = { status: AuthStates.AUTHORIZED, username: state.username, apiEndpoint: state.apiEndpoint };
        if (state.profile != null) restored.profile = state.profile;
        if (state.authUrl != null) restored.authUrl = state.authUrl;
        return restored;
      }
      function cancelAuthFlow(authController) {
        authController._authFlowId = (authController._authFlowId || 0) + 1;
        authController._switchPrevious = null;
      }
      async function loadAssets(authController) {
        let loadedAssets = {};
        try {
          loadedAssets = await authController.service.assets();
          if (typeof location !== "undefined") {
            await loadedAssets.loginButtonLoadCSS();
            const thisMessages = await loadedAssets.loginButtonGetMessages();
            if (thisMessages.LOADING) {
              authController.messages = Messages(authController.languageCode, thisMessages);
            } else {
              console.log("WARNING Messages cannot be loaded using defaults: ", thisMessages);
            }
          }
        } catch (e) {
          authController.state = {
            status: AuthStates.ERROR,
            message: "Cannot fetch button visuals",
            error: e
          };
          throw e;
        }
        return loadedAssets;
      }
      module.exports = AuthController;
    }
  });

  // node_modules/pryv/src/Browser/CookieUtils.js
  var require_CookieUtils = __commonJS({
    "node_modules/pryv/src/Browser/CookieUtils.js"(exports, module) {
      var utils = require_utils();
      module.exports = {
        get,
        set,
        del
      };
      var EXPIRED = ";expires=Thu, 01 Jan 1970 00:00:00 GMT;max-age=0";
      function set(cookieKey, value, expireInDays, options) {
        if (!utils.isBrowser()) return;
        expireInDays = expireInDays || 365;
        const opts = withDefaults(options);
        const name = encodeURIComponent(cookieKey);
        removeCopies(name, opts, opts.path);
        const myDate = /* @__PURE__ */ new Date();
        myDate.setDate(myDate.getDate() + expireInDays);
        document.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + ";expires=" + myDate.toUTCString() + attributes(opts, opts.path, opts.domain);
      }
      function get(cookieKey) {
        const name = encodeURIComponent(cookieKey);
        if (!utils.isBrowser()) return;
        const parts = ("; " + document.cookie).split("; " + name + "=");
        if (parts.length < 2) return;
        try {
          return JSON.parse(decodeURIComponent(parts[parts.length - 1].split(";").shift()));
        } catch (e) {
          return void 0;
        }
      }
      function del(cookieKey, options) {
        if (!utils.isBrowser()) return;
        removeCopies(encodeURIComponent(cookieKey), withDefaults(options), null);
      }
      function withDefaults(options) {
        const opts = Object.assign({}, options);
        if (opts.path == null) opts.path = "/";
        if (opts.secure == null) opts.secure = window.location.protocol === "https:";
        if (opts.sameSite == null) opts.sameSite = "Strict";
        return opts;
      }
      function attributes(opts, path, domain) {
        return (domain != null ? ";domain=" + domain : "") + ";path=" + path + ";SameSite=" + opts.sameSite + (opts.secure ? ";Secure" : "");
      }
      function removeCopies(name, opts, keepPath) {
        const legacyDomain = "." + window.location.hostname;
        const paths = candidatePaths(window.location.pathname);
        if (!paths.includes(opts.path)) paths.push(opts.path);
        for (const path of paths) {
          document.cookie = name + "=" + EXPIRED + attributes(opts, path, legacyDomain);
          if (opts.domain != null && opts.domain !== legacyDomain) {
            document.cookie = name + "=" + EXPIRED + attributes(opts, path, opts.domain);
          }
          if (path !== keepPath || opts.domain != null) document.cookie = name + "=" + EXPIRED + attributes(opts, path, null);
        }
      }
      function candidatePaths(pathname) {
        const paths = ["/"];
        let path = "";
        for (const segment of pathname.split("/").filter(Boolean)) {
          path += "/" + segment;
          paths.push(path, path + "/");
        }
        return paths;
      }
    }
  });

  // node_modules/pryv/src/Browser/buttonHtml.js
  var require_buttonHtml = __commonJS({
    "node_modules/pryv/src/Browser/buttonHtml.js"(exports, module) {
      var utils = require_utils();
      module.exports = { buildButton };
      var TEXT_ID = "pryv-access-btn-text";
      var ELEMENTS = ["div", "span", "p", "br", "b", "i", "strong", "em", "small", "img", "a", "button"];
      var ATTRIBUTES = ["class", "title", "alt", "role", "dir", "lang", "style", "width", "height"];
      var FALLBACK_HTML = '<div id="pryv-access-btn" class="pryv-access-btn-signin"><span class="pryv-access-btn pryv-access-btn-pryv-access-color"><span id="' + TEXT_ID + '"></span></span></div>';
      function buildButton(html, doc) {
        const dropped = /* @__PURE__ */ new Set();
        let fragment = rebuild(html, doc, dropped);
        if (!canShowText(fragment.querySelector("#" + TEXT_ID))) {
          console.warn("pryv: the sign-in button HTML of the service has no usable #" + TEXT_ID + ", using the built-in button");
          fragment = rebuild(FALLBACK_HTML, doc, /* @__PURE__ */ new Set());
        }
        if (dropped.size > 0) {
          console.warn("pryv: removed from the sign-in button HTML of the service: " + Array.from(dropped).join(", "));
        }
        return { fragment, textHolder: fragment.querySelector("#" + TEXT_ID) };
      }
      function canShowText(element) {
        return element != null && !["img", "br"].includes(element.localName);
      }
      function rebuild(html, doc, dropped) {
        const template = doc.createElement("template");
        template.innerHTML = html;
        const fragment = doc.createDocumentFragment();
        copyChildren(template.content, fragment, doc, dropped);
        return fragment;
      }
      function copyChildren(from, to, doc, dropped) {
        for (const node of Array.from(from.childNodes)) {
          if (node.nodeType === 3) {
            to.appendChild(doc.createTextNode(node.nodeValue));
          } else if (node.nodeType === 1) {
            const name = node.localName;
            if (node.namespaceURI !== "http://www.w3.org/1999/xhtml" || !ELEMENTS.includes(name)) {
              dropped.add("<" + name + ">");
              continue;
            }
            const element = doc.createElement(name);
            for (const attribute of Array.from(node.attributes)) {
              if (isAllowed(name, attribute)) element.setAttribute(attribute.name, attribute.value);
              else dropped.add(attribute.name);
            }
            if (name === "button") element.setAttribute("type", "button");
            copyChildren(node, element, doc, dropped);
            to.appendChild(element);
          }
        }
      }
      function isAllowed(elementName, { name, value }) {
        if (name === "id") return value.startsWith("pryv-access-btn");
        if (name === "src") return elementName === "img" && utils.isHttpUrl(value, "");
        return ATTRIBUTES.includes(name) || /^aria-[a-z]+$/.test(name);
      }
    }
  });

  // node_modules/pryv/src/Browser/LoginButton.js
  var require_LoginButton = __commonJS({
    "node_modules/pryv/src/Browser/LoginButton.js"(exports, module) {
      var Cookies = require_CookieUtils();
      var AuthStates = require_AuthStates();
      var AuthController = require_AuthController();
      var ProfileStore = require_ProfileStore();
      var { invalidAuthUrlState, refusedState, unreadableAnswerState } = require_pollOutcome();
      var Messages = require_LoginMessages();
      var handoff = require_handoff();
      var pollUrls = require_pollUrls();
      var utils = require_utils();
      var { buildButton } = require_buttonHtml();
      var PROFILES_COOKIE_SUFFIX = "-profiles";
      var PROFILES_COOKIE_MAX_LENGTH = 3500;
      var LoginButton = class {
        constructor(authSettings, service) {
          this.authSettings = authSettings;
          this.service = service;
          this.serviceInfo = service.infoSync();
          this._cookieOptions = cookieOptions(authSettings);
        }
        /**
         * setup button and load assets
         */
        async init() {
          setupButton(this);
          this.languageCode = this.authSettings.authRequest.languageCode || "en";
          this.messages = Messages(this.languageCode);
          if (this.loginButtonText) {
            await loadAssets(this);
          }
          this._cookieKey = "pryv-libjs-" + this.authSettings.authRequest.requestingAppId;
          this.auth = new AuthController(this.authSettings, this.service, this);
          await this.auth.init();
          return this.service;
        }
        onClick() {
          Promise.resolve(this.auth.handleClick()).catch((e) => {
            if (this.auth.state?.status !== AuthStates.ERROR) console.warn("pryv: sign-in button click failed", e);
          });
        }
        async onStateChange(state) {
          switch (state.status) {
            case AuthStates.LOADING:
              this.text = getLoadingMessage(this);
              break;
            case AuthStates.INITIALIZED:
              this.text = getInitializedMessage(this, this.serviceInfo.name);
              break;
            case AuthStates.NEED_SIGNIN: {
              const loginUrl = state.authUrl || state.url;
              if (!utils.isHttpUrl(loginUrl)) {
                this.auth.state = invalidAuthUrlState();
                return;
              }
              if (this.authSettings.authRequest.returnURL) {
                writeAuthFlow(this._cookieKey, { key: state.key, poll: state.poll, authUrl: loginUrl, platform: this.auth?.platform });
                location.href = loginUrl;
                return;
              } else {
                startLoginScreen(this, loginUrl);
              }
              break;
            }
            case AuthStates.AUTHORIZED: {
              const profile = state.profile || ProfileStore.fromAccepted(state);
              this.text = profileLabel(this, profile);
              if (!ProfileStore.carriesToken(profile?.apiEndpoint)) break;
              const store = this.auth != null ? this.auth._readProfiles() : ProfileStore.read(this.getAuthorizationData());
              const authUrl = withoutQuery(state.authUrl || this.auth?._authUrl) || store.authUrl;
              this.saveAuthorizationData(ProfileStore.write(Object.assign(
                ProfileStore.activate(store, profile, this.authSettings.maxProfiles),
                { authUrl, platform: this.auth?.platform }
              )));
              break;
            }
            case AuthStates.SWITCHING:
              this.text = messagesOf(this).SWITCHING || "...";
              break;
            case AuthStates.SIGNOUT: {
              if (this.auth?._signingOut) break;
              this.openMenu({ confirmLogout: true });
              break;
            }
            case AuthStates.ERROR:
              this.text = getErrorMessage(this, state.message);
              break;
            case AuthStates.REFUSED:
              break;
            default:
              console.log("WARNING Unhandled state for Login: " + state.status);
          }
          if (this.loginButtonText) {
            this.loginButtonText.textContent = this.text;
          }
        }
        /**
         * Open the account menu (signed-in account, "Manage my account",
         * "Log out"). Returns false, and opens nothing, when the menu is disabled
         * with `settings.menu: false`: the caller then falls back to the logout
         * confirmation.
         * @returns {boolean}
         */
        showMenu() {
          if (this.authSettings.menu === false) return false;
          return this.openMenu({ confirmLogout: false });
        }
        /**
         * @private Open the account menu, or (`confirmLogout`) the plain "Log out?"
         * confirmation used when the menu is disabled.
         */
        openMenu({ confirmLogout }) {
          if (typeof document === "undefined") return false;
          this.closeMenu();
          this.menu = buildMenu(this, confirmLogout);
          document.body.appendChild(this.menu.overlay);
          this.menu.focusables()[0]?.focus();
          return true;
        }
        /**
         * Close the account menu if it is open. Dismissing the "Log out?" question
         * (anything but "Log out") returns to the signed-in state: SIGNOUT was
         * already emitted by the click, and the button would otherwise stay inert.
         * @param {boolean} [loggingOut] - closed by the "Log out" action
         * @returns {Promise<void>} resolves when any re-init it started is done
         */
        closeMenu(loggingOut) {
          if (this.menu == null) return Promise.resolve();
          const menu = this.menu;
          this.menu = null;
          document.removeEventListener("keydown", menu.onKeyDown, true);
          if (menu.overlay.parentNode != null) menu.overlay.parentNode.removeChild(menu.overlay);
          const previousFocus = (
            /** @type {HTMLElement|null} */
            menu.previousFocus
          );
          if (previousFocus != null && typeof previousFocus.focus === "function") {
            previousFocus.focus();
          }
          if (menu.confirmLogout && !loggingOut) {
            this.pending = this.auth.init().then(() => {
            }, (e) => {
              console.log("Error while re-initializing", e);
            });
            return this.pending;
          }
          return Promise.resolve();
        }
        /**
         * The stored sign-in: the active account from the main cookie (the only
         * cookie versions without account switching read) and the remembered
         * accounts from a second one.
         */
        getAuthorizationData() {
          const active = Cookies.get(this._cookieKey);
          const remembered = Cookies.get(this._cookieKey + PROFILES_COOKIE_SUFFIX);
          if (remembered == null || !Array.isArray(remembered.profiles)) return active;
          const signedIn = active != null && active.deleted !== true;
          if (signedIn && active.platform !== remembered.platform) return active;
          const data = Object.assign({}, signedIn ? active : {}, { profiles: remembered.profiles });
          if (!signedIn && remembered.platform != null) data.platform = remembered.platform;
          if (data.authUrl == null && remembered.authUrl != null) data.authUrl = remembered.authUrl;
          return data;
        }
        /**
         * Store the sign-in. The main cookie holds the active account only (or is
         * removed when none is active), so an older version never reads a list of
         * remembered accounts as a signed-in one.
         */
        saveAuthorizationData(authData) {
          const options = this._cookieOptions;
          if (authData == null) {
            Cookies.del(this._cookieKey, options);
            Cookies.del(this._cookieKey + PROFILES_COOKIE_SUFFIX, options);
            return;
          }
          const { profiles, ...active } = authData;
          if (typeof active.username === "string" && typeof active.apiEndpoint === "string") {
            Cookies.set(this._cookieKey, active, void 0, options);
          } else {
            Cookies.del(this._cookieKey, options);
          }
          if (Array.isArray(profiles)) {
            const remembered = Object.assign(
              { profiles: profiles.slice() },
              active.authUrl != null ? { authUrl: active.authUrl } : {},
              active.platform != null ? { platform: active.platform } : {}
            );
            while (remembered.profiles.length > 1 && encodeURIComponent(JSON.stringify(remembered)).length > PROFILES_COOKIE_MAX_LENGTH) {
              remembered.profiles.pop();
            }
            Cookies.set(this._cookieKey + PROFILES_COOKIE_SUFFIX, remembered, void 0, options);
          } else {
            Cookies.del(this._cookieKey + PROFILES_COOKIE_SUFFIX, options);
          }
        }
        async deleteAuthorizationData() {
          Cookies.del(this._cookieKey, this._cookieOptions);
          Cookies.del(this._cookieKey + PROFILES_COOKIE_SUFFIX, this._cookieOptions);
        }
        /**
         * not mandatory to implement as non-browsers don't have this behaviour
         * @param {*} authController
         */
        async finishAuthProcessAfterRedirection(authController) {
          if (!utils.isBrowser()) return;
          const url = window.location.href;
          const key = retrieveKey(url);
          if (key !== null) {
            const signedIn = authController.state?.status === AuthStates.AUTHORIZED;
            const flow = readAuthFlow(this._cookieKey);
            if (flow == null || flow.key !== key || typeof flow.poll !== "string" || typeof flow.platform !== "string" || flow.platform !== authController.platform) {
              console.warn("pryv: ignoring a sign-in return for a request this page did not start");
              if (!signedIn) {
                authController.state = {
                  status: AuthStates.ERROR,
                  message: "Sign-in return does not match a sign-in started on this page",
                  error: { id: "unexpected-auth-return" }
                };
              }
              cleanUrl();
              return;
            }
            clearAuthFlow(this._cookieKey);
            const pollUrl = flow.poll;
            pollUrls.remember(key, pollUrl);
            authController._authFlowKey = key;
            let body;
            try {
              ({ body } = await utils.fetchGet(pollUrl));
            } catch (e) {
              body = {
                status: AuthStates.ERROR,
                message: "Cannot fetch result",
                error: e
              };
            }
            if (body?.status === AuthStates.REFUSED && !signedIn) {
              const flowId = authController._authFlowId;
              authController.state = refusedState(body, authController.serviceInfo);
              if (authController._authFlowId === flowId) {
                authController.state = { status: AuthStates.INITIALIZED, serviceInfo: authController.serviceInfo };
              }
              cleanUrl();
              return;
            }
            if (body?.status == null) {
              body = unreadableAnswerState(body);
            }
            if (handoff.isHandoffBody(body)) {
              try {
                const entry = await handoff.resolveHandoff(body, key);
                body.apiEndpoint = entry.apiEndpoint;
                body.token = entry.token;
                body.username = entry.username;
                delete body.handoff;
              } catch (e) {
                body = { status: AuthStates.ERROR, message: "Credential hand-off failed", error: e };
              }
            }
            if (body?.status === AuthStates.AUTHORIZED && typeof body.username === "string") {
              body.profile = ProfileStore.fromAccepted(body, typeof authController._requestedPermissionsFingerprint === "function" ? authController._requestedPermissionsFingerprint() : void 0);
              if (typeof flow.authUrl === "string") authController._authUrl = flow.authUrl;
            } else if (signedIn) {
              console.warn("pryv: sign-in by redirection did not complete (" + (body?.error?.id ?? body?.message ?? body?.status) + "); keeping the signed-in account");
              cleanUrl();
              return;
            }
            authController.state = body;
            cleanUrl();
          } else if (utils.cleanURLFromPrYvParams(url) !== url) {
            cleanUrl();
          }
          function cleanUrl() {
            if (window.history && typeof window.history.replaceState === "function") {
              window.history.replaceState(null, "", utils.cleanURLFromPrYvParams(url));
            }
          }
        }
        /**
         * Whether this page is the return of a sign-in by redirection that this
         * page started (its key matches the stored flow): the auth controller then
         * leaves the stored sign-in unchecked, `finishAuthProcessAfterRedirection`
         * replaces it.
         * @returns {boolean}
         */
        hasAuthReturn() {
          if (!utils.isBrowser()) return false;
          const key = retrieveKey(window.location.href);
          if (key == null) return false;
          const flow = readAuthFlow(this._cookieKey);
          return flow != null && flow.key === key && typeof flow.platform === "string" && flow.platform === this.auth?.platform;
        }
      };
      function retrieveKey(url) {
        const params = utils.getQueryParamsFromURL(url);
        const key = params.pryvKey || params.prYvkey;
        if (key) return key;
        const poll = params.pryvPoll || params.prYvpoll;
        if (poll) return poll.split(/[?#]/)[0].split("/").filter(Boolean).pop() || null;
        return null;
      }
      function authFlowStorageKey(cookieKey) {
        return cookieKey + "-authflow";
      }
      function writeAuthFlow(cookieKey, flow) {
        try {
          window.sessionStorage.setItem(authFlowStorageKey(cookieKey), JSON.stringify(flow));
        } catch (e) {
        }
      }
      function readAuthFlow(cookieKey) {
        try {
          const raw = window.sessionStorage.getItem(authFlowStorageKey(cookieKey));
          const flow = raw == null ? null : JSON.parse(raw);
          return flow != null && typeof flow === "object" ? flow : null;
        } catch (e) {
          return null;
        }
      }
      function clearAuthFlow(cookieKey) {
        try {
          window.sessionStorage.removeItem(authFlowStorageKey(cookieKey));
        } catch (e) {
        }
      }
      module.exports = LoginButton;
      async function startLoginScreen(loginButton, authUrl) {
        const screenX = typeof window.screenX !== "undefined" ? window.screenX : window.screenLeft;
        const screenY = typeof window.screenY !== "undefined" ? window.screenY : window.screenTop;
        const outerWidth = typeof window.outerWidth !== "undefined" ? window.outerWidth : document.body.clientWidth;
        const outerHeight = typeof window.outerHeight !== "undefined" ? window.outerHeight : document.body.clientHeight - 22;
        const width = 400;
        const height = 620;
        const left = Math.floor(screenX + (outerWidth - width) / 2);
        const top = Math.floor(screenY + (outerHeight - height) / 2.5);
        const features = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",scrollbars=yes";
        loginButton.popup = window.open(authUrl, "prYv Sign-in", features);
        if (!loginButton.popup) {
          console.log("Pop-up blocked. A second click should allow it.");
        } else if (window.focus) {
          loginButton.popup.focus();
        }
      }
      var MENU_OPTIONS = ["logout", "account", "switch", "info"];
      function profileLabel(loginButton, profile) {
        if (profile?.actingAs == null) return profile?.username;
        return profile.username + " (" + messagesOf(loginButton).VIA + " " + profile.actingAs.delegate + ")";
      }
      function withoutQuery(url) {
        if (typeof url !== "string") return void 0;
        try {
          const u = new URL(url);
          return u.origin + u.pathname;
        } catch (e) {
          return void 0;
        }
      }
      function cookieOptions(settings) {
        const path = settings?.cookiePath;
        if (path == null) return { path: "/" };
        if (typeof path !== "string" || !path.startsWith("/")) {
          throw new Error('authSettings.cookiePath must be a path starting with "/", got: ' + JSON.stringify(path));
        }
        return { path };
      }
      function menuOptions(menuSettings) {
        const options = {};
        MENU_OPTIONS.forEach((o) => {
          options[o] = true;
        });
        if (menuSettings != null && typeof menuSettings === "object") {
          MENU_OPTIONS.forEach((o) => {
            if (menuSettings[o] === false) options[o] = false;
          });
          if (Array.isArray(menuSettings.hide)) {
            menuSettings.hide.forEach((o) => {
              if (o in options) options[o] = false;
            });
          }
        }
        return options;
      }
      var MENU_CSS = `
.pryv-menu-overlay { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 2147483000; display: flex;
  align-items: center; justify-content: center; background: rgba(0, 0, 0, 0.35); }
.pryv-menu { background: #fff; color: #222; min-width: 280px; max-width: 90vw; border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25); font: 14px/1.4 system-ui, sans-serif; }
.pryv-menu-header { display: flex; align-items: flex-start; justify-content: space-between;
  gap: 16px; padding: 16px 16px 8px; }
.pryv-menu-username { font-weight: 600; font-size: 16px; overflow-wrap: anywhere; }
.pryv-menu-info { color: #666; font-size: 13px; padding: 0 16px 12px; overflow-wrap: anywhere; }
.pryv-menu-close { border: 0; background: none; font-size: 20px; line-height: 1; cursor: pointer; color: #666; }
.pryv-menu-actions { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end;
  padding: 12px 16px 16px; border-top: 1px solid #eee; }
.pryv-menu-actions button { padding: 6px 12px; border-radius: 4px; border: 1px solid #ccc;
  background: #f7f7f7; cursor: pointer; font: inherit; }
.pryv-menu-actions button:focus-visible, .pryv-menu-close:focus-visible,
.pryv-menu-switch button:focus-visible { outline: 2px solid #4a90d9; }
.pryv-menu-acting { font-weight: 400; color: #666; font-size: 13px; }
.pryv-menu-switch { padding: 8px 16px 12px; border-top: 1px solid #eee; }
.pryv-menu-switch-title { color: #666; font-size: 13px; margin-bottom: 4px; }
.pryv-menu-switch button { display: block; width: 100%; text-align: left; padding: 6px 8px; border: 0;
  border-radius: 4px; background: none; cursor: pointer; font: inherit; color: inherit; }
.pryv-menu-switch button:hover { background: #f2f2f2; }
.pryv-menu-switch button[aria-current="true"] { font-weight: 600; cursor: default; }
.pryv-menu-switch .pryv-menu-note { color: #888; font-size: 12px; }
`;
      function ensureMenuStyle() {
        if (document.getElementById("pryv-menu-style") != null) return;
        const style = document.createElement("style");
        style.id = "pryv-menu-style";
        style.textContent = MENU_CSS;
        document.head.insertBefore(style, document.head.firstChild);
      }
      function menuElement(tag, className, text) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (text != null) el.textContent = text;
        return el;
      }
      function buildMenu(loginBtn, confirmLogout) {
        ensureMenuStyle();
        const auth = loginBtn.auth;
        const messages = messagesOf(loginBtn);
        const options = confirmLogout ? { logout: true, account: false, info: false } : menuOptions(loginBtn.authSettings.menu);
        const username = confirmLogout ? messages.SIGNOUT_CONFIRM || "Logout?" : auth.state?.username || "";
        const overlay = menuElement("div", "pryv-menu-overlay");
        const dialog = menuElement("div", "pryv-menu");
        dialog.setAttribute("role", confirmLogout ? "alertdialog" : "dialog");
        dialog.setAttribute("aria-modal", "true");
        dialog.setAttribute("aria-labelledby", "pryv-menu-username");
        overlay.appendChild(dialog);
        const header = menuElement("div", "pryv-menu-header");
        const title = menuElement("div", "pryv-menu-username", username || messages.MENU_TITLE);
        title.id = "pryv-menu-username";
        const current = confirmLogout ? null : auth.currentProfile();
        const actingAs = current?.actingAs;
        if (actingAs != null) {
          title.appendChild(menuElement(
            "span",
            "pryv-menu-acting",
            " (" + messages.ACTING_AS + ", " + messages.VIA + " " + actingAs.delegate + ")"
          ));
        }
        header.appendChild(title);
        const close = menuElement("button", "pryv-menu-close", "\xD7");
        close.type = "button";
        close.setAttribute("aria-label", messages.CLOSE);
        close.addEventListener("click", () => loginBtn.closeMenu());
        header.appendChild(close);
        dialog.appendChild(header);
        if (options.info) {
          const serviceName = loginBtn.serviceInfo?.name || "";
          const appId = loginBtn.authSettings.authRequest.requestingAppId;
          dialog.appendChild(menuElement("div", "pryv-menu-info", serviceName + " \xB7 " + messages.APP + ": " + appId));
        }
        const profiles = confirmLogout ? [] : auth.profiles();
        if (options.switch) {
          const section = switchSection(loginBtn, messages, current, profiles);
          if (section != null) dialog.appendChild(section);
        }
        const actions = menuElement("div", "pryv-menu-actions");
        if (options.account && auth.accountUrl() != null) {
          const manageText = actingAs != null ? (messages.MANAGE_ACCOUNT_OF || "").replace("{username}", current.username) : messages.MANAGE_ACCOUNT;
          const manage = menuElement("button", "pryv-menu-account", manageText + " ");
          const arrow = menuElement("span", null, "\u2197");
          arrow.setAttribute("aria-hidden", "true");
          manage.appendChild(arrow);
          manage.type = "button";
          manage.addEventListener("click", () => {
            auth.openAccountApp();
            loginBtn.closeMenu();
          });
          actions.appendChild(manage);
        }
        if (options.logout) {
          const logout = menuElement("button", "pryv-menu-logout", messages.LOGOUT);
          logout.type = "button";
          logout.addEventListener("click", () => {
            loginBtn.closeMenu(true);
            loginBtn.pending = confirmLogout ? loginBtn.deleteAuthorizationData().then(() => auth.init()).then(() => {
            }) : auth.signOut();
          });
          if (confirmLogout) {
            const cancel = menuElement("button", "pryv-menu-cancel", messages.CANCEL);
            cancel.type = "button";
            cancel.addEventListener("click", () => loginBtn.closeMenu());
            actions.appendChild(cancel);
          }
          actions.appendChild(logout);
          if (profiles.length > 1) {
            const logoutAll = menuElement("button", "pryv-menu-logout-all", messages.LOGOUT_ALL);
            logoutAll.type = "button";
            logoutAll.addEventListener("click", () => {
              loginBtn.closeMenu(true);
              loginBtn.pending = auth.signOut({ all: true });
            });
            actions.appendChild(logoutAll);
          }
        }
        dialog.appendChild(actions);
        let pressedOutside = false;
        overlay.addEventListener("mousedown", (event) => {
          pressedOutside = event.target === overlay;
        });
        overlay.addEventListener("click", (event) => {
          if (event.target === overlay && pressedOutside) loginBtn.closeMenu();
          pressedOutside = false;
        });
        const focusables = () => Array.from(dialog.querySelectorAll("button"));
        const onKeyDown = (event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            loginBtn.closeMenu();
          } else if (event.key === "Tab") {
            const list = focusables();
            if (list.length === 0) return;
            const first = list[0];
            const last = list[list.length - 1];
            const active = document.activeElement;
            if (event.shiftKey && (active === first || !dialog.contains(active))) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
              event.preventDefault();
              first.focus();
            }
          }
        };
        document.addEventListener("keydown", onKeyDown, true);
        return { overlay, dialog, onKeyDown, focusables, previousFocus: document.activeElement, confirmLogout };
      }
      function switchSection(loginBtn, messages, current, profiles) {
        const auth = loginBtn.auth;
        const run = (action) => {
          loginBtn.closeMenu();
          loginBtn.pending = action().catch((e) => {
            console.log("Error while switching account", e);
          });
        };
        const section = menuElement("div", "pryv-menu-switch");
        if (current?.actingAs != null) {
          const back = menuElement(
            "button",
            "pryv-menu-switch-back",
            (messages.SWITCH_BACK || "").replace("{username}", current.actingAs.delegate)
          );
          back.type = "button";
          back.addEventListener("click", () => run(() => auth.switchTo(null)));
          section.appendChild(back);
          return section;
        }
        const delegation = loginBtn.serviceInfo?.features?.delegation === true;
        if (profiles.length < 2 && !delegation) return null;
        section.appendChild(menuElement("div", "pryv-menu-switch-title", messages.USE_FOR));
        profiles.forEach((p) => {
          const item = menuElement("button", "pryv-menu-profile", p.username + " ");
          item.type = "button";
          const note = p.actingAs != null ? messages.VIA + " " + p.actingAs.delegate : "(" + messages.ME + ")";
          item.appendChild(menuElement(
            "span",
            "pryv-menu-note",
            note + (p.available ? "" : " \xB7 " + messages.UNAVAILABLE)
          ));
          if (p.active) {
            item.setAttribute("aria-current", "true");
          } else {
            item.addEventListener("click", () => run(() => auth.switchTo(p.username)));
          }
          section.appendChild(item);
        });
        if (delegation) {
          const other = menuElement("button", "pryv-menu-add-account", messages.OTHER_ACCOUNT);
          other.type = "button";
          other.addEventListener("click", () => run(() => auth.addAccount()));
          section.appendChild(other);
        }
        return section;
      }
      function setupButton(loginBtn) {
        loginBtn.loginButtonSpan = document.getElementById(loginBtn.authSettings.spanButtonID);
        if (!loginBtn.loginButtonSpan) {
          console.log("WARNING: pryv.Browser initialized with no spanButtonID");
        } else {
          loginBtn.loginButtonText = loginBtn.loginButtonSpan;
          loginBtn.loginButtonSpan.addEventListener("click", loginBtn.onClick.bind(loginBtn));
        }
      }
      async function loadAssets(loginBtn) {
        const assets = await loginBtn.service.assets();
        const { fragment, textHolder } = buildButton(await assets.loginButtonGetHTML(), document);
        loginBtn.loginButtonSpan.textContent = "";
        loginBtn.loginButtonSpan.appendChild(fragment);
        loginBtn.loginButtonText = textHolder;
      }
      function messagesOf(loginButton) {
        return Object.assign({}, loginButton.messages, loginButton.auth?.messages);
      }
      function getErrorMessage(loginButton, message) {
        return messagesOf(loginButton).ERROR + ": " + message;
      }
      function getLoadingMessage(loginButton) {
        return messagesOf(loginButton).LOADING;
      }
      function getInitializedMessage(loginButton, serviceName) {
        return messagesOf(loginButton).LOGIN + ": " + serviceName;
      }
    }
  });

  // node_modules/pryv/src/Auth/index.js
  var require_Auth = __commonJS({
    "node_modules/pryv/src/Auth/index.js"(exports, module) {
      var AuthController = require_AuthController();
      var AuthStates = require_AuthStates();
      var LoginButton = require_LoginButton();
      var Service = require_Service();
      var { missingPermissions } = require_permissionsCoverage();
      module.exports = {
        setupAuth,
        AuthStates,
        AuthController,
        missingPermissions
      };
      async function setupAuth(settings, serviceInfoUrl, serviceCustomizations, HumanInteraction = LoginButton) {
        const service = new Service(serviceInfoUrl, serviceCustomizations);
        await service.info();
        const humanInteraction = new HumanInteraction(settings, service);
        await humanInteraction.init();
        return service;
      }
    }
  });

  // node_modules/pryv/src/Browser/index.js
  var require_Browser = __commonJS({
    "node_modules/pryv/src/Browser/index.js"(exports, module) {
      var LoginButton = require_LoginButton();
      var CookieUtils = require_CookieUtils();
      var utils = require_utils();
      module.exports = {
        LoginButton,
        CookieUtils,
        // retro-compatibility for lib-js < 2.0.9
        AuthStates: require_AuthStates(),
        setupAuth: require_Auth().setupAuth,
        serviceInfoFromUrl: getServiceInfoFromURL
      };
      function isAbsoluteHttpUrl(value) {
        return utils.isHttpUrl(value, "");
      }
      function getServiceInfoFromURL(url, options) {
        const value = utils.getQueryParamsFromURL(url || window.location.href).pryvServiceInfoUrl;
        if (!isAbsoluteHttpUrl(value)) return void 0;
        const allowed = options?.allowedServiceInfoUrls;
        if (allowed != null && !allowed.some((a) => isAbsoluteHttpUrl(a) && new URL(a).href === new URL(value).href)) {
          console.warn("pryv: the pryvServiceInfoUrl of the page address is not an allowed service");
          return void 0;
        }
        return value;
      }
    }
  });

  // node_modules/oauth4webapi/build/index.js
  var build_exports = {};
  __export(build_exports, {
    AUTHORIZATION_RESPONSE_ERROR: () => AUTHORIZATION_RESPONSE_ERROR,
    AuthorizationResponseError: () => AuthorizationResponseError,
    ClientSecretBasic: () => ClientSecretBasic,
    ClientSecretJwt: () => ClientSecretJwt,
    ClientSecretPost: () => ClientSecretPost,
    DPoP: () => DPoP,
    HTTP_REQUEST_FORBIDDEN: () => HTTP_REQUEST_FORBIDDEN,
    INVALID_REQUEST: () => INVALID_REQUEST,
    INVALID_RESPONSE: () => INVALID_RESPONSE,
    INVALID_SERVER_METADATA: () => INVALID_SERVER_METADATA,
    JSON_ATTRIBUTE_COMPARISON: () => JSON_ATTRIBUTE_COMPARISON,
    JWT_CLAIM_COMPARISON: () => JWT_CLAIM_COMPARISON,
    JWT_TIMESTAMP_CHECK: () => JWT_TIMESTAMP_CHECK,
    JWT_USERINFO_EXPECTED: () => JWT_USERINFO_EXPECTED,
    KEY_SELECTION: () => KEY_SELECTION,
    MISSING_SERVER_METADATA: () => MISSING_SERVER_METADATA,
    None: () => None,
    OperationProcessingError: () => OperationProcessingError,
    PARSE_ERROR: () => PARSE_ERROR,
    PrivateKeyJwt: () => PrivateKeyJwt,
    REQUEST_PROTOCOL_FORBIDDEN: () => REQUEST_PROTOCOL_FORBIDDEN,
    RESPONSE_BODY_ERROR: () => RESPONSE_BODY_ERROR,
    RESPONSE_IS_NOT_CONFORM: () => RESPONSE_IS_NOT_CONFORM,
    RESPONSE_IS_NOT_JSON: () => RESPONSE_IS_NOT_JSON,
    ResponseBodyError: () => ResponseBodyError,
    TlsClientAuth: () => TlsClientAuth,
    UNSUPPORTED_OPERATION: () => UNSUPPORTED_OPERATION,
    UnsupportedOperationError: () => UnsupportedOperationError,
    WWWAuthenticateChallengeError: () => WWWAuthenticateChallengeError,
    WWW_AUTHENTICATE_CHALLENGE: () => WWW_AUTHENTICATE_CHALLENGE,
    _expectedIssuer: () => _expectedIssuer,
    _nodiscoverycheck: () => _nodiscoverycheck,
    _nopkce: () => _nopkce,
    allowInsecureRequests: () => allowInsecureRequests,
    authorizationCodeGrantRequest: () => authorizationCodeGrantRequest,
    backchannelAuthenticationGrantRequest: () => backchannelAuthenticationGrantRequest,
    backchannelAuthenticationRequest: () => backchannelAuthenticationRequest,
    calculatePKCECodeChallenge: () => calculatePKCECodeChallenge,
    checkProtocol: () => checkProtocol,
    clientCredentialsGrantRequest: () => clientCredentialsGrantRequest,
    clockSkew: () => clockSkew,
    clockTolerance: () => clockTolerance,
    customFetch: () => customFetch,
    deviceAuthorizationRequest: () => deviceAuthorizationRequest,
    deviceCodeGrantRequest: () => deviceCodeGrantRequest,
    discoveryRequest: () => discoveryRequest,
    dynamicClientRegistrationRequest: () => dynamicClientRegistrationRequest,
    expectNoNonce: () => expectNoNonce,
    expectNoState: () => expectNoState,
    formPostResponse: () => formPostResponse,
    generateKeyPair: () => generateKeyPair,
    generateRandomCodeVerifier: () => generateRandomCodeVerifier,
    generateRandomNonce: () => generateRandomNonce,
    generateRandomState: () => generateRandomState,
    genericTokenEndpointRequest: () => genericTokenEndpointRequest,
    getContentType: () => getContentType,
    getValidatedIdTokenClaims: () => getValidatedIdTokenClaims,
    introspectionRequest: () => introspectionRequest,
    isDPoPNonceError: () => isDPoPNonceError,
    issueRequestObject: () => issueRequestObject,
    jweDecrypt: () => jweDecrypt,
    jwksCache: () => jwksCache,
    modifyAssertion: () => modifyAssertion,
    nopkce: () => nopkce,
    processAuthorizationCodeResponse: () => processAuthorizationCodeResponse,
    processBackchannelAuthenticationGrantResponse: () => processBackchannelAuthenticationGrantResponse,
    processBackchannelAuthenticationResponse: () => processBackchannelAuthenticationResponse,
    processClientCredentialsResponse: () => processClientCredentialsResponse,
    processDeviceAuthorizationResponse: () => processDeviceAuthorizationResponse,
    processDeviceCodeResponse: () => processDeviceCodeResponse,
    processDiscoveryResponse: () => processDiscoveryResponse,
    processDynamicClientRegistrationResponse: () => processDynamicClientRegistrationResponse,
    processGenericTokenEndpointResponse: () => processGenericTokenEndpointResponse,
    processIntrospectionResponse: () => processIntrospectionResponse,
    processPushedAuthorizationResponse: () => processPushedAuthorizationResponse,
    processRefreshTokenResponse: () => processRefreshTokenResponse,
    processResourceDiscoveryResponse: () => processResourceDiscoveryResponse,
    processRevocationResponse: () => processRevocationResponse,
    processUserInfoResponse: () => processUserInfoResponse,
    protectedResourceRequest: () => protectedResourceRequest,
    pushedAuthorizationRequest: () => pushedAuthorizationRequest,
    refreshTokenGrantRequest: () => refreshTokenGrantRequest,
    resolveEndpoint: () => resolveEndpoint,
    resourceDiscoveryRequest: () => resourceDiscoveryRequest,
    revocationRequest: () => revocationRequest,
    skipAuthTimeCheck: () => skipAuthTimeCheck,
    skipStateCheck: () => skipStateCheck,
    skipSubjectCheck: () => skipSubjectCheck,
    userInfoRequest: () => userInfoRequest,
    validateApplicationLevelSignature: () => validateApplicationLevelSignature,
    validateAuthResponse: () => validateAuthResponse,
    validateCodeIdTokenResponse: () => validateCodeIdTokenResponse,
    validateDetachedSignatureResponse: () => validateDetachedSignatureResponse,
    validateJwtAccessToken: () => validateJwtAccessToken,
    validateJwtAuthResponse: () => validateJwtAuthResponse
  });
  function looseInstanceOf(input, expected) {
    if (input == null) {
      return false;
    }
    try {
      return input instanceof expected || Object.getPrototypeOf(input)[Symbol.toStringTag] === expected.prototype[Symbol.toStringTag];
    } catch {
      return false;
    }
  }
  function CodedTypeError(message, code, cause) {
    const err = new TypeError(message, { cause });
    Object.assign(err, { code });
    return err;
  }
  function buf(input) {
    if (typeof input === "string") {
      return encoder.encode(input);
    }
    return decoder.decode(input);
  }
  function b64u(input) {
    if (typeof input === "string") {
      return decodeBase64Url(input);
    }
    return encodeBase64Url(input);
  }
  function OPE(message, code, cause) {
    return new OperationProcessingError(message, { code, cause });
  }
  async function calculateJwkThumbprint(jwk) {
    let components;
    switch (jwk.kty) {
      case "EC":
        components = {
          crv: jwk.crv,
          kty: jwk.kty,
          x: jwk.x,
          y: jwk.y
        };
        break;
      case "OKP":
        components = {
          crv: jwk.crv,
          kty: jwk.kty,
          x: jwk.x
        };
        break;
      case "AKP":
        components = {
          alg: jwk.alg,
          kty: jwk.kty,
          pub: jwk.pub
        };
        break;
      case "RSA":
        components = {
          e: jwk.e,
          kty: jwk.kty,
          n: jwk.n
        };
        break;
      default:
        throw new UnsupportedOperationError("unsupported JWK key type", { cause: jwk });
    }
    return b64u(await crypto.subtle.digest("SHA-256", buf(JSON.stringify(components))));
  }
  function assertCryptoKey(key, it) {
    if (!(key instanceof CryptoKey)) {
      throw CodedTypeError(`${it} must be a CryptoKey`, ERR_INVALID_ARG_TYPE);
    }
  }
  function assertPrivateKey(key, it) {
    assertCryptoKey(key, it);
    if (key.type !== "private") {
      throw CodedTypeError(`${it} must be a private CryptoKey`, ERR_INVALID_ARG_VALUE);
    }
  }
  function assertPublicKey(key, it) {
    assertCryptoKey(key, it);
    if (key.type !== "public") {
      throw CodedTypeError(`${it} must be a public CryptoKey`, ERR_INVALID_ARG_VALUE);
    }
  }
  function normalizeTyp(value) {
    return value.toLowerCase().replace(/^application\//, "");
  }
  function isJsonObject(input) {
    if (input === null || typeof input !== "object" || Array.isArray(input)) {
      return false;
    }
    return true;
  }
  function prepareHeaders(input) {
    if (looseInstanceOf(input, Headers)) {
      input = Object.fromEntries(input.entries());
    }
    const headers = new Headers(input ?? {});
    if (USER_AGENT && !headers.has("user-agent")) {
      headers.set("user-agent", USER_AGENT);
    }
    if (headers.has("authorization")) {
      throw CodedTypeError('"options.headers" must not include the "authorization" header name', ERR_INVALID_ARG_VALUE);
    }
    return headers;
  }
  function signal(url, value) {
    if (value !== void 0) {
      if (typeof value === "function") {
        value = value(url.href);
      }
      if (!(value instanceof AbortSignal)) {
        throw CodedTypeError('"options.signal" must return or be an instance of AbortSignal', ERR_INVALID_ARG_TYPE);
      }
      return value;
    }
    return void 0;
  }
  function prependWellKnown(url, wellKnown, allowTerminatingSlash = false) {
    if (url.pathname === "/") {
      url.pathname = wellKnown;
    } else {
      const pathname = allowTerminatingSlash ? url.pathname : url.pathname.replace(/\/$/, "");
      url.pathname = `${wellKnown}${pathname}`;
    }
    return url;
  }
  function appendWellKnown(url, wellKnown) {
    url.pathname = `${url.pathname.replace(/\/$/, "")}/${wellKnown}`;
    return url;
  }
  async function performDiscovery(input, urlName, transform, options) {
    if (!(input instanceof URL)) {
      throw CodedTypeError(`"${urlName}" must be an instance of URL`, ERR_INVALID_ARG_TYPE);
    }
    checkProtocol(input, options?.[allowInsecureRequests] !== true);
    const url = transform(new URL(input.href));
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    return (options?.[customFetch] || fetch)(url.href, {
      body: void 0,
      headers: Object.fromEntries(headers.entries()),
      method: "GET",
      redirect: "manual",
      signal: signal(url, options?.signal)
    });
  }
  async function discoveryRequest(issuerIdentifier, options) {
    return performDiscovery(issuerIdentifier, "issuerIdentifier", (url) => {
      switch (options?.algorithm) {
        case void 0:
        case "oidc":
          appendWellKnown(url, ".well-known/openid-configuration");
          break;
        case "oauth2":
          prependWellKnown(url, ".well-known/oauth-authorization-server");
          break;
        default:
          throw CodedTypeError('"options.algorithm" must be "oidc" (default), or "oauth2"', ERR_INVALID_ARG_VALUE);
      }
      return url;
    }, options);
  }
  function assertNumber(input, allow0, it, code, cause) {
    try {
      if (typeof input !== "number" || !Number.isFinite(input)) {
        throw CodedTypeError(`${it} must be a number`, ERR_INVALID_ARG_TYPE, cause);
      }
      if (input > 0)
        return;
      if (allow0) {
        if (input !== 0) {
          throw CodedTypeError(`${it} must be a non-negative number`, ERR_INVALID_ARG_VALUE, cause);
        }
        return;
      }
      throw CodedTypeError(`${it} must be a positive number`, ERR_INVALID_ARG_VALUE, cause);
    } catch (err) {
      if (code) {
        throw OPE(err.message, code, cause);
      }
      throw err;
    }
  }
  function assertString(input, it, code, cause) {
    try {
      if (typeof input !== "string") {
        throw CodedTypeError(`${it} must be a string`, ERR_INVALID_ARG_TYPE, cause);
      }
      if (input.length === 0) {
        throw CodedTypeError(`${it} must not be empty`, ERR_INVALID_ARG_VALUE, cause);
      }
    } catch (err) {
      if (code) {
        throw OPE(err.message, code, cause);
      }
      throw err;
    }
  }
  async function processDiscoveryResponse(expectedIssuerIdentifier, response) {
    const expected = expectedIssuerIdentifier;
    if (!(expected instanceof URL) && expected !== _nodiscoverycheck) {
      throw CodedTypeError('"expectedIssuerIdentifier" must be an instance of URL', ERR_INVALID_ARG_TYPE);
    }
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    if (response.status !== 200) {
      throw OPE('"response" is not a conform Authorization Server Metadata response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
    }
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.issuer, '"response" body "issuer" property', INVALID_RESPONSE, { body: json });
    if (expected !== _nodiscoverycheck && new URL(json.issuer).href !== expected.href) {
      throw OPE('"response" body "issuer" property does not match the expected value', JSON_ATTRIBUTE_COMPARISON, { expected: expected.href, body: json, attribute: "issuer" });
    }
    return json;
  }
  function assertApplicationJson(response) {
    assertContentType(response, "application/json");
  }
  function notJson(response, ...types) {
    let msg = '"response" content-type must be ';
    if (types.length > 2) {
      const last = types.pop();
      msg += `${types.join(", ")}, or ${last}`;
    } else if (types.length === 2) {
      msg += `${types[0]} or ${types[1]}`;
    } else {
      msg += types[0];
    }
    return OPE(msg, RESPONSE_IS_NOT_JSON, response);
  }
  function assertContentTypes(response, ...types) {
    if (!types.includes(getContentType(response))) {
      throw notJson(response, ...types);
    }
  }
  function assertContentType(response, contentType) {
    if (getContentType(response) !== contentType) {
      throw notJson(response, contentType);
    }
  }
  function randomBytes() {
    return b64u(crypto.getRandomValues(new Uint8Array(32)));
  }
  function generateRandomCodeVerifier() {
    return randomBytes();
  }
  function generateRandomState() {
    return randomBytes();
  }
  function generateRandomNonce() {
    return randomBytes();
  }
  async function calculatePKCECodeChallenge(codeVerifier) {
    assertString(codeVerifier, "codeVerifier");
    return b64u(await crypto.subtle.digest("SHA-256", buf(codeVerifier)));
  }
  function getKeyAndKid(input) {
    if (input instanceof CryptoKey) {
      return { key: input };
    }
    if (!(input?.key instanceof CryptoKey)) {
      return {};
    }
    if (input.kid !== void 0) {
      assertString(input.kid, '"kid"');
    }
    return {
      key: input.key,
      kid: input.kid
    };
  }
  function psAlg(key) {
    switch (key.algorithm.hash.name) {
      case "SHA-256":
        return "PS256";
      case "SHA-384":
        return "PS384";
      case "SHA-512":
        return "PS512";
      default:
        throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name", {
          cause: key
        });
    }
  }
  function rsAlg(key) {
    switch (key.algorithm.hash.name) {
      case "SHA-256":
        return "RS256";
      case "SHA-384":
        return "RS384";
      case "SHA-512":
        return "RS512";
      default:
        throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name", {
          cause: key
        });
    }
  }
  function esAlg(key) {
    switch (key.algorithm.namedCurve) {
      case "P-256":
        return "ES256";
      case "P-384":
        return "ES384";
      case "P-521":
        return "ES512";
      default:
        throw new UnsupportedOperationError("unsupported EcKeyAlgorithm namedCurve", { cause: key });
    }
  }
  function keyToJws(key) {
    switch (key.algorithm.name) {
      case "RSA-PSS":
        return psAlg(key);
      case "RSASSA-PKCS1-v1_5":
        return rsAlg(key);
      case "ECDSA":
        return esAlg(key);
      case "Ed25519":
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        return key.algorithm.name;
      case "EdDSA":
        return "Ed25519";
      default:
        throw new UnsupportedOperationError("unsupported CryptoKey algorithm name", { cause: key });
    }
  }
  function getClockSkew(client) {
    const skew = client?.[clockSkew];
    return typeof skew === "number" && Number.isFinite(skew) ? skew : 0;
  }
  function getClockTolerance(client) {
    const tolerance = client?.[clockTolerance];
    return typeof tolerance === "number" && Number.isFinite(tolerance) && Math.sign(tolerance) !== -1 ? tolerance : 30;
  }
  function epochTime() {
    return Math.floor(Date.now() / 1e3);
  }
  function assertAs(as) {
    if (typeof as !== "object" || as === null) {
      throw CodedTypeError('"as" must be an object', ERR_INVALID_ARG_TYPE);
    }
    assertString(as.issuer, '"as.issuer"');
  }
  function assertClient(client) {
    if (typeof client !== "object" || client === null) {
      throw CodedTypeError('"client" must be an object', ERR_INVALID_ARG_TYPE);
    }
    assertString(client.client_id, '"client.client_id"');
  }
  function formUrlEncode(token) {
    return encodeURIComponent(token).replace(/(?:[-_.!~*'()]|%20)/g, (substring) => {
      switch (substring) {
        case "-":
        case "_":
        case ".":
        case "!":
        case "~":
        case "*":
        case "'":
        case "(":
        case ")":
          return `%${substring.charCodeAt(0).toString(16).toUpperCase()}`;
        case "%20":
          return "+";
        default:
          throw new Error();
      }
    });
  }
  function ClientSecretPost(clientSecret) {
    assertString(clientSecret, '"clientSecret"');
    return (_as, client, body, _headers) => {
      body.set("client_id", client.client_id);
      body.set("client_secret", clientSecret);
    };
  }
  function ClientSecretBasic(clientSecret) {
    assertString(clientSecret, '"clientSecret"');
    return (_as, client, _body, headers) => {
      const username = formUrlEncode(client.client_id);
      const password = formUrlEncode(clientSecret);
      const credentials = btoa(`${username}:${password}`);
      headers.set("authorization", `Basic ${credentials}`);
    };
  }
  function clientAssertionPayload(as, client) {
    const now = epochTime() + getClockSkew(client);
    return {
      jti: randomBytes(),
      aud: as.issuer,
      exp: now + 60,
      iat: now,
      nbf: now,
      iss: client.client_id,
      sub: client.client_id
    };
  }
  function PrivateKeyJwt(clientPrivateKey, options) {
    const { key, kid } = getKeyAndKid(clientPrivateKey);
    assertPrivateKey(key, '"clientPrivateKey.key"');
    return async (as, client, body, _headers) => {
      const header = { alg: keyToJws(key), kid };
      const payload = clientAssertionPayload(as, client);
      options?.[modifyAssertion]?.(header, payload);
      body.set("client_id", client.client_id);
      body.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
      body.set("client_assertion", await signJwt(header, payload, key));
    };
  }
  function ClientSecretJwt(clientSecret, options) {
    assertString(clientSecret, '"clientSecret"');
    const modify = options?.[modifyAssertion];
    let key;
    return async (as, client, body, _headers) => {
      key ||= await crypto.subtle.importKey("raw", buf(clientSecret), { hash: "SHA-256", name: "HMAC" }, false, ["sign"]);
      const header = { alg: "HS256" };
      const payload = clientAssertionPayload(as, client);
      modify?.(header, payload);
      const data = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(payload)))}`;
      const hmac = await crypto.subtle.sign(key.algorithm, key, buf(data));
      body.set("client_id", client.client_id);
      body.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
      body.set("client_assertion", `${data}.${b64u(new Uint8Array(hmac))}`);
    };
  }
  function None() {
    return (_as, client, body, _headers) => {
      body.set("client_id", client.client_id);
    };
  }
  function TlsClientAuth() {
    return None();
  }
  async function signJwt(header, payload, key) {
    if (!key.usages.includes("sign")) {
      throw CodedTypeError('CryptoKey instances used for signing assertions must include "sign" in their "usages"', ERR_INVALID_ARG_VALUE);
    }
    const input = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(payload)))}`;
    const signature = b64u(await crypto.subtle.sign(keyToSubtle(key), key, buf(input)));
    return `${input}.${signature}`;
  }
  async function issueRequestObject(as, client, parameters, privateKey, options) {
    assertAs(as);
    assertClient(client);
    parameters = new URLSearchParams(parameters);
    const { key, kid } = getKeyAndKid(privateKey);
    assertPrivateKey(key, '"privateKey.key"');
    parameters.set("client_id", client.client_id);
    const now = epochTime() + getClockSkew(client);
    const claims = {
      ...Object.fromEntries(parameters.entries()),
      jti: randomBytes(),
      aud: as.issuer,
      exp: now + 60,
      iat: now,
      nbf: now,
      iss: client.client_id
    };
    let resource;
    if (parameters.has("resource") && (resource = parameters.getAll("resource")) && resource.length > 1) {
      claims.resource = resource;
    }
    {
      let value = parameters.get("max_age");
      if (value !== null) {
        claims.max_age = parseInt(value, 10);
        assertNumber(claims.max_age, true, '"max_age" parameter');
      }
    }
    {
      let value = parameters.get("claims");
      if (value !== null) {
        try {
          claims.claims = JSON.parse(value);
        } catch (cause) {
          throw OPE('failed to parse the "claims" parameter as JSON', PARSE_ERROR, cause);
        }
        if (!isJsonObject(claims.claims)) {
          throw CodedTypeError('"claims" parameter must be a JSON with a top level object', ERR_INVALID_ARG_VALUE);
        }
      }
    }
    {
      let value = parameters.get("authorization_details");
      if (value !== null) {
        try {
          claims.authorization_details = JSON.parse(value);
        } catch (cause) {
          throw OPE('failed to parse the "authorization_details" parameter as JSON', PARSE_ERROR, cause);
        }
        if (!Array.isArray(claims.authorization_details)) {
          throw CodedTypeError('"authorization_details" parameter must be a JSON with a top level array', ERR_INVALID_ARG_VALUE);
        }
      }
    }
    const header = {
      alg: keyToJws(key),
      typ: "oauth-authz-req+jwt",
      kid
    };
    options?.[modifyAssertion]?.(header, claims);
    return signJwt(header, claims, key);
  }
  async function getSetPublicJwkCache(key, alg) {
    const { kty, e, n, x, y, crv, pub } = await crypto.subtle.exportKey("jwk", key);
    const jwk = { kty, e, n, x, y, crv, pub };
    if (kty === "AKP")
      jwk.alg = alg;
    jwkCache.set(key, jwk);
    return jwk;
  }
  async function publicJwk(key, alg) {
    jwkCache ||= /* @__PURE__ */ new WeakMap();
    return jwkCache.get(key) || getSetPublicJwkCache(key, alg);
  }
  function checkProtocol(url, enforceHttps) {
    if (enforceHttps && url.protocol !== "https:") {
      throw OPE("only requests to HTTPS are allowed", HTTP_REQUEST_FORBIDDEN, url);
    }
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw OPE("only HTTP and HTTPS requests are allowed", REQUEST_PROTOCOL_FORBIDDEN, url);
    }
  }
  function validateEndpoint(value, endpoint, useMtlsAlias, enforceHttps) {
    let url;
    if (typeof value !== "string" || !(url = URLParse(value))) {
      throw OPE(`authorization server metadata does not contain a valid ${useMtlsAlias ? `"as.mtls_endpoint_aliases.${endpoint}"` : `"as.${endpoint}"`}`, value === void 0 ? MISSING_SERVER_METADATA : INVALID_SERVER_METADATA, { attribute: useMtlsAlias ? `mtls_endpoint_aliases.${endpoint}` : endpoint });
    }
    checkProtocol(url, enforceHttps);
    return url;
  }
  function resolveEndpoint(as, endpoint, useMtlsAlias, enforceHttps) {
    if (useMtlsAlias && as.mtls_endpoint_aliases && endpoint in as.mtls_endpoint_aliases) {
      return validateEndpoint(as.mtls_endpoint_aliases[endpoint], endpoint, useMtlsAlias, enforceHttps);
    }
    return validateEndpoint(as[endpoint], endpoint, useMtlsAlias, enforceHttps);
  }
  async function pushedAuthorizationRequest(as, client, clientAuthentication, parameters, options) {
    assertAs(as);
    assertClient(client);
    const url = resolveEndpoint(as, "pushed_authorization_request_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(parameters);
    body.set("client_id", client.client_id);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    if (options?.DPoP !== void 0) {
      assertDPoP(options.DPoP);
      await options.DPoP.addProof(url, headers, "POST");
    }
    const response = await authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
    options?.DPoP?.cacheNonce(response, url);
    return response;
  }
  function isDPoPNonceError(err) {
    if (err instanceof WWWAuthenticateChallengeError) {
      return err.cause.some((challenge) => challenge.scheme === "dpop" && challenge.parameters.error === "use_dpop_nonce");
    }
    if (err instanceof ResponseBodyError) {
      return err.error === "use_dpop_nonce";
    }
    return false;
  }
  function DPoP(client, keyPair, options) {
    return new DPoPHandler(client, keyPair, options);
  }
  function parseWwwAuthenticateChallenges(response) {
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    const header = response.headers.get("www-authenticate");
    if (header === null) {
      return void 0;
    }
    const challenges = [];
    let rest = header;
    while (rest) {
      let match = rest.match(schemeRE);
      const scheme = match?.["1"].toLowerCase();
      if (!scheme) {
        if (/^[, \t]+$/.test(rest)) {
          break;
        }
        return void 0;
      }
      const afterScheme = rest.substring(match[0].length);
      if (afterScheme && !afterScheme.match(/^[\s,]/)) {
        return void 0;
      }
      const spaceMatch = afterScheme.match(/^\s+(.*)$/);
      const hasParameters = !!spaceMatch;
      rest = spaceMatch ? spaceMatch[1] : void 0;
      const parameters = {};
      let token68;
      if (hasParameters) {
        while (rest) {
          let key;
          let value;
          if (match = rest.match(quotedParamRE)) {
            ;
            [, key, value, rest] = match;
            if (value.includes("\\")) {
              value = value.replace(/\\([\s\S])/g, "$1");
            }
            parameters[key.toLowerCase()] = value;
            continue;
          }
          if (match = rest.match(unquotedParamRE)) {
            ;
            [, key, value, rest] = match;
            parameters[key.toLowerCase()] = value;
            continue;
          }
          if (rest.startsWith(",")) {
            break;
          }
          if (match = rest.match(token68ParamRE)) {
            if (Object.keys(parameters).length) {
              break;
            }
            ;
            [, token68, rest] = match;
            break;
          }
          return void 0;
        }
      } else {
        rest = afterScheme || void 0;
      }
      const challenge = { scheme, parameters };
      if (token68) {
        challenge.token68 = token68;
      }
      challenges.push(challenge);
    }
    if (!challenges.length) {
      return void 0;
    }
    return challenges;
  }
  async function processPushedAuthorizationResponse(as, client, response) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 201, "Pushed Authorization Request Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.request_uri, '"response" body "request_uri" property', INVALID_RESPONSE, {
      body: json
    });
    let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
    assertNumber(expiresIn, true, '"response" body "expires_in" property', INVALID_RESPONSE, {
      body: json
    });
    json.expires_in = expiresIn;
    return json;
  }
  async function parseOAuthResponseErrorBody(response) {
    if (response.status > 399 && response.status < 500) {
      assertReadableResponse(response);
      assertApplicationJson(response);
      try {
        const json = await response.clone().json();
        if (isJsonObject(json) && typeof json.error === "string" && json.error.length) {
          return json;
        }
      } catch {
      }
    }
    return void 0;
  }
  async function checkOAuthBodyError(response, expected, label) {
    if (response.status !== expected) {
      checkAuthenticationChallenges(response);
      let err;
      if (err = await parseOAuthResponseErrorBody(response)) {
        await response.body?.cancel();
        throw new ResponseBodyError("server responded with an error in the response body", {
          cause: err,
          response
        });
      }
      throw OPE(`"response" is not a conform ${label} response (unexpected HTTP status code)`, RESPONSE_IS_NOT_CONFORM, response);
    }
  }
  function assertDPoP(option) {
    if (!branded.has(option)) {
      throw CodedTypeError('"options.DPoP" is not a valid DPoPHandle', ERR_INVALID_ARG_VALUE);
    }
  }
  async function resourceRequest(accessToken, method, url, headers, body, options) {
    assertString(accessToken, '"accessToken"');
    if (!(url instanceof URL)) {
      throw CodedTypeError('"url" must be an instance of URL', ERR_INVALID_ARG_TYPE);
    }
    checkProtocol(url, options?.[allowInsecureRequests] !== true);
    headers = prepareHeaders(headers);
    if (options?.DPoP) {
      assertDPoP(options.DPoP);
      await options.DPoP.addProof(url, headers, method.toUpperCase(), accessToken);
    }
    headers.set("authorization", `${headers.has("dpop") ? "DPoP" : "Bearer"} ${accessToken}`);
    const response = await (options?.[customFetch] || fetch)(url.href, {
      duplex: looseInstanceOf(body, ReadableStream) ? "half" : void 0,
      body,
      headers: Object.fromEntries(headers.entries()),
      method,
      redirect: "manual",
      signal: signal(url, options?.signal)
    });
    options?.DPoP?.cacheNonce(response, url);
    return response;
  }
  async function protectedResourceRequest(accessToken, method, url, headers, body, options) {
    const response = await resourceRequest(accessToken, method, url, headers, body, options);
    checkAuthenticationChallenges(response);
    return response;
  }
  async function userInfoRequest(as, client, accessToken, options) {
    assertAs(as);
    assertClient(client);
    const url = resolveEndpoint(as, "userinfo_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const headers = prepareHeaders(options?.headers);
    if (client.userinfo_signed_response_alg) {
      headers.set("accept", "application/jwt");
    } else {
      headers.set("accept", "application/json");
      headers.append("accept", "application/jwt");
    }
    return resourceRequest(accessToken, "GET", url, headers, null, {
      ...options,
      [clockSkew]: getClockSkew(client)
    });
  }
  function setJwksCache(as, jwks, uat, cache) {
    jwksMap ||= /* @__PURE__ */ new WeakMap();
    jwksMap.set(as, {
      jwks,
      uat,
      get age() {
        return epochTime() - this.uat;
      }
    });
    if (cache) {
      Object.assign(cache, { jwks: structuredClone(jwks), uat });
    }
  }
  function isFreshJwksCache(input) {
    if (typeof input !== "object" || input === null) {
      return false;
    }
    if (!("uat" in input) || typeof input.uat !== "number" || epochTime() - input.uat >= 300) {
      return false;
    }
    if (!("jwks" in input) || !isJsonObject(input.jwks) || !Array.isArray(input.jwks.keys) || !Array.prototype.every.call(input.jwks.keys, isJsonObject)) {
      return false;
    }
    return true;
  }
  function clearJwksCache(as, cache) {
    jwksMap?.delete(as);
    delete cache?.jwks;
    delete cache?.uat;
  }
  async function getPublicSigKeyFromIssuerJwksUri(as, options, header) {
    const { alg, kid } = header;
    checkSupportedJwsAlg(header);
    if (!jwksMap?.has(as) && isFreshJwksCache(options?.[jwksCache])) {
      setJwksCache(as, options?.[jwksCache].jwks, options?.[jwksCache].uat);
    }
    let jwks;
    let age;
    if (jwksMap?.has(as)) {
      ;
      ({ jwks, age } = jwksMap.get(as));
      if (age >= 300) {
        clearJwksCache(as, options?.[jwksCache]);
        return getPublicSigKeyFromIssuerJwksUri(as, options, header);
      }
    } else {
      const downloaded = await jwksRequest(as, options);
      jwks = downloaded.jwks;
      age = epochTime() - downloaded.uat;
      setJwksCache(as, jwks, downloaded.uat, options?.[jwksCache]);
    }
    let kty;
    switch (alg.slice(0, 2)) {
      case "RS":
      case "PS":
        kty = "RSA";
        break;
      case "ES":
        kty = "EC";
        break;
      case "Ed":
        kty = "OKP";
        break;
      case "ML":
        kty = "AKP";
        break;
      default:
        throw new UnsupportedOperationError("unsupported JWS algorithm", { cause: { alg } });
    }
    const candidates = jwks.keys.filter((jwk2) => {
      if (jwk2.kty !== kty) {
        return false;
      }
      if (kid !== void 0 && kid !== jwk2.kid) {
        return false;
      }
      if (jwk2.alg !== void 0 && alg !== jwk2.alg) {
        return false;
      }
      if (jwk2.use !== void 0 && jwk2.use !== "sig") {
        return false;
      }
      if (jwk2.key_ops?.includes("verify") === false) {
        return false;
      }
      switch (true) {
        case (alg === "ES256" && jwk2.crv !== "P-256"):
        case (alg === "ES384" && jwk2.crv !== "P-384"):
        case (alg === "ES512" && jwk2.crv !== "P-521"):
        case (alg === "Ed25519" && jwk2.crv !== "Ed25519"):
        case (alg === "EdDSA" && jwk2.crv !== "Ed25519"):
          return false;
      }
      return true;
    });
    const { 0: jwk, length } = candidates;
    if (!length) {
      if (age >= 60) {
        clearJwksCache(as, options?.[jwksCache]);
        return getPublicSigKeyFromIssuerJwksUri(as, options, header);
      }
      throw OPE("error when selecting a JWT verification key, no applicable keys found", KEY_SELECTION, { header, candidates, jwks_uri: new URL(as.jwks_uri) });
    }
    if (length !== 1) {
      throw OPE('error when selecting a JWT verification key, multiple applicable keys found, a "kid" JWT Header Parameter is required', KEY_SELECTION, { header, candidates, jwks_uri: new URL(as.jwks_uri) });
    }
    jwksKeys ||= /* @__PURE__ */ new WeakMap();
    let keys = jwksKeys.get(jwk);
    if (!keys) {
      keys = /* @__PURE__ */ new Map();
      jwksKeys.set(jwk, keys);
    }
    let key = keys.get(alg);
    if (!key) {
      key = importJwk(alg, jwk).catch((cause) => {
        keys.delete(alg);
        throw cause;
      });
      keys.set(alg, key);
    }
    return key;
  }
  function getContentType(input) {
    return input.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  }
  async function processUserInfoResponse(as, client, expectedSubject, response, options) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    checkAuthenticationChallenges(response);
    if (response.status !== 200) {
      throw OPE('"response" is not a conform UserInfo Endpoint response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
    }
    assertReadableResponse(response);
    let json;
    if (getContentType(response) === "application/jwt") {
      const { claims, jwt } = await validateJwt(await response.text(), checkSigningAlgorithm.bind(void 0, client.userinfo_signed_response_alg, as.userinfo_signing_alg_values_supported, void 0), getClockSkew(client), getClockTolerance(client), options?.[jweDecrypt]).then(validateOptionalAudience.bind(void 0, client.client_id)).then(validateOptionalIssuer.bind(void 0, as));
      jwtRefs.set(response, jwt);
      json = claims;
    } else {
      if (client.userinfo_signed_response_alg) {
        throw OPE("JWT UserInfo Response expected", JWT_USERINFO_EXPECTED, response);
      }
      json = await getResponseJsonBody(response);
    }
    assertString(json.sub, '"response" body "sub" property', INVALID_RESPONSE, { body: json });
    switch (expectedSubject) {
      case skipSubjectCheck:
        break;
      default:
        assertString(expectedSubject, '"expectedSubject"');
        if (json.sub !== expectedSubject) {
          throw OPE('unexpected "response" body "sub" property value', JSON_ATTRIBUTE_COMPARISON, {
            expected: expectedSubject,
            body: json,
            attribute: "sub"
          });
        }
    }
    return json;
  }
  async function authenticatedRequest(as, client, clientAuthentication, url, body, headers, options) {
    await clientAuthentication(as, client, body, headers);
    headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    return (options?.[customFetch] || fetch)(url.href, {
      body,
      headers: Object.fromEntries(headers.entries()),
      method: "POST",
      redirect: "manual",
      signal: signal(url, options?.signal)
    });
  }
  async function tokenEndpointRequest(as, client, clientAuthentication, grantType, parameters, options) {
    const url = resolveEndpoint(as, "token_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    parameters.set("grant_type", grantType);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    if (options?.DPoP !== void 0) {
      assertDPoP(options.DPoP);
      await options.DPoP.addProof(url, headers, "POST");
    }
    const response = await authenticatedRequest(as, client, clientAuthentication, url, parameters, headers, options);
    options?.DPoP?.cacheNonce(response, url);
    return response;
  }
  async function refreshTokenGrantRequest(as, client, clientAuthentication, refreshToken, options) {
    assertAs(as);
    assertClient(client);
    assertString(refreshToken, '"refreshToken"');
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("refresh_token", refreshToken);
    return tokenEndpointRequest(as, client, clientAuthentication, "refresh_token", parameters, options);
  }
  function getValidatedIdTokenClaims(ref) {
    if (!ref.id_token) {
      return void 0;
    }
    const claims = idTokenClaims.get(ref);
    if (!claims) {
      throw CodedTypeError('"ref" was already garbage collected or did not resolve from the proper sources', ERR_INVALID_ARG_VALUE);
    }
    return claims;
  }
  async function validateApplicationLevelSignature(as, ref, options) {
    assertAs(as);
    if (!jwtRefs.has(ref)) {
      throw CodedTypeError('"ref" does not contain a processed JWT Response to verify the signature of', ERR_INVALID_ARG_VALUE);
    }
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = jwtRefs.get(ref).split(".");
    const header = JSON.parse(buf(b64u(protectedHeader)));
    if (header.alg.startsWith("HS")) {
      throw new UnsupportedOperationError("unsupported JWS algorithm", { cause: { alg: header.alg } });
    }
    let key;
    key = await getPublicSigKeyFromIssuerJwksUri(as, options, header);
    await validateJwsSignature(protectedHeader, payload, key, b64u(encodedSignature));
  }
  async function processGenericAccessTokenResponse(as, client, response, additionalRequiredIdTokenClaims, decryptFn, recognizedTokenTypes) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Token Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.access_token, '"response" body "access_token" property', INVALID_RESPONSE, {
      body: json
    });
    assertString(json.token_type, '"response" body "token_type" property', INVALID_RESPONSE, {
      body: json
    });
    json.token_type = json.token_type.toLowerCase();
    if (json.expires_in !== void 0) {
      let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
      assertNumber(expiresIn, true, '"response" body "expires_in" property', INVALID_RESPONSE, {
        body: json
      });
      json.expires_in = expiresIn;
    }
    if (json.refresh_token !== void 0) {
      assertString(json.refresh_token, '"response" body "refresh_token" property', INVALID_RESPONSE, {
        body: json
      });
    }
    if (json.scope !== void 0 && typeof json.scope !== "string") {
      throw OPE('"response" body "scope" property must be a string', INVALID_RESPONSE, { body: json });
    }
    if (json.id_token !== void 0) {
      assertString(json.id_token, '"response" body "id_token" property', INVALID_RESPONSE, {
        body: json
      });
      const requiredClaims = [];
      if (client.require_auth_time === true) {
        requiredClaims.push("auth_time");
      }
      if (client.default_max_age !== void 0) {
        assertNumber(client.default_max_age, true, '"client.default_max_age"');
        requiredClaims.push("auth_time");
      }
      if (additionalRequiredIdTokenClaims?.length) {
        requiredClaims.push(...additionalRequiredIdTokenClaims);
      }
      const { claims, jwt } = await validateIdTokenClaims(as, client, json.id_token, requiredClaims, decryptFn);
      validateIdTokenAuthorizedParty(client, claims);
      validateIdTokenAuthTimeClaim(claims);
      jwtRefs.set(response, jwt);
      idTokenClaims.set(json, claims);
    }
    if (recognizedTokenTypes?.[json.token_type] !== void 0) {
      recognizedTokenTypes[json.token_type](response, json);
    } else if (json.token_type !== "dpop" && json.token_type !== "bearer") {
      throw new UnsupportedOperationError("unsupported `token_type` value", { cause: { body: json } });
    }
    return json;
  }
  function checkAuthenticationChallenges(response) {
    let challenges;
    if (challenges = parseWwwAuthenticateChallenges(response)) {
      throw new WWWAuthenticateChallengeError("server responded with a challenge in the WWW-Authenticate HTTP Header", { cause: challenges, response });
    }
  }
  async function processRefreshTokenResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  function validateOptionalAudience(expected, result) {
    if (result.claims.aud !== void 0) {
      return validateAudience(expected, result);
    }
    return result;
  }
  function validateAudience(expected, result) {
    if (Array.isArray(result.claims.aud)) {
      if (!result.claims.aud.includes(expected)) {
        throw OPE('unexpected JWT "aud" (audience) claim value', JWT_CLAIM_COMPARISON, {
          expected,
          claims: result.claims,
          claim: "aud"
        });
      }
    } else if (result.claims.aud !== expected) {
      throw OPE('unexpected JWT "aud" (audience) claim value', JWT_CLAIM_COMPARISON, {
        expected,
        claims: result.claims,
        claim: "aud"
      });
    }
    return result;
  }
  function validateOptionalIssuer(as, result) {
    if (result.claims.iss !== void 0) {
      return validateIssuer(as, result);
    }
    return result;
  }
  function validateIssuer(as, result) {
    const expected = as[_expectedIssuer]?.(result) ?? as.issuer;
    if (result.claims.iss !== expected) {
      throw OPE('unexpected JWT "iss" (issuer) claim value', JWT_CLAIM_COMPARISON, {
        expected,
        claims: result.claims,
        claim: "iss"
      });
    }
    return result;
  }
  function brand(searchParams) {
    branded.add(searchParams);
    return searchParams;
  }
  async function authorizationCodeGrantRequest(as, client, clientAuthentication, callbackParameters, redirectUri, codeVerifier, options) {
    assertAs(as);
    assertClient(client);
    if (!branded.has(callbackParameters)) {
      throw CodedTypeError('"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()', ERR_INVALID_ARG_VALUE);
    }
    assertString(redirectUri, '"redirectUri"');
    const code = getURLSearchParameter(callbackParameters, "code");
    if (!code) {
      throw OPE('no authorization code in "callbackParameters"', INVALID_RESPONSE);
    }
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("redirect_uri", redirectUri);
    parameters.set("code", code);
    if (codeVerifier !== nopkce) {
      assertString(codeVerifier, '"codeVerifier"');
      parameters.set("code_verifier", codeVerifier);
    }
    return tokenEndpointRequest(as, client, clientAuthentication, "authorization_code", parameters, options);
  }
  function validatePresence(required, result) {
    for (const claim of required) {
      if (result.claims[claim] === void 0) {
        throw OPE(`JWT "${claim}" (${jwtClaimNames[claim]}) claim missing`, INVALID_RESPONSE, {
          claims: result.claims
        });
      }
    }
    return result;
  }
  function validateStringClaim(claim, result) {
    if (typeof result.claims[claim] !== "string") {
      throw OPE(`unexpected JWT "${claim}" (${jwtClaimNames[claim]}) claim type`, INVALID_RESPONSE, {
        claims: result.claims
      });
    }
    return result;
  }
  function validateIdTokenClaims(as, client, idToken, requiredClaims, decryptFn) {
    return validateJwt(idToken, checkSigningAlgorithm.bind(void 0, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), decryptFn).then(validatePresence.bind(void 0, ["aud", "exp", "iat", "iss", "sub", ...requiredClaims])).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id)).then(validateStringClaim.bind(void 0, "sub"));
  }
  function resolveIdTokenMaxAge(client, maxAge) {
    if (maxAge === skipAuthTimeCheck) {
      return maxAge;
    }
    const fromClient = maxAge === void 0;
    if (fromClient) {
      maxAge = client.default_max_age;
    }
    if (maxAge === void 0) {
      return skipAuthTimeCheck;
    }
    assertNumber(maxAge, true, fromClient ? '"client.default_max_age"' : '"maxAge" argument');
    return maxAge;
  }
  function validateIdTokenAuthTimeClaim(claims) {
    if (claims.auth_time !== void 0) {
      assertNumber(claims.auth_time, true, 'ID Token "auth_time" (authentication time)', INVALID_RESPONSE, { claims });
    }
  }
  function validateIdTokenAuthTime(client, claims, maxAge) {
    if (maxAge === skipAuthTimeCheck) {
      return;
    }
    const now = epochTime() + getClockSkew(client);
    const tolerance = getClockTolerance(client);
    if (claims.auth_time + maxAge < now - tolerance) {
      throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, { claims, now, tolerance, claim: "auth_time" });
    }
  }
  function validateIdTokenNonce(claims, expectedNonce) {
    const expected = expectedNonce === expectNoNonce ? void 0 : expectedNonce;
    if (claims.nonce !== expected) {
      throw OPE('unexpected ID Token "nonce" claim value', JWT_CLAIM_COMPARISON, {
        expected,
        claims,
        claim: "nonce"
      });
    }
  }
  function validateIdTokenAuthorizedParty(client, claims) {
    if (Array.isArray(claims.aud) && claims.aud.length !== 1) {
      if (claims.azp === void 0) {
        throw OPE('ID Token "aud" (audience) claim includes additional untrusted audiences', JWT_CLAIM_COMPARISON, { claims, claim: "aud" });
      }
      if (claims.azp !== client.client_id) {
        throw OPE('unexpected ID Token "azp" (authorized party) claim value', JWT_CLAIM_COMPARISON, {
          expected: client.client_id,
          claims,
          claim: "azp"
        });
      }
    }
  }
  async function processAuthorizationCodeResponse(as, client, response, options) {
    if (typeof options?.expectedNonce === "string" || typeof options?.maxAge === "number" || options?.requireIdToken) {
      return processAuthorizationCodeOpenIDResponse(as, client, response, options.expectedNonce, options.maxAge, options[jweDecrypt], options.recognizedTokenTypes);
    }
    return processAuthorizationCodeOAuth2Response(as, client, response, options?.maxAge, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function processAuthorizationCodeOpenIDResponse(as, client, response, expectedNonce, maxAge, decryptFn, recognizedTokenTypes) {
    const additionalRequiredClaims = [];
    switch (expectedNonce) {
      case void 0:
        expectedNonce = expectNoNonce;
        break;
      case expectNoNonce:
        break;
      default:
        assertString(expectedNonce, '"expectedNonce" argument');
        additionalRequiredClaims.push("nonce");
    }
    maxAge = resolveIdTokenMaxAge(client, maxAge);
    if (maxAge !== skipAuthTimeCheck) {
      additionalRequiredClaims.push("auth_time");
    }
    const result = await processGenericAccessTokenResponse(as, client, response, additionalRequiredClaims, decryptFn, recognizedTokenTypes);
    assertString(result.id_token, '"response" body "id_token" property', INVALID_RESPONSE, {
      body: result
    });
    const claims = getValidatedIdTokenClaims(result);
    validateIdTokenAuthTime(client, claims, maxAge);
    validateIdTokenNonce(claims, expectedNonce);
    return result;
  }
  async function processAuthorizationCodeOAuth2Response(as, client, response, maxAge, decryptFn, recognizedTokenTypes) {
    const result = await processGenericAccessTokenResponse(as, client, response, void 0, decryptFn, recognizedTokenTypes);
    const claims = getValidatedIdTokenClaims(result);
    if (claims) {
      validateIdTokenAuthTime(client, claims, resolveIdTokenMaxAge(client, maxAge));
      validateIdTokenNonce(claims, expectNoNonce);
    }
    return result;
  }
  function checkJwtType(expected, result) {
    if (typeof result.header.typ !== "string" || normalizeTyp(result.header.typ) !== expected) {
      throw OPE('unexpected JWT "typ" header parameter value', INVALID_RESPONSE, {
        header: result.header
      });
    }
    return result;
  }
  async function clientCredentialsGrantRequest(as, client, clientAuthentication, parameters, options) {
    assertAs(as);
    assertClient(client);
    return tokenEndpointRequest(as, client, clientAuthentication, "client_credentials", new URLSearchParams(parameters), options);
  }
  async function genericTokenEndpointRequest(as, client, clientAuthentication, grantType, parameters, options) {
    assertAs(as);
    assertClient(client);
    assertString(grantType, '"grantType"');
    return tokenEndpointRequest(as, client, clientAuthentication, grantType, new URLSearchParams(parameters), options);
  }
  async function processGenericTokenEndpointResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function processClientCredentialsResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function revocationRequest(as, client, clientAuthentication, token, options) {
    assertAs(as);
    assertClient(client);
    assertString(token, '"token"');
    const url = resolveEndpoint(as, "revocation_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(options?.additionalParameters);
    body.set("token", token);
    const headers = prepareHeaders(options?.headers);
    headers.delete("accept");
    return authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
  }
  async function processRevocationResponse(response) {
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Revocation Endpoint");
    return void 0;
  }
  function assertReadableResponse(response) {
    if (response.bodyUsed) {
      throw CodedTypeError('"response" body has been used already', ERR_INVALID_ARG_VALUE);
    }
  }
  async function introspectionRequest(as, client, clientAuthentication, token, options) {
    assertAs(as);
    assertClient(client);
    assertString(token, '"token"');
    const url = resolveEndpoint(as, "introspection_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(options?.additionalParameters);
    body.set("token", token);
    const headers = prepareHeaders(options?.headers);
    if (options?.requestJwtResponse ?? client.introspection_signed_response_alg) {
      headers.set("accept", "application/token-introspection+jwt");
    } else {
      headers.set("accept", "application/json");
    }
    return authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
  }
  async function processIntrospectionResponse(as, client, response, options) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Introspection Endpoint");
    let json;
    if (getContentType(response) === "application/token-introspection+jwt") {
      assertReadableResponse(response);
      const { claims, jwt } = await validateJwt(await response.text(), checkSigningAlgorithm.bind(void 0, client.introspection_signed_response_alg, as.introspection_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), options?.[jweDecrypt]).then(checkJwtType.bind(void 0, "token-introspection+jwt")).then(validatePresence.bind(void 0, ["aud", "iat", "iss"])).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id));
      jwtRefs.set(response, jwt);
      if (!isJsonObject(claims.token_introspection)) {
        throw OPE('JWT "token_introspection" claim must be a JSON object', INVALID_RESPONSE, {
          claims
        });
      }
      json = claims.token_introspection;
    } else {
      assertReadableResponse(response);
      json = await getResponseJsonBody(response);
    }
    if (typeof json.active !== "boolean") {
      throw OPE('"response" body "active" property must be a boolean', INVALID_RESPONSE, {
        body: json
      });
    }
    return json;
  }
  async function jwksRequest(as, options) {
    assertAs(as);
    const url = resolveEndpoint(as, "jwks_uri", false, options?.[allowInsecureRequests] !== true);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    headers.append("accept", "application/jwk-set+json");
    const requestHeaders = Object.fromEntries(headers.entries());
    const headersKey = JSON.stringify(requestHeaders);
    const fetcher = options?.[customFetch] || fetch;
    const requestSignal = signal(url, options?.signal);
    jwksRequests ||= /* @__PURE__ */ new WeakMap();
    const requests = jwksRequests.get(as) ?? /* @__PURE__ */ new Set();
    for (const pending2 of requests) {
      if (pending2.url === url.href && pending2.headers === headersKey && pending2.fetch === fetcher && pending2.signal === requestSignal) {
        return pending2.promise;
      }
    }
    const pending = {
      url: url.href,
      headers: headersKey,
      fetch: fetcher,
      signal: requestSignal,
      promise: Promise.resolve().then(() => fetcher(url.href, {
        body: void 0,
        headers: requestHeaders,
        method: "GET",
        redirect: "manual",
        signal: requestSignal
      })).then(processJwksResponse).then((jwks) => {
        const uat = epochTime();
        setJwksCache(as, jwks, uat);
        return { jwks, uat };
      }).finally(() => {
        requests.delete(pending);
        if (!requests.size) {
          jwksRequests.delete(as);
        }
      })
    };
    requests.add(pending);
    jwksRequests.set(as, requests);
    return pending.promise;
  }
  async function processJwksResponse(response) {
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    if (response.status !== 200) {
      throw OPE('"response" is not a conform JSON Web Key Set response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
    }
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response, (response2) => assertContentTypes(response2, "application/json", "application/jwk-set+json"));
    if (!Array.isArray(json.keys)) {
      throw OPE('"response" body "keys" property must be an array', INVALID_RESPONSE, { body: json });
    }
    if (!Array.prototype.every.call(json.keys, isJsonObject)) {
      throw OPE('"response" body "keys" property members must be JWK formatted objects', INVALID_RESPONSE, { body: json });
    }
    return json;
  }
  function supported(alg) {
    switch (alg) {
      case "PS256":
      case "ES256":
      case "RS256":
      case "PS384":
      case "ES384":
      case "RS384":
      case "PS512":
      case "ES512":
      case "RS512":
      case "Ed25519":
      case "EdDSA":
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        return true;
      default:
        return false;
    }
  }
  function checkSupportedJwsAlg(header) {
    if (!supported(header.alg)) {
      throw new UnsupportedOperationError('unsupported JWS "alg" identifier', {
        cause: { alg: header.alg }
      });
    }
  }
  function checkRsaKeyAlgorithm(key) {
    const { algorithm } = key;
    if (typeof algorithm.modulusLength !== "number" || algorithm.modulusLength < 2048) {
      throw new UnsupportedOperationError(`unsupported ${algorithm.name} modulusLength`, {
        cause: key
      });
    }
  }
  function ecdsaHashName(key) {
    const { algorithm } = key;
    switch (algorithm.namedCurve) {
      case "P-256":
        return "SHA-256";
      case "P-384":
        return "SHA-384";
      case "P-521":
        return "SHA-512";
      default:
        throw new UnsupportedOperationError("unsupported ECDSA namedCurve", { cause: key });
    }
  }
  function keyToSubtle(key) {
    switch (key.algorithm.name) {
      case "ECDSA":
        return {
          name: key.algorithm.name,
          hash: ecdsaHashName(key)
        };
      case "RSA-PSS": {
        checkRsaKeyAlgorithm(key);
        switch (key.algorithm.hash.name) {
          case "SHA-256":
          case "SHA-384":
          case "SHA-512":
            return {
              name: key.algorithm.name,
              saltLength: parseInt(key.algorithm.hash.name.slice(-3), 10) >> 3
            };
          default:
            throw new UnsupportedOperationError("unsupported RSA-PSS hash name", { cause: key });
        }
      }
      case "RSASSA-PKCS1-v1_5":
        checkRsaKeyAlgorithm(key);
        return key.algorithm.name;
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
      case "Ed25519":
        return key.algorithm.name;
    }
    throw new UnsupportedOperationError("unsupported CryptoKey algorithm name", { cause: key });
  }
  async function validateJwsSignature(protectedHeader, payload, key, signature) {
    const data = buf(`${protectedHeader}.${payload}`);
    const algorithm = keyToSubtle(key);
    const verified = await crypto.subtle.verify(algorithm, key, signature, data);
    if (!verified) {
      throw OPE("JWT signature verification failed", INVALID_RESPONSE, {
        key,
        data,
        signature,
        algorithm
      });
    }
  }
  async function validateJwt(jws, checkAlg, clockSkew2, clockTolerance2, decryptJwt) {
    let { 0: protectedHeader, 1: payload, length } = jws.split(".");
    if (length === 5) {
      if (decryptJwt !== void 0) {
        jws = await decryptJwt(jws);
        ({ 0: protectedHeader, 1: payload, length } = jws.split("."));
      } else {
        throw new UnsupportedOperationError("JWE decryption is not configured", { cause: jws });
      }
    }
    if (length !== 3) {
      throw OPE("Invalid JWT", INVALID_RESPONSE, jws);
    }
    let header;
    try {
      header = JSON.parse(buf(b64u(protectedHeader)));
    } catch (cause) {
      throw OPE("failed to parse JWT Header body as base64url encoded JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(header)) {
      throw OPE("JWT Header must be a top level object", INVALID_RESPONSE, jws);
    }
    checkAlg(header);
    if (header.crit !== void 0) {
      throw new UnsupportedOperationError('no JWT "crit" header parameter extensions are supported', {
        cause: { header }
      });
    }
    let claims;
    try {
      claims = JSON.parse(buf(b64u(payload)));
    } catch (cause) {
      throw OPE("failed to parse JWT Payload body as base64url encoded JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(claims)) {
      throw OPE("JWT Payload must be a top level object", INVALID_RESPONSE, jws);
    }
    const now = epochTime() + clockSkew2;
    if (claims.exp !== void 0) {
      if (typeof claims.exp !== "number") {
        throw OPE('unexpected JWT "exp" (expiration time) claim type', INVALID_RESPONSE, { claims });
      }
      if (claims.exp <= now - clockTolerance2) {
        throw OPE('unexpected JWT "exp" (expiration time) claim value, expiration is past current timestamp', JWT_TIMESTAMP_CHECK, { claims, now, tolerance: clockTolerance2, claim: "exp" });
      }
    }
    if (claims.iat !== void 0) {
      if (typeof claims.iat !== "number") {
        throw OPE('unexpected JWT "iat" (issued at) claim type', INVALID_RESPONSE, { claims });
      }
    }
    if (claims.iss !== void 0) {
      if (typeof claims.iss !== "string") {
        throw OPE('unexpected JWT "iss" (issuer) claim type', INVALID_RESPONSE, { claims });
      }
    }
    if (claims.nbf !== void 0) {
      if (typeof claims.nbf !== "number") {
        throw OPE('unexpected JWT "nbf" (not before) claim type', INVALID_RESPONSE, { claims });
      }
      if (claims.nbf > now + clockTolerance2) {
        throw OPE('unexpected JWT "nbf" (not before) claim value', JWT_TIMESTAMP_CHECK, {
          claims,
          now,
          tolerance: clockTolerance2,
          claim: "nbf"
        });
      }
    }
    if (claims.aud !== void 0) {
      if (typeof claims.aud !== "string" && !Array.isArray(claims.aud)) {
        throw OPE('unexpected JWT "aud" (audience) claim type', INVALID_RESPONSE, { claims });
      }
    }
    return { header, claims, jwt: jws };
  }
  async function validateJwtAuthResponse(as, client, parameters, expectedState, options) {
    assertAs(as);
    assertClient(client);
    if (parameters instanceof URL) {
      parameters = parameters.searchParams;
    }
    if (!(parameters instanceof URLSearchParams)) {
      throw CodedTypeError('"parameters" must be an instance of URLSearchParams, or URL', ERR_INVALID_ARG_TYPE);
    }
    const response = getURLSearchParameter(parameters, "response");
    if (!response) {
      throw OPE('"parameters" does not contain a JARM response', INVALID_RESPONSE);
    }
    const { claims, header, jwt } = await validateJwt(response, checkSigningAlgorithm.bind(void 0, client.authorization_signed_response_alg, as.authorization_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), options?.[jweDecrypt]).then(validatePresence.bind(void 0, ["aud", "exp", "iss"])).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id));
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = jwt.split(".");
    const signature = b64u(encodedSignature);
    const key = await getPublicSigKeyFromIssuerJwksUri(as, options, header);
    await validateJwsSignature(protectedHeader, payload, key, signature);
    const result = new URLSearchParams();
    for (const [key2, value] of Object.entries(claims)) {
      if (typeof value === "string" && key2 !== "aud") {
        result.set(key2, value);
      }
    }
    return validateAuthResponse(as, client, result, expectedState);
  }
  async function idTokenHash(data, header, claimName) {
    let algorithm;
    switch (header.alg) {
      case "RS256":
      case "PS256":
      case "ES256":
        algorithm = "SHA-256";
        break;
      case "RS384":
      case "PS384":
      case "ES384":
        algorithm = "SHA-384";
        break;
      case "RS512":
      case "PS512":
      case "ES512":
      case "Ed25519":
      case "EdDSA":
        algorithm = "SHA-512";
        break;
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        algorithm = { name: "cSHAKE256", length: 512, outputLength: 512 };
        break;
      default:
        throw new UnsupportedOperationError(`unsupported JWS algorithm for ${claimName} calculation`, { cause: { alg: header.alg } });
    }
    const digest = await crypto.subtle.digest(algorithm, buf(data));
    return b64u(digest.slice(0, digest.byteLength / 2));
  }
  async function idTokenHashMatches(data, actual, header, claimName) {
    const expected = await idTokenHash(data, header, claimName);
    return actual === expected;
  }
  async function validateDetachedSignatureResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options) {
    return validateHybridResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options, true);
  }
  async function validateCodeIdTokenResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options) {
    return validateHybridResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options, false);
  }
  async function consumeStream(request) {
    if (request.bodyUsed) {
      throw CodedTypeError("form_post Request instances must contain a readable body", ERR_INVALID_ARG_VALUE, { cause: request });
    }
    return request.text();
  }
  async function formPostResponse(request) {
    if (request.method !== "POST") {
      throw CodedTypeError("form_post responses are expected to use the POST method", ERR_INVALID_ARG_VALUE, { cause: request });
    }
    if (getContentType(request) !== "application/x-www-form-urlencoded") {
      throw CodedTypeError("form_post responses are expected to use the application/x-www-form-urlencoded content-type", ERR_INVALID_ARG_VALUE, { cause: request });
    }
    return consumeStream(request);
  }
  async function validateHybridResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options, fapi) {
    assertAs(as);
    assertClient(client);
    if (parameters instanceof URL) {
      if (!parameters.hash.length) {
        throw CodedTypeError('"parameters" as an instance of URL must contain a hash (fragment) with the Authorization Response parameters', ERR_INVALID_ARG_VALUE);
      }
      parameters = new URLSearchParams(parameters.hash.slice(1));
    } else if (looseInstanceOf(parameters, Request)) {
      parameters = new URLSearchParams(await formPostResponse(parameters));
    } else if (parameters instanceof URLSearchParams) {
      parameters = new URLSearchParams(parameters);
    } else {
      throw CodedTypeError('"parameters" must be an instance of URLSearchParams, URL, or Response', ERR_INVALID_ARG_TYPE);
    }
    const id_token = getURLSearchParameter(parameters, "id_token");
    parameters.delete("id_token");
    switch (expectedState) {
      case void 0:
      case expectNoState:
        break;
      default:
        assertString(expectedState, '"expectedState" argument');
    }
    const result = validateAuthResponse({
      ...as,
      authorization_response_iss_parameter_supported: false
    }, client, parameters, expectedState);
    if (!id_token) {
      throw OPE('"parameters" does not contain an ID Token', INVALID_RESPONSE);
    }
    const code = getURLSearchParameter(parameters, "code");
    if (!code) {
      throw OPE('"parameters" does not contain an Authorization Code', INVALID_RESPONSE);
    }
    const requiredClaims = ["nonce", "c_hash"];
    const state = parameters.get("state");
    if (fapi && (typeof expectedState === "string" || state !== null)) {
      requiredClaims.push("s_hash");
    }
    maxAge = resolveIdTokenMaxAge(client, maxAge);
    if (client.require_auth_time || maxAge !== skipAuthTimeCheck) {
      requiredClaims.push("auth_time");
    }
    const { claims, header, jwt } = await validateIdTokenClaims(as, client, id_token, requiredClaims, options?.[jweDecrypt]);
    const clockSkew2 = getClockSkew(client);
    const now = epochTime() + clockSkew2;
    if (claims.iat < now - 3600) {
      throw OPE('unexpected JWT "iat" (issued at) claim value, it is too far in the past', JWT_TIMESTAMP_CHECK, { now, claims, claim: "iat" });
    }
    assertString(claims.c_hash, 'ID Token "c_hash" (code hash) claim value', INVALID_RESPONSE, {
      claims
    });
    validateIdTokenAuthTimeClaim(claims);
    validateIdTokenAuthTime(client, claims, maxAge);
    assertString(expectedNonce, '"expectedNonce" argument');
    validateIdTokenNonce(claims, expectedNonce);
    validateIdTokenAuthorizedParty(client, claims);
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = jwt.split(".");
    const signature = b64u(encodedSignature);
    const key = await getPublicSigKeyFromIssuerJwksUri(as, options, header);
    await validateJwsSignature(protectedHeader, payload, key, signature);
    if (await idTokenHashMatches(code, claims.c_hash, header, "c_hash") !== true) {
      throw OPE('invalid ID Token "c_hash" (code hash) claim value', JWT_CLAIM_COMPARISON, {
        code,
        alg: header.alg,
        claim: "c_hash",
        claims
      });
    }
    if (fapi && state !== null || claims.s_hash !== void 0) {
      assertString(claims.s_hash, 'ID Token "s_hash" (state hash) claim value', INVALID_RESPONSE, {
        claims
      });
      assertString(state, '"state" response parameter', INVALID_RESPONSE, { parameters });
      if (await idTokenHashMatches(state, claims.s_hash, header, "s_hash") !== true) {
        throw OPE('invalid ID Token "s_hash" (state hash) claim value', JWT_CLAIM_COMPARISON, {
          state,
          alg: header.alg,
          claim: "s_hash",
          claims
        });
      }
    }
    return result;
  }
  function checkSigningAlgorithm(client, issuer, fallback, header) {
    if (client !== void 0) {
      if (typeof client === "string" ? header.alg !== client : !client.includes(header.alg)) {
        throw OPE('unexpected JWT "alg" header parameter', INVALID_RESPONSE, {
          header,
          expected: client,
          reason: "client configuration"
        });
      }
      return;
    }
    if (Array.isArray(issuer)) {
      if (!issuer.includes(header.alg)) {
        throw OPE('unexpected JWT "alg" header parameter', INVALID_RESPONSE, {
          header,
          expected: issuer,
          reason: "authorization server metadata"
        });
      }
      return;
    }
    if (fallback !== void 0) {
      if (typeof fallback === "string" ? header.alg !== fallback : typeof fallback === "function" ? !fallback(header.alg) : !fallback.includes(header.alg)) {
        throw OPE('unexpected JWT "alg" header parameter', INVALID_RESPONSE, {
          header,
          expected: fallback,
          reason: "default value"
        });
      }
      return;
    }
    throw OPE('missing client or server configuration to verify used JWT "alg" header parameter', void 0, { client, issuer, fallback });
  }
  function getURLSearchParameter(parameters, name) {
    const { 0: value, length } = parameters.getAll(name);
    if (length > 1) {
      throw OPE(`"${name}" parameter must be provided only once`, INVALID_RESPONSE);
    }
    return value;
  }
  function validateAuthResponse(as, client, parameters, expectedState) {
    assertAs(as);
    assertClient(client);
    if (parameters instanceof URL) {
      parameters = parameters.searchParams;
    }
    if (!(parameters instanceof URLSearchParams)) {
      throw CodedTypeError('"parameters" must be an instance of URLSearchParams, or URL', ERR_INVALID_ARG_TYPE);
    }
    if (getURLSearchParameter(parameters, "response")) {
      throw OPE('"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()', INVALID_RESPONSE, { parameters });
    }
    const iss = getURLSearchParameter(parameters, "iss");
    const state = getURLSearchParameter(parameters, "state");
    if (!iss && as.authorization_response_iss_parameter_supported) {
      throw OPE('response parameter "iss" (issuer) missing', INVALID_RESPONSE, { parameters });
    }
    if (iss && iss !== as.issuer) {
      throw OPE('unexpected "iss" (issuer) response parameter value', INVALID_RESPONSE, {
        expected: as.issuer,
        parameters
      });
    }
    switch (expectedState) {
      case void 0:
      case expectNoState:
        if (state !== void 0) {
          throw OPE('unexpected "state" response parameter encountered', INVALID_RESPONSE, {
            expected: void 0,
            parameters
          });
        }
        break;
      case skipStateCheck:
        break;
      default:
        assertString(expectedState, '"expectedState" argument');
        if (state !== expectedState) {
          throw OPE(state === void 0 ? 'response parameter "state" missing' : 'unexpected "state" response parameter value', INVALID_RESPONSE, { expected: expectedState, parameters });
        }
    }
    const error = getURLSearchParameter(parameters, "error");
    if (error) {
      throw new AuthorizationResponseError("authorization response from the server is an error", {
        cause: parameters
      });
    }
    const id_token = getURLSearchParameter(parameters, "id_token");
    const token = getURLSearchParameter(parameters, "token");
    if (id_token !== void 0 || token !== void 0) {
      throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
    }
    return brand(new URLSearchParams(parameters));
  }
  function algToSubtle(alg) {
    switch (alg) {
      case "PS256":
      case "PS384":
      case "PS512":
        return { name: "RSA-PSS", hash: `SHA-${alg.slice(-3)}` };
      case "RS256":
      case "RS384":
      case "RS512":
        return { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${alg.slice(-3)}` };
      case "ES256":
      case "ES384":
        return { name: "ECDSA", namedCurve: `P-${alg.slice(-3)}` };
      case "ES512":
        return { name: "ECDSA", namedCurve: "P-521" };
      case "EdDSA":
        return "Ed25519";
      case "Ed25519":
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        return alg;
      default:
        throw new UnsupportedOperationError("unsupported JWS algorithm", { cause: { alg } });
    }
  }
  async function importJwk(alg, jwk) {
    const { ext, key_ops, use, ...key } = jwk;
    return crypto.subtle.importKey("jwk", key, algToSubtle(alg), true, ["verify"]);
  }
  async function deviceAuthorizationRequest(as, client, clientAuthentication, parameters, options) {
    assertAs(as);
    assertClient(client);
    const url = resolveEndpoint(as, "device_authorization_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(parameters);
    body.set("client_id", client.client_id);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    return authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
  }
  async function processDeviceAuthorizationResponse(as, client, response) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Device Authorization Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.device_code, '"response" body "device_code" property', INVALID_RESPONSE, {
      body: json
    });
    assertString(json.user_code, '"response" body "user_code" property', INVALID_RESPONSE, {
      body: json
    });
    assertString(json.verification_uri, '"response" body "verification_uri" property', INVALID_RESPONSE, { body: json });
    let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
    assertNumber(expiresIn, true, '"response" body "expires_in" property', INVALID_RESPONSE, {
      body: json
    });
    json.expires_in = expiresIn;
    if (json.verification_uri_complete !== void 0) {
      assertString(json.verification_uri_complete, '"response" body "verification_uri_complete" property', INVALID_RESPONSE, { body: json });
    }
    if (json.interval !== void 0) {
      assertNumber(json.interval, false, '"response" body "interval" property', INVALID_RESPONSE, {
        body: json
      });
    }
    return json;
  }
  async function deviceCodeGrantRequest(as, client, clientAuthentication, deviceCode, options) {
    assertAs(as);
    assertClient(client);
    assertString(deviceCode, '"deviceCode"');
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("device_code", deviceCode);
    return tokenEndpointRequest(as, client, clientAuthentication, "urn:ietf:params:oauth:grant-type:device_code", parameters, options);
  }
  async function processDeviceCodeResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function generateKeyPair(alg, options) {
    assertString(alg, '"alg"');
    const algorithm = algToSubtle(alg);
    if (alg.startsWith("PS") || alg.startsWith("RS")) {
      Object.assign(algorithm, {
        modulusLength: options?.modulusLength ?? 2048,
        publicExponent: new Uint8Array([1, 0, 1])
      });
    }
    return crypto.subtle.generateKey(algorithm, options?.extractable ?? false, [
      "sign",
      "verify"
    ]);
  }
  function normalizeHtu(htu) {
    const url = new URL(htu);
    url.search = "";
    url.hash = "";
    return url.href;
  }
  async function validateDPoP(request, accessToken, accessTokenClaims, options) {
    const headerValue = request.headers.get("dpop");
    if (headerValue === null) {
      throw OPE("operation indicated DPoP use but the request has no DPoP HTTP Header", INVALID_REQUEST, { headers: request.headers });
    }
    if (request.headers.get("authorization")?.toLowerCase().startsWith("dpop ") === false) {
      throw OPE(`operation indicated DPoP use but the request's Authorization HTTP Header scheme is not DPoP`, INVALID_REQUEST, { headers: request.headers });
    }
    if (typeof accessTokenClaims.cnf?.jkt !== "string") {
      throw OPE("operation indicated DPoP use but the JWT Access Token has no jkt confirmation claim", INVALID_REQUEST, { claims: accessTokenClaims });
    }
    const clockSkew2 = getClockSkew(options);
    const proof = await validateJwt(headerValue, checkSigningAlgorithm.bind(void 0, options?.signingAlgorithms, void 0, supported), clockSkew2, getClockTolerance(options), void 0).then(checkJwtType.bind(void 0, "dpop+jwt")).then(validatePresence.bind(void 0, ["iat", "jti", "ath", "htm", "htu"])).then(validateStringClaim.bind(void 0, "jti"));
    const now = epochTime() + clockSkew2;
    const diff = Math.abs(now - proof.claims.iat);
    if (diff > 300) {
      throw OPE("DPoP Proof iat is not recent enough", JWT_TIMESTAMP_CHECK, {
        now,
        claims: proof.claims,
        claim: "iat"
      });
    }
    if (proof.claims.htm !== request.method) {
      throw OPE("DPoP Proof htm mismatch", JWT_CLAIM_COMPARISON, {
        expected: request.method,
        claims: proof.claims,
        claim: "htm"
      });
    }
    if (typeof proof.claims.htu !== "string" || normalizeHtu(proof.claims.htu) !== normalizeHtu(request.url)) {
      throw OPE("DPoP Proof htu mismatch", JWT_CLAIM_COMPARISON, {
        expected: normalizeHtu(request.url),
        claims: proof.claims,
        claim: "htu"
      });
    }
    {
      const expected = b64u(await crypto.subtle.digest("SHA-256", buf(accessToken)));
      if (proof.claims.ath !== expected) {
        throw OPE("DPoP Proof ath mismatch", JWT_CLAIM_COMPARISON, {
          expected,
          claims: proof.claims,
          claim: "ath"
        });
      }
    }
    const { jwk, alg } = proof.header;
    if (!isJsonObject(jwk)) {
      throw OPE("DPoP Proof jwk header parameter must be a JSON object", INVALID_REQUEST, {
        header: proof.header
      });
    }
    {
      const expected = await calculateJwkThumbprint(jwk);
      if (accessTokenClaims.cnf.jkt !== expected) {
        throw OPE("JWT Access Token confirmation mismatch", JWT_CLAIM_COMPARISON, {
          expected,
          claims: accessTokenClaims,
          claim: "cnf.jkt"
        });
      }
    }
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = headerValue.split(".");
    const signature = b64u(encodedSignature);
    const key = await importJwk(alg, jwk);
    if (key.type !== "public") {
      throw OPE("DPoP Proof jwk header parameter must contain a public key", INVALID_REQUEST, {
        header: proof.header
      });
    }
    await validateJwsSignature(protectedHeader, payload, key, signature);
  }
  async function validateJwtAccessToken(as, request, expectedAudience, options) {
    assertAs(as);
    if (!looseInstanceOf(request, Request)) {
      throw CodedTypeError('"request" must be an instance of Request', ERR_INVALID_ARG_TYPE);
    }
    assertString(expectedAudience, '"expectedAudience"');
    const authorization = request.headers.get("authorization");
    if (authorization === null) {
      throw OPE('"request" is missing an Authorization HTTP Header', INVALID_REQUEST, {
        headers: request.headers
      });
    }
    let { 0: scheme, 1: accessToken, length } = authorization.split(/ +/);
    scheme = scheme.toLowerCase();
    switch (scheme) {
      case "dpop":
      case "bearer":
        break;
      default:
        throw new UnsupportedOperationError("unsupported Authorization HTTP Header scheme", {
          cause: { headers: request.headers }
        });
    }
    if (length !== 2) {
      throw OPE("invalid Authorization HTTP Header format", INVALID_REQUEST, {
        headers: request.headers
      });
    }
    const requiredClaims = [
      "iss",
      "exp",
      "aud",
      "sub",
      "iat",
      "jti",
      "client_id"
    ];
    if (options?.requireDPoP || scheme === "dpop" || request.headers.has("dpop")) {
      requiredClaims.push("cnf");
    }
    const { claims, header } = await validateJwt(accessToken, checkSigningAlgorithm.bind(void 0, options?.signingAlgorithms, void 0, supported), getClockSkew(options), getClockTolerance(options), void 0).then(checkJwtType.bind(void 0, "at+jwt")).then(validatePresence.bind(void 0, requiredClaims)).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, expectedAudience)).catch(reassignRSCode);
    for (const claim of ["client_id", "jti", "sub"]) {
      if (typeof claims[claim] !== "string") {
        throw OPE(`unexpected JWT "${claim}" claim type`, INVALID_REQUEST, { claims });
      }
    }
    if ("cnf" in claims) {
      if (!isJsonObject(claims.cnf)) {
        throw OPE('unexpected JWT "cnf" (confirmation) claim value', INVALID_REQUEST, { claims });
      }
      const { 0: cnf, length: length2 } = Object.keys(claims.cnf);
      if (length2) {
        if (length2 !== 1) {
          throw new UnsupportedOperationError("multiple confirmation claims are not supported", {
            cause: { claims }
          });
        }
        if (cnf !== "jkt") {
          throw new UnsupportedOperationError("unsupported JWT Confirmation method", {
            cause: { claims }
          });
        }
      }
    }
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = accessToken.split(".");
    const signature = b64u(encodedSignature);
    const key = await getPublicSigKeyFromIssuerJwksUri(as, options, header);
    await validateJwsSignature(protectedHeader, payload, key, signature);
    if (options?.requireDPoP || scheme === "dpop" || claims.cnf?.jkt !== void 0 || request.headers.has("dpop")) {
      await validateDPoP(request, accessToken, claims, options).catch(reassignRSCode);
    }
    return claims;
  }
  function reassignRSCode(err) {
    if (err instanceof OperationProcessingError && err?.code === INVALID_REQUEST) {
      err.code = INVALID_RESPONSE;
    }
    throw err;
  }
  async function backchannelAuthenticationRequest(as, client, clientAuthentication, parameters, options) {
    assertAs(as);
    assertClient(client);
    const url = resolveEndpoint(as, "backchannel_authentication_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(parameters);
    body.set("client_id", client.client_id);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    return authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
  }
  async function processBackchannelAuthenticationResponse(as, client, response) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Backchannel Authentication Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.auth_req_id, '"response" body "auth_req_id" property', INVALID_RESPONSE, {
      body: json
    });
    let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
    assertNumber(expiresIn, true, '"response" body "expires_in" property', INVALID_RESPONSE, {
      body: json
    });
    json.expires_in = expiresIn;
    if (json.interval !== void 0) {
      assertNumber(json.interval, false, '"response" body "interval" property', INVALID_RESPONSE, {
        body: json
      });
    }
    return json;
  }
  async function backchannelAuthenticationGrantRequest(as, client, clientAuthentication, authReqId, options) {
    assertAs(as);
    assertClient(client);
    assertString(authReqId, '"authReqId"');
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("auth_req_id", authReqId);
    return tokenEndpointRequest(as, client, clientAuthentication, "urn:openid:params:grant-type:ciba", parameters, options);
  }
  async function processBackchannelAuthenticationGrantResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function dynamicClientRegistrationRequest(as, metadata, options) {
    assertAs(as);
    const url = resolveEndpoint(as, "registration_endpoint", metadata.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    headers.set("content-type", "application/json");
    const method = "POST";
    if (options?.DPoP) {
      assertDPoP(options.DPoP);
      await options.DPoP.addProof(url, headers, method, options.initialAccessToken);
    }
    if (options?.initialAccessToken) {
      headers.set("authorization", `${headers.has("dpop") ? "DPoP" : "Bearer"} ${options.initialAccessToken}`);
    }
    const response = await (options?.[customFetch] || fetch)(url.href, {
      body: JSON.stringify(metadata),
      headers: Object.fromEntries(headers.entries()),
      method,
      redirect: "manual",
      signal: signal(url, options?.signal)
    });
    options?.DPoP?.cacheNonce(response, url);
    return response;
  }
  async function processDynamicClientRegistrationResponse(response) {
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 201, "Dynamic Client Registration Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.client_id, '"response" body "client_id" property', INVALID_RESPONSE, {
      body: json
    });
    if (json.client_secret !== void 0) {
      assertString(json.client_secret, '"response" body "client_secret" property', INVALID_RESPONSE, {
        body: json
      });
    }
    if (json.client_secret) {
      assertNumber(json.client_secret_expires_at, true, '"response" body "client_secret_expires_at" property', INVALID_RESPONSE, {
        body: json
      });
    }
    return json;
  }
  async function resourceDiscoveryRequest(resourceIdentifier, options) {
    return performDiscovery(resourceIdentifier, "resourceIdentifier", (url) => {
      prependWellKnown(url, ".well-known/oauth-protected-resource", true);
      return url;
    }, options);
  }
  async function processResourceDiscoveryResponse(expectedResourceIdentifier, response) {
    const expected = expectedResourceIdentifier;
    if (!(expected instanceof URL) && expected !== _nodiscoverycheck) {
      throw CodedTypeError('"expectedResourceIdentifier" must be an instance of URL', ERR_INVALID_ARG_TYPE);
    }
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    if (response.status !== 200) {
      throw OPE('"response" is not a conform Resource Server Metadata response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
    }
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.resource, '"response" body "resource" property', INVALID_RESPONSE, {
      body: json
    });
    if (expected !== _nodiscoverycheck && new URL(json.resource).href !== expected.href) {
      throw OPE('"response" body "resource" property does not match the expected value', JSON_ATTRIBUTE_COMPARISON, { expected: expected.href, body: json, attribute: "resource" });
    }
    return json;
  }
  async function getResponseJsonBody(response, check = assertApplicationJson) {
    let json;
    try {
      json = await response.json();
    } catch (cause) {
      check(response);
      throw OPE('failed to parse "response" body as JSON', PARSE_ERROR, cause);
    }
    if (!isJsonObject(json)) {
      throw OPE('"response" body must be a top level object', INVALID_RESPONSE, { body: json });
    }
    return json;
  }
  var USER_AGENT, ERR_INVALID_ARG_VALUE, ERR_INVALID_ARG_TYPE, allowInsecureRequests, clockSkew, clockTolerance, customFetch, modifyAssertion, jweDecrypt, jwksCache, encoder, decoder, encodeBase64Url, decodeBase64Url, UnsupportedOperationError, OperationProcessingError, jwkCache, URLParse, DPoPHandler, ResponseBodyError, AuthorizationResponseError, WWWAuthenticateChallengeError, tokenMatch, token68Match, quotedMatch, quotedParamMatcher, paramMatcher, schemeRE, quotedParamRE, unquotedParamRE, token68ParamRE, jwksMap, jwksRequests, jwksKeys, skipSubjectCheck, idTokenClaims, jwtRefs, branded, nopkce, jwtClaimNames, expectNoNonce, skipAuthTimeCheck, WWW_AUTHENTICATE_CHALLENGE, RESPONSE_BODY_ERROR, UNSUPPORTED_OPERATION, AUTHORIZATION_RESPONSE_ERROR, JWT_USERINFO_EXPECTED, PARSE_ERROR, INVALID_RESPONSE, INVALID_REQUEST, RESPONSE_IS_NOT_JSON, RESPONSE_IS_NOT_CONFORM, HTTP_REQUEST_FORBIDDEN, REQUEST_PROTOCOL_FORBIDDEN, JWT_TIMESTAMP_CHECK, JWT_CLAIM_COMPARISON, JSON_ATTRIBUTE_COMPARISON, KEY_SELECTION, MISSING_SERVER_METADATA, INVALID_SERVER_METADATA, skipStateCheck, expectNoState, _nopkce, _nodiscoverycheck, _expectedIssuer;
  var init_build = __esm({
    "node_modules/oauth4webapi/build/index.js"() {
      if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) {
        const NAME = "oauth4webapi";
        const VERSION = "v3.8.9";
        USER_AGENT = `${NAME}/${VERSION}`;
      }
      ERR_INVALID_ARG_VALUE = "ERR_INVALID_ARG_VALUE";
      ERR_INVALID_ARG_TYPE = "ERR_INVALID_ARG_TYPE";
      allowInsecureRequests = /* @__PURE__ */ Symbol();
      clockSkew = /* @__PURE__ */ Symbol();
      clockTolerance = /* @__PURE__ */ Symbol();
      customFetch = /* @__PURE__ */ Symbol();
      modifyAssertion = /* @__PURE__ */ Symbol();
      jweDecrypt = /* @__PURE__ */ Symbol();
      jwksCache = /* @__PURE__ */ Symbol();
      encoder = new TextEncoder();
      decoder = new TextDecoder();
      if (Uint8Array.prototype.toBase64) {
        encodeBase64Url = (input) => {
          if (input instanceof ArrayBuffer) {
            input = new Uint8Array(input);
          }
          return input.toBase64({ alphabet: "base64url", omitPadding: true });
        };
      } else {
        const CHUNK_SIZE = 32768;
        encodeBase64Url = (input) => {
          if (input instanceof ArrayBuffer) {
            input = new Uint8Array(input);
          }
          const arr = [];
          for (let i = 0; i < input.byteLength; i += CHUNK_SIZE) {
            arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
          }
          return btoa(arr.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
        };
      }
      if (Uint8Array.fromBase64) {
        decodeBase64Url = (input) => {
          try {
            return Uint8Array.fromBase64(input, { alphabet: "base64url" });
          } catch (cause) {
            throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
          }
        };
      } else {
        decodeBase64Url = (input) => {
          try {
            const binary = atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) {
              bytes[i] = binary.charCodeAt(i);
            }
            return bytes;
          } catch (cause) {
            throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
          }
        };
      }
      UnsupportedOperationError = class extends Error {
        code;
        constructor(message, options) {
          super(message, options);
          this.name = this.constructor.name;
          this.code = UNSUPPORTED_OPERATION;
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      OperationProcessingError = class extends Error {
        code;
        constructor(message, options) {
          super(message, options);
          this.name = this.constructor.name;
          if (options?.code) {
            this.code = options?.code;
          }
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      URLParse = URL.parse ? (url, base) => URL.parse(url, base) : (url, base) => {
        try {
          return new URL(url, base);
        } catch {
          return null;
        }
      };
      DPoPHandler = class {
        #header;
        #privateKey;
        #publicKey;
        #clockSkew;
        #modifyAssertion;
        #map;
        #jkt;
        constructor(client, keyPair, options) {
          assertPrivateKey(keyPair?.privateKey, '"DPoP.privateKey"');
          assertPublicKey(keyPair?.publicKey, '"DPoP.publicKey"');
          if (!keyPair.publicKey.extractable) {
            throw CodedTypeError('"DPoP.publicKey.extractable" must be true', ERR_INVALID_ARG_VALUE);
          }
          this.#modifyAssertion = options?.[modifyAssertion];
          this.#clockSkew = getClockSkew(client);
          this.#privateKey = keyPair.privateKey;
          this.#publicKey = keyPair.publicKey;
          branded.add(this);
        }
        #get(key) {
          this.#map ||= /* @__PURE__ */ new Map();
          let item = this.#map.get(key);
          if (item) {
            this.#map.delete(key);
            this.#map.set(key, item);
          }
          return item;
        }
        #set(key, val) {
          this.#map ||= /* @__PURE__ */ new Map();
          this.#map.delete(key);
          if (this.#map.size === 100) {
            this.#map.delete(this.#map.keys().next().value);
          }
          this.#map.set(key, val);
        }
        async calculateThumbprint() {
          if (!this.#jkt) {
            const jwk = await crypto.subtle.exportKey("jwk", this.#publicKey);
            this.#jkt ||= await calculateJwkThumbprint(jwk);
          }
          return this.#jkt;
        }
        async addProof(url, headers, htm, accessToken) {
          const alg = keyToJws(this.#privateKey);
          this.#header ||= {
            alg,
            typ: "dpop+jwt",
            jwk: await publicJwk(this.#publicKey, alg)
          };
          const nonce = this.#get(url.origin);
          const now = epochTime() + this.#clockSkew;
          const payload = {
            iat: now,
            jti: randomBytes(),
            htm,
            nonce,
            htu: `${url.origin}${url.pathname}`,
            ath: accessToken ? b64u(await crypto.subtle.digest("SHA-256", buf(accessToken))) : void 0
          };
          this.#modifyAssertion?.(this.#header, payload);
          headers.set("dpop", await signJwt(this.#header, payload, this.#privateKey));
        }
        cacheNonce(response, url) {
          try {
            const nonce = response.headers.get("dpop-nonce");
            if (nonce) {
              this.#set(url.origin, nonce);
            }
          } catch {
          }
        }
      };
      ResponseBodyError = class extends Error {
        cause;
        code;
        error;
        status;
        error_description;
        response;
        constructor(message, options) {
          super(message, options);
          this.name = this.constructor.name;
          this.code = RESPONSE_BODY_ERROR;
          this.cause = options.cause;
          this.error = options.cause.error;
          this.status = options.response.status;
          this.error_description = options.cause.error_description;
          Object.defineProperty(this, "response", { enumerable: false, value: options.response });
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      AuthorizationResponseError = class extends Error {
        cause;
        code;
        error;
        error_description;
        constructor(message, options) {
          super(message, options);
          this.name = this.constructor.name;
          this.code = AUTHORIZATION_RESPONSE_ERROR;
          this.cause = options.cause;
          this.error = options.cause.get("error");
          this.error_description = options.cause.get("error_description") ?? void 0;
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      WWWAuthenticateChallengeError = class extends Error {
        cause;
        code;
        response;
        status;
        constructor(message, options) {
          super(message, options);
          this.name = this.constructor.name;
          this.code = WWW_AUTHENTICATE_CHALLENGE;
          this.cause = options.cause;
          this.status = options.response.status;
          this.response = options.response;
          Object.defineProperty(this, "response", { enumerable: false });
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      tokenMatch = "[a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+";
      token68Match = "[a-zA-Z0-9\\-\\._\\~\\+\\/]+={0,2}";
      quotedMatch = '"((?:[^"\\\\]|\\\\[\\s\\S])*)"';
      quotedParamMatcher = "(" + tokenMatch + ")\\s*=\\s*" + quotedMatch;
      paramMatcher = "(" + tokenMatch + ")\\s*=\\s*(" + tokenMatch + ")";
      schemeRE = new RegExp("^[,\\s]*(" + tokenMatch + ")");
      quotedParamRE = new RegExp("^[,\\s]*" + quotedParamMatcher + "[,\\s]*(.*)");
      unquotedParamRE = new RegExp("^[,\\s]*" + paramMatcher + "[,\\s]*(.*)");
      token68ParamRE = new RegExp("^(" + token68Match + ")(?:$|[,\\s])(.*)");
      skipSubjectCheck = /* @__PURE__ */ Symbol();
      idTokenClaims = /* @__PURE__ */ new WeakMap();
      jwtRefs = /* @__PURE__ */ new WeakMap();
      branded = /* @__PURE__ */ new WeakSet();
      nopkce = /* @__PURE__ */ Symbol();
      jwtClaimNames = {
        aud: "audience",
        c_hash: "code hash",
        client_id: "client id",
        exp: "expiration time",
        iat: "issued at",
        iss: "issuer",
        jti: "jwt id",
        nonce: "nonce",
        s_hash: "state hash",
        sub: "subject",
        ath: "access token hash",
        htm: "http method",
        htu: "http uri",
        cnf: "confirmation",
        auth_time: "authentication time"
      };
      expectNoNonce = /* @__PURE__ */ Symbol();
      skipAuthTimeCheck = /* @__PURE__ */ Symbol();
      WWW_AUTHENTICATE_CHALLENGE = "OAUTH_WWW_AUTHENTICATE_CHALLENGE";
      RESPONSE_BODY_ERROR = "OAUTH_RESPONSE_BODY_ERROR";
      UNSUPPORTED_OPERATION = "OAUTH_UNSUPPORTED_OPERATION";
      AUTHORIZATION_RESPONSE_ERROR = "OAUTH_AUTHORIZATION_RESPONSE_ERROR";
      JWT_USERINFO_EXPECTED = "OAUTH_JWT_USERINFO_EXPECTED";
      PARSE_ERROR = "OAUTH_PARSE_ERROR";
      INVALID_RESPONSE = "OAUTH_INVALID_RESPONSE";
      INVALID_REQUEST = "OAUTH_INVALID_REQUEST";
      RESPONSE_IS_NOT_JSON = "OAUTH_RESPONSE_IS_NOT_JSON";
      RESPONSE_IS_NOT_CONFORM = "OAUTH_RESPONSE_IS_NOT_CONFORM";
      HTTP_REQUEST_FORBIDDEN = "OAUTH_HTTP_REQUEST_FORBIDDEN";
      REQUEST_PROTOCOL_FORBIDDEN = "OAUTH_REQUEST_PROTOCOL_FORBIDDEN";
      JWT_TIMESTAMP_CHECK = "OAUTH_JWT_TIMESTAMP_CHECK_FAILED";
      JWT_CLAIM_COMPARISON = "OAUTH_JWT_CLAIM_COMPARISON_FAILED";
      JSON_ATTRIBUTE_COMPARISON = "OAUTH_JSON_ATTRIBUTE_COMPARISON_FAILED";
      KEY_SELECTION = "OAUTH_KEY_SELECTION_FAILED";
      MISSING_SERVER_METADATA = "OAUTH_MISSING_SERVER_METADATA";
      INVALID_SERVER_METADATA = "OAUTH_INVALID_SERVER_METADATA";
      skipStateCheck = /* @__PURE__ */ Symbol();
      expectNoState = /* @__PURE__ */ Symbol();
      _nopkce = nopkce;
      _nodiscoverycheck = /* @__PURE__ */ Symbol();
      _expectedIssuer = /* @__PURE__ */ Symbol();
    }
  });

  // node_modules/pryv/src/OAuth2Client.js
  var require_OAuth2Client = __commonJS({
    "node_modules/pryv/src/OAuth2Client.js"(exports, module) {
      var oauth = (init_build(), __toCommonJS(build_exports));
      var Connection = require_Connection();
      var SignedConnection = require_SignedConnection();
      var utils = require_utils();
      var VERIFIER_KEY_PREFIX = "pryv-oauth2-verifier:";
      var OAuth2Client = class {
        /**
         * @param {Object} [options]
         * @param {string} [options.authorizationServer] - Issuer / Pryv API base URL. The
         *   discovery document is fetched from `<authorizationServer>/.well-known/oauth-authorization-server`.
         *   (This is the concrete issuer URL, not the `/service/info` URL — client-side
         *   derivation from the per-user `service:api` template is unreliable for multi-core.)
         *   Required at runtime.
         * @param {string} [options.clientId] - App-account client id. Required at runtime.
         * @param {string} [options.redirectUri] - Registered redirect URI. Required at runtime.
         * @param {string} [options.scope] - Consent-offer reference registered on the client, e.g. `'cmc:study-A'`.
         * @param {OAuth2Storage} [options.storage] - Web-Storage-like `{ getItem, setItem, removeItem }`.
         *   Defaults to `globalThis.sessionStorage` in a browser, else an in-memory store.
         * @param {string} [options.refreshToken] - Seed the client with a previously-persisted
         *   refresh token so `refresh()` works after a page reload WITHOUT re-running the
         *   authorization flow. Persist ONLY this value (read it from `client.refreshToken`
         *   or the `onTokenRotated` callback) — never the whole `lastTokenResponse`, which
         *   also carries the access token and so is a larger XSS surface.
         * @param {(refreshToken: string) => void} [options.onTokenRotated] - Called with the
         *   NEW refresh token every time it rotates (after `handleCallback()` and each
         *   `refresh()`), so the app can persist the minimal secret. Exceptions it throws
         *   are swallowed (persistence must not break the token exchange).
         * @param {boolean} [options.dpop=false] - Opt into RFC 9449 DPoP: an ES256 key
         *   pair is generated per client, the token is bound to it at issuance, and
         *   `handleCallback()` / `refresh()` return a {@link SignedConnection} that
         *   proves possession of the key on every request. A token stolen from the
         *   resulting connection is useless without the private key. The key is
         *   session-scoped (not persisted) — re-seeding a `refreshToken` after reload
         *   mints a fresh binding for the new key.
         */
        constructor(options = {}) {
          const { authorizationServer, clientId, redirectUri, scope, storage, refreshToken, onTokenRotated, dpop } = options;
          if (!authorizationServer) throw new Error('OAuth2Client: "authorizationServer" is required');
          if (!clientId) throw new Error('OAuth2Client: "clientId" is required');
          if (!redirectUri) throw new Error('OAuth2Client: "redirectUri" is required');
          this.issuer = new URL(authorizationServer);
          this.clientId = clientId;
          this.redirectUri = redirectUri;
          this.scope = scope;
          this.storage = storage || defaultStorage();
          this._client = { client_id: clientId };
          this._clientAuth = oauth.None();
          this._as = null;
          this._refreshToken = refreshToken || null;
          this._onTokenRotated = typeof onTokenRotated === "function" ? onTokenRotated : null;
          this._dpop = dpop === true;
          this._dpopKeyPair = null;
          this._dpopHandle = null;
          this._refreshInFlight = null;
          this.lastTokenResponse = null;
        }
        /**
         * The current refresh token (rotates on every `handleCallback()` / `refresh()`).
         * Read it to persist the minimal secret across reloads; re-seed via the
         * `refreshToken` constructor option. `null` before the first exchange.
         * @returns {string | null}
         */
        get refreshToken() {
          return this._refreshToken;
        }
        /**
         * @private
         * Lazily generate the DPoP ES256 key pair + oauth4webapi handle (once).
         * Returns `undefined` when DPoP is off, so call sites can spread it as an
         * absent option. The key is `extractable` so the resulting
         * {@link SignedConnection} can export the public JWK into each proof.
         * @returns {Promise<Object|undefined>} the DPoP handle, or undefined
         */
        async _ensureDPoP() {
          if (!this._dpop) return void 0;
          if (this._dpopHandle == null) {
            this._dpopKeyPair = await oauth.generateKeyPair("ES256", { extractable: true });
            this._dpopHandle = oauth.DPoP(
              /** @type {any} */
              this._client,
              this._dpopKeyPair
            );
          }
          return this._dpopHandle;
        }
        /**
         * @private
         * Lazily discover + cache the authorization-server metadata (RFC 8414).
         * @returns {Promise<Object>} the `AuthorizationServer` metadata
         */
        async _discover() {
          if (this._as) return this._as;
          const response = await oauth.discoveryRequest(this.issuer, { algorithm: "oauth2" });
          this._as = await oauth.processDiscoveryResponse(this.issuer, response);
          return this._as;
        }
        /**
         * Build the `/oauth2/authorize` URL (generating + storing the PKCE verifier)
         * and navigate to it. Returns the URL so non-browser callers can drive the
         * redirect themselves.
         *
         * @param {Object} [options]
         * @param {string} [options.state] - CSRF/correlation value; a random one is generated when omitted.
         * @param {(url: string) => void} [options.redirect] - Navigation function; defaults to
         *   `globalThis.location.assign` when available, else a no-op (URL still returned).
         * @returns {Promise<string>} the authorization URL
         */
        async redirectToAuthorize(options = {}) {
          const as = await this._discover();
          const state = options.state || oauth.generateRandomState();
          const codeVerifier = oauth.generateRandomCodeVerifier();
          const codeChallenge = await oauth.calculatePKCECodeChallenge(codeVerifier);
          this.storage.setItem(VERIFIER_KEY_PREFIX + state, codeVerifier);
          const url = new URL(as.authorization_endpoint);
          assertHttpsOrLoopback(url, "authorization_endpoint");
          url.searchParams.set("response_type", "code");
          url.searchParams.set("client_id", this.clientId);
          url.searchParams.set("redirect_uri", this.redirectUri);
          if (this.scope) url.searchParams.set("scope", this.scope);
          url.searchParams.set("code_challenge", codeChallenge);
          url.searchParams.set("code_challenge_method", "S256");
          url.searchParams.set("state", state);
          const authorizationUrl = url.href;
          const redirect = options.redirect || defaultRedirect;
          redirect(authorizationUrl);
          return authorizationUrl;
        }
        /**
         * Validate the redirect_uri callback, exchange the code for tokens (PKCE),
         * and build a {@link Connection} from the Pryv `apiEndpoint` extension.
         *
         * @param {string} queryString - `window.location.search` (with or without leading `?`).
         * @returns {Promise<Connection>} an authenticated Pryv connection
         */
        async handleCallback(queryString) {
          const as = await this._discover();
          const params = new URLSearchParams(stripLeadingQuestionMark(queryString));
          const state = params.get("state");
          if (!state) throw new Error('OAuth2Client: callback is missing "state"');
          const storageKey = VERIFIER_KEY_PREFIX + state;
          const codeVerifier = this.storage.getItem(storageKey);
          if (!codeVerifier) {
            throw new Error("OAuth2Client: no stored PKCE verifier for this state (expired session or forged callback)");
          }
          try {
            const callbackParams = oauth.validateAuthResponse(as, this._client, params, state);
            const dpopHandle = await this._ensureDPoP();
            const response = await oauth.authorizationCodeGrantRequest(
              as,
              this._client,
              this._clientAuth,
              callbackParams,
              this.redirectUri,
              codeVerifier,
              dpopHandle ? { DPoP: dpopHandle } : void 0
            );
            const result = await oauth.processAuthorizationCodeResponse(as, this._client, response);
            return this._connectionFromTokenResponse(result);
          } finally {
            this.storage.removeItem(storageKey);
          }
        }
        /**
         * Exchange the stored refresh token for a fresh access token and return a
         * new {@link Connection}. Requires a prior successful `handleCallback()`.
         *
         * @returns {Promise<Connection>}
         */
        async refresh() {
          if (this._refreshInFlight) return this._refreshInFlight;
          this._refreshInFlight = this._doRefresh();
          this._refreshInFlight.catch(() => {
          }).finally(() => {
            this._refreshInFlight = null;
          });
          return this._refreshInFlight;
        }
        /**
         * @private
         * The actual refresh exchange, wrapped by `refresh()`'s in-flight dedup.
         * @returns {Promise<Connection>}
         */
        async _doRefresh() {
          if (!this._refreshToken) {
            throw new Error("OAuth2Client: no refresh token available; call handleCallback() first");
          }
          const as = await this._discover();
          const dpopHandle = await this._ensureDPoP();
          const response = await oauth.refreshTokenGrantRequest(
            as,
            this._client,
            this._clientAuth,
            this._refreshToken,
            dpopHandle ? { DPoP: dpopHandle } : void 0
          );
          const result = await oauth.processRefreshTokenResponse(as, this._client, response);
          return this._connectionFromTokenResponse(result);
        }
        /**
         * @private
         * @param {Object} tokenResponse - a processed token-endpoint response
         * @returns {Connection}
         */
        _connectionFromTokenResponse(tokenResponse) {
          this._ingestTokens(tokenResponse);
          const apiEndpoint = tokenResponse.apiEndpoint;
          if (!apiEndpoint) {
            throw new Error('OAuth2Client: token response is missing the Pryv "apiEndpoint" extension');
          }
          const { endpoint } = utils.extractTokenAndAPIEndpoint(String(apiEndpoint));
          assertSecureApiEndpoint(endpoint);
          if (this._dpop) return new SignedConnection(String(apiEndpoint), this._dpopKeyPair);
          return new Connection(String(apiEndpoint));
        }
        /**
         * @private
         * Non-throwing: record the rotated refresh token + raw response and notify the
         * app so it can persist the minimal secret. Runs before validation so a
         * validation failure never loses the rotation (see `_connectionFromTokenResponse`).
         * @param {Object} tokenResponse - a processed token-endpoint response
         */
        _ingestTokens(tokenResponse) {
          this.lastTokenResponse = tokenResponse;
          if (!tokenResponse.refresh_token) return;
          this._refreshToken = tokenResponse.refresh_token;
          if (this._onTokenRotated) {
            try {
              this._onTokenRotated(this._refreshToken);
            } catch (_) {
            }
          }
        }
      };
      function assertSecureApiEndpoint(apiEndpoint) {
        assertHttpsOrLoopback(apiEndpoint, "apiEndpoint");
      }
      function assertHttpsOrLoopback(rawUrl, label) {
        let url;
        try {
          url = rawUrl instanceof URL ? rawUrl : new URL(rawUrl);
        } catch {
          throw new Error("OAuth2Client: " + label + " is not a valid URL");
        }
        const host = url.hostname;
        const isLoopback = host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host === "::1";
        if (url.protocol === "https:") return;
        if (url.protocol === "http:" && isLoopback) return;
        throw new Error("OAuth2Client: refusing insecure " + label + " (" + url.protocol + "//" + host + "); https is required");
      }
      function defaultRedirect(url) {
        const loc = typeof globalThis !== "undefined" ? globalThis.location : void 0;
        if (loc && typeof loc.assign === "function") loc.assign(url);
      }
      function defaultStorage() {
        if (typeof globalThis !== "undefined" && globalThis.sessionStorage) return globalThis.sessionStorage;
        const map = /* @__PURE__ */ new Map();
        return {
          getItem: (k) => map.has(k) ? map.get(k) : null,
          setItem: (k, v) => {
            map.set(k, String(v));
          },
          removeItem: (k) => {
            map.delete(k);
          }
        };
      }
      function stripLeadingQuestionMark(queryString) {
        const s = queryString || "";
        return s.charAt(0) === "?" ? s.slice(1) : s;
      }
      module.exports = OAuth2Client;
    }
  });

  // node_modules/pryv/src/lib/errorIds.js
  var require_errorIds = __commonJS({
    "node_modules/pryv/src/lib/errorIds.js"(exports, module) {
      var ERRORS = Object.freeze({
        API_UNAVAILABLE: "api-unavailable",
        CORRUPTED_DATA: "corrupted-data",
        FORBIDDEN: "forbidden",
        INVALID_ACCESS_TOKEN: "invalid-access-token",
        INVALID_CREDENTIALS: "invalid-credentials",
        UNSUPPORTED_OPERATION: "unsupported-operation",
        INVALID_EVENT_TYPE: "invalid-event-type",
        INVALID_ITEM_ID: "invalid-item-id",
        INVALID_METHOD: "invalid-method",
        INVALID_OPERATION: "invalid-operation",
        INVALID_PARAMETERS_FORMAT: "invalid-parameters-format",
        INVALID_REQUEST_STRUCTURE: "invalid-request-structure",
        ITEM_ALREADY_EXISTS: "item-already-exists",
        MISSING_HEADER: "missing-header",
        UNEXPECTED_ERROR: "unexpected-error",
        UNKNOWN_REFERENCED_RESOURCE: "unknown-referenced-resource",
        UNKNOWN_RESOURCE: "unknown-resource",
        UNSUPPORTED_CONTENT_TYPE: "unsupported-content-type",
        TOO_MANY_RESULTS: "too-many-results",
        GONE: "removed-method",
        UNAVAILABLE_METHOD: "unavailable-method",
        // Registration / unique-field validation
        INVALID_INVITATION_TOKEN: "invitationToken-invalid",
        INVALID_USERNAME: "username-invalid",
        USERNAME_REQUIRED: "username-required",
        INVALID_EMAIL: "email-invalid",
        INVALID_LANGUAGE: "language-invalid",
        INVALID_APP_ID: "appid-invalid",
        INVALID_PASSWORD: "password-invalid",
        INVALID_REFERER: "referer-invalid",
        EMAIL_REQUIRED: "email-required",
        PASSWORD_REQUIRED: "password-required",
        MISSING_REQUIRED_FIELD: "missing-required-field",
        NEW_PASSWORD_FIELD_IS_REQUIRED: "newPassword-required",
        // Account-stream / system-stream protections
        DENIED_STREAM_ACCESS: "denied-stream-access",
        TOO_HIGH_ACCESS_FOR_SYSTEM_STREAMS: "too-high-access-for-account-stream",
        FORBIDDEN_MULTIPLE_ACCOUNT_STREAMS: "forbidden-multiple-account-streams-events",
        FORBIDDEN_ACCOUNT_EVENT_MODIFICATION: "forbidden-none-editable-account-streams",
        FORBIDDEN_TO_CHANGE_ACCOUNT_STREAM_ID: "forbidden-change-account-streams-id",
        FORBIDDEN_TO_EDIT_NONEDITABLE_ACCOUNT_FIELDS: "forbidden-to-edit-noneditable-account-fields",
        // Pre-auth lookups (returned by `/reg/:email/uid` and similar)
        UNKNOWN_USER: "unknown-user",
        UNKNOWN_EMAIL: "unknown-email"
      });
      module.exports = ERRORS;
    }
  });

  // node_modules/pryv/package.json
  var require_package = __commonJS({
    "node_modules/pryv/package.json"(exports, module) {
      module.exports = {
        name: "pryv",
        version: "3.20.0",
        description: "Pryv JavaScript library",
        keywords: [
          "Pryv",
          "Pryv.io"
        ],
        homepage: "https://github.com/pryv/lib-js",
        bugs: {
          url: "https://github.com/pryv/lib-js/issues"
        },
        repository: {
          type: "git",
          url: "git://github.com/pryv/lib-js.git"
        },
        license: "BSD-3-Clause",
        author: "Pryv <info@pryv.com> (https://pryv.com)",
        main: "src/index.js",
        types: "src/index.d.ts",
        dependencies: {
          oauth4webapi: "^3.8.6"
        },
        engines: {
          node: ">=20.19.0"
        }
      };
    }
  });

  // node_modules/pryv/src/index.js
  var require_src = __commonJS({
    "node_modules/pryv/src/index.js"(exports, module) {
      var Service = require_Service();
      module.exports = {
        Service,
        Connection: require_Connection(),
        SignedConnection: require_SignedConnection(),
        Auth: require_Auth(),
        Browser: require_Browser(),
        OAuth2Client: require_OAuth2Client(),
        SharedSecrets: require_SharedSecrets(),
        utils: require_utils(),
        PryvError: require_PryvError(),
        MfaRequiredError: require_MfaRequiredError(),
        StaleAccessIdError: require_StaleAccessIdError(),
        ERRORS: require_errorIds(),
        version: require_package().version,
        connectFromKey
      };
      async function connectFromKey(key, serviceInfoUrl, serviceCustomizations) {
        const service = new Service(serviceInfoUrl, serviceCustomizations);
        await service.info();
        return service.connectFromKey(key);
      }
    }
  });

  // js/script.js
  var $ = require_jquery();
  var Pryv = require_src();
  var masterToken;
  var lang;
  var returnURL;
  var referer;
  var console2;
  var serviceInfoUrlArea;
  var permissionsArea;
  var clientDataArea;
  var authUrlArea;
  var oauthState;
  var submitButton;
  var toggleDev;
  var apiEndpointArea;
  var tokenArea;
  var domainArea;
  var requestingAppId;
  var pryvServiceInfoUrl;
  var defaultPermissions = [{
    streamId: "diary",
    defaultName: "Journal",
    level: "read"
  }];
  window.onload = function() {
    masterToken = $("#masterToken");
    lang = $("#languageCode");
    referer = $("#referer");
    returnURL = $("#returnURL");
    console2 = $("#console");
    serviceInfoUrlArea = $("#serviceInfoUrlArea");
    permissionsArea = $("#permissionsArea");
    clientDataArea = $("#clientDataArea");
    authUrlArea = $("#authUrlArea");
    oauthState = $("#oauthState");
    submitButton = $("#submitButton");
    toggleDev = $("#toggleDev");
    apiEndpointArea = $("#apiEndpointArea");
    tokenArea = $("#tokenArea");
    domainArea = $("#domainArea");
    requestingAppId = $("#requestingAppId");
    permissionsAreaState(false);
    pryvServiceInfoUrl = Pryv.Browser.serviceInfoFromUrl() || "https://reg.pryv.me/service/info";
    serviceInfoUrlArea.val(pryvServiceInfoUrl);
    masterToken.prop("checked", false);
    permissionsArea.val(JSON.stringify(defaultPermissions, null, "  "));
    masterToken.click(masterTokenManagement);
    submitButton.click(requestAccess);
    toggleDevOptions();
    toggleDev.click(toggleDevOptions);
  };
  function masterTokenManagement() {
    var masterTokenPermissions = [{
      streamId: "*",
      level: "manage"
    }];
    if (masterToken.is(":checked")) {
      try {
        defaultPermissions = JSON.parse(permissionsArea.val());
        permissionsArea.val(JSON.stringify(masterTokenPermissions, null, "  "));
        permissionsAreaState(true);
      } catch (err) {
        logToConsole(err);
      }
    } else {
      permissionsAreaState(false);
      permissionsArea.val(JSON.stringify(defaultPermissions, null, "  "));
    }
  }
  function permissionsAreaState(state) {
    permissionsArea.prop("disabled", state);
  }
  function logToConsole(text) {
    console2.append(text + "\n");
    if (console2.length) {
      console2.scrollTop(console2[0].scrollHeight - console2.height());
    }
  }
  function requestAccess() {
    var settings = {};
    var authRequest = {
      requestingAppId: false,
      referer: null,
      languageCode: false,
      permissionsArea: false,
      returnURL: false
    };
    authRequest.requestingAppId = requestingAppId.val();
    if (authRequest.requestingAppId.length < 6) {
      return alert("RequestingAppId is invalid!");
    }
    authRequest.languageCode = lang.val();
    if (authRequest.languageCode === "default") {
      delete authRequest.languageCode;
    }
    authRequest.returnURL = returnURL.val();
    authRequest.oauthState = oauthState.val();
    authRequest.referer = referer.val() || null;
    var customAuthUrl = authUrlArea.val().trim();
    if (customAuthUrl) {
      authRequest.authUrl = customAuthUrl;
    }
    try {
      authRequest.requestedPermissions = JSON.parse(permissionsArea.val());
      var clientData = clientDataArea.val();
      if (clientData.length > 0) {
        authRequest.clientData = JSON.parse(clientData);
      }
      settings.spanButtonID = "pryvButton";
      settings.onStateChange = async function(state) {
        logToConsole("##pryvAuthStateChange 	 " + JSON.stringify(state));
        if (state.id === Pryv.Browser.AuthStates.AUTHORIZED) {
          try {
            var apiEndpoint = state.apiEndpoint;
            if (!apiEndpoint && state.key) {
              var connection = await Pryv.connectFromKey(state.key, serviceInfoUrlArea.val());
              apiEndpoint = connection.apiEndpoint;
            }
            apiEndpointArea.text(apiEndpoint);
            logToConsole("# Auth succeeded for user " + apiEndpoint);
          } catch (err) {
            logToConsole("# Error resolving access from key: " + err);
          }
        }
        if (state.id === Pryv.Browser.AuthStates.SIGNOUT) {
          logToConsole("# Logout");
        }
      };
      settings.authRequest = authRequest;
      Pryv.Browser.setupAuth(settings, serviceInfoUrlArea.val());
    } catch (e) {
      logToConsole("Error in Access params: " + e);
    }
  }
  function toggleDevOptions() {
    returnURL.val("auto#");
    lang.val("default");
    authUrlArea.val("");
    authUrlArea.parent().parent().toggle();
    lang.parent().parent().toggle();
    referer.parent().parent().toggle();
    returnURL.parent().parent().toggle();
    oauthState.parent().parent().hide();
  }
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

pryv/src/lib/buildSearchParams.js:
pryv/src/utils.js:
pryv/src/lib/PryvError.js:
pryv/src/lib/MfaRequiredError.js:
pryv/src/lib/handoff.js:
pryv/src/lib/pollUrls.js:
pryv/src/ServiceAssets.js:
pryv/src/lib/json-parser.js:
pryv/src/lib/getEventStreamed.js:
pryv/src/lib/StaleAccessIdError.js:
pryv/src/lib/resolveDotPath.js:
pryv/src/Connection.js:
pryv/src/Service.js:
pryv/src/dpopProof.js:
pryv/src/SignedConnection.js:
pryv/src/Auth/AuthStates.js:
pryv/src/Auth/LoginMessages.js:
pryv/src/Auth/ProfileStore.js:
pryv/src/Auth/pollOutcome.js:
pryv/src/Auth/permissionsCoverage.js:
pryv/src/Auth/AuthController.js:
pryv/src/Browser/CookieUtils.js:
pryv/src/Browser/buttonHtml.js:
pryv/src/Browser/LoginButton.js:
pryv/src/Auth/index.js:
pryv/src/Browser/index.js:
pryv/src/OAuth2Client.js:
pryv/src/lib/errorIds.js:
pryv/src/index.js:
  (**
   * @license
   * [BSD-3-Clause](https://github.com/pryv/lib-js/blob/master/LICENSE)
   *)

pryv/src/SharedSecrets.js:
  (**
   * @license
   * Copyright (C) Pryv https://pryv.com
   * This file is part of Pryv.io and released under BSD-Clause-3 License
   * Refer to LICENSE file
   *)
*/
