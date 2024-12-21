// Import the DB
const db = require("../models");
const Joi = require("joi");

const { sequelize, User, Group, Task } = db;

// Utility functions
function toPascalCase(str) {
	return str
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

async function addToGroup(user, groups) {
	try {
		await sequelize.query('DELETE FROM "UserGroup" WHERE "userId" = :userId', {
			replacements: { userId: user.id },
			type: sequelize.QueryTypes.DELETE,
		});

		for (const groupId of groups) {
			const group = await Group.findByPk(groupId);
			if (!group) {
				return;
			}
			await sequelize.query(
				'INSERT INTO "UserGroup" ("userId", "groupId") VALUES (:userId, :groupId)',
				{
					replacements: { userId: user.id, groupId },
					type: sequelize.QueryTypes.INSERT,
				}
			);
		}

		return true;
	} catch (error) {
		console.error("Error in addToGroup:", error.message);
		throw error;
	}
}

// User schema
const userSchema = Joi.object({
	name: Joi.string()
		.max(100)
		.required()
		.pattern(/^[A-Za-z\s]+$/),
	email: Joi.string().email().required(),
	phoneNumber: Joi.string()
		.pattern(/^\+?[0-9]+$/)
		.min(8)
		.max(15)
		.required(),
	address: Joi.string().min(3).max(100).required(),
	groups: Joi.array().items(Joi.number().integer()),
});

// Create a new user
async function createUser(req, res) {
	const { error } = userSchema.validate(req.body);
	if (error) {
		return res.status(400).send(error);
	}

	req.body.name = toPascalCase(req.body.name);

	const groups = req.body.groups || [];
	delete req.body.groups;

	try {
		const user = await User.create(req.body);
		res.status(201).send(user);
		await addToGroup(user, groups);
	} catch (error) {
		res.status(400).send(error);
	}
}

// Get all users
async function getAllUsers(req, res) {
	try {
		const users = await User.findAll();
		res.status(200).send(users);
	} catch (error) {
		res.status(400).send(error);
	}
}

// Get a user by ID
async function getUserById(req, res) {
	try {
		const user = await User.findByPk(req.params.id, {
			include: [
				{
					model: Group,
					as: "groups",
					through: { attributes: [] },
				},
				{
					model: Task,
					as: "tasks",
				},
			],
		});
		if (!user) {
			res.status(404).send({ error: "User not found" });
		} else {
			res.status(200).send(user);
		}
	} catch (error) {
		res.status(400).send(error);
		console.log(error);
	}
}

// Update a user
async function updateUser(req, res) {
	const { error } = userSchema.validate(req.body);
	if (error) {
		return res.status(400).send(error);
	}

	req.body.name = toPascalCase(req.body.name);

	const groups = req.body.groups || [];
	delete req.body.groups;

	try {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			res.status(404).send({ error: "User not found" });
		} else {
			await user.update(req.body);
			res.status(200).send(user);
			await addToGroup(user, groups);
		}
	} catch (error) {
		res.status(400).send(error);
	}
}

// Delete a user
async function deleteUser(req, res) {
	try {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			res.status(404).send({ error: "User not found" });
		} else {
			await user.destroy();
			res.status(204).send();
		}
	} catch (error) {
		res.status(400).send(error);
	}
}

// Export the module
module.exports = {
	createUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
};
