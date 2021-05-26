const express = require("express");
const router = express.Router();
const Car = require("../models/Cars");

// Get all cars
router.get("/", async (req, res) => {
   try {
      const cars = await Car.find();
      res.json(cars);
   } catch (error) {
      res.json({ message: error });
   }
});

// Create a car
router.post("/", async (req, res) => {
   const car = new Car({
      brand: req.body.brand,
      model: req.body.model,
      prod_year: req.body.prod_year,
      body_type: req.body.body_type,
      engine_pover: req.body.engine_pover,
      doors_num: req.body.doors_num,
      seats_num: req.body.seats_num,
      location_id: req.body.location_id,
      user_id: req.body.user_id,
   });

   try {
      const savedCar = await car.save();
      res.json(savedCar);
   } catch (error) {
      res.json({ message: error });
   }
});

// Get single car
router.get("/:id", async (req, res) => {
   console.log(req.params.id);
   try {
      const car = await Car.findById(req.params.id);
      res.json(car);
   } catch (error) {
      res.json({ message: error });
   }
});

// Update the car
router.patch("/:id", async (req, res) => {
   try {
      const updatedCar = await Car.updateOne(
         { _id: req.params.id },
         { $set: { brand: req.body.brand } }
      );
      res.json(updatedCar);
   } catch (error) {
      console.log(error);
      res.json({ message: error });
   }
});

// Delete the car
router.delete("/:id", async (req, res) => {
   try {
      const removedCar = await Car.remove({ _id: req.params.id });
      res.json(removedCar);
   } catch (error) {
      console.log(error);
      res.json({ message: error });
   }
});
module.exports = router;
