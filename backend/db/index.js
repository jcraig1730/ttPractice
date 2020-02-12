require("./connection");

const { Donor } = require("./models/donor");
const Offer = require("./models/offer");

const db = { Donor, Offer };

module.exports = db;
