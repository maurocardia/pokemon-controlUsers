const express = require("express");

// Controllers
const {
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  login,
  createTask,
  getUserTask,
  editTask,
  deleteTask,
} = require("../controllers/users.controller");

// Middlewares
const { userExists } = require("../middlewares/users.middlewares");
const {
  protectSession,
  protectUsersAccount,
} = require("../middlewares/auth.middlewares");
const { createUserValidators } = require("../middlewares/validators");

const usersRouter = express.Router();

usersRouter.post("/signup", createUserValidators, createUser);

usersRouter.post("/login", login);

// Protecting below endpoints
usersRouter.use(protectSession);

usersRouter.post("/task", createTask);

usersRouter.get("/task", getUserTask);

usersRouter.patch("/task/:id", editTask);

usersRouter.delete("/task/:id", deleteTask);

usersRouter.get("/", getUserId);

usersRouter.patch("/:id", userExists, protectUsersAccount, updateUser);

usersRouter.delete("/:id", userExists, protectUsersAccount, deleteUser);

module.exports = { usersRouter };
