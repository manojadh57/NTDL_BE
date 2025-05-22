import express from "express";

import { responseGenerator } from "./helper.js";
import cors from "cors";
import "dotenv/config";

import { mongoConnect } from "./config/mongoConfig.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());

// build the request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoConnect();

// READ - GET
app.get("/", (req, res) => {
  const resp = responseGenerator("success", "Task Created", {});
  res.send(resp);
});

// Task resource
// Task router
import taskRouter from "./routers/taskRouter.js";
app.use("/task", taskRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log("SERVER ERROR");
  } else {
    console.log("SERVER STARTED AT PORT: ", PORT);
  }
});
