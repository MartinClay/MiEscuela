const mongoose = require('mongoose')

const {Schema} = mongoose

const matriculaSchema = new Schema({
   N_DNI_ALUMNO: {type: String,require:true},
   APELLIDO: {type: String , required:true},
   NOMBRE: {type: String, require:true},
   NIVEL: {type: String, require:true},
   GRADO: {type: Number,require:true},
},{collection: 'Matricula'});

module.exports = mongoose.model('Matricula', matriculaSchema)
