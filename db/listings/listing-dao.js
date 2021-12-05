const model = require('./listing-model');

const findAllListings = () => model.find();
const createListing = (listing) => model.create(listing);
const deleteListing = (id) => model.deleteOne({_id: id});
const updateListing = (id, listing) => model.updateOne({_id: id}, listing);

module.exports = {
  findAllListings, createListing,
  deleteListing, updateListing
};
