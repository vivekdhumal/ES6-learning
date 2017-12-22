// lets work on some new stuff called 'Generator'
// which let you pause your function at perticular point and the resume it back when it needed.
// yield is just like the return but it nevers returns forever to jump out of the function.

function *numbers() {
    console.log('Begin');
    yield 1;
    console.log('In the middle of function');
    yield 2;
    console.log('Will end here!');
    yield 3;
}

// it prints the numbers as a generator object
console.log(numbers());

let iterator = numbers();

// lets iterate the function
console.log(iterator.next()); // it will pring value 1 and done false
// iterate forever
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // here it will not print the value but done will be true


// lets create a range function from scratch

function* range(start, end) {
    while(start <= end) {
        yield start;
        start++;
    }
}
let range_iterator = range(1, 5);

// debugging through log.
console.log(
    range_iterator.next().value,
    range_iterator.next().value,
    range_iterator.next().value,
    range_iterator.next().value,
    range_iterator.next().value,
    range_iterator.next().value, // must be undefined
)

// using for
for (i of range_iterator) console.log(i);

// using rest operator
console.log([...range(1,5)]);