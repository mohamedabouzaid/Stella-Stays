const pool = require("../database/index");
class acessCodeModel {
  //create unit
  async create(lock_id, reservation_id, passcode, remote_passcode_id) {
    try {
      //open connection with db
      const connection = await pool.connect();
      //sql statment
      const sql = `insert into access_code (lock_id, reservation_id,passcode,remote_passcode_id) values ($1,$2,$3,$4) RETURNING *`;
      //run query
      //console.log("data enter", u);
      const result = await connection.query(sql, [
        lock_id,
        reservation_id,
        passcode,
        remote_passcode_id,
      ]);
      // console.log("result", result.rows[0]);
      //relase connection
      connection.release();
      //return result
      return result.rows[0];
    } catch (error) {
      console.log("error herrrrr!", error);
      throw Error("unable to create acess_code ");
    }
  }
}
module.exports = acessCodeModel;
