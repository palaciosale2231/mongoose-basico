import { body } from "express-validator";

export const createProductValidation = [
  body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
  body("price")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número"),
  body("stock")
    .notEmpty()
    .withMessage("El stock es obligatorio")
    .isNumeric()
    .withMessage("El stock debe ser un número"),
  body("createdBy").notEmpty().withMessage("El campo createdBy es obligatorio"),
];

export const updateProductValidation = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("El nombre no debe estar vacío"),
  body("price")
    .optional()
    .isNumeric()
    .withMessage("El precio debe ser un número"),
  body("stock")
    .optional()
    .isNumeric()
    .withMessage("El stock debe ser un número"),
  body("createdBy")
    .optional()
    .notEmpty()
    .withMessage("El createdBy no debe estar vacío"),
];
