let longestPrefix = (strArr) => {
  let currPrefix = strArr[0]; // || ''
  if (!currPrefix.length) {
    return "";
  }
  for (let i = 1; i < strArr.length; i++) {
    let currWord = strArr[i];
    if (!currWord.length) {
      currPrefix = currWord
    }
    for (let j = currWord.length; j >= 0; j--) {
      if (currWord.indexOf(currPrefix) !== 0) {
        currPrefix = currPrefix.substr(0, currPrefix.length - 1);
      }
    }
  }
  return currPrefix;
};
