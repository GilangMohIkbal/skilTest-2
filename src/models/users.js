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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      required: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      required: true
    },
    gender: {
      type: DataTypes.ENUM("Laki-laki","Perempuan"),
      require:true
    },
    email: {
      type: DataTypes.STRING(255),
      require: true,
    },
    password: {
      type:DataTypes.STRING(255),
      required: true
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};