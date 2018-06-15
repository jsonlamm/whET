function sayHi(saluation) {
  return function (person) {
    return `${saluation} ${person}`;
  };
}


let peeps = ['Martha', 'AJ', 'Bethany'];

const peepGreeter = peeps.map(sayHi('yo'));
// rcon, stringv

console.log(peepGreeter);
