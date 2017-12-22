// New string functions from ES6
let str = 'The Dark Knight Rises';

console.log(`Sample String : ${str}`);

// check if the part of the string exists
if(str.includes('Knight')) {
    console.log('it includes Knight!');
}

// check if the string starts with the given characters.
if(str.startsWith('The')) {
    console.log('starts with \'The\'');
}

// check if the string starts with the given characters but start after 4th character.
if(str.startsWith('Dark', 4)) {
    console.log('after 4th character it starts with \'Dark\'');
}

// Check if the string ends with the given character.
if(str.endsWith('Rises')) {
    console.log('it ends with \'Rises\'');
}

let message = "Repeat me! ";

// Repeat the string 50 times.
console.log(message.repeat(50));