'use strict';

module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
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
        // validate: {
        //     isPhone: true
        // }
    },
    isRegistered: {
        type: DataTypes.BOOLEAN 
    }
  
});

  return Contact;
};