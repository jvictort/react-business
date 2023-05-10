require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, 'sua-senha', {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  DataTypes: DataTypes
};
