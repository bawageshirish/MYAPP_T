const mongoose = require("mongoose");
const DB_CONNECTION_STRING =
  "mongodb+srv://admin:admin@iap.z0xl7.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  DB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (req, res) => {
    console.log("Connected to DB");
  }
);
