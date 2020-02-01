const router = require("express").Router();
const saveditemsController = require("../../controllers/saveditemsController");


  router
  .route("/current/:id")
  .put(saveditemsController.update)
  

  
  

module.exports = router;
