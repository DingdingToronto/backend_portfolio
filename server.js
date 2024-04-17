const express = require("express");
const path = require("path");
const dotnev = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const connection = require("./db");
// Middleware to parse JSON bodies
app.use(express.json());
const cors = require("cors");
app.use(cors());

// Serve the React frontend as static files
app.use(express.static(path.join(__dirname, "../client")));

// Endpoint to retrieve data
app.get("/api/skills", async (req, res) => {
  let db = await connection();

  let result = await db.collection("skills").find({});

  let response = await result.toArray();
  let responseInJSON = JSON.stringify(response);

  res.status(200).send(responseInJSON);
});

// Endpoint to retrieve data
app.get("/api/projects", async (req, res) => {
  let db = await connection();

  let result = await db.collection("projects").find({});

  let response = await result.toArray();
  let responseInJSON = JSON.stringify(response);

  res.status(200).send(responseInJSON);
});

app.get("/api/histories", async (req, res) => {
  let db = await connection();

  let result = await db.collection("histories").find({});

  let response = await result.toArray();
  let responseInJSON = JSON.stringify(response);

  res.status(200).send(responseInJSON);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
