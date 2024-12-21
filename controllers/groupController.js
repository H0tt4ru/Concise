// Import the DB
const db = require("../models");
const Joi = require("joi");

const { Group, User } = db;

// Utility functions
function toPascalCase(str) {
	return str
		.split(" ")
		.map((word) => {
			if (!/^[a-zA-Z]/.test(word.charAt(0))) {
				return word;
			}
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");
}

// Group schema
const groupSchema = Joi.object({
	name: Joi.string().max(100).required(),
	description: Joi.string().min(3).max(255).required(),
});

// Create a new group
async function createGroup(req, res) {
	const { error } = groupSchema.validate(req.body);
	if (error) {
		return res.status(400).send(error);
	}

	req.body.name = toPascalCase(req.body.name);

	try {
		const group = await Group.create(req.body);
		res.status(201).send(group);
	} catch (error) {
		res.status(400).send(error);
	}
}

// Get all groups
async function getAllGroups(req, res) {
	try {
		const groups = await Group.findAll();
		res.status(200).send(groups);
	} catch (error) {
		res.status(400).send(error);
	}
}

// Get a group by ID
async function getGroupById(req, res) {
	try {
		const group = await Group.findByPk(req.params.id, {
			include: [
				{
					model: User,
					as: "users",
					through: { attributes: [] },
				},
			],
		});
		if (!group) {
			return res.status(404).send("Group not found");
		} else {
			res.status(200).send(group);
		}
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
}

// Update a group
async function updateGroup(req, res) {
	const { error } = groupSchema.validate(req.body);
	if (error) {
		return res.status(400).send(error);
	}

	req.body.name = toPascalCase(req.body.name);

	try {
		const group = await Group.findByPk(req.params.id);
		if (!group) {
			return res.status(404).send("Group not found");
		} else {
			await group.update(req.body);
			res.status(200).send(group);
		}
	} catch (error) {
		res.status(400).send(error);
	}
}

// Delete a group
async function deleteGroup(req, res) {
	try {
		const group = await Group.findByPk(req.params.id);
		if (!group) {
			return res.status(404).send("Group not found");
		} else {
			await group.destroy();
			res.status(204).send();
		}
	} catch (error) {
		res.status(400).send(error);
	}
}

module.exports = {
	createGroup,
	getAllGroups,
	getGroupById,
	updateGroup,
	deleteGroup,
};
