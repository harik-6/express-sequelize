const express = require("express");
const batchController = require("../Controllers/BatchController");

const router = express.Router();

router.post("/", batchController.create);
router.get("/", batchController.allBatch);
router.get("/:id", batchController.getBatchDetails);

module.exports = router;
