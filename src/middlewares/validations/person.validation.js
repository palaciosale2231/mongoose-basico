import { body } from "express-validator";

export const createPersonValidation = [
  body("firstName").notEmpty().withMessage("El nombre es obligatorio"),
  body("lastName").notEmpty().withMessage("El apellido es obligatorio"),
  body("phone").notEmpty().withMessage("El teléfono es obligatorio"),
];

export const updatePersonValidation = [
  body("firstName")
    .optional()
    .notEmpty()
    .withMessage("El nombre no debe estar vacío"),
  body("lastName")
    .optional()
    .notEmpty()
    .withMessage("El apellido no debe estar vacío"),
  body("phone")
    .optional()
    .notEmpty()
    .withMessage("El teléfono no debe estar vacío"),
];
