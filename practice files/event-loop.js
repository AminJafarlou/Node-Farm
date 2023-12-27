const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log("TIMER 1!"), 0);
setImmediate(() => console.log("IMMEDIATE 1!"), 0);

fs.readFile("../template-card.html", () => {
  console.log("I/O TASK IS FINISHED");
  console.log("--------------------");

  setTimeout(() => console.log("TIMER 2!"), 0);
  setTimeout(() => console.log("TIMER 3!"), 3000);
  setImmediate(() => console.log("IMMEDIATE 2!"), 0);

  process.nextTick(() => console.log("PROCESS.NEXTTICK()!"), 0);
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "PASSWORD ENCRYPTED");
});
crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "PASSWORD ENCRYPTED");
});
crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "PASSWORD ENCRYPTED");
});
crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "PASSWORD ENCRYPTED");
});

console.log("TOP LEVEL CODE");
