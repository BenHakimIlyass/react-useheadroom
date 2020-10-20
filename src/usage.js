import * as React from "react";
import "./styles.css";
import useHeadroom from "react-useheadroom";
 
const App = () => {
  const isPinned = useHeadroom();
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