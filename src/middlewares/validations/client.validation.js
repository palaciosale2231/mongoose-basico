import { body } from "express-validator";

export const createClientValidation = [
  body("companyName")
    .notEmpty()
    .withMessage("El nombre de la compañía es obligatorio"),
  body("contactEmail")
    .notEmpty()
    .withMessage("El email de contacto es obligatorio")
    .isEmail()
    .withMessage("El email debe ser válido"),
];

export const updateClientValidation = [
  body("companyName")
    .optional()
    .notEmpty()
    .withMessage("El nombre de la compañía no debe estar vacío"),
  body("contactEmail")
    .optional()
    .isEmail()
    .withMessage("El email debe ser válido"),
];
