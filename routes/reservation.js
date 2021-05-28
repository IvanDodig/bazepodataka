const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservations");

// Get all cars
// router.get("/", async (req, res) => {
//    try {
//       const cars = await Car.find();
//       res.json(cars);
//    } catch (error) {
//       res.json({ message: error });
//    }
// });

// Create a reservation
router.post("/", async (req, res) => {
   const reservation = new Reservation({
      datum_od: req.body.datum_od,
      datum_do: req.body.datum_do,
      user_id: req.body.user_id,
      car_id: req.body.car_id,
   });

   try {
      const savedReservation = await reservation.save();
      res.json(savedReservation);
   } catch (error) {
      res.json({ message: error });
   }
});

// Get single car
// router.get("/:id", async (req, res) => {
//    console.log(req.params.id);
//    try {
//       const car = await Car.findById(req.params.id);
//       res.json(car);
//    } catch (error) {
//       res.json({ message: error });
//    }
// });

// Update the car
// router.patch("/:id", async (req, res) => {
//    try {
//       const updatedCar = await Car.updateOne(
//          { _id: req.params.id },
//          { $set: { brand: req.body.brand } }
//       );
//       res.json(updatedCar);
//    } catch (error) {
//       console.log(error);
//       res.json({ message: error });
//    }
// });

// // Delete the car
// router.delete("/:id", async (req, res) => {
//    try {
//       const removedCar = await Car.remove({ _id: req.params.id });
//       res.json(removedCar);
//    } catch (error) {
//       console.log(error);
//       res.json({ message: error });
//    }
// });
module.exports = router;
