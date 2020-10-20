import React from "react";

export default () => {
  const [scroll, setScroll] = React.useState(0);

  // Tracking scroll value
  React.useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRef = React.useRef({ scroll: scroll });

  // Handling the old scroll value
  React.useEffect(() => {
    scrollRef.current.scroll = scroll;
  }, [scroll]);

  return scrollRef.current.scroll <= scroll || scroll === 0;
};