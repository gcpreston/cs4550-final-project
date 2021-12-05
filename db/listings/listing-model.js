const mongoose = require('mongoose');
const schema = require('./listing-schema');

const model = mongoose.model('ListingModel', schema);

module.exports = model;
