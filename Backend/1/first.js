console.log("hello i am first file");
const sum = require("./second"); // called second whole function as iife function
sum(5, 6);
// let result = sum(5,8); // no result because sum is not defined in this file, it is defined in second.js
// console.log(result);
