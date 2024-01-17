import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "../db/index.js";
import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config({ path: "./.env.sample" });
// first connection is established
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port ${process.env.PORT} and database is ${DB_NAME}`
      );
    });
  })
  .catch((error) => {
    console.log("Connection Failed: " + error.message);
  });
// import express from "express";
// import dotenv from "dotenv";
// dotenv.config();
// const app = express()

// (async () => {
//   try {
//     const mongoURI =
//       process.env.MONGODB_URI || "mongodb://localhost:27017/youtubeclone";
//     await mongoose.connect(`${mongoURI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.error("message :" + err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// })();
