"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasMany(models.Mise, {
				foreignKey: "user_id",
				onDelete: "CASCADE",
			});
			this.hasMany(models.Client, {
				foreignKey: "user_id",
				onDelete: "CASCADE",
			});
			this.hasMany(models.Account, {
				foreignKey: "user_id",
				onDelete: "CASCADE",
			});
			this.belongsTo(models.Role, {
				foreignKey: "role_id",
				onDelete: "SET NULL",
			});
		}
	}
	User.init(
		{
			name: DataTypes.STRING,
			lastname: DataTypes.STRING,
			email: DataTypes.STRING,
			contact: DataTypes.STRING,
			role_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "User",
		},
	);
	return User;
};
