const mongoose = require("mongoose");

const { Schema } = mongoose;

const donorSchema = new Schema({
  name: String,
  address: {
    city: String,
    street: String,
    zip: String,
    latitude: String,
    longitude: String
  }
});

exports.donorSchema = donorSchema;

exports.Donor = mongoose.model("Donor", donorSchema);
