import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import MedidasComboBox from '../ComboBoxes/MedidasComboBox';
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
            <label>Tipo</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, tipo: e.target.value })}
              value={item.tipo}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
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
        <Col lg="6">
          <MarcasComboBox item={item} setItem={setItem}/>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <RestaurantesComboBox item={item} setItem={setItem}/>
        </Col>
        <Col lg="6">
          <MedidasComboBox item={item} setItem={setItem}/>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup check>
            <Label>
            <Input
              className="form-control-alternative"
              type="checkbox"
              checked={item.es_liquido}
              onChange={e => setItem({ ...item, es_liquido: e.target.checked })}
            /> Es liquido
            </Label>
          </FormGroup>
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
    </>
  )
}