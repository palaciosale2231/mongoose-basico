import { Router } from "express";
import {
  createClient,
  deleteClient,
  getAllClients,
  getClientById,
  updateClient,
} from "../controllers/client.controller.js";

export const clientRouter = Router();

// Ruta para crear un cliente
clientRouter.post("/clients", createClient);

// Ruta para traer todos los clientes
clientRouter.get("/clients", getAllClients);

// Ruta para traer un cliente por id
clientRouter.get("/clients/:id", getClientById);

// Ruta para actualizar un cliente
clientRouter.put("/clients/:id", updateClient);

// Ruta para eliminar un cliente
clientRouter.delete("/clients/:id", deleteClient);