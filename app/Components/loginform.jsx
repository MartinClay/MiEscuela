import React , { useState }from 'react'
import {Container,Col,Row,Form,Button,Alert} from 'react-bootstrap'
import {postFetch} from '../Hooks/postFetch.js'
import useAuth from '../Context/Store/useAuth.jsx'
import {setCurrentUser,logoutUser} from '../Context/Actions/autentication.action.js'
import jwt_decode from 'jwt-decode'
const style = {
   form: {
      marginTop: 20,
   },
   button: {
      marginTop: 20,
   }
}
   function loginform () {

   const context = useAuth()

   const [usuario,setUsuario] = useState('')
   const [password,setPassword] = useState('')
   
   function handleChangeUser(event) {
      setUsuario(event.target.value)
   }

   function handleChangePassowrd(event) {
      setPassword(event.target.value)
   }

   function handleClick(){
      postFetch(usuario,password).then(res => {
         if(res.data.ok === true) {
            jwtToken(res.data.token)
         }else {
            alert(res.data.err.message)
            logoutUser(context.dispatch)
         }
      })
   }

      const jwtToken = token => {
         localStorage.setItem('jwt',token)
         const decoded = jwt_decode(token)
         context.dispatch(setCurrentUser(decoded))
      }
   return (
   <Container style={style.form}>
      <Row>
      <Col>
      </Col>
      <Col>
         <Form> 
         <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control placeholder='Ingerse Usuario' type='text' onChange={handleChangeUser}/>
            <Form.Text className='text-muted'>
               El nombre de usuario es el mismo que utiliza para iniciar sesion en la maquina.
            </Form.Text>
         </Form.Group>
         <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control placeholder='Ingerse Contraseña' type='password' onChange={handleChangePassowrd}/>
            <Form.Text className='text-muted'>
               La contraseña es la misma que utiliza para iniciar sesion en la maquina.
            </Form.Text>
         </Form.Group>
            <Button variant='primary' type='button' style={style.button} onClick={handleClick}>
               Ingresar
            </Button>
     </Form>
      </Col>
      <Col>
      </Col>
      </Row>
   </Container>
   )
}

export default loginform
