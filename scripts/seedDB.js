const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/usersinpecom"
// );

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb+srv://Layconmm:C0deme-2019@cluster0-fyenf.mongodb.net/server?retryWrites=true&w=majority"
);


const itemSeed = [
  {    
    "name": "Apple iPad (Latest Model) 128GB Wi-Fi",
    "description": "The new 9.7-inch iPad features the powerful A10 Fusion chip  iPad is more powerful, personal, and intelligent.",
    "price": 379,    
    "thumbnail" : "https://i5.walmartimages.com/asr/df0e8feb-d56d-4e36-9aa1-f473b7f72b2d_1.048521ab7bf39dc959af9d92a00e0ecb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",      
  },
  {
    "name": "Ematic 7\" 16GB Tablet with Android 7.1 (Nougat) + Sleeve and Headphones, Black (EGQ373BL)",
    "price": 39.98,     
    "thumbnail": "https://i5.walmartimages.com/asr/38331f6f-6f58-4eac-8f7f-fb97d8524931_1.ab234d6d05031e50fef307a9c3c685c6.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
  }
    

];

db.item
  .remove({_id: "5dcfddacde56834170b1df63"})
  .then(() => db.item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
