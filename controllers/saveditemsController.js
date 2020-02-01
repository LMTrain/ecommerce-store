const db = require("../models");

// Defining methods for the itemsController
module.exports = {
  findAll: function(req, res) {
    db.savedItems
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.savedItems
      .find({userName : req.params.memberId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    return db.savedItems.create(req.body) 
      .then(function(dbsaveditems) {
        return db.user.findOneAndUpdate({ _id: req.params.id }, {saveditems: dbsaveditems._id}, {new:true}, req.body)
    })
      .then(dbsaveditems => res.json(dbsaveditems))
      .catch(err => {
        console.error('Error creating the cart!', err);
        return res.status(422).json(err)
      });
  },
  

  
  remove: function(req, res) {
    db.SavedItems
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
