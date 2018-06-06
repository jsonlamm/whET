let dupRemover = (numArr) => {
  // let table = {};
  let tempArr = [];
  for (let i = 0; i < numArr.length; i++) {
    let ele = numArr[i];
    console.log('ele : ', ele)
    console.log('tempArr : ', tempArr)
    if (numArr.lastIndexOf(ele) !== i) {
      console.log('before splice : ', numArr)
      numArr.splice(i, 1)
      i--;
      console.log('after splice : ', numArr)
    }
    // else {
    //   tempArr.push(ele)
    // }
  }
  return numArr.length
}
