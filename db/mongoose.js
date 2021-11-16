const mongoose = require('mongoose');
const config = require('./db-config');

module.exports = function() {
    const db = mongoose.connect(config.db);
    require('../server-side/models/customers.server.model');
    require('../server-side/models/medicines.server.model');
    return db;
};
