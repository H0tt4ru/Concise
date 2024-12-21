"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Tasks", [
			{
				name: "Setting up the project",
				deadline: new Date("2024-12-24"),
				userId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Make Restful API",
				deadline: new Date("2024-12-24"),
				userId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Lorem ipsum dolor sit amet",
				deadline: new Date("9999-12-31"),
				userId: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Consectetur adipiscing elit",
				deadline: new Date("9999-12-31"),
				userId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Tasks", null, {});
	},
};
