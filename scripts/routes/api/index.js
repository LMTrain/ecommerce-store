const router = require("express").Router();
const userRoutes = require("./users");
const cartRoutes = require("./cart");
const ordersRoutes = require("./orders");
const saveditemsRoutes = require("./saveditems");


// User routes
router.use("/users", userRoutes);

// Item routes
router.use("/cart", cartRoutes);
router.use("/saveditems", saveditemsRoutes);
router.use("/orders", ordersRoutes);

module.exports = router;
