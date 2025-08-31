const http = require("http");
const subscribeMail = require("./mail");
const allowedOrigins = [
  "http://localhost:5173",
  "https://mailsenderui.netlify.app",
];
let server = http.createServer((req, res) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/sendmail" && req.method === "POST") {
    req.on("data", (body) => {
      let email = body.toString();
      subscribeMail(email);
      res.end(`Subscribed Successfully`);
    });
  }
});
server.listen(process.env.PORT);
console.log("Server is running on port 4000");
