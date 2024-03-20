// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/pages/replay/index.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/helper/replay.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _publicType = require("./publicType");
var _virtualDom2 = _interopRequireDefault(require("./virtualDom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ReplayRecord = /*#__PURE__*/function (_virtualDom) {
  function ReplayRecord() {
    var _this;
    _classCallCheck(this, ReplayRecord);
    _this = _callSuper(this, ReplayRecord);
    _defineProperty(_this, "initDom", void 0);
    _defineProperty(_this, "actionList", []);
    return _this;
  }
  /**
   * 初始化某个录屏
   * @param initDom 初始的序列化dom
   * @param actionList 动作记录
   */
  _inherits(ReplayRecord, _virtualDom);
  return _createClass(ReplayRecord, [{
    key: "init",
    value: function init(initDom, actionList) {
      var _this2 = this;
      console.log('replay init');
      this.initDom = initDom;
      this.actionList = actionList;
      this.createIframe().then(function () {
        _this2.replay();
      });
    }
    /**
     * 重置信息 等待新的录屏回放
     */
  }, {
    key: "reset",
    value: function reset() {
      this.id = 1;
      this.idMap.clear();
      this.initDom = undefined;
      this.actionList = [];
      // 清除iframe
      var replayIframe = document.querySelector('#replay-iframe');
      replayIframe && document.body.removeChild(replayIframe);
    }
    /**
     * 创建iframe 作为容器
     */
  }, {
    key: "createIframe",
    value: function createIframe() {
      var _this3 = this;
      return new Promise(function (re, rj) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('sandbox', 'allow-same-origin');
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('style', 'border:0;');
        iframe.setAttribute('id', 'replay-iframe');
        iframe.width = "".concat(window.innerWidth - 8, "px");
        iframe.height = "".concat(window.innerHeight, "px");
        iframe.onload = function () {
          var doc = iframe.contentDocument,
            root = doc.documentElement,
            html = _this3.deSerialization(_this3.initDom); //反序列化
          root.style.opacity = '0';
          //根元素属性附加
          for (var _i = 0, _Array$from = Array.from(html.attributes); _i < _Array$from.length; _i++) {
            var _Array$from$_i = _Array$from[_i],
              name = _Array$from$_i.name,
              value = _Array$from$_i.value;
            root.setAttribute(name, value);
          }
          root.removeChild(root.firstElementChild); //移除head
          root.removeChild(root.firstElementChild); //移除body
          Array.from(html.children).forEach(function (child) {
            root.appendChild(child);
          });
          //添加自定义鼠标
          var mouse = document.createElement('div');
          mouse.className = 'app-mouse';
          doc.body.appendChild(mouse);
          setTimeout(function () {
            root.style.opacity = '1';
          }, 50);
          re(1);
        };
        document.body.appendChild(iframe);
      });
    }
    /**
     * 回放
     */
  }, {
    key: "replay",
    value: function replay() {
      var _this4 = this;
      if (this.actionList.length == 0) return;
      console.log('__________replay_________');
      console.log('all actionList', this.actionList);
      var appMouse = null;
      var timeOffset = 16.7; //一帧的时间间隔大概为16.7ms
      var startTime = this.actionList[0].timestamp - 1000; //开始时间戳 减一秒是缓冲一下
      var state = function state() {
        var _action$addedNodes, _action$removedNodes;
        var action = _this4.actionList[0];
        var target = _this4.idMap.get(action.id);
        if (!target) {
          //取不到的元素 直接停止
          console.error("dont's have this element", action.id);
          return;
        }
        var element = target;
        if (startTime >= action.timestamp) {
          console.log('=== current action', action, 'left:', _this4.actionList.length);
          _this4.actionList.shift();
          switch (action.type) {
            //属性
            case _publicType.EActionType.ACTION_TYPE_ATTRIBUTE:
              console.log('action>>>>>> [attributes]', 'targetEl', element);
              for (var name in action.attributes) {
                //更新属性
                element.setAttribute(name, action.attributes[name]);
              }
              break;
            //节点修改
            case _publicType.EActionType.ACTION_TYPE_ELEMENT:
              console.log('action>>>>>>> [element]', 'targetEl', element);
              //添加节点
              (_action$addedNodes = action.addedNodes) === null || _action$addedNodes === void 0 || _action$addedNodes.forEach(function (ch) {
                var el = _this4.createElement(ch);
                console.log('++add node', ch, el);
                element.appendChild(el);
              });
              //删除节点
              (_action$removedNodes = action.removedNodes) === null || _action$removedNodes === void 0 || _action$removedNodes.forEach(function (id) {
                var el = _this4.idMap.get(id);
                console.log('--remove node', id, el);
                element.removeChild(el);
              });
              break;
            //文本变化
            case _publicType.EActionType.ACTION_TYPE_TEXT:
              console.log('action>>>>>>> [text]', 'targetEl', element);
              element.textContent = action.newText;
              break;
            //鼠标
            case _publicType.EActionType.ACTION_TYPE_MOUSE:
              console.log('action>>>>>>> [mouse]', 'targetEl', element);
              if (!appMouse) {
                appMouse = element.querySelector('.app-mouse');
                // 延时是为了防止鼠标从页面左侧移过来(有transition)
                setTimeout(function () {
                  var _appMouse;
                  (_appMouse = appMouse) === null || _appMouse === void 0 || _appMouse.classList.add('active');
                }, 50);
              }
              appMouse.style.transform = "translate(".concat(action.pageX, "px,").concat(action.pageY, "px)");
              break;
            //输入框
            case _publicType.EActionType.ACTION_TYPE_INPUT:
              console.log('action>>>>>>> [input]', 'targetEl', element);
              element.value = action.inputValue;
              break;
          }
        }
        startTime += timeOffset; //最大程度的模拟真实的时间差
        if (_this4.actionList.length > 0) {
          //当还有动作时，继续调用requestAnimationFrame()
          requestAnimationFrame(state);
        } else {
          // 没有动作了 播放结束
          console.log('replay end.');
        }
      };
      state();
    }
  }]);
}(_virtualDom2.default);
var _default = exports.default = ReplayRecord;
},{"./publicType":"src/helper/publicType.ts","./virtualDom":"src/helper/virtualDom.ts"}],"src/pages/replay/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./index.less");
var _replay = _interopRequireDefault(require("/src/helper/replay"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Replay = function Replay() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showClose = _useState2[0],
    setShowClose = _useState2[1];
  var replayRecord = new _replay.default();
  var recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  var history = (0, _reactRouterDom.useHistory)();
  // 播放指定录屏记录
  var handleReplayRecord = function handleReplayRecord(it) {
    console.log(it);
    replayRecord.init(it.initDom, it.actionList);
    setShowClose(true);
  };
  // 关闭当前录屏播放
  var handleCloseCurrentReplay = function handleCloseCurrentReplay() {
    setShowClose(false);
    replayRecord.reset();
  };
  //去回放页面
  var goRecordPage = function goRecordPage() {
    history.push('/');
  };
  return _react.default.createElement("div", {
    className: 'replay-page'
  }, _react.default.createElement("header", {
    className: 'font-size-32 text-center pt-24 mb-24'
  }, "web record replay"), showClose ? _react.default.createElement("div", {
    className: 'close-current-replay flex-center',
    onClick: handleCloseCurrentReplay
  }, "close") : null, _react.default.createElement("div", {
    className: 'flex-center'
  }, _react.default.createElement("button", {
    className: 'theme-btn',
    onClick: goRecordPage
  }, "Go Record")), _react.default.createElement("ul", {
    className: 'mt-24 flex-cl replay-cont'
  }, recordList.reverse().map(function (it) {
    return _react.default.createElement("li", {
      className: 'flex-center mb-24 replay-item',
      key: it.time,
      onClick: function onClick() {
        return handleReplayRecord(it);
      }
    }, it.time);
  })));
};
var _default = exports.default = Replay;
},{"react":"node_modules/react/index.js","./index.less":"src/pages/replay/index.less","/src/helper/replay":"src/helper/replay.ts","react-router-dom":"node_modules/react-router-dom/esm/react-router-dom.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61475" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/replay.19a74504.js.map