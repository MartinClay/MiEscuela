const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

const data = require('../models/matricula')

app.post('/Ratificacion',verificarToken, async (req,res) => {
   let body =  req.body
   data.find(
      {
         NIVEL: body.NIVEL, 
         GRADO: body.GRADO , 
         DIVISION: body.DIVISION},
      (err,data)=>
      res.json(data)
   )
})

app.get('/Activo',verificarToken,async(req,res) => {

   const dataRes = await data.find({ESTADO:'ACTIVO'})
   res.json(dataRes)
})

app.get('/Single',verificarToken,async(req,res)=> {

   res.json({message: 'Peticion sin identificador de _id'})
})

app.get('/Single/:_id',verificarToken,async(req,res) => {

   const dataRes = await data.findOne(
   {
      _id : req.params._id
   })
   res.json(dataRes)
})

app.post('/UpdateAlumno', verificarToken, async (req,res) => {

   let _id = req.body._id
   let dataToSend = req.body.data
   let dataRegistro = req.body.dataRegistro

   try{
      const result = await data.findOneAndUpdate(
         {_id : _id},
         dataToSend,
      )
      const result2 = await data.findOneAndUpdate(
         {_id : _id},
         {$push: {REGISTRO: dataRegistro}}
      )
      res.json({message: 'Actualizacion realizada con exito', result, result2})
   } catch (err) {
      res.status(500).json({error:'Hubo un problema en el lado del servidor'})
   } 
})



module.exports = app
