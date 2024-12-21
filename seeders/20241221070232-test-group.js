"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Groups", [
			{
				name: "Frontend Engineer",
				description:
					"Responsible for implementing visual elements that users see and interact with in a web application.",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Backend Engineer",
				description:
					"Responsible for server-side web application logic and integration of the work front-end developers do.",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "DevOps Engineer",
				description:
					"Responsible for overseeing the code releases and deployments, ensuring smooth operations and automation.",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "QA Engineer",
				description:
					"Responsible for ensuring the quality of the software through systematic testing and validation.",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Groups", null, {});
	},
};
