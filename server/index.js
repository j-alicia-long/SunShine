const express = require("express");
const app = express();

const user_model = require("./user_model");
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

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:admin@sunshine.39p7a.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Get all users
app.get("/users", (req, res) => {
  client.connect((err) => {
    if (err) throw err;
    const db = client.db("database");
    var query = {};
    db.collection("sample_employees")
      .find(query)
      .toArray(function (err, result) {
        if (err) throw err;
        res.status(200).json(result);
        client.close();
      });
  });
});

// Get one user by ID
app.get("/users/:id", (req, res) => {
  client.connect((err) => {
    const db = client.db("database");

    // Declare promise
    var myPromise = (id) => {
      return new Promise((resolve, reject) => {
        db.collection("sample_employees")
          .find() // Will not return any query results unless I hardcode params
          .toArray(function (err, data) {
            // Kinda hacky js search for user but it works
            err ? reject(err) : resolve(data.find((el) => el.emp_id == id));
          });
      });
    };

    // Call promise
    myPromise(req.params.id)
      .then((response) => {
        // Create user session token
        const token = jwt.sign(
          { user: req.params.id },
          process.env.ACCESS_TOKEN_SECRET
        );
        // Check that user was found in database
        if (response === undefined) {
          throw "User Not Found";
        }
        // Return token if found
        res.status(200).json({
          token: token,
        });
        client.close();
      })
      .catch((error) => {
        console.log("error");
        res.status(500).send(error);
      });
  });
});

// Dummy endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}.`);
});
