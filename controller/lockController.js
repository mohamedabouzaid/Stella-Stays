const Lock = require("../models/lockModel");
const lockController = {
  //create lock
  async createLock(unit_id, remote_lock_id) {
    const lock = await new Lock().create(unit_id, remote_lock_id);
    return lock;
  },
};

module.exports = lockController;
