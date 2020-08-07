const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

// MongoDB Client Connection Setup
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:admin@sunshine.39p7a.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = null;
client.connect((err, client) => {
  // Client returned
  if (err) throw err;
  db = client.db("database");
});

// Get all users
app.get("/api/users", (req, res) => {
  db.collection("sample_employees")
    .find({}) // Empty query to find all
    .toArray(function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
});

// Get one user's info by ID
app.get("/api/users/:id", (req, res) => {
  id = parseInt(req.params.id);

  db.collection("sample_employees").findOne({ emp_id: id }, function (
    err,
    result
  ) {
    if (err) throw err;
    res.status(200).json(result);
  });
});

// Get one user by ID
app.get("/api/usertoken/:id", (req, res) => {
  id = parseInt(req.params.id);
  // Declare promise
  var myPromise = (id) => {
    return new Promise((resolve, reject) => {
      db.collection("sample_employees").findOne({ emp_id: id }, function (
        err,
        result
      ) {
        err ? reject(err) : resolve(result);
      });
    });
  };

  // Call promise
  myPromise(id)
    .then((response) => {
      // Create user session token
      const token = jwt.sign({ user: id }, process.env.ACCESS_TOKEN_SECRET);
      // Check that user was found in database
      if (response === undefined || response === null) {
        throw "User Not Found";
      }
      // Return token if found
      res.status(200).json({
        token: token,
      });
    })
    .catch((error) => {
      console.log("error", error);
      res.status(500).send(error);
    });
});

// Dummy endpoint
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}.`);
});
