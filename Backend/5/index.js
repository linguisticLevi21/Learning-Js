const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at Shahadathussainop786@gmail.com");
});

app.post("/submit", (req, res) => {
  res.status(200).send("Form submitted successfully!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
