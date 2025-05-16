const mongoose = require("mongoose");

const connectionString = process.env.db_connection_string;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Db Connected Successfully");
  })
  .catch((error) => {
    console.error(error);
  });
