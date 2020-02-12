const express = require("express");

const { Offer, Donor } = require("../db");
const router = express.Router();

const createOffer = async (req, res) => {
  try {
    const offerData = req.body;
    const donor = await Donor.findById(offerData.donor);
    offerData.donor = donor;
    const newOffer = await new Offer(offerData).save();
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const offer = await Offer.findById(id);
    res.status(200).json(offer);
  } catch (err) {
    res.status(400).json(err);
  }
};

router.post("/", createOffer);
router.get("/", getAllOffers);
router.get("/:id", getOffer);

module.exports = router;
