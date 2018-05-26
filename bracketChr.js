// switch case

let bracketChkr = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    switch (element) {
      case '[':
        stack.push(element);

        break;

      case '(':
        stack.push(element);

        break;

      case '{':
        stack.push(element);

        break;

      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop(element);
        } else {
          return false;
        }
        break;

      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop(element);
        } else {
          return false;
        }
        break;

      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop(element);
        } else {
          return false;
        }
        break;

      default:
        break;
    }

  }
  if (!stack.length) {
    return true;
  } else {
      return false;
  }
};
