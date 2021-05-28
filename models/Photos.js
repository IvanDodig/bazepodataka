const mongoose = require("mongoose");

const PhotosSchema = mongoose.Schema({
   path: String,
   car_id: String,
});

module.exports = mongoose.model("Photos", PhotosSchema);
