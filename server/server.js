const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const dbconfig = require("./db");
const roomsRoute = require("./routes/roomsRoute");

app.use("/api/rooms", roomsRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
