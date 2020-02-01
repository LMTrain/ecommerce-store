const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/usersinpecom"
);


const ordersSeed = [
  {   
    "item": "Mini Backpack - Peppa Girls Bag",
    "qty": 20,
    "unitPrice": 17.95,
    "link": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FMini-Backpack-Peppa-Pig-Pink-w-Friends-10-Girls-Bag-137636-2%2F138392823%3Faffp1%3DEO2CEt1dg2KjOSy0P4q5OwOs71DGZRnKBNAhdJoSy10%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
    "description": "Mini Backpack, Size: ~10&quot; x 8&quot; x 3&quot;; Licensed Product",
    "thumbnail":"https://i5.walmartimages.com/asr/dd55bdc2-9ce1-4044-95f3-9fa1dc88f221_1.912ef0d34bf473e074db16d013fe1088.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    "customerRating": "4.7", 
  }  
];

db.Orders
  .remove({})
  .then(() => db.Orders.collection.insertMany(ordersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
