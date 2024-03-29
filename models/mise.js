"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Mise extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Account, {
				foreignKey: "account_id",
			});
			this.belongsTo(models.User, {
				foreignKey: "user_id",
				onDelete: "CASCADE",
			});
		}
	}
	Mise.init(
		{
			start: DataTypes.DATE,
			end: DataTypes.DATE,
			mise: DataTypes.INTEGER,
			account_id: DataTypes.INTEGER,
			user_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Mise",
		},
	);
	return Mise;
};
