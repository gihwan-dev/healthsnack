export const setLeftProduct = (cur: number, length: number) => {
  if (cur === 0) return length - 1;
  return cur - 1;
};

export const setRightProduct = (cur: number, length: number) => {
  if (cur === length - 1) return 0;
  return cur + 1;
};

export const isBigSize = (width: number) => {
  return width >= 1280;
};
