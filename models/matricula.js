const mongoose = require('mongoose')

const {Schema} = mongoose

const matriculaSchema = new Schema({
   NIVEL: {type: String, require:true},
   GRADO: {type: Number,require:true},
   DIVISION: {type: String, require:true},
   N_DNI_ALUMNO: {type: String,require:true}
},{collection: 'Matricula'});

module.exports = mongoose.model('Matricula', matriculaSchema)
