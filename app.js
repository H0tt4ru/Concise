// Importing required modules
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Setting up the port
const PORT = process.env.PORT || 3000;

// Creating the express app
const app = express();
app.use(cors());
app.use(express.json());

// Starting the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

// Importing the routes
app.use("/users", require("./routes/userRoutes"));
app.use("/groups", require("./routes/groupRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));

// Database connection
const db = require("./models");

db.sequelize
	.authenticate()
	.then(() => {
		console.log("Connected to the database");
	})
	.catch((err) => {
		console.log("Unable to connect to the database");
		console.error(err);
	});
