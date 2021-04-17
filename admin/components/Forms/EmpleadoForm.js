import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import PaisesComboBox from '../ComboBoxes/PaisesComboBox';
import PuestosComboBox from '../ComboBoxes/PuestosComboBox';
import RestaurantesComboBox from '../ComboBoxes/RestaurantesComboBox';

export default function EmpleadoForm({ item, setItem }) {
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
            <label>Apellidos</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, apellidos: e.target.value })}
              value={item.apellidos}
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
            <label>Telefono 1</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, telefono_1: e.target.value })}
              value={item.telefono_1}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Telefono 2</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, telefono_2: e.target.value })}
              value={item.telefono_2}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <PuestosComboBox item={item} setItem={setItem}/>
        </Col>
        <Col lg="6">
          <RestaurantesComboBox item={item} setItem={setItem}/>
        </Col>
      </Row>
    </>
  )
}