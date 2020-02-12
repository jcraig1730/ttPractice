const express = require("express");
const db = require("../db");
const tt = require("@tomtom-international/web-sdk-services/dist/services-node.min.js");
require("dotenv").config();

const { Donor } = db;
const key = process.env.KEY;

const router = express.Router();

const createAccount = async (req, res) => {
  try {
    const { address, name } = req.body;
    const query = Object.values(address).reduce(
      (addressParams, currentAddresParam) =>
        addressParams + currentAddresParam + " ",
      ""
    );
    const locationData = await tt.services.geocode({ key, query }).go();
    const locationCoords = locationData.results[0].position;
    address.latitude = locationCoords.lat;
    address.longitude = locationCoords.lng;
    const newAccount = await new Donor({ name, address }).save();
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getAllAcounts = async (req, res) => {
  try {
    const accounts = await Donor.find({});
    res.status(200).json(accounts);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await Donor.findById(id);
    res.status(200).json(account);
  } catch (err) {
    res.status(400).json(err);
  }
};

router.post("/:type", createAccount);
router.get("/:type", getAllAcounts);
router.get("/:type/:id", getAccount);

module.exports = router;
