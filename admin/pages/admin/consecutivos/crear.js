import React, { useState } from "react";

// reactstrap components
import {
  FormGroup,
  Input,
  Row,
  Col,
  Label,
} from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/consecutivo.service";

function CrearConsecutivos() {
  const service = new Service()

  const [item, setItem] = useState({ consecutivo: 0 })

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Consecutivos" item={item} callback={callback}>
        <Row>
          <Col lg="6">
            <FormGroup>
              <label>Descripcion</label>
              <Input
                className="form-contrsol-alternative"
                type="text"
                onChange={e => setItem({ ...item, descripcion: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label>Consecutivo</label>
              <Input
                className="form-control-alternative"
                type="number"
                onChange={e => setItem({ ...item, consecutivo: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <FormGroup check>
              <Label>
              <Input
                className="form-control-alternative"
                type="checkbox"
                checked={item.posee_prefijo}
                onChange={e => setItem({ ...item, posee_prefijo: e.target.checked })}
              /> Posee prefijo
              </Label>
            </FormGroup>
          </Col>
          { item.posee_prefijo ? (
            <Col lg="6">
              <FormGroup>
                <label>Prefijo</label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  onChange={e => setItem({ ...item, prefijo: e.target.value })}
                />
              </FormGroup>
            </Col>
          ) : null }
         
        </Row>
      </BaseForm>
    </>
  );
}

CrearConsecutivos.layout = Admin;

export default CrearConsecutivos;
