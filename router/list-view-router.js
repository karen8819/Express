
const express = require('express');
const listaTareas = require('../lista');
const routerTarea = express.Router();

routerTarea.get('/',  (_req, res)=>{
  res.status(200).send(listaTareas);
}); 

routerTarea.get('/completa', (_req, res)=>{
  const tareasCompletas = listaTareas.filter(t => t.complete === true);
  res.status(200).send(tareasCompletas)

});

routerTarea.get('/incompleta', (_req, res)=>{
  const tareasIncompleta = listaTareas.filter(t => t.complete === true);
  res.status(200).send(tareasIncompleta);
 
});


module.exports = routerTarea
