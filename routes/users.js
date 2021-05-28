const express = require("express");
const router = express.Router();
const User = require("../models/Users");

// Get all users
router.get("/", async (req, res) => {
   try {
      const users = await User.find();
      res.json(users);
   } catch (error) {
      res.json({ message: error });
   }
});

// Create an user
router.post("/", async (req, res) => {
   const user = new User({
      name: req.body.name,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      birth_date: req.body.birth_date,
      role: req.body.role,
   });

   try {
      const savedUser = await user.save();
      res.json(savedUser);
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
