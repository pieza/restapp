import React from "react";

import {
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";


export default function BitacoraForm({ item, setItem }) {
  return (
    <>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Codigo</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, codigo: e.target.value })}
              value={item.codigo}
              disabled={true}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Usuario</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, usuario: e.target.value })}
              value={item.usuario}
              disabled={true}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Tipo</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, tipo: e.target.value })}
              value={item.tipo}
              disabled={true}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Descripción</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, descripcion: e.target.value })}
              value={item.descripcion}
              disabled={true}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Detalle</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, detalle: e.target.value })}
              value={item.detalle}
              disabled={true}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Fecha</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, fecha: e.target.value })}
              value={item.fecha}
              disabled={true}
            />
          </FormGroup>
        </Col>
      </Row>
      
    </>
  )
}