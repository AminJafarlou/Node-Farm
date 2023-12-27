const http = require("http");
const EventsEmitter = require("events");

class Sales extends EventsEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("A new sale is added.");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Amin");
});

myEmitter.on("newSale", (stock) => {
  console.log(`Number of purchased items: ${stock}`);
});

myEmitter.emit("newSale", 9);

//////////////////////////////////////////////////
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("A Request is received.");
  console.log(req.url);
  res.end("EVENTS EXAMPLE");
});
server.on("request", (req, res) => {
  console.log("Another Request is received.");
});
server.listen("8000", "127.0.0.1", () => {
  console.log("Waiting for requests ...");
});
