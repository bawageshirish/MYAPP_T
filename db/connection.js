const mongoose = require("mongoose");
mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (req, res) => {
    console.log("Connected to DB");
  }
);
