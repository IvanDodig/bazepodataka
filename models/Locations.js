const mongoose = require("mongoose");

const LocationsSchema = mongoose.Schema({
   name: String,
});

module.exports = mongoose.model("Locations", LocationsSchema);
