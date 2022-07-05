
const modelTag = require('./models/Tag')
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/asoplata`
);

modelTag(sequelize)

module.exports = {
  ...sequelize.models,
  db: sequelize
}
