const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const config = require("./middleware/config");
const pool = require("./database");
//port number
const port = config.port || 3000;
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

//test database
pool.connect().then((client) => {
  return client
    .query("SELECT NOW()")
    .then((res) => {
      client.release();
      console.log(res.rows);
    })
    .catch((err) => {
      client.release();
      console.log(err.stack);
    });
});
//error handler
app.use((err, req, res, next) => {
  res.send({
    status: err.statusCode || 500,
    message: err.message || "Server Error",
    errors: err.errors || [],
  });
});

app.listen(port, () => {
  console.log(`express app listening on port ${port}`);
});
