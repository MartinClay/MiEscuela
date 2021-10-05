import React , { useState }from 'react'
import {Container,Col,Row,Form,Button} from 'react-bootstrap'
import {postFetch} from '../Hooks/postFetch.js'
import useAuth from '../Auth/useAuth.jsx'
import {useHistory} from 'react-router-dom'
const style = {
   form: {
      marginTop: 20,
   },
   button: {
      marginTop: 20,
   }
}
   function loginform () {

   const history = useHistory()
   const [usuario,setUsuario] = useState('')
   const [password,setPassword] = useState('')
   const {token,setToken} = useAuth()

   function handleChangeUser(event) {
      setUsuario(event.target.value)
   }

   function handleChangePassowrd(event) {
      setPassword(event.target.value)
   }

   function handleClick  ()  {
      postFetch(usuario,password).then(val => setToken(val.data.token)),
      history.push('/')
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
