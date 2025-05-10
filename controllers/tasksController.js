const { tasks } = require("../models/taskModels");

function isValidTask(task) {
  return (
    typeof task.title === "string" &&
    task.title.trim() !== "" &&
    typeof task.description === "string" &&
    task.description.trim() !== "" &&
    typeof task.completed === "boolean"
  );
}

const getAllTasks = (req, res) => {
  res.send(tasks);
};

const getTaskByID = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (task) {
    res.send(task);
  } else {
    res.status(404).send();
  }
};

const createTask = (req, res) => {
  const task = req.body;
  if (!isValidTask(task)) {
    return res.status(400).send(task);
  }
  task.id = tasks.length + 1;
  tasks.push(task);
  res.status(201).send(task);
};

const updateTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTask = req.body;

  if (!isValidTask(updatedTask)) {
    return res.status(400).send(updatedTask);
  }
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    return res.status(404).send(updatedTask);
  }
  Object.assign(task, updatedTask);
  res.status(200).send(updatedTask);
};

const deleteTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    res.status(200).send({ message: "Successfully!" });
  } else {
    res.status(404).send({ message: "Id not found!" });
  }
};

module.exports = {
  getAllTasks,
  getTaskByID,
  createTask,
  updateTaskById,
  deleteTaskById,
};
