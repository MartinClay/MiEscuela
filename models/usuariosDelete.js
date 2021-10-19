const mongoose = require('mongoose')

const {Schema} = mongoose

const usersDeleteSchema = new Schema({
   usuario: {type: String,require:true},
},{collection: 'Users'});

module.exports = mongoose.model('UsersDelete', usersDeleteSchema)
