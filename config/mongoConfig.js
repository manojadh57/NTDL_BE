import mongoose from "mongoose";

export const mongoConnect = () => {
  // connection to mongo db
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DATABASE CONNECTED");
  });
};
