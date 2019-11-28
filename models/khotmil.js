'use strict';
module.exports = (sequelize, DataTypes) => {
  const Khotmil = sequelize.define('Khotmil', {
    label: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {});
  Khotmil.associate = function(models) {
    Khotmil.hasMany(models.Juz, {
      foreignKey: 'khotmilId',
      as: 'juzzes'
    });
  };
  return Khotmil;
};