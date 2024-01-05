const { sequelize, DataTypes } = require("../db");

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
module.exports = Student;
