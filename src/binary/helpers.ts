export const callOnPin = (
  prevScroll: number,
  scroll: number,
  fixAt: number,
  onPin: () => any
) => {
  !!onPin && prevScroll > scroll && scroll > fixAt && onPin();
};

export const callOnUnpin = (
  prevScroll: number,
  scroll: number,
  fixAt: number,
  onUnpin: () => any
) => {
  !!onUnpin && prevScroll <= scroll && scroll > fixAt && onUnpin();
};

export const callOnFix = (
  scroll: number,
  fixAt: number,
  onFix: (...args: any[]) => any
) => {
  !!onFix && scroll <= fixAt && onFix(fixAt);
};

export const callOnUnfix = (
  prevScroll: number,
  scroll: number,
  fixAt: number,
  onUnfix: (...args: any[]) => any
) => {
  !!onUnfix && prevScroll === fixAt && scroll > prevScroll && onUnfix(fixAt);
};

export const isPresent = (fn: any) => (!!fn ? fn : null);
