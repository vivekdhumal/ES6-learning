// will review here the arrow => syntax which is a short hand of function and
// much powerfull than normal function syntax.

class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    getTasks() {
        this.tasks.forEach(task => console.log(task.getName()));
    }

    log() {
        this.tasks.forEach((task, index) => console.log(task, index));
    }
}

class Task {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

new TaskCollection([
    new Task('Buy Milk.'),
    new Task('Go to grocerry.'),
    new Task('Code for an hour.')
]).getTasks();
// .log();

// another example to review the arrow syntax

let names = ['Vivek', 'Muni', 'Sateesh', 'Sriniwas'];

names = names.map(name => name + ' is cool.');

console.table(names);