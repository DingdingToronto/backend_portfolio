const express = require("express");
const path = require("path");
const dotnev = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const connection = require("./db");
// Middleware to parse JSON bodies
app.use(express.json());

// Serve the React frontend as static files
app.use(express.static(path.join(__dirname, "../client")));

// Endpoint to retrieve data
app.get("/api/skills", async (req, res) => {
  let db = await connection();

  let result = await db.collection("skills").find({});

  let response = await result.toArray();
  console.log(response);
});

// Endpoint to retrieve data
app.get("/api/projects", async (req, res) => {
  let db = await connection();

  let result = await db.collection("projects").find({});

  let response = await result.toArray();
  console.log(response);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
