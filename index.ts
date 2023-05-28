import express from "express";
import dotenv from "dotenv";
import UserRoutes from "./Routes/UserRoutes.js";
import TalksRoutes from "./Routes/TalksRoutes.js";
import errorHandler from "./Middlewares/errorHandler.js";

// declaro app
const app = express();

// hago que la aplicacion lea correctamente los json
app.use(express.json());

// configuramos dotenv
dotenv.config();

//Utilizamos las rutas creadas tanto en los usuarios como en las talks

app.use("/users", UserRoutes);
app.use("/talks", TalksRoutes);

//Declaro el middleware para el manejo de errores

app.use(errorHandler);

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Talks API listening on port ${SERVER_PORT}`);
});
