// ...called rest operator that it will take first argument along with rest of the arguments.
// this will also convert all arguments into an array.
// for example.

function sum(...numbers) {
    console.log(numbers);
    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1,2,3,4,5,6,7,8,9));

// spread operator is also simillar ... but it is used when you want to destructure your array in to the function arguments
// for example.

function basicSum(x, y) {
    return x + y;
}

let numbers = [1,2,3,4,5]

console.log(basicSum(...numbers)); // it will take only first two values [1,2] as function parameters.

