const pool = require("../database/index");
class ReservationModel {
  //create unit
  async create(unit_id, guest_name, check_in, check_out) {
    try {
      //open connection with db
      const connection = await pool.connect();
      //sql statment
      const sql = `insert into reservation (unit_id, guest_name, check_in, check_out) values ($1,$2,$3,$4) RETURNING *`;
      //run query
      //console.log("data enter", u);
      const result = await connection.query(sql, [
        unit_id,
        guest_name,
        check_in,
        check_out,
      ]);
      console.log("result", result.rows[0]);
      //relase connection
      connection.release();
      //return result
      return result.rows[0];
    } catch (error) {
      console.log("error herrrrr!", error);
      throw Error("unable to create Reservation ");
    }
  }
}
module.exports = ReservationModel;
