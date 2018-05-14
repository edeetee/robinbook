module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([0],{

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(180);


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      debugText: ''
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = "Robinbook";
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            margin: '50px 40px',
            maxWidth: 900
          }, className: 'jsx-1155966384'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1155966384',
          css: ['span.jsx-1155966384{font-weight:bold;background-color:black;color:white;padding:0.15em;}', 'ol.jsx-1155966384{list-style-type:none;counter-reset:list-counter;padding-left:20px;}', 'ol.jsx-1155966384>li.jsx-1155966384{font-size:20px;margin-top:30px;vertical-align:text-bottom;}', 'ol.jsx-1155966384>li.jsx-1155966384:before{background:black;color:white;font-size:40px;padding:0 3px;margin-right:20px;content:counter(list-counter);counter-increment:list-counter;}', 'p.jsx-1155966384{margin:10px 10px;}', 'ul.jsx-1155966384{margin-top:20px;padding-left:30px;}', 'ul.jsx-1155966384>li.jsx-1155966384{margin-top:10px;margin-left:30px;list-style-type:none;}', 'a.jsx-1155966384{color:#07C;}']
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { style: { fontSize: 90 }, className: 'jsx-1155966384'
          },
          'Robinbook'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { style: { fontSize: 40, marginBottom: 30 }, className: 'jsx-1155966384'
          },
          'Take back ',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'i',
            {
              className: 'jsx-1155966384'
            },
            'your'
          ),
          ' data'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { height: 50 }, className: 'jsx-1155966384'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1155966384'
          },
          'On facebook, your data is their profit. You have no control over what happens to that data and, if ',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://en.wikipedia.org/wiki/Cambridge_Analytica', className: 'jsx-1155966384'
            },
            'what we know so far'
          ),
          ' is any indication, facebook doesn\'t always have your best interests at heart.'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1155966384'
          },
          'Robinbook will walk you through downloading the data facebook will let you download (your facebook archive) and will also allow you to download your valuable metadata facebook wants to keep behind it\'s walled garden.'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1155966384'
          },
          'Using this data, you can retain the information that you have put into facebook. If we give people ownership of their data, it allows them to choose who to trust with it. Then, we have the power to pick platforms that respect our values both through their actions and implementations.'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'ol',
          {
            className: 'jsx-1155966384'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'li',
            {
              className: 'jsx-1155966384'
            },
            'Download your facebook archive and metadata using ',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: 'https://addons.mozilla.org/en-US/firefox/addon/robinbook-setup/', className: 'jsx-1155966384'
              },
              'the Robinbook extension'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'li',
            {
              className: 'jsx-1155966384'
            },
            'Browse your backed up data using ',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: 'https://addons.mozilla.org/en-US/firefox/addon/robinbook-setup/', className: 'jsx-1155966384'
              },
              'the Robinbook extension'
            ),
            ' to compile the data together'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'li',
            {
              className: 'jsx-1155966384'
            },
            'Delete private messages, posts, friends and pages you don\'t want facebook to ',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'i',
              {
                className: 'jsx-1155966384'
              },
              'own'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'ul',
            {
              className: 'jsx-1155966384'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1155966384'
              },
              'Or delete all of your messages'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                className: 'jsx-1155966384'
              },
              'Or delete your entire account'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-1155966384'
          },
          'More information below...'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { height: 100 }, className: 'jsx-1155966384'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-1155966384'
          },
          'What now?'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1155966384'
          },
          'Put your data to use! Upload it to a service that shares your values.'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { height: 20 }, className: 'jsx-1155966384'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h2',
          {
            className: 'jsx-1155966384'
          },
          'Restrict facebook\'s data access'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-1155966384'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://addons.mozilla.org/en-US/firefox/addon/facebook-container/?src=search', className: 'jsx-1155966384'
            },
            'Facebook Container'
          ),
          ' - Stop facebook global tracking'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-1155966384'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://www.facebook.com/me?viewas=100000686899395&privacy_source=timeline_gear_menu#_', className: 'jsx-1155966384'
            },
            'View Profile As'
          ),
          ' - See how your profile looks to others'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-1155966384'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://chrome.google.com/webstore/detail/social-book-post-manager/ljfidlkcmdmmibngdfikhffffdmphjae', className: 'jsx-1155966384'
            },
            'Social Book Post Manager'
          ),
          ' - auto clear old data'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-1155966384'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://www.facebook.com/help/delete_account/', className: 'jsx-1155966384'
            },
            'Delete your facebook account'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { height: 30 }, className: 'jsx-1155966384'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h2',
          {
            className: 'jsx-1155966384'
          },
          'Use a social network that uses independent servers'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1155966384'
          },
          'These systems allow users to host their own servers and identities, so that you have full control over your data as it can be restricted to your machine.'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-1155966384'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://mastodon.social', className: 'jsx-1155966384'
            },
            'Mastodon'
          ),
          ' - Twitter Clone'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-1155966384'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://diasporafoundation.org/', className: 'jsx-1155966384'
            },
            'Diasporia*'
          ),
          ' - Facebook Clone'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { height: 30 }, className: 'jsx-1155966384'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h2',
          {
            className: 'jsx-1155966384'
          },
          'Distributed computing'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1155966384'
          },
          'These are full ecosystems allowing current browsers to connect to decentralized networks.'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-1155966384'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://blockstack.org/', className: 'jsx-1155966384'
            },
            'Blockstack'
          ),
          ' - personally controlled data storage and identity'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { height: 30 }, className: 'jsx-1155966384'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h2',
          {
            className: 'jsx-1155966384'
          },
          'What do we need?'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-1155966384'
          },
          'More people interested and involved!'
        )
      );
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182)


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(183);

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__(57);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(21);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__(11);

var _stylesheetRegistry = __webpack_require__(189);

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
module.exports = __webpack_require__(0).Map;


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(90);
var validate = __webpack_require__(65);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(91)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(1);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(92)('Map') });


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(93)('Map');


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(94)('Map');


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(190);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__(193);

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__(194);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(191), __esModule: true };

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(192);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(19);
var $keys = __webpack_require__(27);

__webpack_require__(85)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "production" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(89)))

/***/ })

},[179])
          return { page: comp.default }
        })
      ;