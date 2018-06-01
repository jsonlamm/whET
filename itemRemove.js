let removeElement = function(nums, val) {
  let i = nums.length;
  while (i >= 0) {
    if (nums.indexOf(val) > -1) {
      nums.splice(nums.indexOf(val), 1);
    }
    i--;
  }
  return nums.length;
};
