export default stringLine => {
  const arrString = [];
  let curString = "";
  stringLine.split("").forEach(letter => {
    curString += letter;
    arrString.push(curString);
  });
  return arrString;
};
