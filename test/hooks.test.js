"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("../"));

var _enzyme = require("enzyme");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HookWrapper = function HookWrapper(props) {
  var hook = props.hook ? props.hook() : undefined;
  return /*#__PURE__*/_react["default"].createElement("div", {
    hook: hook
  });
}; // hooks


it("should return true as initial value", function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(HookWrapper, {
    hook: function hook() {
      return (0, _["default"])({
        fixAt: 400
      });
    }
  }));

  var _wrapper$find$props = wrapper.find("div").props(),
      hook = _wrapper$find$props.hook;

  var isPinned = hook;
  expect(isPinned).toEqual(true);
});
describe("helpers test", function () {
  it("should call onPin", function () {
    var onPin = jest.fn();
    (0, _helpers.callOnPin)(450, 400, 300, onPin);
    expect(onPin).toHaveBeenCalled();
  });
  it("should not call onPin", function () {
    var onPin = jest.fn();
    (0, _helpers.callOnPin)(250, 400, 300, onPin);
    expect(onPin).toHaveBeenCalledTimes(0);
  });
  it("should call onUnpin", function () {
    var onUnpin = jest.fn();
    (0, _helpers.callOnUnpin)(400, 400, 300, onUnpin);
    expect(onUnpin).toHaveBeenCalled();
  });
  it("should not call onUnpin", function () {
    var onUnpin = jest.fn();
    (0, _helpers.callOnUnpin)(500, 400, 300, onUnpin);
    expect(onUnpin).toHaveBeenCalledTimes(0);
  });
  it("should call onFix", function () {
    var onFix = jest.fn();
    (0, _helpers.callOnFix)(250, 300, onFix);
    expect(onFix).toHaveBeenCalled();
  });
  it("should not call onFix", function () {
    var onFix = jest.fn();
    (0, _helpers.callOnFix)(450, 300, onFix);
    expect(onFix).toHaveBeenCalledTimes(0);
  });
  it("should call onUnfix", function () {
    var onUnfix = jest.fn();
    (0, _helpers.callOnUnfix)(300, 400, 300, onUnfix);
    expect(onUnfix).toHaveBeenCalled();
  });
  it("should not call onUnfix", function () {
    var onUnfix = jest.fn();
    (0, _helpers.callOnUnfix)(310, 400, 300, onUnfix);
    expect(onUnfix).toHaveBeenCalledTimes(0);
  });
});