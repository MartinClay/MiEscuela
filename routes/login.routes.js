const express = require('express')
const app = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {verificarToken} = require('../autentication')
const login = require('../models/login')


app.post('/', async (req,res)=>{
    let body = req.body
    login.findOne({usuario:body.usuario},(err,usuario)=>{
    
        if(!usuario){
            return res.status(400).send({
                ok:false,
                err:{
                    message:'Usuario no válido'
                }
            })
        }

        if(!bcrypt.compareSync(body.password,usuario.password)){
            return res.status(400).send({
                ok:false,
                err:{
                    message:'Clave no válida'
                }
            })
        }

        let token = jwt.sign({
            usuario:usuario,
            password:usuario.password,
            role:usuario.role
        },'nemesis',{expiresIn:'1h'})

        res.json({
            ok:true,
            usuario:usuario,
            token
        })

    })
})

module.exports = app;
