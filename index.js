const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");

console.log(process.env);

//Crear servidor de express

const app = express();

//Basde de datos
dbConnection();

//Cors
app.use(cors());

//Directorio público

app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

//TODO: CRUD: Eventos

//Escuchar peticiones

app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
);
