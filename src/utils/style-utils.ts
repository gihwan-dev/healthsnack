export const isActiveDomain = (curDomain: string, targetDomain: string) => {
  if (curDomain === '' && targetDomain === '/#main') {
    return true;
  }
  return curDomain === 'targetDomain';
};
