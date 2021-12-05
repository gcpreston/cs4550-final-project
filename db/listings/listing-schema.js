const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  tags: [String],
  price: Number,
  seller_id: mongoose.ObjectId
}, {collection: "listings"});

module.exports = schema;
