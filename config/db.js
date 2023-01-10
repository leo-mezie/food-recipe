const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('strictQuery', true);

const db = mongoose.connection;

db.on("error", () => {
  console.error.bind(console, "Failed to connect to database");
});

db.once("open", () => console.info("Database connected successfully"));

module.exports = db;
