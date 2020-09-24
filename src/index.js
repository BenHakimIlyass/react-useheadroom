import React from "react";
import { callOnPin, callOnUnpin, callOnFix, callOnUnfix } from "./helpers";

export default ({ onPin, onUnpin, fixAt = 0, onFix, onUnfix }) => {
  const [scroll, setScroll] = React.useState(0);

  // Tracking scroll value
  React.useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRef = React.useRef({ scroll: scroll });

  React.useEffect(
    () => callOnPin(scrollRef.current.scroll, scroll, fixAt, onPin),
    [scroll < fixAt || scrollRef.current.scroll <= scroll]
  );

  // Handle onUnpin callback
  React.useEffect(
    () => callOnUnpin(scrollRef.current.scroll, scroll, fixAt, onUnpin),
    [scroll < fixAt ? scroll < fixAt : scrollRef.current.scroll >= scroll]
  );

  // Handle onFix callback
  React.useEffect(() => callOnFix(scroll, fixAt, onFix), [scroll <= fixAt]);

  // Handle onUnfix callback
  React.useEffect(
    () => callOnUnfix(scrollRef.current.scroll, scroll, fixAt, onUnfix),
    [scroll > fixAt]
  );

  // Handling the backward scroll behavior
  React.useEffect(() => {
    scrollRef.current.scroll = scroll;
  }, [scroll]);

  return scrollRef.current.scroll >= scroll || scroll <= fixAt;
};
