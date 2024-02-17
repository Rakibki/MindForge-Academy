export const getLocalStor = (lsName) => {
  let myCouses = [];
  let isMyCouses = localStorage.getItem(lsName);
  if (isMyCouses) {
    return JSON.parse(isMyCouses);
  }
  return myCouses;
};
