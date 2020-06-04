const Sequelize = require('Sequelize');
const sequelize = require('../../database/index');
const bcrypt = require('bcryptjs');

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    select: false
  }
}, {});

User.addHook('beforeSave', async user => {
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;