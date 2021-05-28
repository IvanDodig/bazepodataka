const express = require("express");
const router = express.Router();
const Photo = require("../models/Photos");

// Get all photos
router.get("/", async (req, res) => {
   try {
      const photos = await Photo.find();
      res.json(photos);
   } catch (error) {
      res.json({ message: error });
   }
});

// Create photo
router.post("/", async (req, res) => {
   const photo = new Photo({
      path: req.body.path,
      car_id: req.body.car_id,
   });

   try {
      const savedPhoto = await photo.save();
      res.json(savedPhoto);
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
