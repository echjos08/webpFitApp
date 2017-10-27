const express = require("express");
const handler = require("./httpHandler")
const controller = require("./controller");

const server = express();

server.use("/client", express.static("./jquery-mockup"));
server.use("/old", handler.main);
server.use("/game",controller.router);

server.listen(3001);
console.log("http://localhost:3001");