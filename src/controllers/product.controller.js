import { matchedData } from "express-validator";
import { ProductModel } from "../models/product.model.js";

// Crear Producto
export const createProduct = async (req, res) => {
  try {
    // Usamos matchedData para extraer solo los campos limpios y validados
    const data = matchedData(req);

    const newProduct = await ProductModel.create(data);

    return res.status(201).json({
      msg: "Producto creado correctamente",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Obtener todos los Productos
export const getAllProducts = async (req, res) => {
  try {
    // Populate de 1:N (createdBy) y N:M (wishlistedBy)
    const products = await ProductModel.find()
      .populate("createdBy", "username email")
      .populate("wishlistedBy");

    return res.status(200).json({ data: products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Obtener Producto por ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id)
      .populate("createdBy", "username email")
      .populate("wishlistedBy");

    if (!product) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    return res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Actualizar Producto
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = matchedData(req); // Solo los campos enviados y validados

    const updatedProduct = await ProductModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    return res.status(200).json({
      msg: "Producto actualizado correctamente",
      data: updatedProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// Eliminar Producto
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    return res.status(200).json({
      msg: "Producto eliminado correctamente",
      data: deletedProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
