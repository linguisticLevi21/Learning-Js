const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  console.log("There is a request made to the server");

  const method = req.method;
  const path = req.url;

  const log = "\n" + new Date().toISOString() + " - " + method + " " + path;

  fs.appendFileSync("server.log", log);

  switch (method) {
    case "GET":
      switch (path) {
        case "/":
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          return res.end("<h1>Welcome to the Home Page Bro</h1>");

        case "/about":
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          return res.end(`
            <h1>Welcome to the About Page</h1>
            <p>My name is Shahadat Hussain and I am learning Backend Development.</p>
          `);

        case "/contact":
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          return res.end(`
            <h1>Welcome to the Contact Page</h1>
            <p>You can contact me at shahadat@example.com</p>
          `);

        default:
          res.writeHead(404, {
            "Content-Type": "text/html",
          });
          return res.end("<h1>404 - Page Not Found</h1>");
      }

    case "POST":
      switch (path) {
        case "/submit":
          let body = "";

          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            console.log("Received Data:");
            console.log(body);

            res.writeHead(200, {
              "Content-Type": "text/html",
            });

            res.end(`
              <h1>Form Submitted Successfully</h1>
              <p>Thank you for submitting the form.</p>
            `);
          });

          break;

        default:
          res.writeHead(404, {
            "Content-Type": "text/html",
          });
          return res.end("<h1>404 - Page Not Found</h1>");
      }

    default:
      res.writeHead(405, {
        "Content-Type": "text/html",
      });

      return res.end("<h1>405 - Method Not Allowed</h1>");
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

console.log(">>> PROJECT1.JS IS RUNNING <<<");
