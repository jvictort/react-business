const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('reactBusiness_db', 'seu-usuário', 'sua-senha', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  DataTypes: DataTypes
};
