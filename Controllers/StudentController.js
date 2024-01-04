const express = require("express");
const Student = require("../Models/StudentModel");
const studentController = express.Router();

// create a new Student
studentController.post("/", async (req, res) => {
  try {
    const { firstname, email, batchId } = req.body;
    const newStudent = await Student.create({
      firstname,
      email,
      batchId,
    });

    res.status(200).json(newStudent);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
});
// Get all students in a particular batch
studentController.get("/", async (req, res) => {
  try {
    const batchId = req.query.batchId;
    //   console.log(req.query);
    const students = await Student.findAll({
      where: {
        batchId,
      },
    });
    if (students === null) {
      res.status(404).send("students not found");
    } else {
      res.status(200).send(students);
    }
  } catch (err) {
    res.status(500).send("invalid");
  }
});
// Get one student by studentid
studentController.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOne({
      where: {
        id: id,
      },
    });
    if (student === null) {
      res.status(404).send("student not found");
    } else {
      res.status(200).send(student);
    }
  } catch (err) {
    res.status(500).send("invalid");
  }
});

module.exports = studentController;
