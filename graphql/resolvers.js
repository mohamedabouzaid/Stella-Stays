const unitController = require("../controller/unitController");
const reservationController = require("../controller/reservationController");
module.exports = {
  ...unitController,
  ...reservationController,
};
