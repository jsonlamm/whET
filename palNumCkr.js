//  check if neg? if true return false;
// if num is < 0 return false


let palNumCkr = (num) => {
  // edge
  if (num < 0 || (num % 10 === 0 && num !== 0)) return false;
  //
  let numStr = (num + '').split('') ;
  for (let i = 0; i <= numStr.length - 1; i++) {
    // const left = numStr[i];
    // const right = numStr[numStr.length - 1 - i];
    // if (left !== right) {
      // speed
      if (numStr[i] !== numStr[numStr.length - 1 - i]) {
        return false;
      }
  }
  return true;
}
