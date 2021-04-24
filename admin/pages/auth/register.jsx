import React, { useState } from 'react';
import { useRouter } from 'next/router';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from 'reactstrap';
// layout for this page
import Auth from 'layouts/Auth.js';
import Service from "../../services/auth.service";
import AlertUtil from '../../utils/alert';

function Register() {
	const service = new Service();
  const router = useRouter();
  const signUpAttributes = [
    { name: 'nombre', icon: 'ni ni-hat-3' },
    { name: 'apellidos', icon: 'ni ni-diamond' },
    { name: 'telefono', icon: 'ni ni-bell-55' },
    { name: 'celular', icon: 'ni ni-bell-55' },
    { name: 'nickname', icon: 'ni ni-circle-08' },
    { name: 'password', icon: 'ni ni-lock-circle-open' },
  ];
  const [signUpForm, setSignUpForm] = useState(
    signUpAttributes.reduce((object, it) => (object[it.name] = '', object), {})
  );

  const onSignUp = async () => {
    const response = await service.signup(signUpForm)

    if (!response || response.status > 300) {
      console.error(response);
      AlertUtil.error('Ha ocurrido un error.');
    } else {
      await AlertUtil.success('Usuario registrado correctamente!');
      router.push('/auth/login')
    }
  }
  /** Renders All Sign Up Forms.
   * Takes an array of signUpAttributes and returns an array of signUpForms
   * @param {Object[]} */
  const signUpFormsRender = (attributes) => attributes.map((attr) => (
    <InputGroup className="input-group-alternative mb-3">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className={attr.icon} />
        </InputGroupText>
      </InputGroupAddon>
      <Input
        placeholder={attr.name}
        type={attr.name}
        onChange={(input) => setSignUpForm({ ...signUpForm, [attr.name]: input.target.value })}
      />
    </InputGroup>
  ));
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
            <h2>Registrarse</h2>
            </div>
            <Form role="form">
              <FormGroup>{signUpFormsRender(signUpAttributes)}</FormGroup>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button" onClick={onSignUp}>
                  Registrarse
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Register.layout = Auth;

export default Register;
