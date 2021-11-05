const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

const data = require('../models/matricula')

app.post('/', verificarToken, async (req,res) => {

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
         {$push: {REGISTRO: dataRegistro}},
      )
      res.json({message: 'Actualizacion realizada con exito', result})
   } catch (err) {
      res.status(500).json({error:'Hubo un problema en el lado del servidor'})
   } 
})

module.exports = app
