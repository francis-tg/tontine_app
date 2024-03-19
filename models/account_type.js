"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Account_type extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasMany(models.Account, {
				foreignKey: "account_type",
				onDelete: "CASCADE",
			});
		}
	}
	Account_type.init(
		{
			label: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Account_type",
		},
	);
	return Account_type;
};
