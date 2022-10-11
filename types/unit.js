const { DataTypes } = require("sequelize");
const unit = {
  id: {
    type: DataTypes.STRING,
  },
  unit_name: {
    type: DataTypes.STRING,
  },
};
module.exports = unit;
