const express = require("express");

const router = express.Router();

router.use("/accounts", require("./accounts"));
router.use("/offers", require("./offers"));

module.exports = router;
