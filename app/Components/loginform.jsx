import React , { useState }from 'react'
import {Container,Col,Row,Form,Button} from 'react-bootstrap'

const style = {
   form: {
      marginTop: 20,
   },
   button: {
      marginTop: 20,
   }
}
function loginform () {
   const [usuario,setUsuario] = useState('')
   const [password,setPassword] = useState('')

   function handleChangeUser(event) {
      console.log('input work')
      setUsuario(event.target.value)
   }

   console.log(usuario)
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
            <Form.Control placeholder='Ingerse Contraseña' type='password'/>
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
