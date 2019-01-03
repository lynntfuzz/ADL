'use strict';

module.exports = function(sequelize, DataTypes) {
  var Showcase = sequelize.define('Showcase', {
    header: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Need to figure out proper data type and validation for this field
    image_path: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'placeholder.jpg'
    }
});
  return Showcase;
};