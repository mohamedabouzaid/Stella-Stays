const pool = require("../database/index");
class UnitModel {
  //create unit
  async create(unit_name) {
    try {
      //open connection with db
      const connection = await pool.connect();
      //sql statment
      const sql = `insert into unit (unit_name) values ($1) RETURNING *`;
      //run query
      //console.log("data enter", u);
      const result = await connection.query(sql, [unit_name]);
      // console.log("result", result.rows[0]);
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
