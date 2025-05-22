import mongoose from "mongoose";

// Create a schema
const taskSchema = new mongoose.Schema({
  task: String,
  hour: Number,
  type: String,
});

export default taskSchema;
//  task model
// export const TaskModel = mongoose.model("task", taskSchema);
