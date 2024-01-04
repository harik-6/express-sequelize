const { sequelize, DataTypes } = require("../db");

const Student = sequelize.define("Student", {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  studentId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  batchId: {
    type: DataTypes.NUMBER,
  },
});
module.exports = Student;
