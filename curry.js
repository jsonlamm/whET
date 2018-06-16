function sayHi(saluation) {
  return function (person) {
    return `${saluation} ${person}`;
  };
}

// partial
const sayYo = sayHi('yo')

// notes
// rcon, stringv

// can map
// console.log(peepGreeter);


const numbersInString = R.compose(R.length, R.filter(isNum), R.split(''));

