"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var onPin = _ref.onPin,
      onUnpin = _ref.onUnpin,
      _ref$fixAt = _ref.fixAt,
      fixAt = _ref$fixAt === void 0 ? 0 : _ref$fixAt,
      onFix = _ref.onFix,
      onUnfix = _ref.onUnfix;

  var _React$useState = _react["default"].useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      scroll = _React$useState2[0],
      setScroll = _React$useState2[1]; // Tracking scroll value


  _react["default"].useEffect(function () {
    var handleScroll = function handleScroll() {
      return setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll); // Cleanup function

    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var scrollRef = _react["default"].useRef({
    scroll: scroll
  });

  _react["default"].useEffect(function () {
    return (0, _helpers.callOnPin)(scrollRef.current.scroll, scroll, fixAt, onPin);
  }, [scroll < fixAt || scrollRef.current.scroll <= scroll]); // Handle onUnpin callback


  _react["default"].useEffect(function () {
    return (0, _helpers.callOnUnpin)(scrollRef.current.scroll, scroll, fixAt, onUnpin);
  }, [scroll < fixAt ? scroll < fixAt : scrollRef.current.scroll >= scroll]); // Handle onFix callback


  _react["default"].useEffect(function () {
    return (0, _helpers.callOnFix)(scroll, fixAt, onFix);
  }, [scroll <= fixAt]); // Handle onUnfix callback


  _react["default"].useEffect(function () {
    return (0, _helpers.callOnUnfix)(scrollRef.current.scroll, scroll, fixAt, onUnfix);
  }, [scroll > fixAt]); // Handling the backward scroll behavior


  _react["default"].useEffect(function () {
    scrollRef.current.scroll = scroll;
  }, [scroll]);

  return scrollRef.current.scroll >= scroll || scroll <= fixAt;
};

exports["default"] = _default;