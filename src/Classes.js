class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static register(...args) {
        return new User(...args);
    }

    changeEmailAddress(email) {
        this.email = email;
    }
}

let user = new User('vivekdhumal', 'dhumal.vivek02@gmail.com');

user.changeEmailAddress('vivekdhumalmail@gmail.com');

console.dir(user);
console.log(user.username);

let userRegisterd = User.register('vivek', 'vivek.dhumal@thewebdepot.in');

console.dir(userRegisterd);