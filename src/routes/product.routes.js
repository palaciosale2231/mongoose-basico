import { Router } from "express";
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct,
  
} from "../controllers/product.controller.js";

export const productRouter = Router();

// Ruta para crear un producto
productRouter.post("/products", createProduct);

// Ruta para traer todos los productos
productRouter.get("/products", getAllProducts);

// Ruta para traer un producto por id
productRouter.get("/products/:id", getProductById);

// Ruta para actualizar un producto
productRouter.put("/products/:id", updateProduct);

// Ruta para eliminar un producto
productRouter.delete("/products/:id", deleteProduct);