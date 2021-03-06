'use strict';

module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    // Need to figure out proper data type and validation for this field
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // info contact entered i.e., what kind of house they are looking for, what they want
    info: {
        type: DataTypes.STRING,
        allowNull: true
    },
  
    receiveAlerts: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});
  return Contact;
};