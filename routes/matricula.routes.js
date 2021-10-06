const express = require('express')
const app = express.Router()

const data = require('../models/matricula')

app.get('/', async (req,res) => {
   const dataRes = await data.find({GRADO: 5})
   res.json(dataRes)
   })

module.exports = app
