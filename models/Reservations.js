const mongoose = require("mongoose");

const ReservationsSchema = mongoose.Schema({
   datum_od: String,
   datum_do: String,
   user_id: String,
   car_id: String,
});

module.exports = mongoose.model("Reservations", ReservationsSchema);
