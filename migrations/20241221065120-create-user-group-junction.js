"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("UserGroup", {
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Users",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			groupId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Groups",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("UserGroup");
	},
};
