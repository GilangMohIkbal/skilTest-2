'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: DataTypes.STRING(36),
    name: DataTypes.STRING(50),
    address: DataTypes.STRING(255),
    gender: DataTypes.ENUM("Laki-laki","Perempuan"),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255)
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};