const dao = require('../db/listings/listing-dao');

module.exports = (app) => {
  const findAllListings = (req, res) => {
    return dao.findAllListings()
      .then(listings => res.json(listings));
  }
  const createListing = (req, res) => {
    return dao.createListing(req.body)
      .then(insertedListing => res.json(insertedListing))
  }
  const deleteListing = (req, res) => {
    return dao.deleteListing(req.params.id)
      .then(code => res.status(code))
  }

  app.get('/api/listings', findAllListings);
  app.post('/api/listings', createListing);
  app.delete('/api/listings/:id', deleteListing);
};
