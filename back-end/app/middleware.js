const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const middleware = [
  bodyParser.json({ limit: "50mb" }),
  express.json(),
  bodyParser.urlencoded({ limit: "50mb", extended: true }),
  morgan("dev"),
  cors(),
];

module.exports = middleware;
