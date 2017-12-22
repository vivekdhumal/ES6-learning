// var, let, const

var foo = 'bar'; // mostly don't use

console.log(foo)

let name = 'Vivek' // people use this quite often.

console.log(name);

const surname = 'Dhumal';

// surname = 'Something else'; // con not reassign, will produce an error

console.log(surname);

// don't works with the array because in array you can push the values later on
const names = ['Bruce', 'Berry'];

// names = ['Diana', 'Arthur', 'Clark']; // this will not work and produce error.

names.push('Diana');

console.table(names);

