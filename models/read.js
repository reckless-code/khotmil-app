'use strict';
module.exports = (sequelize, DataTypes) => {
  const Read = sequelize.define('Read', {
    juzId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  Read.associate = function(models) {
    Read.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'reader'
    });
    Read.belongsTo(models.Juz, {
      foreignKey: 'juzId',
      as: 'juz'
    });
  };
  return Read;
};