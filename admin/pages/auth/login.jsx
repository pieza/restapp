import React, { useState } from 'react';
import Service from "../../services/auth.service";
import { useRouter } from 'next/router';


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
import AlertUtil from '../../utils/alert';

/** Login Component in Project
 * We perform Login operations from here */

function Login() {
  const service = new Service();
  const router = useRouter();
  const signInAttributes = [
    { name: 'nickname', icon: 'ni ni-circle-08' },
    { name: 'password', icon: 'ni ni-lock-circle-open' },
  ];
  const [loginForm, setLoginForm] = useState({ nickname: '', password: '' });

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
  const onLogin = async () => { 
    const response = await service.signin(loginForm) 

    if (!response || response.status > 300) {
      console.error(response);
      AlertUtil.error('Usuario o contraseña incorrectos');
    } else {
      await AlertUtil.success('Inicio exitoso!');
      router.push('/admin/restaurantes')
    }
  }
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
