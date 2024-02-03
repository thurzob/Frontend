import React from 'react';
import '../Pages/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import {Row, Container, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const togglePasswordVisibility = () => {
  const passwordInput = document.getElementById('formBasicPassword');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
};

function Login() {
  return (
    <div className='login-body'>
       <div className="bg-overlay">
      <Container>
        <Row className="justify-content-center" style={{minHeight: '50vh', width: '50vh', margin:'0 auto'}}>
          
            <div className="login-form">
              <h3>Bejelentkezés</h3>
              <Form>
                <Form.Group controlId="formBasicEmail" style={{marginBottom: '30px'}}>
                  <Form.Label style={{marginBottom: '10px'}}>Email cím</Form.Label>
                  <Form.Control type="email" placeholder="Add meg az email címed" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{marginBottom: '30px'}}>
                  <Form.Label>Jelszó</Form.Label>
                  <Form.Control type="password" placeholder="Jelszó" />
                  <Form.Text className="text-muted" icon>
                  <FontAwesomeIcon style={{marginLeft: '95%', marginTop: '0%'}} icon={faEye} onClick={togglePasswordVisibility}/>
                  </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  Bejelentkezés
                </Button>
              </Form>

              
            </div>
          

          
        </Row>
      </Container>
    </div>
      
    </div>
  );
}

export default Login;