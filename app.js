const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//ROUTES
const carsRoute = require("./routes/cars");
app.use("/cars", carsRoute);

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
   console.log("connected to db")
);

// listener
app.listen(3500);
