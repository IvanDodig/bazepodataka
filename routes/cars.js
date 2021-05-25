const express = require("express");
const router = express.Router();
const Car = require("../models/Cars");

router.get("/", (req, res) => {
   res.send("We are on cars");
});

router.post("/", (req, res) => {
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

   console.log(car);

   car.save()
      .then((data) => res.json(data))
      .catch((err) => {
         console.log(err);
         return res.json({ message: err });
      });
});

module.exports = router;
