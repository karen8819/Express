const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));

// Lista de tareas (simulada como un arreglo de objetos)
let tareas = [];

// Crear una nueva tarea
app.post('/tareas', (req, res) => {
  const nuevaTarea = req.body;
  if (!nuevaTarea.nombre || typeof nuevaTarea.completada !== 'boolean') {
    return res.status(400).json({ error: 'La tarea debe tener un nombre y un estado de completado' });
  }
  tareas.push(nuevaTarea);
  res.status(201).json({ mensaje: 'Tarea creada exitosamente' });
});

// Actualizar una tarea por su ID
app.put('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= tareas.length) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  const tareaActualizada = req.body;
  tareas[id] = tareaActualizada;
  res.status(200).json({ mensaje: 'Tarea actualizada exitosamente' });
});

// Eliminar una tarea por su ID
app.delete('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= tareas.length) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  tareas.splice(id, 1);
  res.status(200).json({ mensaje: 'Tarea eliminada exitosamente' });
});

// Listar todas las tareas
app.get('/tareas', (req, res) => {
  res.status(200).json(tareas);
});

// Listar tareas completadas
app.get('/tareas/completadas', (req, res) => {
  const tareasCompletadas = tareas.filter((tarea) => tarea.completada === true);
  res.status(200).json(tareasCompletadas);
});

// Listar tareas incompletas
app.get('/tareas/incompletas', (req, res) => {
  const tareasIncompletas = tareas.filter((tarea) => tarea.completada === false);
  res.status(200).json(tareasIncompletas);
});

// Obtener una tarea por su ID
app.get('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= tareas.length) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.status(200).json(tareas[id]);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
