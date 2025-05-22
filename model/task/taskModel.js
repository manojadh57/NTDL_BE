import taskSchema from "./taskSchema.js";
import mongoose from "mongoose";

const TaskModel = mongoose.model("task", taskSchema);

export const findTasks = (filter = {}) => {
  return TaskModel.find(filter);
};

export const findTaskById = (taskid) => {
  return TaskModel.findOne({ _id: taskid });
};

export const insertTask = (taskObj) => {
  console.log(taskObj);
  return TaskModel(taskObj).save();
};

export const patchTaskById = (id, updatedTaskObj) => {
  return TaskModel.findByIdAndUpdate(
    id,
    {
      $set: updatedTaskObj,
    },
    { new: true }
  );
};

export const removeTaskById = (id) => {
  return TaskModel.deleteOne({ _id: id });
};
