const express = require("express");
const game = require("./object");

const router = express.Router();


router
    .get("/quotes", (req, res)=>res.send(game.quotes))
    
module.exports.router = router;