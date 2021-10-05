const express = require('express');
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')

const {mongoose} = require('./database');

const app = express();

//Settings

app.set('port',process.env.PORT || 3000) ;

//Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

//Routes

app.use('/Api/Login',require('./routes/login.routes'))
app.use('/Home', express.static(path.join(__dirname,'public')))
app.use('/LogIn', express.static(path.join(__dirname,'public')))

//Static files

app.use(express.static(path.join(__dirname , 'public')));

app.listen(app.get('port'), () => {
   console.log(`Server on port ${app.get('port')}`);

});
