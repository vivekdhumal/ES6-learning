// Set only contians unique values
let fruits = ['apple', 'mango', 'apple', 'banana'];
console.log(new Set(fruits));

// make an empty set
let cars = new Set();

// add operation
cars.add('Audi');
cars.add('Mercedes');
cars.add('BMW');
cars.add('Tesla');
console.log(cars);

// delele operation by value
cars.delete('BMW');
console.log(cars);

// if it has the given car
console.log(cars.has('Audi'));
console.log(cars.has('Jaguar'));

// get the size of the set
console.log(cars.size);

// iterate like normal array
cars.forEach(car => console.log(car));