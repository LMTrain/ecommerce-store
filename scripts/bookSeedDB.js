const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/usersinpecom"
);


const bookSeed = [
  { 
    "bookId": "wjXoLQ2NFzE",
    "title":  "Weapons of Math Destruction",
    "authors": "Cathy O'Neil",
    "link": "http://books.google.com/books?id=60n0DAAAQBAJ&dq=Weapons+of+Math+Destruction&hl=&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=60n0DAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "A former Wall Street quant sounds an alarm on the mathematical models that pervade modern life - and threaten to rip apart our social fabric We live in the age of the algorithm. Increasingly, the decisions that affect our lives - where we go to school, whether we get a loan, how much we pay for insurance - are being made not by humans, but by mathematical models.",
    "publisheddate": "2016-09-06",
    "request": false,       
    "deny": true,
  }  
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
