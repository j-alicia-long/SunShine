const express = require("express");
const app = express();
const port = 3001;

const user_model = require("./user_model");
const jwt = require("jsonwebtoken");

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
      const token = jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
        expiresIn: "24h",
      });
      res.status(200).json({
        userId: user._id,
        token: token,
      });
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log("error");
      res.status(500).send(error);
    });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
