const http = require("http");
const subscribeMail = require("./mail");

let server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/sendmail" && req.method === "POST") {
    req.on("data", (body) => {
      let email = body.toString();
      subscribeMail(email);
      res.end(`Subscribed Successfully`);
    });
  }
});
server.listen(4000);
console.log("Server is running on port 4000");
