const express = require("express");
const {
  getAllTasks,
  getTaskByID,
  createTask,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/tasksController");
const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskByID);
router.post("/", createTask);
router.put("/:id", updateTaskById);
router.delete("/:id", deleteTaskById);

module.exports = { router };
