// Synchronous or Blocking --> line by line execution
// Asynchronous or Non-blocking --> line by line execution not guaranteed --> callback function will fire

//Synchronous
const fs = require('fs');
let text = fs.readFileSync("reading.txt", "utf-8");
console.log(text);

//Asynchronous
const fs1 = require('fs');
fs1.readFile("reading.txt", "utf-8", (error,data)=>{console.log(data)});// data is the content in the file --> reading process will take a while so this will get printed later.
console.log("this is text");
