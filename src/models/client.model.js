import { model, Schema, Types } from "mongoose";

const clientSchema = new Schema(
  {
    companyName: { type: String, required: true },
    contactEmail: { type: String, required: true, unique: true },
    
    // 4. RELACIÓN N:M (Un cliente tiene muchos productos favoritos)
    favoriteProducts: [
      {
        type: Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { versionKey: false }
);

export const ClientModel = model("Client", clientSchema);