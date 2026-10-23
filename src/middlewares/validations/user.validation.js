import { body } from "express-validator";

export const createUserValidation = [
  body("username").notEmpty().withMessage("El username no debe estar vacío"),
  body("email")
    .notEmpty()
    .withMessage("El email no debe estar vacío")
    .isEmail()
    .withMessage("El email debe ser válido"),
  body("password")
    .notEmpty()
    .withMessage("La contraseña no debe estar vacía")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  body("personDetails")
    .notEmpty()
    .withMessage("El personDetails es obligatorio y debe ser un ID válido"),
];

export const updateUserValidation = [
  body("username")
    .optional()
    .notEmpty()
    .withMessage("El username no debe estar vacío"),
  body("email").optional().isEmail().withMessage("El email debe ser válido"),
  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];
