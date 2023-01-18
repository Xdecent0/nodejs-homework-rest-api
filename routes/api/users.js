const express = require("express");
const { auth, upload, ctrlWrapper } = require("../../middlewars/index.js");
const {
  getCurrent,
  updateAvatar,
} = require("../../controllers/users/index.js");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(getCurrent));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

module.exports = router;
