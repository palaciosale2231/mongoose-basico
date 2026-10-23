//import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { startDB } from "./src/config/database.js";
import { userRouter } from "./src/routes/user.routes.js";
import { clientRouter } from "./src/routes/client.routes.js";
import { productRouter } from "./src/routes/product.routes.js";
import { personRouter } from "./src/routes/person.routes.js";

const app = express();
const PORT = process.env.PORT || 3003;

//middlewares
app.use(express.json());
//app.use(cookieParser());
app.use(cors());

//rutas
app.use("/api", userRouter);
app.use("/api", clientRouter);
app.use("/api", productRouter);
app.use("/api", personRouter);

app.listen(PORT, async () => {
  await startDB();
  console.log(`Servidor listo en el puerto ${PORT}`);
});
