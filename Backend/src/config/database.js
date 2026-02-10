const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error("Error connecting to Database:", err);
  });
}

module.exports = connectToDatabase;