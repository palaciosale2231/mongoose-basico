import { model, Schema, Types } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    
    // 3. RELACIÓN 1:N (Un usuario crea muchos productos)
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    // Parte de la relación N:M con el Cliente (Favoritos/Deseados)
    wishlistedBy: [
      {
        type: Types.ObjectId,
        ref: "Client",
      },
    ],
  },
  { versionKey: false }
);

export const ProductModel = model("Product", productSchema);