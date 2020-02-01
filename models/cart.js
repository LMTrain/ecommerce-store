const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  memberId: { type: String, required: true }, 
  item: String,
  price: Number,
  qty: Number,
  link: String,
  description: String,
  thumbnail: String,  
});

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
