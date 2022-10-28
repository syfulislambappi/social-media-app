const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const middleware = [
  express.json(),
  express.raw(),
  express.urlencoded({ extended: true }),
  morgan("dev"),
  cors(),
];

module.exports = middleware;
