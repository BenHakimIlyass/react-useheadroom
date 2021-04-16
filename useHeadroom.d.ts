declare type UseHeadroomProperties = {
  /**
   * onPin prop will trigger a given function
   * every time the navbar got pinned (shown)
   */
  onPin?: (...args: Array<any>) => void;

  /**
   * onUnPin prop will trigger a given function
   * every time the navbar got unpinned (hidden)
   */
  onUnpin?: (...args: Array<any>) => void;

  /**
   * onFix prop will trigger a given function
   * every time the navbar got fixed using the
   * fixAt prop (when the viewport scroll is smaller than fixAt value)
   */
  onFix?: (...args: Array<any>) => void;

  /**
   * onUnfix prop will trigger a given function
   * every time the navbar got unfixed from the
   * fixAt value (when the viewport scroll went up than fixAt value)
   */
  onUnfix?: (...args: Array<any>) => void;

  /**
   * fixAt is a value in pixels, in which the navbar will be fixed (default value: 0)
   */
  fixAt?: number;
};

/**
 *
 * Demos:
 *
 * - [useHeadroom](https://codesandbox.io/s/tender-snowflake-zf79v)
 *
 * API:
 *
 * - [useHeadroom API](https://www.npmjs.com/package/react-useheadroom)
 */

declare type UseHeadroom = (props: UseHeadroomProperties) => boolean;

export default UseHeadroom;
