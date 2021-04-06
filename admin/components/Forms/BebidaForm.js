import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import PaisesComboBox from '../ComboBoxes/PaisesComboBox';
import RestaurantesComboBox from '../ComboBoxes/RestaurantesComboBox';
import MarcasComboBox from '../ComboBoxes/MarcasComboBox';

export default function BebidaForm({ item, setItem }) {
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
            <label>Ingredientes</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, ingredientes: e.target.value })}
              value={item.ingredientes}
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
          <PaisesComboBox item={item} setItem={setItem}/>
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
            <label>Precio unitario</label>
            <Input
              className="form-control-alternative"
              type="number"
              onChange={e => setItem({ ...item, precio_unitario: e.target.value })}
              value={item.precio_unitario}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Precio botella</label>
            <Input
              className="form-control-alternative"
              type="number"
              onChange={e => setItem({ ...item, precio_botella: e.target.value })}
              value={item.precio_botella}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}