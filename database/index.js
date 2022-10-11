const { Pool } = require("pg");
const config = require("../middleware/config");
//configuring pool with connection information.
const pool = new Pool({
  host: config.host,
  database: config.database,
  password: config.password,
  user: config.user,
  port: parseInt(config.dbport, 10),
});

//Error Event
pool.on("error", (error) => {
  console.log(error.message);
});
module.exports = pool;
