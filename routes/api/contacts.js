const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewars/index.js");
const { joiSchema, statusJoiSchema } = require("../../models/contact");
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatus,
} = require("../../controllers/contacts/index.js");

const router = express.Router();

router.get("/", auth, ctrlWrapper(getAll));

router.get("/:id", ctrlWrapper(getById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(add));

router.put("/:id", validation(joiSchema), ctrlWrapper(updateById));

router.patch(
  "/:id/status",
  validation(statusJoiSchema),
  ctrlWrapper(updateStatus)
);

router.delete("/:id", ctrlWrapper(removeById));

module.exports = router;
