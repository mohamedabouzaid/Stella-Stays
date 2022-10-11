const pool = require("../database/index");
const Unit = require("../types/unit");
class UnitModel {
  //create unit
  async create(u) {
    try {
      //open connection with db
      const connection = await pool.connect();
      //sql statment
      const sql = `insert into unit (unit_name) values ($1) RETURNING *`;
      //run query
      console.log("data enter", u.id, u.unit_name);
      const result = await connection.query(sql, [u.unit_name]);
      console.log("result", result.rows[0]);
      //relase connection
      connection.release();
      //return result
      return result.rows[0];
    } catch (error) {
      console.log("error herrrrr!", error);
      throw Error("unable to create Unit ");
    }
  }
}
module.exports = UnitModel;
