"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Users", [
			{
				name: "Nathan Angelo Stenlie",
				email: "stenlieangelonathan@gmail.com",
				phoneNumber: "087775586670",
				address: "Jl. Pergiwa Blok D 21 no 2",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "John Doe",
				email: "johndoe@example.com",
				phoneNumber: "1234567890",
				address: "123 Main St, Cityville, CA",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Jane Smith",
				email: "janesmith@example.com",
				phoneNumber: "9876543210",
				address: "456 Oak St, Townsville, TX",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Alice Johnson",
				email: "alicejohnson@example.com",
				phoneNumber: "5551234567",
				address: "789 Pine St, Villagetown, NY",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Bob Brown",
				email: "bobbrown@example.com",
				phoneNumber: "5559876543",
				address: "321 Maple St, Hamletville, FL",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Charlie Davis",
				email: "charliedavis@example.com",
				phoneNumber: "5556543210",
				address: "654 Elm St, Metropolis, IL",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Diana Evans",
				email: "dianaevans@example.com",
				phoneNumber: "5554321098",
				address: "987 Birch St, Smalltown, OH",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Ethan Foster",
				email: "ethanfoster@example.com",
				phoneNumber: "5553210987",
				address: "123 Cedar St, Bigcity, WA",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Fiona Green",
				email: "fionagreen@example.com",
				phoneNumber: "5552109876",
				address: "456 Spruce St, Middletown, OR",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "George Harris",
				email: "georgeharris@example.com",
				phoneNumber: "5551098765",
				address: "789 Willow St, Anytown, NV",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
