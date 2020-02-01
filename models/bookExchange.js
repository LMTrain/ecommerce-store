const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  memberId: { type: String, required: true },
  bookId: String,
  title: String,
  authors: String, 
  link: String,
  thumbnail: String,  
  description: String,
  publisheddate: String,
  request: Boolean,
  request: Boolean,
});

const book = mongoose.model("book", bookSchema);

module.exports = book;
