import { responseGenerator } from "../helper.js";
// import { TaskModel } from "../model/task.js";
import {
  findTaskById,
  findTasks,
  insertTask,
  patchTaskById,
  removeTaskById,
} from "../model/task/taskModel.js";

// get task
export const getTask = async (req, res) => {
  // FETCH THE TASK FROM DATABASE
  const tasks = await findTasks();
  console.log("GET TASK");
  const resp = responseGenerator("success", "Task Fetchd", { tasks });
  res.send(resp);
};

// get task by id
export const getTaskById = async (req, res) => {
  const id = req.params.id;
  // FETCH THE TASK FROM DATABASE
  const task = await findTaskById(id);

  const resp = responseGenerator("success", "Task Fetchd", { task });
  res.send(resp);
};

// create task
export const createTask = async (req, res) => {
  const { task, hour, type } = req.body;

  const taskObject = await insertTask({ task, hour, type });

  const resp = responseGenerator("success", "Task Created", {
    task: taskObject,
  });

  res.json(resp);
};

// update task
export const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = { ...req.body };
    const updatedTask = await patchTaskById(id, updateData);

    const resp = responseGenerator("success", "Task Updated", {
      task: updatedTask,
    });
    res.json(resp);
  } catch (error) {
    console.log(error);
    const resp = responseGenerator("error", "Task Failed to update", {});
    res.json(resp);
  }
};

// delete task
export const deleteTask = async (req, res) => {
  const id = req.params.id;

  await removeTaskById(id);

  const resp = responseGenerator("success", "Task Deleted", {});
  res.send(resp);
};
