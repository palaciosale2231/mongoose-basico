import { PersonModel } from "../models/person.model.js";

export const createPerson = async (req, res) => {
  try {
    const newPerson = await PersonModel.create(req.body);
    return res.status(201).json({
      msg: "Persona creada correctamente",
      data: newPerson,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const getAllPersons = async (req, res) => {
  try {
    const persons = await PersonModel.find();
    return res.status(200).json({ data: persons });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

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

export const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPerson = await PersonModel.findByIdAndUpdate(id, req.body, {
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