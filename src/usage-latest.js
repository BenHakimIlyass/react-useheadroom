import * as React from "react";
import "./styles.css";
import useHeadroom from "react-useheadroom";
 
const App = () => {
  const isPinned = useHeadroom({
    fixAt: /* e.g 400 */,
    onPin: () => /* do somthing here ... */,
    onUnpin: () => /* do somthing here ... */,
    onFix: (fixedAt) => /* do somthing here ... */,
    onUnfix: (fixedAt) => /* do somthing here ... */
  });
  return (
    <div
      className="header"
      style={{
				transition:'all 0.4s',
        transform: isPinned
          ? `translate3d(0,0px,0)`
          : `translate3d(0,-100px,0)`,
      }}
    />
  );
};
 
export default App;