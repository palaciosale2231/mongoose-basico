import { Router } from "express";
import {
  createPerson,
  deletePerson,
  getAllPersons,
  getPersonById,
  updatePerson,
} from "../controllers/person.controller.js";

// 1. Importamos las validaciones y el middleware general
import {
  createPersonValidation,
  updatePersonValidation,
} from "../validaciones/personValidation.js";
import { validarCampos } from "../middlewares/validar.js";

export const personRouter = Router();

// Ruta para crear una persona (con validación de campos obligatorios)
personRouter.post(
  "/persons",
  createPersonValidation,
  validarCampos,
  createPerson,
);

// Ruta para traer todas las personas
personRouter.get("/persons", getAllPersons);

// Ruta para traer una persona por id
personRouter.get("/persons/:id", getPersonById);

// Ruta para actualizar una persona (con validación de campos opcionales)
personRouter.put(
  "/persons/:id",
  updatePersonValidation,
  validarCampos,
  updatePerson,
);

// Ruta para eliminar una persona
personRouter.delete("/persons/:id", deletePerson);
