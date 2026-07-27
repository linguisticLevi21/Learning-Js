const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); //mean that the response will be in plain text format
  // and 200 means that the request was successful
  // all db queries and other operations will be done here
  res.end("Hello World\n"); // response will be sent to the client with the message "Hello World"
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
