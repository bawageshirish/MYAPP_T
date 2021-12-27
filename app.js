require("dotenv/config");
require("./db/connection");

const express = require("express");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.get("/", (req, res) => {
  console.log("First Request..!!");
});

app.get("/users", (req, res) => {
  User.find(function (err, users) {
    res.send({ "All Users": users });
  });
});

app.post("/create_user", async (req, res) => {
  try {
    console.log("create_user --start");
    const myuser = new User(req.body);
    console.log("myuser");
    console.log(myuser);
    await myuser.save();
    console.log("create_user --saved");

    res.send(myuser);
    console.log("create_user --responded");
  } catch (err) {
    res.send(err);
  }
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
