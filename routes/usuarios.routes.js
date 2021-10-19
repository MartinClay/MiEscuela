const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

const data = require('../models/usuarios')

app.get('/', verificarToken, async (req,res) => {
   const dataRes = await data.find()
   res.json(dataRes)
   })

app.get('/:usuario',verificarToken,async(req,res) => {
   const dataRes = await data.findOne({usuario:req.params.usuario})
   res.json(dataRes)
})

app.post('/', async (req,res) => {
   let body =  req.body
   data.find({NIVEL: body.NIVEL, GRADO: body.GRADO , DIVISION: body.DIVISION},(err,data)=>
      res.json(data)
   )
})

app.post('/:usuario', async (req,res)=> {
   let body = req.body
   
})

module.exports = app
