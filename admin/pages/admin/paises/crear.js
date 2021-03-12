import React, { useState } from "react";

// reactstrap components
import {
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/pais.service";

function CrearPaises() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Paises" item={item} callback={callback}>
        <Row>
          <Col lg="6">
            <FormGroup>
              <label>Nombre</label>
              <Input
                className="form-contrsol-alternative"
                type="text"
                onChange={e => setItem({ ...item, nombre: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
      </BaseForm>
    </>
  );
}

CrearPaises.layout = Admin;

export default CrearPaises;
