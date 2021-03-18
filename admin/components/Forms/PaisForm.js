import React from "react";

import {
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";


export default function PaisForm({ item, setItem }) {
  return (
    <>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Nombre</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, nombre: e.target.value })}
              value={item.nombre}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}