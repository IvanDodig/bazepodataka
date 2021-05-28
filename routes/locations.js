const express = require("express");
const router = express.Router();
const Location = require("../models/Locations");

// Get all locations
router.get("/", async (req, res) => {
   try {
      const locations = await Location.find();
      res.json(locations);
   } catch (error) {
      res.json({ message: error });
   }
});

// Create a location
router.post("/", async (req, res) => {
   const location = new Location({
      name: req.body.name,
   });

   try {
      const savedLocation = await location.save();
      res.json(savedLocation);
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
