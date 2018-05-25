// find lcp;

let lcp = (strArr) => {
  if (!strArr.length) {
         return '';
     }
  let sortedArr = strArr.sort();
  let currPrefix = sortedArr[0];

  for (let i = 1; i < strArr.length; i++) {
    let currWord = strArr[i];
    if (!currWord.length) {
      currPrefix = currWord
    }
   while (currWord.indexOf(currPrefix) !== 0) {
        currPrefix = currPrefix.substr(0, currPrefix.length - 1);
      }
    }
  return currPrefix;
};
