const mongoose = require("mongoose");

const CarsSchema = mongoose.Schema({
   brand: String,
   model: String,
   prod_year: String,
   body_type: String,
   engine_pover: String,
   doors_num: String,
   seats_num: String,
   location_id: String,
   user_id: String,
});

module.exports = mongoose.model("Cars", CarsSchema);
