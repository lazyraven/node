const express = require("express");
const app = express();
const path = require("path");
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
  //   res.send("Hello About!");
});

app.get("/map", (req, res) => {
  res.send("Hello Map!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
