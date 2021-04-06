import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import PaisesComboBox from '../ComboBoxes/PaisesComboBox';

export default function MarcaForm({ item, setItem }) {
  return (
    <>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Codigo</label>
            <Input
              className="form-control-alternative"
              type="text"
              value={item.codigo}
              disabled={true}
            />
          </FormGroup>
        </Col>
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
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Descripcion</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, descripcion: e.target.value })}
              value={item.descripcion}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <PaisesComboBox item={item} setItem={setItem}/>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Empresa</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, empresa: e.target.value })}
              value={item.empresa}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Telefono</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, telefono: e.target.value })}
              value={item.telefono}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}