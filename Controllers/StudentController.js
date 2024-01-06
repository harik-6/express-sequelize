const express = require("express");
const Student = require("../Models/StudentModel");
const Batch = require("../Models/BatchModel");
const RankCard = require("../Models/RanCardModel");
// create a new Student

const create = async (req, res) => {
  try {
    const { name, email, batchId, rankCard } = req.body;
    const newStudent = await Student.create({
      name,
      email,
      batchId,
    });
    const newRankCard = await RankCard.create({
      ...rankCard,
      StudentId: newStudent["id"]
    })
    res.status(200).json({
      ...newStudent["dataValues"],
      rankCard: newRankCard
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const allStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    if (students === null) {
      res.status(404).send("student not found");
    } else {
      res.status(200).send(JSON.stringify(students, null, 2));
    }
  } catch (err) {
    res.status(500).send("invalid");
  }
};

const getStudentsOfBatch = async (req, res) => {
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
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOne({
      where: {
        id: id,
      },
      include: "RankCard"
    });
    if (student === null) {
      res.status(404).send("student not found");
    } else {
      res.status(200).send(student);
    }
  } catch (err) {
    res.status(500).send("invalid");
  }
};

module.exports = {
  create: create,
  getStudent: getStudent,
  allStudents: allStudents,
};
