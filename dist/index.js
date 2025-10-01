"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/binary/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => useHeadroom_default
});
module.exports = __toCommonJS(index_exports);

// src/binary/useHeadroom.ts
var import_react = __toESM(require("react"));

// src/binary/helpers.ts
var callOnPin = (prevScroll, scroll, fixAt, onPin) => {
  !!onPin && prevScroll > scroll && scroll > fixAt && onPin();
};
var callOnUnpin = (prevScroll, scroll, fixAt, onUnpin) => {
  !!onUnpin && prevScroll <= scroll && scroll > fixAt && onUnpin();
};
var callOnFix = (scroll, fixAt, onFix) => {
  !!onFix && scroll <= fixAt && onFix(fixAt);
};
var callOnUnfix = (prevScroll, scroll, fixAt, onUnfix) => {
  !!onUnfix && prevScroll === fixAt && scroll > prevScroll && onUnfix(fixAt);
};

// src/binary/useHeadroom.ts
var initialProps = {
  onPin: () => null,
  onUnpin: () => null,
  onFix: () => null,
  onUnfix: () => null,
  fixAt: 0
};
var useHeadroom = (props = initialProps) => {
  const { onPin, onUnpin, fixAt = 0, onFix, onUnfix } = props;
  const [scroll, setScroll] = import_react.default.useState(0);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollRef = import_react.default.useRef({ scroll });
  (0, import_react.useEffect)(() => {
    callOnPin(scrollRef.current.scroll, scroll, fixAt, onPin);
  }, [scroll < fixAt || scrollRef.current.scroll <= scroll]);
  (0, import_react.useEffect)(() => {
    callOnUnpin(scrollRef.current.scroll, scroll, fixAt, onUnpin);
  }, [scroll < fixAt ? scroll < fixAt : scrollRef.current.scroll >= scroll]);
  (0, import_react.useEffect)(() => {
    callOnFix(scroll, fixAt, onFix);
  }, [scroll <= fixAt]);
  (0, import_react.useEffect)(() => {
    callOnUnfix(scrollRef.current.scroll, scroll, fixAt, onUnfix);
  }, [scroll > fixAt]);
  (0, import_react.useEffect)(() => {
    scrollRef.current.scroll = scroll;
  }, [scroll]);
  return scrollRef.current.scroll >= scroll || scroll <= fixAt;
};
var useHeadroom_default = useHeadroom;
//# sourceMappingURL=index.js.map