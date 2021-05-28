const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());

//ROUTES
const carsRoute = require("./routes/cars");
app.use("/cars", carsRoute);

const reservationsRoute = require("./routes/reservation");
app.use("/reservations", reservationsRoute);

const locationsRoute = require("./routes/locations");
app.use("/locations", locationsRoute);

const usersRoute = require("./routes/users");
app.use("/users", usersRoute);

const photosRoute = require("./routes/photos");
app.use("/photos", photosRoute);

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
   console.log("connected to db")
);

// listener
app.listen(3500);
