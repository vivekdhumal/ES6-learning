class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return this.name + " Says Hello!";
    }
}

console.log(new Person("Vivek").greet());
console.log(new Person("Muni").greet());