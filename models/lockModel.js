const pool = require("../database/index");
class lockModel {
  //create unit
  async create(unit_id, remote_lock_id) {
    try {
      //open connection with db
      const connection = await pool.connect();
      //sql statment
      const sql = `insert into lock (unit_id,remote_lock_id) values ($1,$2) RETURNING *`;
      //run query
      //console.log("data enter", u);
      const result = await connection.query(sql, [unit_id, remote_lock_id]);
      console.log("result", result.rows[0]);
      //relase connection
      connection.release();
      //return result
      return result.rows[0];
    } catch (error) {
      console.log("error herrrrr!", error);
      throw Error("unable to create lock");
    }
  }
}
module.exports = lockModel;
