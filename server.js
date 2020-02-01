const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;



// Define middleware here
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



// Serve up static assets (usually on homeimageku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/usersinpecom");




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
