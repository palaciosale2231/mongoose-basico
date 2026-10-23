import { Router } from "express";
import { 
    createPerson,
    deletePerson,
    getAllPersons,
    getPersonById,
    updatePerson
 } from "../controllers/person.controller.js";

export const personRouter = Router();

// Ruta para crear un cliente
personRouter.post("/persons", createPerson);

// Ruta para traer todos los clientes
personRouter.get("/persons", getAllPersons);

// Ruta para traer un cliente por id
personRouter.get("/persons/:id", getPersonById);

// Ruta para actualizar un cliente
personRouter.put("/persons/:id", updatePerson);

// Ruta para eliminar un cliente
personRouter.delete("/persons/:id", deletePerson);