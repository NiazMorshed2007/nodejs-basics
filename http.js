const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
  if (req.url === "/user") {
    res.write("Welcome Johnson!");
    res.end();
  }
});

server.listen(3000, () => console.log("the server is up and running"));
