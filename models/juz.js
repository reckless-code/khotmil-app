'use strict';
module.exports = (sequelize, DataTypes) => {
  const Juz = sequelize.define('Juz', {
    khotmilId: DataTypes.INTEGER
  }, {});
  Juz.associate = function(models) {
    Juz.hasMany(models.Read, {
      foreignKey: 'juzId',
      as: 'reads'
    });
    Juz.belongsTo(models.Khotmil, {
      foreignKey: 'khotmilId',
      as: 'khotmil'
    });
  };
  return Juz;
};