const dotenv = require("dotenv");
dotenv.config();
const {
  PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_User,
  POSTGRES_Password,
  NODE_ENV,
} = process.env;
module.exports = {
  port: PORT,
  host: POSTGRES_HOST,
  dbPort: POSTGRES_PORT,
  database: POSTGRES_DB,
  user: POSTGRES_User,
  password: POSTGRES_Password,
  NODE_ENV,
};
