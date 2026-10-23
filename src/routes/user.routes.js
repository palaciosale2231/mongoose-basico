import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import { body } from "express-validator";
import { validarCampos } from "../middlewares/validate.js";
import {
  createUserValidation,
  updateUserValidation,
} from "../middlewares/validations/user.validation.js";

export const userRouter = Router();

// Ruta para crear un usuario
userRouter.post("/users", createUserValidation, validarCampos, createUser);

// Ruta para traer todos los usuarios
userRouter.get("/users", getAllUsers);

// Ruta para traer un usuario por id
userRouter.get("/users/:id", getUserById);

// Ruta para actualizar un usuario
userRouter.put("/users/:id", updateUserValidation, validarCampos, updateUser);

// Ruta para eliminar un usuario
userRouter.delete("/users/:id", deleteUser);
