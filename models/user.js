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
			User.belongsToMany(models.Group, {
				through: "UserGroup",
				foreignKey: "userId",
				otherKey: "groupId",
				as: "groups",
			});
			User.hasMany(models.Task, {
				foreignKey: "userId",
				as: "tasks",
			});
		}
	}
	User.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			phoneNumber: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "User",
			timestamps: true,
		}
	);
	return User;
};