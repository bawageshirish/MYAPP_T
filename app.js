require("./db/connection");

const express = require("express");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("First Request..!!");
});

app.get("/local_users", (req, res) => {
  res.send({ "All Users": { name: "shirish", age: 31 } });
});

app.get("/users", (req, res) => {
  User.find(function (err, users) {
    res.send({ "All Users": users });
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Listening to port 3333");
});
