let numbers = [2,4,6,8,10,11];

// if 8 exists in array
console.log(numbers.includes(8));

// if 25 exists in array
console.log(numbers.includes(25));

// give the first item of array which matches the given condition
console.log(numbers.find(item => item > 6));

// more real world example.
class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let users = [
    new User('Vivek', true),
    new User('Muni', true),
    new User('Sateesh', false)
];

console.log("First found : ", users.find(user => user.isAdmin).name);

// array filter function
users.filter(user => user.isAdmin).forEach((item) => console.log(item.name))