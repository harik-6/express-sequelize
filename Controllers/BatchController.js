const express = require("express");
const Batch = require("../Models/BatchModel");
const Student = require("../Models/StudentModel");
const batchController = express.Router();

// create a new Student
const create = async (req, res) => {
  try {
    const { batchName, instructorName, batchId } = req.body;
    const newBatch = await Batch.create({
      batchName,
      instructorName,
      batchId,
    });

    res.status(200).json(newBatch);
  } catch (err) {
    res.status(500).send(err);
  }
};
// Get all students in a particular batch
const allBatch = async (req, res) => {
  try {
    //   console.log(req.query);
    const batchDetails = await Batch.findAll();
    if (batchDetails === null) {
      res.status(404).send("batch not found");
    } else {
      res.status(200).send(JSON.stringify(batchDetails, null, 2));
    }
  } catch (err) {
    res.status(500).send("invalid");
  }
};

// Find all students of particular batch
const getBatchDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const batchDetails = await Batch.findOne({
      where: {
        batchId: id,
      },
    });
    if (batchDetails === null) {
      res.status(404).send("batch not found");
    } else {
      res.status(200).send(batchDetails);
    }
  } catch (e) {
    res.status(500).send("invalid");
  }
};

module.exports = {
  create: create,
  getBatchDetails: getBatchDetails,
  allBatch: allBatch,
};
