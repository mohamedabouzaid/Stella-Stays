const Unit = require("../models/unitModel");
const unitController = {
  //create Unit
  async createUnit({ UnitInput }) {
    const { unit_name } = UnitInput;
    const unit = await new Unit().create(unit_name);
    return unit;
  },
};

module.exports = unitController;
