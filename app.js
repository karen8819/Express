
const express = require('express')
const routerTarea = require('./src/router/list-view-router');
const router = require('./src/router/list-edit-router');
const app = express();
app.use(express.json());
const port = 8000;

app.use('/tareas', routerTarea);
app.use('/tareas', router)

app.listen(port, ()=>{
  console.log('El servidor esta en http://localhost:8000/tareas');
});

module.exports= app

