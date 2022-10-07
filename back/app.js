const dotenv = require("dotenv");
dotenv.config();
require("./src/db/index.js");
const express = require("express");
const morgan = require("morgan");
const pinRouter = require("./src/routers/pinRouter");
const markerRouter = require("./src/routers/markerRouter");

const app = express();

const PORT = process.env.PORT || 5001;

app.use((req, res, next) => {
  if (process.nextTick.NODE_ENV === "production") {
    morgan("combined")(req, res, next);
  } else {
    morgan("dev")(req, res, next);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Team04");
});

app.use(pinRouter);
app.use(markerRouter);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
