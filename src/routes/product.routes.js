import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";

// 1. Importamos las validaciones y el middleware general
import {
  createProductValidation,
  updateProductValidation,
} from "../validaciones/productValidation.js";
import { validarCampos } from "../middlewares/validar.js";

export const productRouter = Router();

// Ruta para crear un producto (Agregamos validación y filtro de errores antes del controlador)
productRouter.post(
  "/products",
  createProductValidation,
  validarCampos,
  createProduct,
);

// Ruta para traer todos los productos
productRouter.get("/products", getAllProducts);

// Ruta para traer un producto por id
productRouter.get("/products/:id", getProductById);

// Ruta para actualizar un producto (Agregamos validación opcional y filtro de errores)
productRouter.put(
  "/products/:id",
  updateProductValidation,
  validarCampos,
  updateProduct,
);

// Ruta para eliminar un producto
productRouter.delete("/products/:id", deleteProduct);
