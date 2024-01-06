const { sequelize, DataTypes } = require("../db");

const RankCard = sequelize.define("RankCard", {
  totalMarks: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  rank: {
    type: DataTypes.NUMBER,
    unique: true,
  }
});
module.exports = RankCard;
