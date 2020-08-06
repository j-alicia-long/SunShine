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

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@sunshine.39p7a.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect(err => {
//   const collection = client.db("database").collection("sample_employees");
//   console.log(collection)
//   client.close();
// });

// MongoClient.connect(uri, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("database");
//     dbo.collection("sample_employees").findOne({
//         emp_id: req.params.id
//     },
//     function(err, result) {
//         console.log(result)
//         if (err) throw err;
//         res.json(result);
//         db.close();
//     });
// })

app.get("/users/:id", (req, res) => {

  client.connect(err => {
    // assert.equal(null, err);
    const db = client.db('database');

    //Step 1: declare promise
    var myPromise = () => {
      return new Promise((resolve, reject) => {
        db
        .collection('sample_employees')
        .find({emp_id: req.params.id})
        .limit(1)
        .toArray(function(err, data) {
          err
          ? reject(err)
          : resolve(data[0]);
        });
      });
    };

    //Step 3: make the call
    myPromise()
    .then((response) => {
      const token = jwt.sign(
        { user: req.params.id },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.status(200).json({
        token: token,
      });
      console.log(res);
    })
    .catch((error) => {
      console.log("error");
      res.status(500).send(error);
    });

  });

});

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}.`);
  });
