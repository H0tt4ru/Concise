// Import dependencies

const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Environment Setup

const app = express();
app.use(cors());
const PORT = 8080;

// Server Running Message

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
