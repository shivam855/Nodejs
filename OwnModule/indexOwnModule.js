// 1.
// const add = require("./funCreate"); --> it will work for single function call not work for more than one function

// console.log(add(10,20));

// 2.
// const oper = require("./funCreate");

// console.log(oper.add(10,20));
// console.log(oper.sub(30,20));

//  2,3.
// const {add, sub} = require("./funCreate");

// console.log(add(10,20));
// console.log(sub(30,20));

// 4.
const {add, name, sub} = require("./funCreate");

console.log(add(10,20));
console.log(sub(30,20));
console.log(name);

