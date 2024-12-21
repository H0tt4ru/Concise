const db = require("../models");
const Joi = require("joi");

const { Task, User } = db;

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

// Task schema
const taskSchema = Joi.object({
	name: Joi.string().max(100).required(),
	deadline: Joi.date().required(),
	userId: Joi.number().integer().required(),
});

// Create a new task
async function createTask(req, res) {
	const { error } = taskSchema.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	req.body.name = toPascalCase(req.body.name);

	const user = await User.findByPk(req.body.userId);
	if (!user) {
		return res.status(404).send("User not found");
	}

	try {
		const task = await Task.create(req.body);
		res.status(201).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
}

// Get all tasks
async function getAllTasks(req, res) {
	try {
		const tasks = await Task.findAll();
		res.status(200).send(tasks);
	} catch (error) {
		res.status(400).send(error);
	}
}

// Get a task by ID
async function getTaskById(req, res) {
	try {
		const task = await Task.findByPk(req.params.id, {
			include: { model: User, as: "user" },
		});
		if (!task) {
			return res.status(404).send("Task not found");
		} else {
			res.status(200).send(task);
		}
	} catch (error) {
		res.status(400).send(error);
	}
}

// Update a task
async function updateTask(req, res) {
	const { error } = taskSchema.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	req.body.name = toPascalCase(req.body.name);

	if (req.body.userId) {
		const user = await User.findByPk(req.body.userId);
		if (!user) {
			return res.status(404).send("User not found");
		}
	}

	try {
		const task = await Task.findByPk(req.params.id);
		if (!task) {
			return res.status(404).send("Task not found");
		} else {
			await task.update(req.body);
		}
		res.status(200).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
}

// Delete a task
async function deleteTask(req, res) {
	try {
		const task = await Task.findByPk(req.params.id);
		if (!task) {
			return res.status(404).send("Task not found");
		} else {
			await task.destroy();
		}
		res.status(204).send();
	} catch (error) {
		res.status(400).send(error);
	}
}

module.exports = {
	createTask,
	getAllTasks,
	getTaskById,
	updateTask,
	deleteTask,
};
