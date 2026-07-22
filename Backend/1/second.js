console.log("hello i am second file");
function sum(a, b) {
  console.log(a + b);
}
sum(4, 5); // called sum function as iife function
// poora code private hai
module.exports = { sum }; // export sum function to use in other files+
