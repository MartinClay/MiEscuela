import React , { useState }from 'react'
import {Container,Col,Row,Form,Button} from 'react-bootstrap'
import {postFetch} from '../Hooks/postFetch.js'

const style = {
   form: {
      marginTop: 20,
   },
   button: {
      marginTop: 20,
   }
}
   function loginform ({setToken}) {
   const [usuario,setUsuario] = useState('')
   const [password,setPassword] = useState('')

   function handleChangeUser(event) {
      setUsuario(event.target.value)
   }

   function handleChangePassowrd(event) {
      setPassword(event.target.value)
   }

   function handleSubmit(event) {
      event.preventDefault()
      postFetch(usuario,password).then(val => console.log(val.data.token))
   }

   return (
   <Container style={style.form}>
      <Row>
      <Col>
      </Col>
      <Col>
      <Form onSubmit={handleSubmit}>
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
             <Button variant='primary' type='submit' style={style.button}>
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
