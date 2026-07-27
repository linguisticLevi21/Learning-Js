// buffers in node js
const { Buffer } = require("buffer");

const buf = Buffer.alloc(16);
console.log(buf[1]); // 0

const buf2 = Buffer.from("Hello World");
console.log(buf2.toString()); // Hello World

const buf3 = Buffer.unalloc(16); // correct
console.log(buf3[1]); // 0
