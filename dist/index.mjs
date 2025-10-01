// src/binary/useHeadroom.ts
import React, { useEffect } from "react";

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
  const [scroll, setScroll] = React.useState(0);
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollRef = React.useRef({ scroll });
  useEffect(() => {
    callOnPin(scrollRef.current.scroll, scroll, fixAt, onPin);
  }, [scroll < fixAt || scrollRef.current.scroll <= scroll]);
  useEffect(() => {
    callOnUnpin(scrollRef.current.scroll, scroll, fixAt, onUnpin);
  }, [scroll < fixAt ? scroll < fixAt : scrollRef.current.scroll >= scroll]);
  useEffect(() => {
    callOnFix(scroll, fixAt, onFix);
  }, [scroll <= fixAt]);
  useEffect(() => {
    callOnUnfix(scrollRef.current.scroll, scroll, fixAt, onUnfix);
  }, [scroll > fixAt]);
  useEffect(() => {
    scrollRef.current.scroll = scroll;
  }, [scroll]);
  return scrollRef.current.scroll >= scroll || scroll <= fixAt;
};
var useHeadroom_default = useHeadroom;
export {
  useHeadroom_default as default
};
//# sourceMappingURL=index.mjs.map