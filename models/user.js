'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Read, {
      foreignKey: 'userId',
      as: 'reads'
    })
  };
  return User;
};