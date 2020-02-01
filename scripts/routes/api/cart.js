const router = require("express").Router();
const cartController = require("../../controllers/cartController");


  // Matches with "/api/users/:id"
  router
  .route("/current/:id")
  .put(cartController.update)


  
  

module.exports = router;
