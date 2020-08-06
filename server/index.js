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

app.get("/users/:id", (req, res) => {
  user_model
    .getUser(req.params.id)
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}.`);
});
