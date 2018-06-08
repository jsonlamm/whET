// do no use indexOf

let strSrch = (haystack, needle) => {
  const firstLtr = needle[0];

  for (let i = 0; i < haystack.length; i++) {
    const ele = haystack[i];

    // character savings =)
    // if (ele === firstLtr && haystack.slice(i, i + (needle.length)) === needle) {
    //   return i;
    // }

    if (ele === firstLtr && haystack.slice(i, i + (needle.length)) === needle) {
      let haySeg = haystack.slice(i, i + (needle.length))

      if (haySeg === needle) {
        return i;
      }
    }
  }
    return -1;
  };
