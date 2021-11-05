const mongoose = require('mongoose')

const {Schema} = mongoose

const registroModificaiones = new Schema({
   _id: {type: String, required: true},
   usuario: {type: String ,required: true},
   date: {type: Date, required: true},
   dataModified: {type: String,required:true}
},{collection: 'Matricula'});

module.exports = mongoose.model('registroModificaiones', registroModificaiones)
