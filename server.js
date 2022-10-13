const express = require("express");
const morgan = require("morgan");
//const helmet = require("helmet");
const config = require("./middleware/config");
const pool = require("./database/index");
const Unit = require("./models/unitModel");
//graph Ql
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const root = require("./graphql/resolvers");
//port number
const port = config.port || 3000;
// create instance serer
const app = express();

//middlewares
// parse incoming request midleware
app.use(express.json());
//http security middleware
//app.use(helmet());
//HTTP request logger middleware
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/add", async (req, res) => {
  const x = { id: 124, unit_name: "ilexcd" };
  const unit = await new Unit().create(x);
  res.send(unit);
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

//graph route
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

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
