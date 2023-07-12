const express = require('express');
const cors = require('./config/cors');
const conectarDB = require('./config/db');
const tareasRoutes = require('./routes/tarea');
const { use } = require('./routes/routes.tareaController');

const app = express();

conectarDB();

app.use(cors);
app.use(express.json());

app.use('/tarea', tareasRoutes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;