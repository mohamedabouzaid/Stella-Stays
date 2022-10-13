const Reservation = require("../models/reservationModel");
const { createLock } = require("./lockController");
const { createAcessCode } = require("./acessCodeController");
const ReservationController = {
  //create Unit
  async createReservation({ ReservationInput }) {
    //destructing field
    const {
      unitID: unit_id,
      guestName: guest_name,
      checkIn: check_in,
      checkOut: check_out,
    } = ReservationInput;
    //connect to db and add reservation
    const reservation = await new Reservation().create(
      unit_id,
      guest_name,
      check_in,
      check_out
    );
    //destircting to schema graphql
    const {
      unit_id: unitID,
      guest_name: guestName,
      check_in: checkIn,
      check_out: checkOut,
    } = reservation;
    SchemaResservation = { unitID, guestName, checkIn, checkOut };
    //create lock
    var x = 2345; //deleted//iot api
    const lock = await createLock(reservation.unit_id, x);
    console.log("locked", lock);

    //create acess code
    var z = 2345;
    var y = 234; //deleted//iot api
    const acessCode = await createAcessCode(lock.id, reservation.id, z, y);
    console.log(acessCode);
    //return to schema
    return SchemaResservation;
  },
};

module.exports = ReservationController;
