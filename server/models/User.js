const db = require('./db');

const User = db.sequelize.define('users', {
  userName: {
    type: db.DataTypes.STRING,
    allowNull: false
  },
  userEmail: {
    type: db.DataTypes.STRING,
    allowNull: false
  },
  userPassword: {
    type: db.DataTypes.STRING,
    allowNull: false
  }
});

// (async () => {
//   await User.sync({force: true});
// })();

module.exports = User;
