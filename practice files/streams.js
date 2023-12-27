// Solution 1 problem: it takes a long time to finish reading large files
// Solution 2 problem: reading stream is much faster than sending data to client,
//  which is called BACK_PRESSURE
// Solution 3: NO PROBLEMS

const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1: without stream
  //   fs.readFile("../template-product.js", (err, data) => {
  //     if (err) console.log({ err });
  //     res.end(data);
  //   });
  //
  // Solution 2: using STREAM
  //   const readable = fs.createReadStream("../template-product.html");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log({ err });
  //     res.statusCode = 404;
  //     res.end("File not found");
  //   });
  //
  // Solution 3: using stream with PIPE METHOD
  const readable = fs.createReadStream("../template-product.html");
  readable.pipe(res); // readableSource.pipe(writableDestination)
});

server.listen("8000", "127.0.0.1", () => {
  console.log("Waiting for requests ...");
});
