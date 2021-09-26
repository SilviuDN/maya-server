// ℹ️ package responsible to make the connection with mongodb
const mongoose = require("mongoose");

const MONGO_URI =   process.env.DB_REMOTE || process.env.MONGODB_URI || "mongodb://localhost/properties";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
