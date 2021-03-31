import React, { useState } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from 'reactstrap';
// layout for this page
import Auth from 'layouts/Auth.js';
import axios from 'axios';

/** Login Component in Project
 * We perform Login operations from here */

function Login() {
  const signInAttributes = [
    { name: 'nickname', icon: 'ni ni-circle-08' },
    { name: 'password', icon: 'ni ni-lock-circle-open' },
  ];
  const [loginForm, setLoginForm] = useState({ nickname: '', password: '' });
  const loginUrl = 'http://localhost:3000/api/v1/signin';
  const params = { withCredentials: true, credentials: 'include' };
  /** Renders All Sign In Forms.
   * Takes an array of signInAttributes and returns an array of signInForms
   * @param {Object[]} */
  const signInFormsRender = (attributes) => attributes.map((attr) => (
    <InputGroup className="input-group-alternative mb-3">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className={attr.icon} />
        </InputGroupText>
      </InputGroupAddon>
      <Input
        placeholder={attr.name}
        type={attr.name}
        onChange={(input) => setLoginForm({ ...loginForm, [attr.name]: input.target.value })}
      />
    </InputGroup>
  ));
  /** Executes Login.
   * Through loginForm information (nickname and password),
   * sends a request to sign in API endpoint.  */
  const onLogin = () => axios.post(loginUrl, loginForm, params);
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign In</small>
            </div>
            <Form>
              <FormGroup className="mb-3">{signInFormsRender(signInAttributes)}</FormGroup>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={onLogin}
                >
                  Ingresar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
