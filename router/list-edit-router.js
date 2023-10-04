
const express = require('express');
const listaTareas = require('../lista')
const valuePost = require('../middlewares/valuePost');
const router = express.Router();

router.use(valuePost);

//crear tarea
router.post('/', (req, res)=>{
  const tareaNueva = req.body;
  listaTareas.push(tareaNueva);
  res.status(200).send('tarea agregada exitosamente');
});

//Eliminar tarea
router.delete('/delete/:idTarea', (req, res)=>{
  const id = req.params.idTarea;
  const indexTarea = listaTareas.findIndex((e) => e.id == id);
  const eliminarTarea = listaTareas.splice(indexTarea, 1);
  res.status(200).send({eliminarTarea});
});

//actualizar tarea
router.put('/update/idTarea', (req, res)=>{
  const id= req.params.idTarea;
  const tarea = req.body
  const indexTarea = listaTareas.findIndex((e)= e.id == id);
  listaTareas[indexTarea] = tarea+res.status(200).send('tarea modificada con exito');
});


module.exports = router;
