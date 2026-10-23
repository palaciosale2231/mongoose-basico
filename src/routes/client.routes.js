import { Router } from "express";
import {
  createClient,
  deleteClient,
  getAllClients,
  getClientById,
  updateClient,
} from "../controllers/client.controller.js";

// 1. Importamos las validaciones y el middleware general
import {
  createClientValidation,
  updateClientValidation,
} from "../validaciones/clientValidation.js";
import { validarCampos } from "../middlewares/validar.js";

export const clientRouter = Router();

// Ruta para crear un cliente (con validación de campos obligatorios)
clientRouter.post(
  "/clients",
  createClientValidation,
  validarCampos,
  createClient,
);

// Ruta para traer todos los clientes
clientRouter.get("/clients", getAllClients);

// Ruta para traer un cliente por id
clientRouter.get("/clients/:id", getClientById);

// Ruta para actualizar un cliente (con validación de campos opcionales)
clientRouter.put(
  "/clients/:id",
  updateClientValidation,
  validarCampos,
  updateClient,
);

// Ruta para eliminar un cliente
clientRouter.delete("/clients/:id", deleteClient);
