const express = require('express')
const app = express.Router()

const data = require('../models/matricula')

app.get('/Ratificacion', async (req,res) => {
   const dataRes = await data.find({NIVEL: 'PRIMARIO',GRADO: 5, DIVISION: 'A'})
   res.json(dataRes)
   })

app.post('/Ratificacion', async (req,res) => {
   let body =  req.body
   data.find({NIVEL: body.NIVEL, GRADO: body.GRADO , DIVISION: body.DIVISION},(err,data)=>
      res.json(data)
   )
})

module.exports = app
