const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

const data = require('../models/matricula')

app.get('/Ratificacion',verificarToken, async (req,res) => {
   const dataRes = await data.find(
   {
      NIVEL: 'PRIMARIO',
      GRADO: 5, 
      DIVISION: 'A'
   })
   res.json(dataRes)
   })

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

app.get('/:N_DNI_ALUMNO',verificarToken,async(req,res) => {
   const dataRes = await data.findOne(
   {
      N_DNI_ALUMNO:req.params.N_DNI_ALUMNO
   })
   res.json(dataRes)
})

app.get('/',verificarToken,async(req,res) => {
   const dataRes = await data.find({ESTADO:'Activo'})
   res.json(dataRes)
})

module.exports = app
