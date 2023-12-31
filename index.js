const fs = require("fs");
const url = require("url");
const http = require("http");

const replaceTemplate = require("./modules/replaceTemplate");

const tempOverview = fs.readFileSync(
  `${__dirname}/template-overview.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/template-product.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(`${__dirname}/template-card.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  // OVERVIEW PAGE
  if (pathname === "/" || pathname === "/overview") {
    const cardHTML = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const overviewHTML = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardHTML);

    res.writeHead(200, { "Content-type": "text/html" });
    res.end(overviewHTML);

    return;
  }

  // PRODUCT PAGE
  if (pathname === "/product") {
    const product = dataObj[query.id];

    res.writeHead(200, { "Content-type": "text/html" });
    res.end(replaceTemplate(tempProduct, product));
    return;
  }

  if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);

    return;
  }

  res.writeHead(404);
  res.end("<h1>NOT FOUND</h1>");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("SERVER STARTED");
});
