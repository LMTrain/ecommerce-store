const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

  // Matches with "/api/orders/:id"
  router
  .route("/current/:id")
  .put(ordersController.update)
  

  
  

module.exports = router;
