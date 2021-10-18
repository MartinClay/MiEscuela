const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')
const bcrypt = require('bcrypt')

const data = require('../models/usuarios')

app.post('/', verificarToken, async (req,res) => {
   const usuario = req.body.usuario
   const passoword = bcrypt.hash(req.body.passoword,8)
   const role = req.body.role
   const newData = {
      usuario:usuario,
      password:passoword,
      role:role
   }
   const sendData  = new data(newData)
   await sendData.save((err)=> {
    if (err) return res.status(500).send(err)
    return res.status(200).send(newData)
   }
       )
})

module.exports = app
