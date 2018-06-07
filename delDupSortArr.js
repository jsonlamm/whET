let dupRemover = (numArr) => {
  for (let i = 0; i < numArr.length; i++) {
    let ele = numArr[i];
    if (numArr.lastIndexOf(ele) !== i) {
      numArr.splice(i, 1)
      i--;
    }
  }
  return numArr.length
}

let dupRemover2 = (numArr) => {
  if (!numArr.length) return 0;
  let i = 0;
  for (let j = 0; j < numArr.length; j++){
      if (numArr[j] !== numArr[i]){
          i++;
          numArr[i] = numArr[j];
      }
  }
  return i + 1;
};
