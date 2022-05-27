
const modelTag = require('./models/Tag')
const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:GORDOPUTO1@localhost:5432/asoplata"
);

modelTag(sequelize)

module.exports = {
  ...sequelize.models,
  db: sequelize
}
