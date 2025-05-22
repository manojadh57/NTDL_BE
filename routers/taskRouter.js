import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTaskById,
  updateTask,
} from "../controllers/taskController.js";
const router = express.Router();

// CREATE - POST
// POST url/task/
router.post("/", createTask);

// GET url/task/
// READ - GET
router.get("/", getTask);

// // GET url/task/id
// READ - GET by id
router.get("/:id", getTaskById);

// UPDATE - PATCH
router.patch("/:id", updateTask);

// DELETE - DELETE
router.delete("/:id", deleteTask);

export default router;
