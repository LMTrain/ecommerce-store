const db = require("../models");

// Defining methods for the itemsController
module.exports = {
  findAll: function(req, res) {
    db.cart
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.cart
      .find({userName : req.params.memberId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    return db.cart.create(req.body) 
      .then(function(dbCart) {
        return db.user.findOneAndUpdate({ _id: req.params.id }, {cart: dbCart._id}, {new:true}, req.body)
    })
      .then(dbCart => res.json(dbCart))
      .catch(err => {
        console.error('Error creating the cart!', err);
        return res.status(422).json(err)
      });
  },
  
  remove: function(req, res) {
    db.cart
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
