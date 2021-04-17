import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import PaisesComboBox from '../ComboBoxes/PaisesComboBox';
import RestaurantesComboBox from '../ComboBoxes/RestaurantesComboBox';
import MarcasComboBox from '../ComboBoxes/MarcasComboBox';

export default function CajaForm({ item, setItem }) {
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
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Entrada</label>
            <Input
              className="form-control-alternative"
              type="number"
              onChange={e => setItem({ ...item, entrada: e.target.value })}
              value={item.entrada}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}
