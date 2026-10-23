import { model, Schema, Types } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    //  propiedad embebida
    addresses: [
      {
        _id: false,
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
      },
    ],
    //  relacion 1 a 1 (Un usuario tiene una única persona asociado)
    personDetails: {
      type: Types.ObjectId,
      ref: "Person",
      required: true,
    },
  },
  { versionKey: false },
);

export const UserModel = model("User", userSchema);
