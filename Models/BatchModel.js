const { sequelize, DataTypes } = require("../db");

const Batch = sequelize.define(
  "Batch",
  {
    batchName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructorName: {
      type: DataTypes.STRING,
    },
    batchId: {
      type: DataTypes.NUMBER,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Batch;
