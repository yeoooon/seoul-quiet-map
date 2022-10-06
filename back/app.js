const express = require("express");
const morgan = require("morgan");
require("dotenv/config");
require("./src/db/index.js");

const errorMiddleware = require("./src/middlewares/errorMiddleware");
const reviewRouter = require("./src/routers/reviewRouter");

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

app.use(reviewRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
