const db = require("../models");

// Defining methods for the itemsController
module.exports = {
  findAll: function(req, res) {
    db.orders
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.orders
      .find({userName : req.params.memberId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    return db.orders.create(req.body) 
      .then(function(dbOrders) {
        return db.user.findOneAndUpdate({ _id: req.params.id }, {orders: dbOrders._id}, {new:true}, req.body)
    })
      .then(dbOrders => res.json(dbOrders))
      .catch(err => {
        console.error('Error creating the orders!', err);
        return res.status(422).json(err)
      });
  },
 
  
  remove: function(req, res) {
    db.orders
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
