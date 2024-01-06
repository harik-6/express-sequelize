const { sequelize, DataTypes } = require("../db");
const RankCard = require("./RanCardModel");

const Student = sequelize.define("Student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  batchId: {
    type: DataTypes.NUMBER,
  },
});

Student.hasOne(RankCard);

module.exports = Student;
