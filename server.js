const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
//port number
const port = 3000;
// create instance serer
const app = express();

//middlewares
// parse incoming request midleware
app.use(express.json());
//http security middleware
app.use(helmet());
//HTTP request logger middleware
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`express app listening on port ${port}`);
});
