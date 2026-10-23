import { matchedData } from "express-validator";
import { UserModel } from "../models/user.model.js";

// Crear Usuario
export const createUser = async (req, res) => {
  try {
    // Usamos matchedData para obtener solo los campos limpios y validados
    const data = matchedData(req);

    const newUser = await UserModel.create(data);

    return res.status(201).json({
      msg: "Usuario creado correctamente",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Obtener todos los Usuarios (Corregido a "personDetails")
export const getAllUsers = async (req, res) => {
  try {
    // Nota: Si ya tienes un middleware pre(/^find/) en tu modelo que hace populate,
    // puedes quitar .populate("personDetails") de aquí para no duplicarlo, pero si no, va así:
    const users = await UserModel.find().populate("personDetails");

    return res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Obtener Usuario por ID (Corregido a "personDetails")
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id).populate("personDetails");

    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    return res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Actualizar Usuario
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = matchedData(req); // Solo los datos validados y enviados

    const updatedUser = await UserModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    return res.status(200).json({
      msg: "Usuario actualizado correctamente",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Eliminar Usuario
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    return res.status(200).json({
      msg: "Usuario eliminado correctamente",
      data: deletedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
