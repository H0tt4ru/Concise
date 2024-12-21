"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Group extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Group.belongsToMany(models.User, {
				through: "UserGroup",
				foreignKey: "groupId",
				otherKey: "userId",
				as: "users",
			});
		}
	}
	Group.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false, // Ensure name is required
			},
			description: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "Group",
			timestamps: true,
		}
	);
	return Group;
};
