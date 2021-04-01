import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import MedidasComboBox from '../ComboBoxes/MedidasComboBox';

export default function BuffetForm({ item, setItem }) {
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
          <MedidasComboBox item={item} setItem={setItem}/>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Precio</label>
            <Input
              className="form-control-alternative"
              type="number"
              onChange={e => setItem({ ...item, precio: e.target.value })}
              value={item.precio}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Tipo</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, tipo: e.target.value })}
              value={item.tipo}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Imagen</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, imagen: e.target.value })}
              value={item.imagen}
            />
          </FormGroup>
        </Col>
      </Row>
     
    </>
  )
}