const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("First Request..!!");
});

app.get("/users", (req, res) => {
  res.send({ "All Users": { name: "shirish", age: 31 } });
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Listening to port 3333");
});
