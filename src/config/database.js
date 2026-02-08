const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect("mongodb+srv://chavhansani365_db_user:4JCHv9f4VZ0eoGq7@cluster0.iurqbqy.mongodb.net/day14")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error("Error connecting to Database:", err);
  });
}

module.exports = connectToDatabase;