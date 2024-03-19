'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    contact: DataTypes.STRING,
    locate: DataTypes.STRING,
    cni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};