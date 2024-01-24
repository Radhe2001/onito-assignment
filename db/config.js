const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uazcaoo.mongodb.net/assignment1`)
    .then(res => console.log("Database connected"))
    .catch(err => console.log(err))
