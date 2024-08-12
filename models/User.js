const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    fname: {
      type: DataTypes.STRING
    },
    lname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 15]
    }
  },
  {
    hooks: {
      beforeCreate: async function(userdata){
        userdata.password = await bcrypt.hash(userdata.password, 10)
        return userdata
      },
      beforeUpdate: async function(userdata){
        userdata.password = await bcrypt.hash(userdata.password, 10)
        return userdata
      }
    },
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
