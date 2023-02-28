const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const express = require("express");
const app = express();

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let num = _.random(0, 20);
  console.log(num);
  res.setHeader("Content-Type", "text/html");

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.write(data);
    res.end();
  });
});

server.listen(3000, () => {
  console.log("Listening for requests on port 3000");
});
