const express = require('express');
const tareasRoutes = require('../routes/routes.tareaController');
const app = express();
app.use(express.json());
app.use('/tarea', tareasRoutes);
const server = app.listen( () => console.log(`Server running on test mode`));
module.exports = server; 