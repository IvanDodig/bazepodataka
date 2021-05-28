const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
   first_name: String,
   last_name: String,
   email: String,
   password: String,
   birth_date: String,
   role: String,
});

module.exports = mongoose.model("Users", UsersSchema);
