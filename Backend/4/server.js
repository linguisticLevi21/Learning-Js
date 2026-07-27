const http = require("Node:http");

const server = http.createServer((req, res) => {
  console.log("There is a request made to the server");

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Welcome to the Home Page</h1>");
      return res.end();
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Welcome to the About Page</h1>");
      res.write(
        "<p>My name is Shahadat Hussain and I am learning Backend Development.</p>",
      );
      return res.end();
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Welcome to the Contact Page</h1>");
      res.write("<p>You can contact me at shahadat@example.com</p>");
      return res.end();
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Page Not Found</h1>");
      return res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
//  how to kill this server
// 1. Press Ctrl + C in the terminal where the server is running. This will stop the server and free up the port.
// if still not working then
// 2. Find the process ID (PID) of the server using the command: lsof -i :3000
// 3. Kill the process using the command: kill -9 <PID>
