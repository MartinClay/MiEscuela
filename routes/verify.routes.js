const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

app.get('/', verificarToken, async (req,res) => {
   const dataRes = await data.find()
   res.json(dataRes)
   })

app.post('/', verificarToken, async (req,res) => {
        res.json({
            ok:true,
        })
})

app.post('/:usuario', async (req,res)=> {
   let body = req.body
})

module.exports = app
