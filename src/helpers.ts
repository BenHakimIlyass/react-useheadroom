export const callOnPin = (
  prevScroll: number,
  scroll: number,
  fixAt: number,
  onPin: () => void
) => {
  !!onPin && prevScroll > scroll && scroll > fixAt && onPin();
};

export const callOnUnpin = (
  prevScroll: number,
  scroll: number,
  fixAt: number,
  onUnpin: () => void
) => {
  !!onUnpin && prevScroll <= scroll && scroll > fixAt && onUnpin();
};

export const callOnFix = (
  scroll: number,
  fixAt: number,
  onFix: (...args: any[]) => void
) => {
  !!onFix && scroll <= fixAt && onFix(fixAt);
};

export const callOnUnfix = (
  prevScroll: number,
  scroll: number,
  fixAt: number,
  onUnfix: (...args: any[]) => void
) => {
  !!onUnfix && prevScroll === fixAt && scroll > prevScroll && onUnfix(fixAt);
};
