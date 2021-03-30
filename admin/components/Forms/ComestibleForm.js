import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import MarcasComboBox from '../ComboBoxes/MarcasComboBox';
import RestaurantesComboBox from '../ComboBoxes/RestaurantesComboBox';

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
          <FormGroup>
            <label>Cantidad</label>
            <Input
              className="form-control-alternative"
              type="number"
              onChange={e => setItem({ ...item, cantidad: e.target.value })}
              value={item.cantidad}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <MarcasComboBox item={item} setItem={setItem}/>
        </Col>
        <Col lg="6">
          <RestaurantesComboBox item={item} setItem={setItem}/>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Clase</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, clase: e.target.value })}
              value={item.clase}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Linea</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, linea: e.target.value })}
              value={item.linea}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
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
    </>
  )
}