const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')
const bcrypt = require('bcrypt')

const data = require('../models/usuarios')

app.post('/', verificarToken, async (req,res) => {

   {/*
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

*/}
   console.log(req.body)
})

module.exports = app
