const express = require("express");
const { auth, upload, ctrlWrapper } = require("../../middlewars/index.js");
const {
  getCurrent,
  updateAvatar,
  verifyEmail,
} = require("../../controllers/users/index.js");
const { verify } = require("jsonwebtoken");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(getCurrent));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));

module.exports = router;
