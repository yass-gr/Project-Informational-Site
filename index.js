import http from "node:http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    const page = await fs.readFile("./pages/index.html", "utf8");
    res.write(page);
    res.end();
  } else if (req.url === "/about") {
    const page = await fs.readFile("./pages/about.html", "utf8");
    res.write(page);
    res.end();
  } else if (req.url === "/contactme") {
    const page = await fs.readFile("./pages/contact-me.html", "utf8");
    res.write(page);
    res.end();
  } else {
    const page = await fs.readFile("./pages/404.html", "utf8");
    res.write(page);
    res.end();
  }
});

server.listen(3000);
console.log("running...");
