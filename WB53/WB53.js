
console.log("this is wb53");

// function greet(name){
//     console.log("Good morning "+name);
// }

// let name1 = "sam";
// let name2 = "pym";
// greet(name1);
// greet(name2);

// 1 -- non returning function
function areaOfCircle(radius){
    // let pie = Math.pie;
    console.log("Area is "+ (3.14)*(radius*radius));
}
areaOfCircle(2);

// 2 -- returning function
function areaOfSquare(side){
    return side*side;
    console.log("end");// this line will never execute.
}
console.log("Area of the square is "+areaOfSquare(5));
