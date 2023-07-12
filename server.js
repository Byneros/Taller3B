const express = require("express");
const conectarDB = require("./Config/db");
const RutaEmpleado =  require("./routes/routes.tareaController");
const app = express();
const cors = require('./Backend/Config/cors');

app.use(express.json());
app.use(cors);
conectarDB();
app.use('/tareaController', tareasRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running  on port ${PORT}`));