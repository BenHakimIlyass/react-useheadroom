import React, { useEffect } from 'react';
import { callOnPin, callOnUnpin, callOnFix, callOnUnfix } from './helpers';
import { type UseHeadroomProps } from './types';

const initialProps: UseHeadroomProps = {
  onPin: () => null,
  onUnpin: () => null,
  onFix: () => null,
  onUnfix: () => null,
  fixAt: 0,
};
const useHeadroom = (props = initialProps) => {
  const { onPin, onUnpin, fixAt = 0, onFix, onUnfix } = props;
  const [scroll, setScroll] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollRef = React.useRef({ scroll: scroll });

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

export default useHeadroom;
