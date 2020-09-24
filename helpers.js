"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callOnUnfix = exports.callOnFix = exports.callOnUnpin = exports.callOnPin = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var callOnPin = function callOnPin(prevScroll, scroll, fixAt, onPin) {
  !!onPin && prevScroll > scroll && scroll > fixAt && onPin();
};

exports.callOnPin = callOnPin;

var callOnUnpin = function callOnUnpin(prevScroll, scroll, fixAt, onUnpin) {
  !!onUnpin && prevScroll <= scroll && scroll > fixAt && onUnpin();
};

exports.callOnUnpin = callOnUnpin;

var callOnFix = function callOnFix(scroll, fixAt, onFix) {
  !!onFix && scroll <= fixAt && onFix(fixAt);
};

exports.callOnFix = callOnFix;

var callOnUnfix = function callOnUnfix(prevScroll, scroll, fixAt, onUnfix) {
  !!onUnfix && prevScroll === fixAt && scroll > prevScroll && onUnfix(fixAt);
};

exports.callOnUnfix = callOnUnfix;