import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.sample" });
const connectDB = async () => {
  // const mongoURI =
  //   process.env.MONGODB_URI || "mongodb://localhost:27017/youtubeclone";
  // await mongoose.connect(`${mongoURI}/${DB_NAME}`);
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Connecting to ${connectionInstance.connection.host}: ${connectionInstance.connection.port}`
    );
  } catch (error) {
    console.error(`Error connecting to ${error}`);
    process.exit(1);
  }
};
export default connectDB;
