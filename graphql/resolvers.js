const unitController = require("../controller/unitController");
const reservationController = require("../controller/reservationController");
module.exports = {
  hello() {
    return {
      text: "hello world",
      views: 200,
    };
  },
  ...unitController,
  ...reservationController,
};
