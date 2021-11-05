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



module.exports = app
