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
app.use('/Api/LogIn',require('./routes/login.routes'))
app.use('/Api/Matricula',require('./routes/matricula.routes'))
app.use('/Api/Usuarios',require('./routes/usuarios.routes'))
app.use('/Api/VerifyToken',require('./routes/verify.routes'))
app.use('/Api/AddUser',require('./routes/addUsers.routes'))
app.use('/Api/UpdateAlumno',require('./routes/updateAlumno.routes'))

//Static files
app.use(express.static(path.join(__dirname , 'public')));

app.listen(app.get('port'), () => {
   console.log(`Server on port ${app.get('port')}`);

});
