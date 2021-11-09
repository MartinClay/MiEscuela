const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')
const bcrypt = require('bcrypt')

const data = require('../models/usuarios')

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
   data.findOneAndRemove(
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

app.post('/AddUser', verificarToken, async (req,res) => {
   let sendData = new data({
      usuario: req.body.usuario,
      password: bcrypt.hashSync(
         req.body.password, 
         8
      ),
      role: req.body.role
   });
   await sendData.save((err)=> {
      if (err) return res.status(500).send(err)
      return res.status(200).send(sendData)
   }
   )
})

module.exports = app
