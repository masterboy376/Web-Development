// built-in modules
const fs = require('fs');

// reading a file
let text = fs.readFileSync("reading.txt", "utf-8");
console.log(text);

// replacing the text in the file
let text1 = text.replace('hello','hi');
console.log(text1);

// repeating the text in the file
let text2 = text.repeat(5);
console.log(text2);

//creating a new file
fs.writeFileSync('creating.txt', 'this is created one!');
let text3 = fs.readFileSync('creating.txt', 'ascii');
console.log(text3);

