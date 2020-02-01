const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(usersController.create)
.put(usersController.update);


// Matches with "/api/users/:id"
router
.route("/current/:userName")
.get(usersController.findById)

router
  .route("/:id")
  .get(usersController.findById)
  .delete(usersController.remove);
 

  router
  .route("/login")
  .post(usersController.find)
  

module.exports = router;
