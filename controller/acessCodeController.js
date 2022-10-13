const AcessCode = require("../models/acessCodeModel");
const acessCodeController = {
  //create Unit
  async createAcessCode(lock_id, reservation_id, passcode, remote_passcode_id) {
    const result = await new AcessCode().create(
      lock_id,
      reservation_id,
      passcode,
      remote_passcode_id
    );
    return result;
  },
};

module.exports = acessCodeController;
