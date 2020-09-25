## react-useHeadroom

A lightweight custom React hook for hidding the header each time the scroll goes backward, this hook is returning a boolean state, which we can use in nav style prop or with CSSinJS.

Here is a demo [live](https://codesandbox.io/s/tender-snowflake-zf79v).

## Installation

`yarn add react-useheadroom` or `npm install react-useheadroom`

## Usage

```jsx
import * as React from "react";
import "./styles.css";
import useHeadroom from "react-useheadroom";

const App = () => {
  const isPinned = useHeadroom({});
  return (
    <div
      className="header"
      style={{
        transform: isPinned
          ? `translate3d(0,0px,0)`
          : `translate3d(0,-100px,0)`,
      }}
    />
  );
};

export default App;
```

## Props

Optionnaly you can pass those props.

- **fixAt** the header will be fixed at this value, and cannot be unpinned (default value is 0).

- **onPin** callback

- **onUnpin** callback

- **onFix** callback

- **onUnfix** callback

**Example**

```jsx
import * as React from "react";
import "./styles.css";
import useHeadroom from "react-useheadroom";

const App = () => {
  const isPinned = useHeadroom({
    fixAt:  /* e.g: 400 */,
    onPin: () => /* do something here ... */,
    onUnpin: () => /* do something here ... */,
    onFix: (fixedAt) => /* do something here ... */,
    onUnFix: (fixedAt) => /* do something here ... */
  });
  return (
    <div
      className="header"
      style={{
        transform: isPinned
          ? `translate3d(0,0px,0)`
          : `translate3d(0,-100px,0)`
      }}
    />
  );
}

export default App;
```
