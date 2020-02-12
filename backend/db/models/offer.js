const mongoose = require("mongoose");

const { donorSchema } = require("./donor");
const { Schema } = mongoose;

const offerSchema = new Schema({
  type: String,
  description: String,
  value: Number,
  donor: donorSchema
});

module.exports = mongoose.model("Offer", offerSchema);
