// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _moduleJs = require("./module.js");
var _recipeViewJs = require("./recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _resultViewJs = require("./resultView.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _bookmarkViewJs = require("./bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _iconsSvg = require("url:../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
"use strict";
if (module.hot) module.hot.accept();
// https://forkify-api.herokuapp.com/v2
// API key ==> d82df151-553f-4cb9-b2fc-78805bac7fc5
// https://forkify-api.herokuapp.com/api/v2/recipes ==> for search for whole recipe
///////////////////////////////////////
console.log("NODE JS");
const searchBtn = document.querySelector(".search__btn");
const recipeContainer = document.querySelector(".recipe");
const spinner = document.querySelector(".spinner");
const message = document.querySelector(".introMessage");
const error = document.querySelector(".error");
const searchInput = document.querySelector(".search__field");
const bookmarkedRecipe = new Map();
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
function removeSpinner() {
    spinner.classList.add("hidden");
}
function addSpinner() {
    spinner.classList.remove("hidden");
}
function addSpinner2() {
    const html = `
      <div class="spinner-2 spinner ">
      <svg>
        <use href="${_iconsSvgDefault.default}#icon-loader"></use>
      </svg>
    </div>
  `;
    recipeContainer.innerHTML = "";
    recipeContainer.insertAdjacentHTML("afterbegin", html);
}
function removeMessage() {
    message.classList.add("hidden");
}
async function loadRecipe(search) {
    try {
        addSpinner();
        removeMessage();
        _moduleJs.state.recipes = await Promise.race([
            _moduleJs.getData(search),
            timeout(10)
        ]);
        _moduleJs.state.search = search;
        console.log(_moduleJs.state);
        _resultViewJsDefault.default.configResult(_moduleJs.state.recipes);
        _resultViewJsDefault.default.pagination();
        removeSpinner();
    } catch (error1) {
        console.log(error1);
    }
}
function init() {
    _recipeViewJsDefault.default.addHandlerRender(_moduleJs.state);
    searchBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const searchFor = searchInput.value;
        console.log(searchFor);
        loadRecipe(searchFor);
    });
}
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./module.js":"Qr6Q3","./recipeView.js":"jSwDy","./resultView.js":"fBVOR","url:../img/icons.svg":"loVOp","./bookmarkView.js":"bfvPN"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Qr6Q3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getData", ()=>getData
);
parcelHelpers.export(exports, "state", ()=>state
);
var _helperJs = require("./helper.js");
var _configJs = require("./config.js");
const getData = async function(search) {
    try {
        const data = await _helperJs.getJSON(_configJs.API_URL + search);
        return data.data.recipes;
    } catch (error) {
        throw new Error(error);
    }
};
const state = {
    recipes: {
    },
    bookmark: new Map(),
    search: {
    },
    activeRecipe: {
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./helper.js":"lVRAz","./config.js":"k5Hzs"}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON
);
parcelHelpers.export(exports, "addErrorMsg", ()=>addErrorMsg
);
async function getJSON(url) {
    const res = await fetch(url);
    const Data = await res.json();
    if (!res.ok) throw new Error("something went wrong");
    return Data;
}
function addErrorMsg() {
    const html = `
      <div class="error ">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div>
  `;
    document.querySelector(".recipe").innerHTML = "";
    document.querySelector(".recipe").insertAdjacentHTML("afterbegin", html);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "resultContainer", ()=>resultContainer
);
parcelHelpers.export(exports, "nav", ()=>nav
);
parcelHelpers.export(exports, "bookmarkStore", ()=>bookmarkStore
);
parcelHelpers.export(exports, "plusServings", ()=>plusServings
);
parcelHelpers.export(exports, "minusServing", ()=>minusServing
);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes?search=";
const resultContainer = document.querySelector(".results");
const nav = document.querySelector(".nav__list");
const bookmarkStore = document.querySelector(".bookmarks__list");
const plusServings = document.querySelector(".morePeople");
const minusServing = document.querySelector(".lessPeople");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSwDy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _configJs = require("./config.js");
var _helper = require("./helper");
var _config = require("./config");
var _fractional = require("fractional");
class RecipeView {
    #parentElement = document.querySelector(".recipe");
    #state;
    #recipe;
    #amount = 0;
    async showRecipe(id) {
        try {
            const res = await _helper.getJSON(`${_config.API_URL.slice(0, -8)}/${id}`);
            const response = res.data.recipe;
            console.log(response);
            if (!response) throw new Error();
            this.#recipe = {
                cookingTime: response.cooking_time,
                id: response.id,
                imageUrl: response.image_url,
                ingredients: response.ingredients,
                publisher: response.publisher,
                servings: response.servings,
                sourceURl: response.source_url,
                title: response.title
            };
            this._addRecipe(this.#recipe);
        } catch (error) {
            _helper.addErrorMsg();
        }
    }
    _addRecipe(recipe) {
        const html = `
            <figure class="recipe__fig">
              <img src="${recipe.imageUrl}" alt="Tomato" class="recipe__img" />
              <h1 class="recipe__title">
                <span>${recipe.title}</span>
              </h1>
            </figure>
  
          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${_iconsSvgDefault.default}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${_iconsSvgDefault.default}#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
              <span class="recipe__info-text">servings</span>
  
              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--decrease-servings  lessPeople">
                  <svg>
                    <use href="${_iconsSvgDefault.default}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings morePeople">
                  <svg>
                    <use href="${_iconsSvgDefault.default}#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
            </div>
  
            <div class="recipe__user-generated">
              <svg>
                <use href="${_iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round bookmark">
              <svg class="">
                <use class="inner-bookmark" href="${_iconsSvgDefault.default}#icon-bookmark${this.#state.bookmark.has(this.#recipe.id) ? "-fill" : ""}"></use>
              </svg>
            </button>
          </div>
  
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
             ${recipe.ingredients.map(function(el) {
            return ` <li class="recipe__ingredient">
               <svg class="recipe__icon">
                 <use href="${_iconsSvgDefault.default}#icon-check"></use>
               </svg>
               <div class="recipe__quantity">${el.quantity !== null ? new _fractional.Fraction(el.quantity) : ""}</div>
               <div class="recipe__description">
                 <span class="recipe__unit">${el.unit}</span>
                 ${el.description}
               </div>
              </li>`;
        }).join("")}
            </ul>
          </div>
  
          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${recipe.sourceURl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
          
    `;
        this.#parentElement.innerHTML = "";
        this.#parentElement.insertAdjacentHTML("afterbegin", html);
    }
    addHandlerRender(state) {
        console.log("inside handler");
        this.#state = state;
        this._searchContainerEventHandler();
        this._servingBtnEventlistener();
    }
    _searchContainerEventHandler() {
        _configJs.resultContainer.addEventListener("click", (e)=>{
            e.preventDefault();
            console.log("inside handler");
            if (e.target.closest("a")) this.showRecipe(e.target.closest("a").getAttribute("href"));
        });
    }
    _servingBtnEventlistener() {
        this.#parentElement.addEventListener("click", (e)=>{
            if (e.target.closest(".btn--tiny")) {
                if (e.target.closest(".btn--tiny").classList.contains("morePeople")) this._changeServing(true);
                else this._changeServing(false);
            }
        });
    }
    _changeServing(flag) {
        if (flag) {
            this.#amount++;
            this._showServing();
        } else {
            this.#amount--;
            this._showServing();
        }
    }
    _showServing() {
        const ul = document.querySelector(".recipe__ingredient-list");
        ul.innerHTML = "";
        const html = this.#recipe.ingredients.map((el)=>{
            return ` <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${_iconsSvgDefault.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${el.quantity !== null ? new _fractional.Fraction(el.quantity + this.#amount * 0.25 > 0 ? el.quantity + this.#amount * 0.25 : el.quantity) : ""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${el.unit}</span>
        ${el.description}
      </div>
     </li>`;
        }).join("");
        ul.insertAdjacentHTML("afterbegin", html);
    }
}
exports.default = new RecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../img/icons.svg":"loVOp","./config.js":"k5Hzs","./helper":"lVRAz","./config":"k5Hzs","fractional":"3SU56"}],"loVOp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== 'undefined' && denominator) {
        if (typeof numerator === 'number' && typeof denominator === 'number') {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === 'string' && typeof denominator === 'string') {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === 'undefined') {
        num = numerator; // swap variable names for legibility
        if (typeof num === 'number') {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === 'string') {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(' ');
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match('/')) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === 'string' && a.match('/')) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split('/');
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === 'string' && a.match('\.')) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === 'NaN') return 'NaN';
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + '/' + denominator);
    return result.length > 0 ? result.join(' ') : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === 'number') a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === 'number') a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = (function() {
    var isFloat = function(n) {
        return typeof n === 'number' && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
})();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num)if (num % _factor === 0) {
        factors.push(_factor); // so keep it
        num = num / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num != 1) factors.push(num); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"fBVOR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultView {
    #searchContainer = document.querySelector(".results");
    #page = 1;
    #NoOfRecipes = 0;
    #nextPage = document.querySelector(".pagination__btn--next");
    #prevPage = document.querySelector(".pagination__btn--prev");
    #pageNOleft = document.querySelector(".pageNo-left");
    #pageNORight = document.querySelector(".pageNo-right");
    #responseValue;
    configResult(response) {
        this.#responseValue = response;
        this.#searchContainer.innerHTML = "";
        this.#NoOfRecipes = response.length;
        this.showPagination();
        response.map((el, i)=>{
            if (i < this.#page * 10 && i >= (this.#page - 1) * 10) this.addResults(el);
        });
    }
    addResults(result) {
        const html = `
    <li class="preview">
              <a class="preview__link " href="${result.id}">
                <figure class="preview__fig">
                  <img src="${result.image_url}" alt="Test" />
                </figure>
                <div class="preview__data">
                  <h4 class="preview__title">${result.title}</h4>
                  <p class="preview__publisher">${result.publisher}</p>
                  <div class="preview__user-generated">
                    <svg>
                      <use href="${_iconsSvgDefault.default}#icon-user"></use>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
    `;
        this.#searchContainer.insertAdjacentHTML("beforeend", html);
    }
    pagination() {
        this.#nextPage.addEventListener("click", ()=>{
            console.log("inside next");
            if (this.#NoOfRecipes % 10 === 0 && this.#page * 10 < this.#NoOfRecipes) {
                this.#page++;
                this.#searchContainer.innerHTML = "";
                this.configResult(this.#responseValue);
                this.showPagination();
            } else if (this.#page * 10 < this.#NoOfRecipes + 10 - this.#NoOfRecipes % 10) {
                this.#page++;
                this.#searchContainer.innerHTML = "";
                this.configResult(this.#responseValue);
                this.showPagination();
            }
        });
        this.#prevPage.addEventListener("click", ()=>{
            if (this.#page > 1) {
                this.#page--;
                console.log("current page ", this.#page);
                this.#searchContainer.innerHTML = "";
                this.configResult(this.#responseValue);
                this.showPagination();
            }
        });
    }
    showPagination() {
        console.log(this.#NoOfRecipes);
        if (this.#NoOfRecipes > 10) this.#nextPage.classList.remove("hidden");
        if (this.#page > 1) {
            this.#prevPage.classList.remove("hidden");
            this.#pageNOleft.textContent = `page ${this.#page - 1}`;
        } else this.#prevPage.classList.add("hidden");
        if (this.#page * 10 < this.#NoOfRecipes) this.#pageNORight.textContent = `page ${this.#page + 1}`;
        else this.#nextPage.classList.add("hidden");
    }
}
exports.default = new ResultView();

},{"url:../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfvPN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("./config.js");
class bookmarkView {
    #parentElement = document.querySelector(".bookmark");
    #state;
    #recipe;
    addHandlerRender(state) {
        this.#state = state;
        this.#recipe = state.activeRecipe;
        this._bookmarkBtnEventlistener();
        this._navEventlistener();
        this._bookmarkListEventlistener();
    }
    _bookmarkBtnEventlistener() {
        this.#parentElement.addEventListener("click", (e)=>{
            if (e.target.closest(".bookmark")) {
                console.log("event");
                this.bookmarkFill();
            }
        });
    }
    bookmarkFill() {
        const bookmarkIcon = document.querySelector(".inner-bookmark");
        if (bookmarkIcon.getAttribute("href").slice(-5) !== "-fill" && !this.#state.bookmark.has(this.#recipe.id)) {
            bookmarkIcon.setAttribute("href", bookmarkIcon.getAttribute("href") + "-fill");
            this.#state.bookmark.set(this.#recipe.id, this.#recipe);
        } else if (bookmarkIcon.getAttribute("href").slice(-5) === "-fill" && this.#state.bookmark.has(this.#recipe.id)) {
            bookmarkIcon.setAttribute("href", bookmarkIcon.getAttribute("href").slice(0, -5));
            this.#state.bookmark.delete(this.#recipe.id, this.#recipe);
        }
    }
    _navEventlistener() {
        nav.addEventListener("mouseover", (e)=>{
            e.preventDefault();
            if (e.target.closest(".nav__btn--bookmarks")) {
                if (this.#state.bookmark.size === 0) return;
                _configJs.bookmarkStore.innerHTML = "";
                this.#state.bookmark.forEach((value)=>{
                    this.addBookmarkedRecipe(value);
                });
            }
        });
    }
    addBookmarkedRecipe(recipe) {
        const html = `
        <li class="preview">
                        <a class="preview__link" href="${recipe.id}">
                          <figure class="preview__fig">
                            <img src="${recipe.imageUrl}" alt="Test" />
                          </figure>
                          <div class="preview__data">
                            <h4 class="preview__title">
                             ${recipe.title}
                            </h4>
                            <p class="preview__publisher">${recipe.publisher}</p>
                          </div>
                        </a>
                      </li> 
        `;
        _configJs.bookmarkStore.insertAdjacentHTML("afterbegin", html);
    }
    _bookmarkListEventlistener() {
        _configJs.bookmarkStore.addEventListener("click", (e)=>{
            e.preventDefault();
            if (e.target.closest("a")) this._addRecipe(this.#state.bookmark.get(e.target.closest("a").getAttribute("href")));
        });
    }
}
exports.default = new bookmarkView();

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequire4e33")

//# sourceMappingURL=index.e37f48ea.js.map
