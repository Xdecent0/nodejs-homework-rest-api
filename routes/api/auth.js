const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewars/index");
const { signup, logout, login } = require("../../controllers/auth/index.js");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(signup));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(login));
router.get("/logout", auth, ctrlWrapper(logout));
module.exports = router;
