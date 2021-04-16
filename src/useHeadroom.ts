import React, { useEffect } from 'react';
import { callOnPin, callOnUnpin, callOnFix, callOnUnfix } from './helpers';

const initialProps = {
  onPin: () => null,
  onUnpin: () => null,
  onFix: () => null,
  onUnfix: () => null,
  fixAt: 0,
};
const useHeadroom = (props = initialProps) => {
  const { onPin, onUnpin, fixAt = 0, onFix, onUnfix } = props;
  const [scroll, setScroll] = React.useState(0);

  // Tracking scroll value
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollRef = React.useRef({ scroll: scroll });

  useEffect(() => {
    callOnPin(scrollRef.current.scroll, scroll, fixAt, onPin);
  }, [scroll < fixAt || scrollRef.current.scroll <= scroll]);

  // Handle onUnpin callback
  useEffect(() => {
    callOnUnpin(scrollRef.current.scroll, scroll, fixAt, onUnpin);
  }, [scroll < fixAt ? scroll < fixAt : scrollRef.current.scroll >= scroll]);

  // Handle onFix callback
  useEffect(() => {
    callOnFix(scroll, fixAt, onFix);
  }, [scroll <= fixAt]);

  // Handle onUnfix callback
  useEffect(() => {
    callOnUnfix(scrollRef.current.scroll, scroll, fixAt, onUnfix);
  }, [scroll > fixAt]);

  // Handling the backward scroll behavior
  useEffect(() => {
    scrollRef.current.scroll = scroll;
  }, [scroll]);

  return scrollRef.current.scroll >= scroll || scroll <= fixAt;
};
export default useHeadroom;
