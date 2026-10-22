import { model, Schema, Types } from "mongoose";

const personSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    // Opcional: Referencia inversa si quisieras consultar el usuario desde la persona
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false }
);

export const PersonModel = model("Person", personSchema);