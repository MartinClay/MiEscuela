const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

const data = require('../models/usuarios')
const dataDelete = require('../models/usuariosDelete')

app.get('/', verificarToken, async (req,res) => {
   const dataRes = await data.find()
   res.json(dataRes)
   })

app.get('/:usuario',verificarToken,async(req,res) => {
   const dataRes = await data.findOne(
   {
      usuario:req.params.usuario
   })
   res.json(dataRes)
})

app.post('/Delete', verificarToken,async (req,res) => {
   let body = req.body
   dataDelete.findOneAndRemove(
      {
         usuario:body.usuario
      },
      (err,data)=>
      {
      if(err) return res.status(500).send(err)
      const response = {
      message: 'Usuario Eliminado con exito'
      } 
      return res.status(200).send(response)
      }
   )
})

module.exports = app
