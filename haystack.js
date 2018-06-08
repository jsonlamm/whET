// do no use indexOf


let strSrch = (haystack, needle) => {
  const firstLtr = needle[0];
  console.log('firstLtr : ', firstLtr)
  for (let i = 0; i < haystack.length; i++) {
    const ele = haystack[i];
    console.log('i : ', i)
    console.log('ele : ', ele)

    if (ele === firstLtr && haystack.slice(i, i + (needle.length)) === needle) {
      return i;
    }

    if (ele === firstLtr && haystack.slice(i, i + (needle.length)) === needle) {
      let haySeg = haystack.slice(i, i + (needle.length))
      console.log('haySeg : ', haySeg)

      if (haySeg === needle) {
        return i;
      }
    }
    return -1;
  };
