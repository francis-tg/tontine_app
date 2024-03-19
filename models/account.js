"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Account extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasOne(models.Client, {
				foreignKey: "client_id",
				onDelete: "CASCADE",
			});
			this.hasOne(models.User, {
				foreignKey: "user_id",
				onDelete: "CASCADE",
			});
			this.hasMany(models.Mise, {
				foreignKey: "account_id",
			});
		}
	}
	Account.init(
		{
			client_id: DataTypes.INTEGER,
			account_type: DataTypes.INTEGER,
			account_num: DataTypes.STRING,
			user_id: DataTypes.INTEGER,
			closed: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Account",
		},
	);
	return Account;
};
