const express = require("express");
const { auth, ctrlWrapper } = require("../../middlewars/index.js");
const { getCurrent } = require("../../controllers/users/index.js");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(getCurrent));

module.exports = router;
