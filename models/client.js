"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Client extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasMany(models.Account, {
				foreignKey: "client_id",
				onDelete: "CASCADE",
			});
			this.belongsTo(models.User, {
				foreignKey: "user_id",
      });
      
		}
	}
	Client.init(
		{
			name: DataTypes.STRING,
			lastname: DataTypes.STRING,
			contact: DataTypes.STRING,
			locate: DataTypes.STRING,
			cni: DataTypes.STRING,
			user_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Client",
		},
	);
	return Client;
};
