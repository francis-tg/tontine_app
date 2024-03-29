"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Task extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Role, {
				foreignKey: "role_id",
				onDelete: "SET NULL",
			});
		}
	}
	Task.init(
		{
			role_id: DataTypes.INTEGER,
			task: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Task",
		},
	);
	return Task;
};
