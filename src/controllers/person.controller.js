import { matchedData } from "express-validator";
import { PersonModel } from "../models/person.model.js";

// Crear Persona
export const createPerson = async (req, res) => {
  try {
    // Usamos matchedData para extraer solo los campos limpios y validados
    const data = matchedData(req);

    const newPerson = await PersonModel.create(data);

    return res.status(201).json({
      msg: "Persona creada correctamente",
      data: newPerson,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Obtener todas las Personas
export const getAllPersons = async (req, res) => {
  try {
    const persons = await PersonModel.find();
    return res.status(200).json({ data: persons });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Obtener Persona por ID
export const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await PersonModel.findById(id);

    if (!person) {
      return res.status(404).json({ msg: "Persona no encontrada" });
    }

    return res.status(200).json({ data: person });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Actualizar Persona
export const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const data = matchedData(req); // Solo los campos enviados y validados

    const updatedPerson = await PersonModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedPerson) {
      return res.status(404).json({ msg: "Persona no encontrada" });
    }

    return res.status(200).json({
      msg: "Persona actualizada correctamente",
      data: updatedPerson,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Eliminar Persona
export const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPerson = await PersonModel.findByIdAndDelete(id);

    if (!deletedPerson) {
      return res.status(404).json({ msg: "Persona no encontrada" });
    }

    return res.status(200).json({
      msg: "Persona eliminada correctamente",
      data: deletedPerson,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
