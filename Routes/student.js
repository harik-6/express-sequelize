const express = require("express");
const studentController = require("../Controllers/StudentController");

const router = express.Router();

router.post("/", studentController.create);
router.get("/", studentController.allStudents);
router.get("/:id", studentController.getStudent);

module.exports = router;
