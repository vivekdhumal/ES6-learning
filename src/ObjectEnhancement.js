// object and method short hands

function getPersonDetails() {
    let name = 'John';
    let age = 35;

    return {
        name, // object short-hand where in es5 it was like name: name
        age,
        greet() { // method short-hand in es5 it was like greet: function() { return ....}
            return `Hello ${this.name}`
        }
    }
}

console.log(getPersonDetails().name);
console.log(getPersonDetails().greet());

// object destructring

let person = {
    name: 'Vivek',
    age : 25,
    hobbies: ['reading', 'painting', 'playing'],
    qualification : 'BSc Computer Science'
};

let {name, hobbies} = person; // object destructring
let {qualification, age} = person;

console.log(name, hobbies);
console.log(qualification, age);

function greet({name, age}) { // use object destricing as arguments in function
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greet(person));