const deleteEle = (nums, val) => {

  while (nums.indexOf(val) !== -1) {

    if (nums.indexOf(val)) {
      nums.splice(nums.indexOf(val), 1);
    }

  }
  return nums.length;
}

// let collection = [1, 2, 3, 4, 5, 6, 2, 2];
let collection = [1, 2, 3, 2, 4, 5, 6, 2];
let val = 2;
// length = 5

console.log('deleteEle(collection, val) : ', deleteEle(collection, val))
