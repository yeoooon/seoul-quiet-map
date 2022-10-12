const mongoose = require("mongoose");
const ReviewModel = require("./schemas/review");
const GuTestModel = require("./schemas/gu");
const DongTestModel = require("./schemas/dong");

const DB_URL =
  process.env.MONGODB_URL || "MongoDB 서버 주소가 설정되지 않았습니다.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("✅ 정상적으로 MongoDB 서버에 연결되었습니다.");
});

db.on("error", (error) => {
  console.log("✅ MongoDB 연결에 실패하였습니다..\n" + error);
});

module.exports = {
  ReviewModel,
  GuTestModel,
  DongTestModel,
}