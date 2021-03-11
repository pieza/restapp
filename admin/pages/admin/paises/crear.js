import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import PaisService from "../../../services/pais.service";

function CrearPaises() {
  const service = new PaisService()
  const callback = (model) => {
    service.create(model)
  }
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <BaseForm title="Crear Paises" item={{nombre: 'test'}} callback={callback}>
      </BaseForm>
    </>
  );
}

CrearPaises.layout = Admin;

export default CrearPaises;
