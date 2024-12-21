"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("UserGroup", [
			{
				userId: 1,
				groupId: 2,
			},
			{
				userId: 1,
				groupId: 3,
			},
			{
				userId: 2,
				groupId: 1,
			},
			{
				userId: 2,
				groupId: 4,
			},
			{
				userId: 3,
				groupId: 1,
			},
			{
				userId: 3,
				groupId: 2,
			},
			{
				userId: 4,
				groupId: 3,
			},
			{
				userId: 4,
				groupId: 4,
			},
			{
				userId: 5,
				groupId: 1,
			},
			{
				userId: 5,
				groupId: 2,
			},
			{
				userId: 6,
				groupId: 3,
			},
			{
				userId: 6,
				groupId: 4,
			},
			{
				userId: 7,
				groupId: 1,
			},
			{
				userId: 7,
				groupId: 2,
			},
			{
				userId: 8,
				groupId: 3,
			},
			{
				userId: 8,
				groupId: 4,
			},
			{
				userId: 9,
				groupId: 1,
			},
			{
				userId: 10,
				groupId: 2,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
