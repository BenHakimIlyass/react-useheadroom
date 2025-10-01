export type UseHeadroomProps = {
    /**
     * `onPin` callback will be invoked every time the navbar gets pinned (shown)
     */
    onPin?: (...args: Array<any>) => void;

    /**
     * `onUnPin` callback will be invoked every time the navbar gets unpinned/released (hidden)
     */
    onUnpin?: (...args: Array<any>) => void;

    /**
     * `onFix` callback will be invoked every time the navbar gets fixed at the
     * `fixAt` prop (when the viewport scroll is smaller than `fixAt` value)
     */
    onFix?: (...args: Array<any>) => void;

    /**
     * `onUnfix` callback will be invoked every time the navbar gets unfixed from the
     * `fixAt` value (when the viewport scroll is bigger than `fixAt` value)
     */
    onUnfix?: (...args: Array<any>) => void;

    /**
     * `fixAt` is a numeric value (in pixels) indicating the scroll position at which the navbar must be fixed at (default value: 0px)
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

declare const useHeadroom: (props?: UseHeadroomProps) => boolean;
export default useHeadroom;
