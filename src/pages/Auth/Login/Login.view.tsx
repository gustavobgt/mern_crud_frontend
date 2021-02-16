import React from 'react'
import 
{ 
  Container, 
  Row, 
  Col, 
  Card, 
  CardBody,
  CardTitle,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input } from 'reactstrap';
import { Link } from "react-router-dom";

import { REGISTER } from "../../../navigation/CONSTANTS";

import { LoginProps }  from './Login.model'

const LoginView: React.FC<LoginProps> = props => {    
    return (
        <Container className="mt-5">
          <Row>
          <Col />
          <Col lg="6">
          <Card>
            <CardBody>
              <CardTitle>
                <h2 className="text-center">{props.title}</h2>
              </CardTitle>

              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Senha</Label>
                  <Input type="password" name="password" placeholder="Senha" />
                </FormGroup>
                <Button outline color="primary" size="lg" block className="mt-5">Entrar</Button>
              </Form>
              <h6 className="mt-5">Ainda não tem cadastro?</h6>
              <Link to={REGISTER}>Cadastre-se</Link>
            </CardBody>
          </Card>
          </Col>
          
          <Col />
          </Row>
        </Container>
    );
}

export default LoginView
